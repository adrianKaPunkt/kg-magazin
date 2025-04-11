'use client';

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { AdditiveBlending, MathUtils } from 'three';

import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';
import { useDiaPhaseStore } from '@/lib/store/useDiaPhaseStore';
import { diaPhases } from '@/lib/diaPhases';
import { hexToRgbArray } from '@/lib/utils/hexToRgb';

type BlobProps = {
  scale: [number, number, number];
  intensity: number;
  hoverIntensity?: number;
  glow: number;
  position: [number, number, number];
  blobRef?: React.RefObject<THREE.Mesh | null>;
  materialRef?: React.RefObject<THREE.ShaderMaterial | null>;
};

const Blob = ({
  scale = [0.2, 0.2, 0.2],
  intensity,
  hoverIntensity = intensity + 0.3,
  glow,
  position,
  blobRef,
  materialRef,
}: BlobProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const shaderMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const hover = useRef(false);

  const index = useDiaPhaseStore((state) => state.currentIndex);
  const color = hexToRgbArray(diaPhases[index]?.color ?? '#ffffff');

  // 🎯 Shader-Uniforms via Ref (bleibt konstant)
  const uniforms = useRef({
    u_time: { value: 0 },
    u_intensity: { value: intensity },
    u_glow: { value: glow },
    u_color: { value: new THREE.Color(...color) },
  });

  // 🎨 Update Farbe & Werte zur Laufzeit
  useEffect(() => {
    const mat = shaderMaterialRef.current;
    if (mat) {
      uniforms.current.u_color.value.set(...color);
      uniforms.current.u_glow.value = glow;
      uniforms.current.u_intensity.value = intensity;
    }
  }, [color, glow, intensity]);

  // 🌀 Drag-Rotation
  const rotation = useRef({ x: 0, y: 0 });
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    if (blobRef) blobRef.current = meshRef.current;
    if (materialRef) materialRef.current = shaderMaterialRef.current;

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

  // ⏱ Frame-Loop für Animation
  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    const mat = shaderMaterialRef.current;
    const time = clock.getElapsedTime();

    if (!mesh || !mat) return;

    // 🔄 Rotation
    rotation.current.y += 0.001;
    mesh.rotation.x = MathUtils.lerp(mesh.rotation.x, rotation.current.x, 0.1);
    mesh.rotation.y = MathUtils.lerp(mesh.rotation.y, rotation.current.y, 0.1);

    // 🫧 Schweben
    mesh.position.y = position[1] + Math.sin(time * 0.5) * 0.02;

    // 🔍 Nur skalieren, wenn sich Scale sichtbar ändert
    const targetScale = new THREE.Vector3(...scale);
    if (!mesh.scale.equals(targetScale)) {
      mesh.scale.lerp(targetScale, 0.05);
    }

    // 🕐 Nur wenn Shader läuft
    if (mat.uniforms.u_time) {
      mat.uniforms.u_time.value = time;
    }

    // 🟡 Nur Hover-Intensität aktualisieren, wenn sich der Wert ändert
    const targetIntensity = hover.current ? hoverIntensity : intensity;
    const current = mat.uniforms.u_intensity.value;
    const lerped = MathUtils.lerp(current, targetIntensity, 0.05);

    if (Math.abs(current - lerped) > 0.001) {
      mat.uniforms.u_intensity.value = lerped;
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={new THREE.IcosahedronGeometry(1.5, 40)}
      position={position}
      scale={scale}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}>
      <shaderMaterial
        ref={shaderMaterialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
        transparent
        depthWrite={false}
        depthTest={true}
        blending={AdditiveBlending}
      />
    </mesh>
  );
};

export default Blob;
