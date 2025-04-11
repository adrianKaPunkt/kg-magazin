'use client';

import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

import Blob from './Blob';
import AnimatedStars from './AnimatedStars';
import { diaPhases } from '@/lib/diaPhases';
import { useDiaPhaseStore } from '@/lib/store/useDiaPhaseStore';
import useMediaQuery from '@/lib/hooks/useMediaQuery';

interface BlobSceneProps {
  height?: number;
}

const BlobScene = ({ height }: BlobSceneProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const finalHeight = height && height > 0 ? `${height}px` : '100vh';

  const isMobile = useMediaQuery('(max-width: 768px)');
  const index = useDiaPhaseStore((state) => state.currentIndex);
  const phase = diaPhases[index] ?? diaPhases[0];

  // 📐 Position: mobile vs desktop
  const position: [number, number, number] = isMobile
    ? phase.position?.mobile ?? [0, 0, 0]
    : phase.position?.desktop ?? [0, 0.5, 0];

  // 🧊 Scale: Zahl oder Array
  const rawScale = isMobile ? phase.scale?.mobile : phase.scale?.desktop;
  const scale: [number, number, number] = Array.isArray(rawScale)
    ? (rawScale as [number, number, number])
    : [rawScale ?? 0.2, rawScale ?? 0.2, rawScale ?? 0.2];

  const glow = phase.glow ?? 1;
  const intensity = phase.intensity ?? 0.4;

  return (
    <div
      className="absolute top-0 left-0 w-full h-full z-0"
      style={{ height: finalHeight }}>
      <Canvas
        id="dia-canvas"
        className="w-full h-full"
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000');
        }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />

        <AnimatedStars
          radius={10}
          depth={30}
          count={3000}
          factor={5}
          saturation={1}
          fade
          speed={1}
          color="#fff"
          opacity={0.6}
          scale={1}
          position={[0, 0, -10]}
          rotation={[0, 0, 0]}
          rotationSpeed={0.0003}
        />

        <Blob
          blobRef={meshRef}
          position={position}
          scale={scale}
          glow={glow}
          intensity={intensity}
        />
      </Canvas>
    </div>
  );
};

export default BlobScene;
