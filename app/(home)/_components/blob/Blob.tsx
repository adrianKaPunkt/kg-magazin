'use client';

import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { AdditiveBlending, MathUtils } from 'three';

import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';

type BlobProps = {
  scale: [number, number, number];
  intensity: number;
  hoverIntensity?: number;
  glow: number;
  position: [number, number, number];
  color?: [number, number, number]; // neu
  blobRef?: React.RefObject<THREE.Mesh | null>;
  materialRef?: React.RefObject<THREE.ShaderMaterial | null>;
};

const Blob = ({
  scale = [0, 0, 0],
  intensity,
  hoverIntensity = intensity + 0.3,
  glow,
  position,
  color = [1, 1, 1], // Standardfarbe: weiß
  blobRef,
  materialRef,
}: BlobProps) => {
  const meshRef = useRef<THREE.Mesh<THREE.BufferGeometry>>(null);
  const localMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const hover = useRef(false);

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.5, 40), []);

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_intensity: { value: intensity },
      u_glow: { value: glow },
      u_color: { value: new THREE.Color(...color) },
    }),
    [intensity, glow, color]
  );

  useEffect(() => {
    if (blobRef) blobRef.current = meshRef.current;
    if (materialRef) materialRef.current = localMaterialRef.current;
  }, [blobRef, materialRef]);

  useFrame((state) => {
    const mesh = meshRef.current;
    const mat = localMaterialRef.current;
    const time = state.clock.getElapsedTime();

    if (mesh && mat) {
      mesh.rotation.y += 0.002;
      mesh.rotation.x += 0.001;
      mesh.position.y = position[1] + Math.sin(time * 0.5) * 0.02;

      mesh.scale.lerp(new THREE.Vector3(...scale), 0.05);

      mat.uniforms.u_time.value = time;
      mat.uniforms.u_intensity.value = MathUtils.lerp(
        mat.uniforms.u_intensity.value,
        hover.current ? hoverIntensity : intensity,
        0.05
      );

      mat.uniforms.u_color.value.set(...color);
      mat.uniformsNeedUpdate = true;
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      position={position}
      scale={scale}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}>
      <shaderMaterial
        ref={localMaterialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        depthTest={true}
        blending={AdditiveBlending}
      />
    </mesh>
  );
};

export default Blob;
