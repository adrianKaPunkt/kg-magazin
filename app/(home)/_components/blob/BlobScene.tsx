'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Stars } from '@react-three/drei';
import Blob from './Blob';
import { useBlobPhaseStore } from '@/lib/store/blobPhaseStore';
import { hexToRgbArray } from '@/lib/hexToRgb';

type BlobSceneProps = {
  isMobile: boolean;
};

const BlobScene = ({ isMobile }: BlobSceneProps) => {
  const currentPhase = useBlobPhaseStore((state) => state.currentPhase);

  return (
    <div
      id="blob-scene"
      className="fixed top-0 left-0 h-screen w-full z-[-10] pointer-events-none"
      style={{ backgroundColor: currentPhase.backgroundColor }}>
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
            scale={isMobile ? 0.25 : 0.35}
            intensity={currentPhase.intensity}
            glow={currentPhase.glow}
            position={
              isMobile
                ? currentPhase.position?.mobile
                : currentPhase.position?.desktop
            }
            color={
              hexToRgbArray(currentPhase.color) as [number, number, number]
            }
            pulse
          />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BlobScene;
