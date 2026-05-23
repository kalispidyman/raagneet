import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const MovingBackground = () => {
  const meshRef = useRef();

  useEffect(() => {
    const animate = (time) => {
      if (meshRef.current) {
        meshRef.current.rotation.x = time / 1000;
        meshRef.current.rotation.y = -time / 1000;
      }
      requestAnimationFrame(animate);
    };

    animate(0);

    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <Canvas style={{ background: 'black' }}>
      <ambientLight />
      <pointLight position={[10, 15, 10]} />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0.5}
        fade
        speed={2}
      />
      <mesh ref={meshRef}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshBasicMaterial wireframe color="white" opacity={0.1} transparent />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

const Cosmos = () => {
  return (
    <div className="cosmos-page">
      <MovingBackground />
      <div className="content-container">
        <h1>Testing Page</h1>
        <p>Welcome to the testing page with an interactive 3D background.</p>
      </div>
    </div>
  );
};

export default Cosmos;