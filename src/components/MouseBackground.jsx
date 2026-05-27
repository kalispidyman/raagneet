import React, { useRef, useEffect, useCallback } from 'react';

export default function MouseBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const PARTICLE_COUNT = 140;

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
        this.size = Math.random() * 2.8 + 0.4;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = Math.random() * 0.7 + 0.2;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.02 + 0.01;
      }
      update() {
        this.wobble += this.wobbleSpeed;
        this.x += this.speedX + Math.sin(this.wobble) * 0.3;
        this.y += this.speedY;

        // Mouse interactivity: repel & glow
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          const force = (180 - dist) / 180;
          this.x -= dx * force * 0.025;
          this.y -= dy * force * 0.025;
          this.opacity = Math.min(0.95, this.opacity + force * 0.4);
        } else {
          this.opacity = Math.max(0.2, this.opacity - 0.005);
        }

        // Wrap around edges
        if (this.y > canvas.height + 10) {
          this.y = -10;
          this.x = Math.random() * canvas.width;
        }
        if (this.x > canvas.width + 10) this.x = -10;
        if (this.x < -10) this.x = canvas.width + 10;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 235, 255, ${this.opacity})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `rgba(100, 210, 255, ${this.opacity * 0.6})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Dynamic mouse radial glow
      const mGrad = ctx.createRadialGradient(
        mouseRef.current.x, mouseRef.current.y, 0,
        mouseRef.current.x, mouseRef.current.y, 300
      );
      mGrad.addColorStop(0, 'rgba(100, 210, 255, 0.14)');
      mGrad.addColorStop(0.5, 'rgba(80, 160, 255, 0.06)');
      mGrad.addColorStop(1, 'rgba(80, 160, 255, 0)');
      ctx.fillStyle = mGrad;
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
      style={{ filter: 'blur(0.6px) saturate(1.2)' }}
    />
  );
}