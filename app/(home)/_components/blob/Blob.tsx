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
  color?: [number, number, number];
  blobRef?: React.RefObject<THREE.Mesh | null>;
  materialRef?: React.RefObject<THREE.ShaderMaterial | null>;
};

const Blob = ({
  scale = [0, 0, 0],
  intensity,
  hoverIntensity = intensity + 0.3,
  glow,
  position,
  color = [1, 1, 1],
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

  // Rotation Handling
  const rotation = useRef({ x: 0, y: 0 });
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    if (blobRef) blobRef.current = meshRef.current;
    if (materialRef) materialRef.current = localMaterialRef.current;

    const handlePointerDown = (e: PointerEvent) => {
      isDragging.current = true;
      dragStart.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging.current || !dragStart.current) return;

      const deltaX = e.clientX - dragStart.current.x;
      const deltaY = e.clientY - dragStart.current.y;

      rotation.current.y += deltaX * 0.005;
      rotation.current.x += deltaY * 0.005;

      dragStart.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isDragging.current = false;
      dragStart.current = null;
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  useFrame((state) => {
    const mesh = meshRef.current;
    const mat = localMaterialRef.current;
    const time = state.clock.getElapsedTime();

    if (mesh && mat) {
      // Idle rotation (permanent leicht)
      rotation.current.y += 0.001;

      // Smooth apply
      mesh.rotation.x = MathUtils.lerp(
        mesh.rotation.x,
        rotation.current.x,
        0.1
      );
      mesh.rotation.y = MathUtils.lerp(
        mesh.rotation.y,
        rotation.current.y,
        0.1
      );

      // Floating movement
      mesh.position.y = position[1] + Math.sin(time * 0.5) * 0.02;

      // Smooth scaling
      mesh.scale.lerp(new THREE.Vector3(...scale), 0.05);

      // Shader updates
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
