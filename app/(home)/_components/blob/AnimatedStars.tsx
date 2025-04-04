'use client';

import { Stars } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedStars = () => {
  const starsRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0005; // ganz langsam drehen
      starsRef.current.rotation.x += 0.0002; // leichtes Kippen
    }
  });

  return (
    <group ref={starsRef}>
      <Stars
        radius={100}
        depth={50}
        count={3000}
        factor={6}
        saturation={1}
        fade
      />
    </group>
  );
};

export default AnimatedStars;
