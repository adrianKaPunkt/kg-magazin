'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MathUtils, AdditiveBlending } from 'three';

import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';

type BlobProps = {
  scale?: number;
  intensity?: number;
  hoverIntensity?: number;
  glow?: number;
  position?: [number, number, number];
  color?: [number, number, number]; // normalized (0–1)
  pulse?: boolean;
  pulseAmount?: number;
  pulseSpeed?: number;
};

const Blob: React.FC<BlobProps> = ({
  scale = 0.6,
  intensity = 1,
  hoverIntensity = 1,
  glow = 1,
  position = [0, 0, 0],
  color = [1, 1, 1], // Default: weiß
  // pulse = true,
  // pulseAmount = 0.03,
  // pulseSpeed = 1,
}) => {
  const mesh = useRef<THREE.Mesh>(null);
  const hover = useRef(false);

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.5, 40), []);

  // 👇 useRef statt useMemo, damit der Shader-Zustand dynamisch bleibt
  const uniforms = useRef({
    u_time: { value: 0 },
    u_intensity: { value: intensity },
    u_glow: { value: glow },
    //u_color: { value: new THREE.Color(...color) },
    u_color: { value: new THREE.Color(0.2, 1.0, 0.4) },
  }).current;

  useFrame((state) => {
    const { clock } = state;

    if (mesh.current) {
      const mat = mesh.current.material as THREE.ShaderMaterial; // <--- DAS hier braucht es!

      mesh.current.rotation.y += 0.002;
      mesh.current.rotation.x += 0.001;
      mesh.current.position.y =
        position[1] + Math.sin(clock.elapsedTime * 0.5) * 0.02;

      mat.uniforms.u_time.value = clock.getElapsedTime();
      mat.uniforms.u_intensity.value = MathUtils.lerp(
        mat.uniforms.u_intensity.value,
        hover.current ? hoverIntensity : intensity,
        0.02
      );

      // 🎨 Dynamische Farbe setzen (hier war dein Fehler)
      if (mat.uniforms.u_color && color) {
        mat.uniforms.u_color.value.set(...color);
      }
    }
  });

  return (
    <mesh
      ref={mesh}
      geometry={geometry}
      position={position}
      scale={scale}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
        depthTest={true}
        blending={AdditiveBlending}
      />
    </mesh>
  );
};

export default Blob;
