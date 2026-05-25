import { useRef, useEffect } from 'react';

const HUB_LABELS = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
  'Zustand', 'TanStack', 'Paystack', 'Azure',
];

interface Star {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  phase: number;
  twinkleSpeed: number;
  isHub: boolean;
  label?: string;
  color: string;
}

interface ShootingStar {
  x: number; y: number;
  vx: number; vy: number;
  length: number;
  life: number;
  maxLife: number;
}

const STAR_COUNT  = 200;
const CONN_DIST   = 170;
const MOUSE_RADIUS = 190;
const MOUSE_FORCE  = 0.032;

const STAR_COLORS = ['#ffffff', '#dbeafe', '#bfdbfe', '#93c5fd', '#e0f2fe'];

const HeroCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse     = useRef({ x: -999, y: -999 });
  const stars     = useRef<Star[]>([]);
  const shooting  = useRef<ShootingStar[]>([]);
  const rafRef    = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;

    const spawn = () => {
      stars.current = Array.from({ length: STAR_COUNT }, (_, i) => {
        const isHub     = i < HUB_LABELS.length;
        const baseAlpha = isHub ? 0.92 : 0.15 + Math.random() * 0.65;
        return {
          x:           Math.random() * W,
          y:           Math.random() * H,
          vx:          (Math.random() - 0.5) * (isHub ? 0.10 : 0.20),
          vy:          (Math.random() - 0.5) * (isHub ? 0.10 : 0.20),
          size:        isHub ? 2.8 + Math.random() * 1.4 : 0.3 + Math.random() * 1.3,
          alpha:       baseAlpha,
          baseAlpha,
          phase:       Math.random() * Math.PI * 2,
          twinkleSpeed: 0.35 + Math.random() * 1.3,
          isHub,
          label:       isHub ? HUB_LABELS[i] : undefined,
          color:       isHub ? '#93c5fd' : STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
        };
      });
    };

    const spawnShooter = () => {
      const angle = (-15 + Math.random() * 30) * (Math.PI / 180);
      const spd   = 9 + Math.random() * 7;
      const life  = 55 + Math.random() * 45;
      shooting.current.push({
        x:       Math.random() * W * 0.65,
        y:       Math.random() * H * 0.55,
        vx:      Math.cos(angle) * spd,
        vy:      Math.sin(angle) * spd,
        length:  70 + Math.random() * 60,
        life:    0,
        maxLife: life,
      });
    };

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      spawn();
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    window.addEventListener('mousemove', onMove);

    let tick        = 0;
    let shootTimer  = 0;
    let nextShoot   = 200 + Math.random() * 280;

    // Nebula positions — fixed fractions of canvas size
    const nebulaSeeds = [
      { fx: 0.15, fy: 0.30, fr: 0.38, r: 59,  g: 130, b: 246, a: 0.042 },
      { fx: 0.82, fy: 0.60, fr: 0.30, r: 96,  g: 165, b: 250, a: 0.032 },
      { fx: 0.50, fy: 0.12, fr: 0.24, r: 139, g: 92,  b: 246, a: 0.028 },
      { fx: 0.68, fy: 0.82, fr: 0.26, r: 59,  g: 130, b: 246, a: 0.022 },
    ];

    const frame = () => {
      // ── Solid background ────────────────────────────────────────────────
      ctx.fillStyle = '#0F172A';
      ctx.fillRect(0, 0, W, H);

      // ── Nebula clouds ───────────────────────────────────────────────────
      for (const n of nebulaSeeds) {
        const nx = n.fx * W, ny = n.fy * H, nr = n.fr * Math.min(W, H);
        const g = ctx.createRadialGradient(nx, ny, 0, nx, ny, nr);
        g.addColorStop(0, `rgba(${n.r},${n.g},${n.b},${n.a})`);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }

      const mx = mouse.current.x;
      const my = mouse.current.y;
      const ss = stars.current;

      // ── Physics ─────────────────────────────────────────────────────────
      for (const s of ss) {
        const dx = mx - s.x, dy = my - s.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < MOUSE_RADIUS && d > 1) {
          const f = (1 - d / MOUSE_RADIUS) * MOUSE_FORCE;
          s.vx += (dx / d) * f;
          s.vy += (dy / d) * f;
        }

        const mg = 50;
        if (s.x < mg)     s.vx += 0.035;
        if (s.x > W - mg) s.vx -= 0.035;
        if (s.y < mg)     s.vy += 0.035;
        if (s.y > H - mg) s.vy -= 0.035;

        s.vx *= 0.975; s.vy *= 0.975;
        const spd = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
        const cap = s.isHub ? 0.55 : 0.95;
        if (spd > cap) { s.vx = s.vx / spd * cap; s.vy = s.vy / spd * cap; }

        s.x += s.vx; s.y += s.vy;

        if (s.x < -20)     s.x = W + 20;
        if (s.x > W + 20)  s.x = -20;
        if (s.y < -20)     s.y = H + 20;
        if (s.y > H + 20)  s.y = -20;

        // Twinkle
        const tw = Math.sin(tick * s.twinkleSpeed + s.phase);
        s.alpha  = Math.max(0.04, Math.min(1, s.baseAlpha + tw * (s.isHub ? 0.07 : 0.18)));
      }

      // ── Constellation lines (hub involved only) ──────────────────────────
      for (let i = 0; i < ss.length; i++) {
        if (!ss[i].isHub) continue;
        for (let j = i + 1; j < ss.length; j++) {
          const ddx = ss[i].x - ss[j].x;
          const ddy = ss[i].y - ss[j].y;
          const d2  = ddx * ddx + ddy * ddy;
          if (d2 > CONN_DIST * CONN_DIST) continue;
          const norm = 1 - Math.sqrt(d2) / CONN_DIST;
          ctx.strokeStyle = `rgba(96,165,250,${norm * 0.20})`;
          ctx.lineWidth   = norm > 0.55 ? 0.8 : 0.45;
          ctx.beginPath();
          ctx.moveTo(ss[i].x, ss[i].y);
          ctx.lineTo(ss[j].x, ss[j].y);
          ctx.stroke();
        }
      }

      // ── Draw all stars ───────────────────────────────────────────────────
      for (const s of ss) {
        const nearMouse = Math.hypot(s.x - mx, s.y - my) < MOUSE_RADIUS;

        if (s.isHub) {
          // Soft aura halo
          const aura = s.size * 9;
          const grd  = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, aura);
          grd.addColorStop(0,   `rgba(96,165,250,${nearMouse ? 0.40 : 0.20})`);
          grd.addColorStop(0.4, `rgba(59,130,246,${nearMouse ? 0.14 : 0.07})`);
          grd.addColorStop(1,   'rgba(59,130,246,0)');
          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(s.x, s.y, aura, 0, Math.PI * 2);
          ctx.fill();

          // 4-point sparkle cross
          ctx.save();
          ctx.strokeStyle = `rgba(191,219,254,${nearMouse ? 0.95 : 0.65})`;
          ctx.lineWidth   = 0.9;
          ctx.lineCap     = 'round';
          const arm  = s.size * 2.8;
          const diag = arm * 0.52;
          ctx.beginPath();
          ctx.moveTo(s.x - arm,  s.y);      ctx.lineTo(s.x + arm,  s.y);
          ctx.moveTo(s.x,        s.y - arm); ctx.lineTo(s.x,        s.y + arm);
          ctx.moveTo(s.x - diag, s.y - diag); ctx.lineTo(s.x + diag, s.y + diag);
          ctx.moveTo(s.x + diag, s.y - diag); ctx.lineTo(s.x - diag, s.y + diag);
          ctx.stroke();
          ctx.restore();

          // Tech label
          ctx.save();
          ctx.font      = `600 10px "Plus Jakarta Sans", sans-serif`;
          ctx.textAlign = 'center';
          ctx.fillStyle = `rgba(148,163,184,${nearMouse ? 1.0 : 0.60})`;
          ctx.fillText(s.label!, s.x, s.y + s.size + 17);
          ctx.restore();
        }

        // Core dot
        ctx.globalAlpha = nearMouse ? Math.min(s.alpha * 1.7, 1) : s.alpha;
        ctx.fillStyle   = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // ── Shooting stars ───────────────────────────────────────────────────
      shootTimer++;
      if (shootTimer >= nextShoot) {
        spawnShooter();
        shootTimer = 0;
        nextShoot  = 200 + Math.random() * 280;
      }

      shooting.current = shooting.current.filter(sh => sh.life < sh.maxLife);
      for (const sh of shooting.current) {
        const progress = sh.life / sh.maxLife;
        const alpha    = Math.sin(progress * Math.PI) * 0.9; // fade in + out
        const speed    = Math.hypot(sh.vx, sh.vy);
        const tailX    = sh.x - (sh.vx / speed) * sh.length;
        const tailY    = sh.y - (sh.vy / speed) * sh.length;

        const grad = ctx.createLinearGradient(tailX, tailY, sh.x, sh.y);
        grad.addColorStop(0, 'rgba(255,255,255,0)');
        grad.addColorStop(1, `rgba(220,240,255,${alpha})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth   = 1.4;
        ctx.lineCap     = 'round';
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(sh.x, sh.y);
        ctx.stroke();

        // Head glow
        const hg = ctx.createRadialGradient(sh.x, sh.y, 0, sh.x, sh.y, 5);
        hg.addColorStop(0, `rgba(255,255,255,${alpha})`);
        hg.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.arc(sh.x, sh.y, 5, 0, Math.PI * 2);
        ctx.fill();

        sh.x += sh.vx;
        sh.y += sh.vy;
        sh.life++;
      }

      // ── Mouse cursor glow ────────────────────────────────────────────────
      if (mx > 0 && my > 0) {
        const mg = ctx.createRadialGradient(mx, my, 0, mx, my, 110);
        mg.addColorStop(0, 'rgba(59,130,246,0.09)');
        mg.addColorStop(1, 'rgba(59,130,246,0)');
        ctx.fillStyle = mg;
        ctx.beginPath();
        ctx.arc(mx, my, 110, 0, Math.PI * 2);
        ctx.fill();
      }

      tick += 0.016;
      rafRef.current = requestAnimationFrame(frame);
    };

    frame();

    return () => {
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default HeroCanvas;
