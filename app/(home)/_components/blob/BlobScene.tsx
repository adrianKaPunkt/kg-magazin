'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import Blob from './Blob';
import { useBlobPhaseStore } from '@/lib/store/blobPhaseStore';
import { hexToRgbArray } from '@/lib/hexToRgb';
import { motion } from 'framer-motion';
import Cloud from '../Cloud';
import AnimatedStars from './AnimatedStars';

type BlobSceneProps = {
  isMobile: boolean;
};

const BlobScene = ({ isMobile }: BlobSceneProps) => {
  const currentPhase = useBlobPhaseStore((state) => state.currentPhase);

  return (
    <>
      {/* Dynamischer Hintergrund */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen -z-10"
        animate={{ backgroundColor: currentPhase.backgroundColor }}
        transition={{ duration: 1, ease: 'linear' }}
      />

      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: '0%', opacity: 1 }}
        transition={{ duration: 0.1, ease: 'linear' }}
        className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            <AnimatedStars />

            <Cloud position={[0, 1.2, -3]} opacity={0.15} />
            <Cloud position={[-2, 0.8, -4]} opacity={0.2} />
            <Cloud position={[2, 0.6, -4.5]} opacity={0.1} />

            <Blob
              scale={currentPhase.scale ?? (isMobile ? 0.25 : 0.35)}
              intensity={currentPhase.intensity}
              glow={currentPhase.glow}
              position={
                isMobile
                  ? currentPhase.position?.mobile
                  : currentPhase.position?.desktop
              }
              color={
                currentPhase.color
                  ? (hexToRgbArray(currentPhase.color) as [
                      number,
                      number,
                      number
                    ])
                  : ([0.5, 0.5, 0.5] as [number, number, number])
              }
              pulse
            />

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={false}
              enableDamping={true}
              dampingFactor={0.1}
              rotateSpeed={1}
            />
          </Suspense>
        </Canvas>
      </motion.div>
    </>
  );
};

export default BlobScene;
