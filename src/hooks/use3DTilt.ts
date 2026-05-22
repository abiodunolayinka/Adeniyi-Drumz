import { useRef, useState, useCallback } from 'react';
import type { MouseEvent } from 'react';

const use3DTilt = (maxTilt = 12, scale = 1.04) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glowStyle, setGlowStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const centerX = width / 2;
      const centerY = height / 2;
      const tiltX = ((y - centerY) / centerY) * -maxTilt;
      const tiltY = ((x - centerX) / centerX) * maxTilt;

      // Glow follows cursor
      const glowX = (x / width) * 100;
      const glowY = (y / height) * 100;

      setStyle({
        transform: `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: 'transform 0.08s ease-out',
      });

      setGlowStyle({
        background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(59,130,246,0.18) 0%, transparent 70%)`,
        opacity: 1,
      });
    },
    [maxTilt, scale]
  );

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
    });
    setGlowStyle({ opacity: 0, transition: 'opacity 0.4s ease' });
  }, []);

  return { ref, style, glowStyle, handleMouseMove, handleMouseLeave };
};

export default use3DTilt;
