import React, { useRef, useEffect, useCallback } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const PARTICLE_COUNT = 160;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.35;
        this.speedY = Math.random() * 0.6 + 0.15;
        this.opacity = Math.random() * 0.5 + 0.15;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.02 + 0.005;
        this.hue = Math.random() > 0.5 ? 230 + Math.random() * 30 : 180 + Math.random() * 40;
      }
      update() {
        this.wobble += this.wobbleSpeed;
        this.x += this.speedX + Math.sin(this.wobble) * 0.25;
        this.y += this.speedY;

        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const force = (200 - dist) / 200;
          this.x -= dx * force * 0.02;
          this.y -= dy * force * 0.02;
          this.opacity = Math.min(0.9, this.opacity + force * 0.35);
        } else {
          this.opacity = Math.max(0.15, this.opacity - 0.003);
        }

        if (this.y > canvas.height + 15) {
          this.y = -15;
          this.x = Math.random() * canvas.width;
        }
        if (this.x > canvas.width + 15) this.x = -15;
        if (this.x < -15) this.x = canvas.width + 15;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 70%, 75%, ${this.opacity})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `hsla(${this.hue}, 80%, 65%, ${this.opacity * 0.5})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Mouse glow
      const mGrad = ctx.createRadialGradient(
        mouseRef.current.x, mouseRef.current.y, 0,
        mouseRef.current.x, mouseRef.current.y, 350
      );
      mGrad.addColorStop(0, 'rgba(99, 102, 241, 0.12)');
      mGrad.addColorStop(0.4, 'rgba(56, 189, 248, 0.06)');
      mGrad.addColorStop(1, 'rgba(99, 102, 241, 0)');
      ctx.fillStyle = mGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Ambient glow orbs
      const grad1 = ctx.createRadialGradient(
        canvas.width * 0.2, canvas.height * 0.3, 0,
        canvas.width * 0.2, canvas.height * 0.3, 400
      );
      grad1.addColorStop(0, 'rgba(99, 102, 241, 0.04)');
      grad1.addColorStop(1, 'rgba(99, 102, 241, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const grad2 = ctx.createRadialGradient(
        canvas.width * 0.8, canvas.height * 0.7, 0,
        canvas.width * 0.8, canvas.height * 0.7, 500
      );
      grad2.addColorStop(0, 'rgba(34, 211, 238, 0.04)');
      grad2.addColorStop(1, 'rgba(34, 211, 238, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    const cleanup = initCanvas();
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (cleanup) cleanup();
    };
  }, [initCanvas]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ filter: 'blur(0.8px) saturate(1.4)' }}
    />
  );
}