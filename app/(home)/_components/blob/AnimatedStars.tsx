'use client';

import { Stars } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type AnimatedStarsProps = {
  radius: number;
  depth: number;
  count: number;
  factor: number;
  saturation: number;
  fade: boolean;
  speed: number;
  color: string;
  opacity: number;
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
  rotationSpeed?: number; // Optional, falls du’s nicht immer brauchst
};

const AnimatedStars = ({
  radius,
  depth,
  count,
  factor,
  saturation,
  fade,
  speed,
  scale,
  position,
  rotation,
  rotationSpeed = 0.0005,
}: AnimatedStarsProps) => {
  const starsRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += rotationSpeed;
      starsRef.current.rotation.x += rotationSpeed / 3;
    }
  });

  return (
    <group ref={starsRef} scale={scale} position={position} rotation={rotation}>
      <Stars
        radius={radius}
        depth={depth}
        count={count}
        factor={factor}
        saturation={saturation}
        fade={fade}
        speed={speed}
      />
    </group>
  );
};

export default AnimatedStars;
