'use client';

import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { AdditiveBlending, MathUtils } from 'three';

import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';
import { useDiaPhaseStore } from '@/lib/store/useDiaPhaseStore';

type BlobProps = {
  scale: number;
  intensity: number;
  hoverIntensity?: number;
  glow: number;
  position: [number, number, number];
  blobRef?: React.RefObject<THREE.Mesh | null>;
  materialRef?: React.RefObject<THREE.ShaderMaterial | null>;
};

const Blob = ({
  scale,
  intensity,
  hoverIntensity = intensity + 0.3,
  glow,
  position,
  blobRef,
  materialRef,
}: BlobProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const localMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const hover = useRef(false);

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.5, 40), []);

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_intensity: { value: intensity },
      u_glow: { value: glow },
      u_color: { value: new THREE.Color(1, 1, 1) }, // Initialfarbe ist egal
    }),
    [intensity, glow]
  );

  const { setBlobRef, targetScale } = useDiaPhaseStore();

  useEffect(() => {
    if (meshRef.current) {
      setBlobRef(meshRef);
    }
    if (blobRef) blobRef.current = meshRef.current;
    if (materialRef) materialRef.current = localMaterialRef.current;
  }, [blobRef, materialRef, setBlobRef]);

  useFrame((state) => {
    const mesh = meshRef.current;
    const mat = localMaterialRef.current;
    const { color } = useDiaPhaseStore.getState(); // <- aktuelle Farbe
    const time = state.clock.getElapsedTime();

    if (mesh && mat) {
      // 🌌 Bewegung & Pulsieren
      mesh.rotation.y += 0.002;
      mesh.rotation.x += 0.001;
      mesh.position.y = position[1] + Math.sin(time * 0.5) * 0.02;

      // 📦 Sanftes Verkleinern
      mesh.scale.lerp(targetScale, 0.05);

      // 💡 Shader-Uniforms
      mat.uniforms.u_time.value = time;
      mat.uniforms.u_intensity.value = MathUtils.lerp(
        mat.uniforms.u_intensity.value,
        hover.current ? hoverIntensity : intensity,
        0.05
      );

      // 🎨 FARB-UPDATE!
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
