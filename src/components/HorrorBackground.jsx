import React, { useRef, useEffect, useCallback } from 'react';

export default function HorrorBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const PARTICLE_COUNT = 200;

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
        this.size = Math.random() * 2.5 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = Math.random() * 0.5 + 0.1;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.02 + 0.005;
        this.type = Math.random() > 0.7 ? 'fire' : 'dust'; // some particles are glowing embers
        if (this.type === 'fire') {
          this.hue = 0 + Math.random() * 20; // red to orange
          this.saturation = 80 + Math.random() * 20;
          this.lightness = 50 + Math.random() * 20;
        } else {
          this.hue = 280 + Math.random() * 60; // purple to magenta
          this.saturation = 50 + Math.random() * 40;
          this.lightness = 20 + Math.random() * 30;
        }
      }
      update() {
        this.wobble += this.wobbleSpeed;
        this.x += this.speedX + Math.sin(this.wobble) * 0.3;
        this.y += this.speedY;

        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          const force = (180 - dist) / 180;
          this.x -= dx * force * 0.03;
          this.y -= dy * force * 0.03;
          this.opacity = Math.min(0.9, this.opacity + force * 0.4);
        } else {
          this.opacity = Math.max(0.1, this.opacity - 0.005);
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
        if (this.type === 'fire') {
          ctx.fillStyle = `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.opacity})`;
          ctx.shadowBlur = 18;
          ctx.shadowColor = `hsla(${this.hue}, 80%, 60%, ${this.opacity * 0.7})`;
        } else {
          ctx.fillStyle = `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.opacity})`;
          ctx.shadowBlur = 12;
          ctx.shadowColor = `hsla(${this.hue}, 60%, 50%, ${this.opacity * 0.5})`;
        }
        ctx.fill();
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dark vignette overlay
      const vignette = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, canvas.width * 0.3,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.9
      );
      vignette.addColorStop(0, 'rgba(10, 0, 20, 0)');
      vignette.addColorStop(1, 'rgba(2, 0, 5, 0.85)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Mouse red glow
      const mGrad = ctx.createRadialGradient(
        mouseRef.current.x, mouseRef.current.y, 0,
        mouseRef.current.x, mouseRef.current.y, 250
      );
      mGrad.addColorStop(0, 'rgba(200, 0, 30, 0.15)');
      mGrad.addColorStop(0.5, 'rgba(80, 0, 20, 0.08)');
      mGrad.addColorStop(1, 'rgba(10, 0, 20, 0)');
      ctx.fillStyle = mGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Ambient orbs (occult symbols)
      const orb1 = ctx.createRadialGradient(
        canvas.width * 0.15, canvas.height * 0.25, 0,
        canvas.width * 0.15, canvas.height * 0.25, 200
      );
      orb1.addColorStop(0, 'rgba(150, 0, 40, 0.15)');
      orb1.addColorStop(1, 'rgba(20, 0, 10, 0)');
      ctx.fillStyle = orb1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const orb2 = ctx.createRadialGradient(
        canvas.width * 0.85, canvas.height * 0.75, 0,
        canvas.width * 0.85, canvas.height * 0.75, 280
      );
      orb2.addColorStop(0, 'rgba(80, 0, 150, 0.12)');
      orb2.addColorStop(1, 'rgba(10, 0, 20, 0)');
      ctx.fillStyle = orb2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw particles
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
      style={{ filter: 'blur(0.6px) saturate(1.3) brightness(0.9)' }}
    />
  );
}