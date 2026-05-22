import React, { useEffect, useRef } from 'react';

export default function MouseBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    
    // Smooth mouse interpolation for premium responsiveness
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const targetMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    // Constant particle population
    const N = 100;
    const particles = Array.from({ length: N }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.35 + 0.15; // Slow ambient drift
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseVx: Math.cos(angle) * speed,
        baseVy: Math.sin(angle) * speed,
        vx: 0,
        vy: 0,
        size: Math.random() * 2.2 + 1.2,
        hue: Math.random() > 0.6 ? 245 : Math.random() > 0.3 ? 190 : 280,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: Math.random() * 0.015 + 0.005,
      };
    });

    // Ambient floating grid blueprint nodes (Antigravity v2.0 aesthetic)
    const gridNodes = Array.from({ length: 5 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 120 + 80,
      angle: Math.random() * Math.PI * 2,
      spinSpeed: (Math.random() - 0.5) * 0.0015,
      hue: Math.random() > 0.5 ? 245 : 190,
    }));

    const onMove = e => {
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;
    };
    const onTouch = e => {
      if (e.touches[0]) {
        targetMouse.x = e.touches[0].clientX;
        targetMouse.y = e.touches[0].clientY;
      }
    };

    let time = 0;

    const draw = () => {
      time += 0.0015; // Shifting clock loop
      
      // Interpolate mouse coordinates smoothly (no aggressive snapping!)
      mouse.x += (targetMouse.x - mouse.x) * 0.07;
      mouse.y += (targetMouse.y - mouse.y) * 0.07;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Render gorgeous shifting space gradient (perpetual ambient nebula loop)
      const gradX1 = canvas.width / 2 + Math.cos(time * 0.8) * (canvas.width * 0.4);
      const gradY1 = canvas.height / 2 + Math.sin(time * 0.8) * (canvas.height * 0.3);
      const gradX2 = canvas.width / 2 - Math.cos(time * 0.5) * (canvas.width * 0.35);
      const gradY2 = canvas.height / 2 - Math.sin(time * 0.5) * (canvas.height * 0.4);

      const backgroundGrd = ctx.createLinearGradient(gradX1, gradY1, gradX2, gradY2);
      backgroundGrd.addColorStop(0, 'rgba(2, 2, 8, 1)');
      backgroundGrd.addColorStop(0.45, 'rgba(4, 3, 14, 1)');
      backgroundGrd.addColorStop(0.8, 'rgba(9, 7, 30, 1)');
      backgroundGrd.addColorStop(1, 'rgba(3, 2, 10, 1)');
      ctx.fillStyle = backgroundGrd;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Slow shifting background grid lines
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.018)';
      ctx.lineWidth = 1;
      const gridSize = 90;
      const gridShiftX = (mouse.x * 0.02) % gridSize;
      const gridShiftY = (mouse.y * 0.02) % gridSize;
      
      ctx.beginPath();
      for (let x = gridShiftX; x < canvas.width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      for (let y = gridShiftY; y < canvas.height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      // 3. Orbital blueprint rings
      gridNodes.forEach(node => {
        node.angle += node.spinSpeed;
        node.x += Math.cos(node.angle * 0.4) * 0.2;
        node.y += Math.sin(node.angle * 0.6) * 0.2;

        // Reset positions at margins
        if (node.x < -200) node.x = canvas.width + 200;
        if (node.x > canvas.width + 200) node.x = -200;
        if (node.y < -200) node.y = canvas.height + 200;
        if (node.y > canvas.height + 200) node.y = -200;

        // Draw radial orbit boundaries
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${node.hue}, 85%, 60%, 0.015)`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Draw tiny node core glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${node.hue}, 90%, 65%, 0.045)`;
        ctx.fill();
      });

      // 4. Moving dynamic energy particles
      particles.forEach(p => {
        p.phase += p.phaseSpeed;
        
        // Gentle wave oscillation added to keep movement completely fluid when idle
        const waveX = Math.cos(p.phase) * 0.12;
        const waveY = Math.sin(p.phase) * 0.12;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        
        // Magnetic displacement within range
        if (dist < 260) {
          const force = (260 - dist) / 260;
          p.vx += (dx / dist) * force * 0.16;
          p.vy += (dy / dist) * force * 0.16;
          // Smooth orbital vortex shift
          p.vx += (-dy / dist) * force * 0.08;
          p.vy += (dx / dist) * force * 0.08;
        }
        
        // Apply friction to the interactive push, but retain core speeds
        p.vx *= 0.92;
        p.vy *= 0.92;
        
        p.x += p.baseVx + p.vx + waveX;
        p.y += p.baseVy + p.vy + waveY;
        
        // Smooth toroidal bounds wrap
        if (p.x < -20) p.x = canvas.width + 20; 
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20; 
        if (p.y > canvas.height + 20) p.y = -20;
        
        // Draw the neon star coordinate
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 95%, 70%, 0.76)`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${p.hue}, 95%, 70%, 0.4)`;
        ctx.fill();
      });

      ctx.shadowBlur = 0; // Performance optimization for batch line rendering

      // 5. Connect nearby star coordinates (Constellations)
      for (let i = 0; i < particles.length; i++) {
        let activeConnections = 0;
        for (let j = i + 1; j < particles.length; j++) {
          if (activeConnections > 3) break; // Limit branch density to save CPU cores
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.hypot(dx, dy);
          
          if (d < 125) {
            activeConnections++;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            const alpha = (1 - d / 125) * 0.28;
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // 6. Cybernetic cursor glow aura
      const cursorGrd = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 280);
      cursorGrd.addColorStop(0, 'rgba(6, 182, 212, 0.12)');
      cursorGrd.addColorStop(0.5, 'rgba(99, 102, 241, 0.04)');
      cursorGrd.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = cursorGrd;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animId = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onTouch, { passive: true });
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
    />
  );
}