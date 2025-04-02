'use client';

import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils, ShaderMaterial, AdditiveBlending, Vector3 } from 'three';
import { IcosahedronGeometry } from 'three';
import { MeshProps } from '@react-three/fiber';
import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';
import * as THREE from 'three';

interface BlobProps extends MeshProps {
  scale?: number;
  intensity?: number;
  hoverIntensity?: number;
  glow?: number;
  position?: [number, number, number];
  color?: [number, number, number];
  pulse?: boolean;
  pulseAmount?: number;
  pulseSpeed?: number;
}

const Blob: React.FC<BlobProps> = ({
  scale = 1,
  intensity = 0.3,
  hoverIntensity = 1,
  glow = 0.3,
  position = [0, 0, 0],
  color = [0.4, 0.7, 1.0],
  pulse = false,
  pulseAmount = 0.02,
  pulseSpeed = 1,
  ...props
}) => {
  const mesh = useRef<THREE.Mesh>(null);
  const hover = useRef(false);

  const geometry = useMemo(() => new IcosahedronGeometry(1.5, 40), []);

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_intensity: { value: intensity },
      u_glow: { value: glow },
      u_color: { value: { r: color[0], g: color[1], b: color[2] } },
    }),
    [intensity, glow, color]
  );

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      if (pulse) {
        const scaleValue =
          scale + Math.sin(clock.elapsedTime * pulseSpeed) * pulseAmount;
        mesh.current.scale.set(scaleValue, scaleValue, scaleValue);
      }
      mesh.current.rotation.y += 0.002;
      mesh.current.rotation.x += 0.001;
      mesh.current.position.y =
        position[1] + Math.sin(clock.elapsedTime * 0.5) * 0.02;

      const mat = mesh.current.material as ShaderMaterial;
      mat.uniforms.u_time.value = 0.4 * clock.getElapsedTime();
      mat.uniforms.u_intensity.value = MathUtils.lerp(
        mat.uniforms.u_intensity.value,
        hover.current ? hoverIntensity : intensity,
        0.02
      );
    }
  });

  return (
    <mesh
      ref={mesh}
      scale={scale}
      position={position as Vector3}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
      {...props}>
      <primitive object={geometry} attach="geometry" />
      <shaderMaterial
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
