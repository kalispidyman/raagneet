import React, { useRef, useEffect, useCallback } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const timeRef = useRef(0);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const PARTICLE_COUNT = 80;
    let orbs = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Floating orbs
    class Orb {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 200 + 100;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.hue = Math.random() * 60 + 220; // indigo to cyan range
        this.opacity = Math.random() * 0.08 + 0.03;
        this.pulseSpeed = Math.random() * 0.005 + 0.002;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }
      update(time) {
        this.x += this.speedX;
        this.y += this.speedY;
        this.currentOpacity = this.opacity + Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.02;
        
        // Wrap around
        if (this.x < -this.radius) this.x = canvas.width + this.radius;
        if (this.x > canvas.width + this.radius) this.x = -this.radius;
        if (this.y < -this.radius) this.y = canvas.height + this.radius;
        if (this.y > canvas.height + this.radius) this.y = -this.radius;
      }
      draw() {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, `hsla(${this.hue}, 80%, 60%, ${this.currentOpacity})`);
        gradient.addColorStop(0.5, `hsla(${this.hue}, 70%, 50%, ${this.currentOpacity * 0.5})`);
        gradient.addColorStop(1, `hsla(${this.hue}, 60%, 40%, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
      }
    }

    // Particles
    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.hue = Math.random() * 40 + 200;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.015 + 0.005;
      }
      update() {
        this.wobble += this.wobbleSpeed;
        this.x += this.speedX + Math.sin(this.wobble) * 0.2;
        this.y += this.speedY + Math.cos(this.wobble) * 0.2;

        // Mouse interactivity
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const force = (200 - dist) / 200;
          this.x -= dx * force * 0.02;
          this.y -= dy * force * 0.02;
          this.opacity = Math.min(1, this.opacity + force * 0.3);
        } else {
          this.opacity = Math.max(0.1, this.opacity - 0.003);
        }

        // Wrap around
        if (this.x < -10) this.x = canvas.width + 10;
        if (this.x > canvas.width + 10) this.x = -10;
        if (this.y < -10) this.y = canvas.height + 10;
        if (this.y > canvas.height + 10) this.y = -10;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 80%, 75%, ${this.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${this.hue}, 80%, 60%, ${this.opacity * 0.5})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 5; i++) orbs.push(new Orb());
    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

    const animate = () => {
      timeRef.current += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw orbs
      orbs.forEach(orb => {
        orb.update(timeRef.current);
        orb.draw();
      });

      // Mouse glow
      const mGrad = ctx.createRadialGradient(
        mouseRef.current.x, mouseRef.current.y, 0,
        mouseRef.current.x, mouseRef.current.y, 250
      );
      mGrad.addColorStop(0, 'rgba(100, 180, 255, 0.12)');
      mGrad.addColorStop(0.5, 'rgba(80, 140, 255, 0.05)');
      mGrad.addColorStop(1, 'rgba(80, 140, 255, 0)');
      ctx.fillStyle = mGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Draw connections
      ctx.shadowBlur = 0;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const opacity = (1 - dist / 120) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(150, 200, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

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
      style={{ filter: 'blur(0.5px)' }}
    />
  );
}