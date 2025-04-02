'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Stars } from '@react-three/drei';
import Blob from './Blob';

const BlobScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
        />

        <Blob
          scale={0.3}
          intensity={0.3}
          glow={0.2}
          position={[0, 1, 0]}
          color={[149 / 255, 249 / 255, 244 / 255]}
          pulse
          pulseAmount={0.03}
          pulseSpeed={1}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Suspense>
    </Canvas>
  );
};

export default BlobScene;
