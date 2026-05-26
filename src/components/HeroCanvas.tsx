import { useRef, useEffect } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Firefly {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  alpha: number;
  pulsePhase: number;
  pulseSpeed: number;
  color: string;
  trail: { x: number; y: number }[];
  wanderAngle: number;
  wanderSpeed: number;
}

interface Leaf {
  x: number; y: number;
  vx: number; vy: number;
  rotation: number;
  rotSpeed: number;
  size: number;
  alpha: number;
  color: string;
  wobble: number;
  wobbleSpeed: number;
  type: 0 | 1 | 2;
}

interface Spore {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  alpha: number;
  phase: number;
}

interface WindParticle {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  size: number;
}

interface Ripple {
  x: number; y: number;
  radius: number; maxRadius: number;
  alpha: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const FIREFLY_COUNT = 55;
const LEAF_COUNT    = 28;
const SPORE_COUNT   = 90;

const FIREFLY_COLORS = ['#FCD34D', '#FBBF24', '#F59E0B', '#FEF08A'];
const LEAF_COLORS    = [
  '#22C55E', '#16A34A', '#4ADE80', '#15803D',
  '#86EFAC', '#3B7D4A', '#2D6A4F', '#134E22',
];

// ─── Component ────────────────────────────────────────────────────────────────

const HeroCanvas = () => {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const mouse       = useRef({ x: -999, y: -999, px: -999, py: -999 });
  const ffRef       = useRef<Firefly[]>([]);
  const leafRef     = useRef<Leaf[]>([]);
  const sporeRef    = useRef<Spore[]>([]);
  const windRef     = useRef<WindParticle[]>([]);
  const rippleRef   = useRef<Ripple[]>([]);
  const rafRef      = useRef<number>();
  const dragging    = useRef(false);
  const dragVel     = useRef({ x: 0, y: 0 });
  const scrollVel   = useRef(0);
  const lastScrollY = useRef(0);
  const aurora      = useRef(0);
  const tick        = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;

    // ── Spawn helpers ────────────────────────────────────────────────────────

    const spawnFireflies = () => {
      ffRef.current = Array.from({ length: FIREFLY_COUNT }, () => ({
        x:           Math.random() * W,
        y:           Math.random() * H * 0.82,
        vx:          (Math.random() - 0.5) * 0.4,
        vy:          (Math.random() - 0.5) * 0.3,
        size:        1.2 + Math.random() * 2.0,
        alpha:       0.3 + Math.random() * 0.7,
        pulsePhase:  Math.random() * Math.PI * 2,
        pulseSpeed:  0.4 + Math.random() * 1.6,
        color:       FIREFLY_COLORS[Math.floor(Math.random() * FIREFLY_COLORS.length)],
        trail:       [],
        wanderAngle: Math.random() * Math.PI * 2,
        wanderSpeed: 0.018 + Math.random() * 0.04,
      }));
    };

    const spawnLeaf = (): Leaf => ({
      x:           Math.random() * W,
      y:           -20 + Math.random() * H * 1.2,
      vx:          (Math.random() - 0.5) * 0.6,
      vy:          0.15 + Math.random() * 0.5,
      rotation:    Math.random() * Math.PI * 2,
      rotSpeed:    (Math.random() - 0.5) * 0.04,
      size:        3.5 + Math.random() * 5.5,
      alpha:       0.25 + Math.random() * 0.45,
      color:       LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
      wobble:      Math.random() * Math.PI * 2,
      wobbleSpeed: 0.012 + Math.random() * 0.028,
      type:        (Math.floor(Math.random() * 3)) as 0 | 1 | 2,
    });

    const spawnLeaves = () => {
      leafRef.current = Array.from({ length: LEAF_COUNT }, spawnLeaf);
    };

    const spawnSpores = () => {
      sporeRef.current = Array.from({ length: SPORE_COUNT }, () => ({
        x:     Math.random() * W,
        y:     Math.random() * H,
        vx:    (Math.random() - 0.5) * 0.18,
        vy:    -(0.08 + Math.random() * 0.35),
        size:  0.4 + Math.random() * 0.9,
        alpha: 0.08 + Math.random() * 0.32,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      spawnFireflies();
      spawnLeaves();
      spawnSpores();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // ── Event listeners ──────────────────────────────────────────────────────

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.current.px = mouse.current.x;
      mouse.current.py = mouse.current.y;
      mouse.current.x  = e.clientX - r.left;
      mouse.current.y  = e.clientY - r.top;

      if (dragging.current) {
        dragVel.current.x = mouse.current.x - mouse.current.px;
        dragVel.current.y = mouse.current.y - mouse.current.py;
        const speed = Math.hypot(dragVel.current.x, dragVel.current.y);
        if (speed > 1.5) {
          for (let i = 0; i < 4; i++) {
            windRef.current.push({
              x:       mouse.current.x + (Math.random() - 0.5) * 24,
              y:       mouse.current.y + (Math.random() - 0.5) * 24,
              vx:      dragVel.current.x * 0.55 + (Math.random() - 0.5) * 1.5,
              vy:      dragVel.current.y * 0.55 + (Math.random() - 0.5) * 1.5,
              life:    0,
              maxLife: 28 + Math.random() * 22,
              size:    0.6 + Math.random() * 1.4,
            });
          }
        }
      }
    };

    const onDown = (e: MouseEvent) => {
      dragging.current = true;
      const r  = canvas.getBoundingClientRect();
      const cx = e.clientX - r.left;
      const cy = e.clientY - r.top;
      if (cx >= 0 && cx <= W && cy >= 0 && cy <= H) {
        rippleRef.current.push({
          x: cx, y: cy,
          radius: 0, maxRadius: 90 + Math.random() * 50,
          alpha: 0.55,
        });
        for (let i = 0; i < 4; i++) {
          const l = spawnLeaf();
          l.x  = cx + (Math.random() - 0.5) * 40;
          l.y  = cy + (Math.random() - 0.5) * 40;
          l.vx = (Math.random() - 0.5) * 3;
          l.vy = -1.5 - Math.random() * 2;
          leafRef.current.push(l);
          if (leafRef.current.length > LEAF_COUNT + 20) leafRef.current.shift();
        }
      }
    };

    const onUp = () => {
      dragging.current = false;
      dragVel.current  = { x: 0, y: 0 };
    };

    const onScroll = () => {
      const sy = window.scrollY;
      scrollVel.current   = sy - lastScrollY.current;
      lastScrollY.current = sy;
    };

    const onTouchMove = (e: TouchEvent) => {
      const r = canvas.getBoundingClientRect();
      const t = e.touches[0];
      mouse.current.px = mouse.current.x;
      mouse.current.py = mouse.current.y;
      mouse.current.x  = t.clientX - r.left;
      mouse.current.y  = t.clientY - r.top;
      dragVel.current.x = mouse.current.x - mouse.current.px;
      dragVel.current.y = mouse.current.y - mouse.current.py;
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup',   onUp);
    window.addEventListener('scroll',    onScroll,    { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    // ── Leaf renderer ────────────────────────────────────────────────────────

    const drawLeaf = (leaf: Leaf) => {
      ctx.save();
      ctx.globalAlpha = leaf.alpha;
      ctx.translate(leaf.x, leaf.y);
      ctx.rotate(leaf.rotation);
      ctx.fillStyle = leaf.color;

      const s = leaf.size;
      ctx.beginPath();
      if (leaf.type === 0) {
        ctx.ellipse(0, 0, s * 0.42, s, 0, 0, Math.PI * 2);
      } else if (leaf.type === 1) {
        ctx.moveTo(0, -s);
        ctx.bezierCurveTo( s * 0.7, -s * 0.3,  s * 0.7, s * 0.5, 0, s * 0.9);
        ctx.bezierCurveTo(-s * 0.7,  s * 0.5, -s * 0.7, -s * 0.3, 0, -s);
      } else {
        ctx.moveTo(0, -s);
        ctx.bezierCurveTo( s * 0.5, -s * 0.4,  s * 0.8,  0,  s * 0.4, s * 0.5);
        ctx.bezierCurveTo( s * 0.1,  s,        -s * 0.1,  s, -s * 0.4, s * 0.5);
        ctx.bezierCurveTo(-s * 0.8,  0,        -s * 0.5, -s * 0.4, 0, -s);
      }
      ctx.fill();

      ctx.strokeStyle = 'rgba(255,255,255,0.18)';
      ctx.lineWidth   = 0.5;
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.75);
      ctx.lineTo(0,  s * 0.75);
      ctx.stroke();
      ctx.restore();
    };

    // ── Aurora renderer ──────────────────────────────────────────────────────

    const drawAurora = () => {
      const t = aurora.current;
      const bands = [
        { y: H * 0.14, amp: 65, freq: 0.0025, spd: 0.28, r: 34,  g: 197, b: 94,  a: 0.038 },
        { y: H * 0.22, amp: 48, freq: 0.0038, spd: 0.42, r: 16,  g: 185, b: 129, a: 0.030 },
        { y: H * 0.08, amp: 85, freq: 0.0018, spd: 0.18, r: 74,  g: 222, b: 128, a: 0.022 },
        { y: H * 0.31, amp: 38, freq: 0.0050, spd: 0.55, r: 52,  g: 211, b: 153, a: 0.018 },
        { y: H * 0.04, amp: 50, freq: 0.0032, spd: 0.35, r: 110, g: 231, b: 183, a: 0.014 },
      ];

      for (const b of bands) {
        const path = new Path2D();
        for (let x = 0; x <= W; x += 4) {
          const y = b.y
            + Math.sin(x * b.freq + t * b.spd) * b.amp
            + Math.cos(x * b.freq * 0.6 + t * b.spd * 1.4) * b.amp * 0.38;
          x === 0 ? path.moveTo(x, y) : path.lineTo(x, y);
        }
        for (let x = W; x >= 0; x -= 4) {
          const y = b.y + b.amp * 0.28
            + Math.sin(x * b.freq + t * b.spd) * b.amp
            + Math.cos(x * b.freq * 0.6 + t * b.spd * 1.4) * b.amp * 0.38;
          path.lineTo(x, y);
        }
        path.closePath();
        ctx.fillStyle = `rgba(${b.r},${b.g},${b.b},${b.a})`;
        ctx.fill(path);
      }
    };

    // ── Tree silhouettes ─────────────────────────────────────────────────────

    const drawTrees = () => {
      const grd = ctx.createLinearGradient(0, H * 0.78, 0, H);
      grd.addColorStop(0, 'rgba(4,12,4,0)');
      grd.addColorStop(1, 'rgba(4,12,4,0.85)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, H * 0.78, W, H * 0.22);

      ctx.fillStyle = 'rgba(3,10,5,0.72)';

      const tri = (cx: number, h: number, w: number) => {
        for (let l = 0; l < 3; l++) {
          const lh   = h * (1 - l * 0.28);
          const lw   = w * (1 - l * 0.18);
          const base = H - h * 0.35 * l;
          ctx.beginPath();
          ctx.moveTo(cx - lw * 0.5, base);
          ctx.lineTo(cx,            base - lh);
          ctx.lineTo(cx + lw * 0.5, base);
          ctx.closePath();
          ctx.fill();
        }
        ctx.beginPath();
        ctx.rect(cx - w * 0.06, H - h * 0.08, w * 0.12, h * 0.15);
        ctx.fill();
      };

      const trees = [
        { x: W * 0.01, h: H * 0.22, w: 44 }, { x: W * 0.07, h: H * 0.28, w: 56 },
        { x: W * 0.13, h: H * 0.19, w: 40 }, { x: W * 0.19, h: H * 0.32, w: 62 },
        { x: W * 0.26, h: H * 0.17, w: 36 }, { x: W * 0.33, h: H * 0.24, w: 50 },
        { x: W * 0.40, h: H * 0.14, w: 30 }, { x: W * 0.58, h: H * 0.15, w: 32 },
        { x: W * 0.64, h: H * 0.25, w: 52 }, { x: W * 0.70, h: H * 0.18, w: 38 },
        { x: W * 0.76, h: H * 0.30, w: 60 }, { x: W * 0.83, h: H * 0.20, w: 44 },
        { x: W * 0.89, h: H * 0.27, w: 55 }, { x: W * 0.95, h: H * 0.16, w: 34 },
        { x: W * 0.99, h: H * 0.22, w: 46 },
      ];
      for (const t of trees) tri(t.x, t.h, t.w);
    };

    // ── Frame loop ───────────────────────────────────────────────────────────

    const frame = () => {
      const t  = tick.current;
      const mx = mouse.current.x;
      const my = mouse.current.y;

      // Background
      ctx.fillStyle = '#050F08';
      ctx.fillRect(0, 0, W, H);

      // Forest-depth sky gradient
      const skyGrd = ctx.createRadialGradient(W * 0.5, 0, 0, W * 0.5, H * 0.5, Math.max(W, H) * 0.9);
      skyGrd.addColorStop(0,   'rgba(10,28,18,0.7)');
      skyGrd.addColorStop(0.5, 'rgba(5,15,10,0.5)');
      skyGrd.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.fillStyle = skyGrd;
      ctx.fillRect(0, 0, W, H);

      drawAurora();

      // Moon
      const moonX = W * 0.83, moonY = H * 0.16;
      const moonHalo = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, 120);
      moonHalo.addColorStop(0,    'rgba(224,242,254,0.10)');
      moonHalo.addColorStop(0.35, 'rgba(186,230,253,0.05)');
      moonHalo.addColorStop(1,    'rgba(0,0,0,0)');
      ctx.fillStyle = moonHalo;
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = 'rgba(238,247,255,0.12)';
      ctx.beginPath(); ctx.arc(moonX, moonY, 26, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(238,247,255,0.06)';
      ctx.beginPath(); ctx.arc(moonX, moonY, 40, 0, Math.PI * 2); ctx.fill();

      // ── Spores ──────────────────────────────────────────────────────────────
      for (const sp of sporeRef.current) {
        const dx = mx - sp.x, dy = my - sp.y;
        const d  = Math.hypot(dx, dy);
        if (d < 110 && d > 1) { sp.vx += (dx / d) * 0.007; sp.vy += (dy / d) * 0.005; }
        if (dragging.current)  { sp.vx += dragVel.current.x * 0.018; sp.vy += dragVel.current.y * 0.018; }
        sp.vy += scrollVel.current * 0.01;
        sp.vx += Math.sin(t * 0.45 + sp.phase) * 0.003;
        sp.vx *= 0.991; sp.vy *= 0.991;
        sp.x  += sp.vx; sp.y  += sp.vy - 0.15;
        sp.phase += 0.018;
        if (sp.y < -5)    sp.y = H + 5;
        if (sp.x < -5)    sp.x = W + 5;
        if (sp.x > W + 5) sp.x = -5;
        const pulse = 0.5 + 0.5 * Math.sin(t * 1.8 + sp.phase);
        ctx.globalAlpha = sp.alpha * pulse;
        ctx.fillStyle   = '#D1FAE5';
        ctx.beginPath(); ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2); ctx.fill();
        ctx.globalAlpha = 1;
      }

      // ── Leaves ──────────────────────────────────────────────────────────────
      for (const leaf of leafRef.current) {
        const dx = mx - leaf.x, dy = my - leaf.y;
        const d  = Math.hypot(dx, dy);
        if (d < 160 && d > 1) {
          const f = (1 - d / 160) * 0.022;
          leaf.vx -= (dx / d) * f; leaf.vy -= (dy / d) * f;
        }
        if (dragging.current) { leaf.vx += dragVel.current.x * 0.045; leaf.vy += dragVel.current.y * 0.045; }
        leaf.vy += scrollVel.current * 0.014;
        leaf.wobble += leaf.wobbleSpeed;
        leaf.vx += Math.sin(leaf.wobble) * 0.009;
        leaf.vy += Math.cos(leaf.wobble * 0.65) * 0.004;
        leaf.vx *= 0.984; leaf.vy *= 0.984;
        leaf.vy += 0.007;
        leaf.x  += leaf.vx; leaf.y += leaf.vy;
        leaf.rotation += leaf.rotSpeed + Math.sin(leaf.wobble) * 0.008;
        if (leaf.y > H + 30) { const nl = spawnLeaf(); nl.y = -20; nl.x = Math.random() * W; Object.assign(leaf, nl); }
        if (leaf.y < -30)    { leaf.y = H + 30; leaf.x = Math.random() * W; }
        if (leaf.x < -30)    leaf.x = W + 30;
        if (leaf.x > W + 30) leaf.x = -30;
        drawLeaf(leaf);
      }

      // ── Fireflies ────────────────────────────────────────────────────────────
      for (const ff of ffRef.current) {
        const dx = mx - ff.x, dy = my - ff.y;
        const d  = Math.hypot(dx, dy);
        if (d < 85 && d > 1)  { ff.vx -= (dx / d) * 0.09;  ff.vy -= (dy / d) * 0.09; }
        else if (d < 220)     { ff.vx += (dx / d) * 0.007; ff.vy += (dy / d) * 0.007; }
        if (dragging.current) { ff.vx += dragVel.current.x * 0.012; ff.vy += dragVel.current.y * 0.012; }
        ff.vy += scrollVel.current * 0.007;
        ff.wanderAngle += ff.wanderSpeed * (1 + (Math.random() - 0.5) * 0.4);
        ff.vx += Math.cos(ff.wanderAngle) * 0.022;
        ff.vy += Math.sin(ff.wanderAngle) * 0.016;
        if (ff.y > H * 0.83) ff.vy -= 0.06;
        if (ff.y < H * 0.04) ff.vy += 0.04;
        if (ff.x < 28)       ff.vx += 0.05;
        if (ff.x > W - 28)   ff.vx -= 0.05;
        ff.vx *= 0.968; ff.vy *= 0.968;
        const spd = Math.hypot(ff.vx, ff.vy);
        if (spd > 2.8) { ff.vx = ff.vx / spd * 2.8; ff.vy = ff.vy / spd * 2.8; }
        ff.x += ff.vx; ff.y += ff.vy;
        if (ff.x < -15)  ff.x = W + 15;
        if (ff.x > W+15) ff.x = -15;

        // Trail
        ff.trail.push({ x: ff.x, y: ff.y });
        if (ff.trail.length > 9) ff.trail.shift();
        for (let i = 1; i < ff.trail.length; i++) {
          ctx.strokeStyle = `rgba(252,211,77,${(i / ff.trail.length) * 0.14})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(ff.trail[i-1].x, ff.trail[i-1].y);
          ctx.lineTo(ff.trail[i].x,   ff.trail[i].y);
          ctx.stroke();
        }

        ff.pulsePhase += ff.pulseSpeed * 0.035;
        const pulse = 0.35 + 0.65 * Math.abs(Math.sin(ff.pulsePhase));
        const near  = d < 160;
        const ca    = ff.alpha * pulse;

        const haloR = ff.size * (near ? 11 : 6.5);
        const halo  = ctx.createRadialGradient(ff.x, ff.y, 0, ff.x, ff.y, haloR);
        halo.addColorStop(0, `rgba(252,211,77,${ca * (near ? 0.55 : 0.28)})`);
        halo.addColorStop(1, 'rgba(252,211,77,0)');
        ctx.fillStyle = halo;
        ctx.beginPath(); ctx.arc(ff.x, ff.y, haloR, 0, Math.PI * 2); ctx.fill();

        ctx.globalAlpha = ca;
        ctx.fillStyle   = ff.color;
        ctx.beginPath(); ctx.arc(ff.x, ff.y, ff.size, 0, Math.PI * 2); ctx.fill();
        ctx.globalAlpha = 1;
      }

      // ── Wind particles ────────────────────────────────────────────────────────
      windRef.current = windRef.current.filter(wp => wp.life < wp.maxLife);
      for (const wp of windRef.current) {
        ctx.globalAlpha = Math.sin((wp.life / wp.maxLife) * Math.PI) * 0.45;
        ctx.strokeStyle = 'rgba(134,239,172,0.7)';
        ctx.lineWidth   = wp.size; ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(wp.x - wp.vx * 3.5, wp.y - wp.vy * 3.5);
        ctx.lineTo(wp.x, wp.y);
        ctx.stroke();
        ctx.globalAlpha = 1;
        wp.x += wp.vx; wp.y += wp.vy;
        wp.vx *= 0.96; wp.vy *= 0.96;
        wp.life++;
      }

      // ── Ripples ──────────────────────────────────────────────────────────────
      rippleRef.current = rippleRef.current.filter(r => r.alpha > 0.008);
      for (const rp of rippleRef.current) {
        ctx.strokeStyle = `rgba(74,222,128,${rp.alpha})`;
        ctx.lineWidth   = 1.4;
        ctx.beginPath(); ctx.arc(rp.x, rp.y, rp.radius, 0, Math.PI * 2); ctx.stroke();
        if (rp.radius > 18) {
          ctx.strokeStyle = `rgba(134,239,172,${rp.alpha * 0.4})`;
          ctx.lineWidth   = 0.8;
          ctx.beginPath(); ctx.arc(rp.x, rp.y, rp.radius * 0.55, 0, Math.PI * 2); ctx.stroke();
        }
        rp.radius += 2.8; rp.alpha *= 0.935;
      }

      drawTrees();

      // Cursor glow
      if (mx > 0 && my > 0) {
        const cg = ctx.createRadialGradient(mx, my, 0, mx, my, 95);
        cg.addColorStop(0, 'rgba(74,222,128,0.07)');
        cg.addColorStop(1, 'rgba(74,222,128,0)');
        ctx.fillStyle = cg;
        ctx.beginPath(); ctx.arc(mx, my, 95, 0, Math.PI * 2); ctx.fill();
      }

      aurora.current    += 0.007;
      tick.current      += 0.016;
      scrollVel.current *= 0.88;
      rafRef.current     = requestAnimationFrame(frame);
    };

    frame();

    return () => {
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup',   onUp);
      window.removeEventListener('scroll',    onScroll);
      window.removeEventListener('touchmove', onTouchMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default HeroCanvas;
