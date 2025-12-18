import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);
  
  const particleCount = 2000;
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 10 * Math.cbrt(Math.random()); // Cube root for even distribution in sphere
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 25;
      
      // Gentle breathing effect
      const time = state.clock.getElapsedTime();
      const scale = 1 + Math.sin(time * 0.5) * 0.05;
      ref.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00A3FF" 
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const Connections = () => {
   // A simplified visual representation of connections using sparsely placed lines
   const count = 50;
   const lines = useMemo(() => {
     const points = [];
     for(let i=0; i<count; i++) {
        const start = new THREE.Vector3(
           (Math.random() - 0.5) * 10,
           (Math.random() - 0.5) * 10,
           (Math.random() - 0.5) * 10
        );
        const end = new THREE.Vector3(
           (Math.random() - 0.5) * 10,
           (Math.random() - 0.5) * 10,
           (Math.random() - 0.5) * 10
        );
        points.push(start);
        points.push(end);
     }
     return new THREE.BufferGeometry().setFromPoints(points);
   }, []);

   const linesRef = useRef<THREE.LineSegments>(null);

   useFrame((state, delta) => {
      if(linesRef.current) {
         linesRef.current.rotation.y += delta / 30;
      }
   });

   return (
      <lineSegments ref={linesRef} geometry={lines}>
         {/* Updated to Deep Blue #0066CC */}
         <lineBasicMaterial color="#0066CC" opacity={0.25} transparent blending={THREE.AdditiveBlending} />
      </lineSegments>
   )
}

const Scene3D = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ antialias: true, alpha: true }}>
        <fog attach="fog" args={['#050510', 5, 20]} />
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <ParticleField />
          <Connections />
        </Float>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian opacity-80" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
    </div>
  );
};

export default Scene3D;