import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
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

/* ── Orbiting Particles ── */
const Particles = ({ count = 300 }: { count?: number }) => {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Distribute particles on a sphere shell (radius 3.5–5)
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3.5 + Math.random() * 1.5;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.03) * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00D1FF"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

/* ── Interactive Wireframe Sphere ── */
const InteractiveSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const smoothMouse = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(2.4, 4), []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const t = state.clock.getElapsedTime();

    // Smooth lerp toward pointer position
    smoothMouse.current.x += (state.pointer.x * 0.4 - smoothMouse.current.x) * 0.04;
    smoothMouse.current.y += (state.pointer.y * 0.3 - smoothMouse.current.y) * 0.04;

    // Base rotation + cursor influence
    meshRef.current.rotation.y = t * 0.12 + smoothMouse.current.x * 0.6;
    meshRef.current.rotation.x = t * 0.08 + smoothMouse.current.y * 0.4;
    meshRef.current.rotation.z = Math.sin(t * 0.15) * 0.08;

    // Subtle "breathing" scale
    const breathe = 1 + Math.sin(t * 0.6) * 0.02;
    meshRef.current.scale.setScalar(breathe);
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial
        color="#00D1FF"
        wireframe
        roughness={0.5}
        metalness={0.3}
        transparent
        opacity={0.35}
      />
    </mesh>
  );
};

/* ── Scene Root ── */
const ThreeScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0, 8], fov: 45 }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#00D1FF" />
        <pointLight position={[-10, -5, -10]} intensity={0.4} color="#6C2BD9" />
        <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} intensity={0.3} />

        <InteractiveSphere />
        <Particles count={300} />

        <Environment preset="night" />
      </Canvas>
    </div>
  );
};

export default ThreeScene;