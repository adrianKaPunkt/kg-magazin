'use client';

import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Blob from './Blob';
import AnimatedStars from './AnimatedStars';

interface BlobSceneProps {
  height?: number;
}

export default function BlobScene({ height }: BlobSceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const finalHeight = height && height > 0 ? `${height}px` : '100vh';

  return (
    <div
      className="absolute top-0 left-0 w-full h-full z-0"
      style={{ height: `${finalHeight}px` }}>
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
          position={[0, 0.5, 0]}
          scale={[0.2, 0.2, 0.2]}
          intensity={0.4}
          glow={1}
          color={[1, 0, 1]} // weiß
        />
      </Canvas>
    </div>
  );
}
