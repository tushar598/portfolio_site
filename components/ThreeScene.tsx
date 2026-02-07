import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshStandardMaterial: any;
      group: any;
      ambientLight: any;
      spotLight: any;
      pointLight: any;
    }
  }
}

const FloatingBlock = ({ position, color, scale, speed }: { position: [number, number, number], color: string, scale: number, speed: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(t * speed) * 0.2;
    meshRef.current.rotation.y += 0.01 * speed;
    meshRef.current.position.y = position[1] + Math.sin(t * speed * 2) * 0.2;
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <RoundedBox ref={meshRef} args={[scale, scale, scale]} radius={0.1} smoothness={4} position={position}>
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
      </RoundedBox>
    </Float>
  );
};

const IsometricComposition = () => {
  return (
    <group rotation={[Math.PI / 6, Math.PI / 4, 0]}>
      {/* Main Block mimicking the "OK" structure abstractly */}
      <FloatingBlock position={[0, 0, 0]} color="#ffffff" scale={2.5} speed={1} />

      {/* Surrounding accent blocks */}
      <FloatingBlock position={[-2, 1, 1]} color="#1D1D1F" scale={1} speed={1.5} />
      <FloatingBlock position={[2, -1, -1]} color="#2B4CFF" scale={0.8} speed={1.2} />
      <FloatingBlock position={[0, 2.5, 0]} color="#FFCC00" scale={0.5} speed={2} />

      {/* Tiny particles */}
      <FloatingBlock position={[-1.5, -2, 1]} color="#ffffff" scale={0.3} speed={3} />
      <FloatingBlock position={[1.5, 2, -1]} color="#1D1D1F" scale={0.4} speed={2.5} />
    </group>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
      <Canvas dpr={[1, 1.5]} performance={{ min: 0.5 }} gl={{ antialias: false, powerPreference: "high-performance" }} camera={{ position: [0, 0, 10], fov: 40 }}>
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow={false} />
        <pointLight position={[-10, -10, -10]} intensity={1} />

        <IsometricComposition />

        <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={20} blur={2.5} far={4.5} resolution={256} frames={1} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default ThreeScene;