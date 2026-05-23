import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

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

const Card = ({ title, description }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const Cosmos = () => {
  return (
    <div className="cosmos-page">
      <MovingBackground />
      <div className="content-container">
        <h1>Testing Page</h1>
        <p>Welcome to the testing page with an interactive 3D background.</p>
        <div className="cards-container">
          <Card title="Card 1" description="This is the first card with some cool content." />
          <Card title="Card 2" description="This is the second card with more awesome content." />
          <Card title="Card 3" description="This is the third card with even more amazing content." />
        </div>
      </div>
    </div>
  );
};

export default Cosmos;