'use client';

import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Suspense, useRef, useLayoutEffect } from 'react';
import Blob from './Blob';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const blobPhases = [
  {
    id: 'intro',
    label: 'INTRO',
    description: 'Die Reise beginnt.',
    rgb: [149, 249, 244],
    glow: 0.6,
    intensity: 0.2,
    quote: 'Alles hat einen Anfang.',
  },
  {
    id: 'dream',
    label: 'DREAM',
    description: 'Alles beginnt mit einem Traum.',
    rgb: [140, 250, 55],
    glow: 0.3,
    intensity: 0.25,
    quote: 'Ein Tropfen Vision fällt ins Unbekannte.',
  },
  {
    id: 'imagine',
    label: 'IMAGINE',
    description: 'Die Kraft der Vorstellung.',
    rgb: [236, 50, 250],
    glow: 0.4,
    intensity: 0.3,
    quote: 'Ideen formen Welten, noch bevor sie existieren.',
  },
  {
    id: 'act',
    label: 'ACT',
    description: 'Der Mut, es zu tun.',
    rgb: [93, 250, 123],
    glow: 0.5,
    intensity: 0.4,
    quote: 'Der Moment, in dem Vision Realität wird.',
  },
];

const DIAPrincip = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<THREE.Group | null>(null);
  const cloudRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !blobRef.current) return;

    const mesh = blobRef.current.children[0]; // Zugriff auf das Blob-Mesh
    const material = (mesh as THREE.Mesh).material as THREE.ShaderMaterial;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.to(material.uniforms.u_color.value, {
      r: blobPhases[1].rgb[0] / 255,
      g: blobPhases[1].rgb[1] / 255,
      b: blobPhases[1].rgb[2] / 255,
      duration: 1,
      ease: 'none',
    });

    gsap.to('body', {
      backgroundColor: '#d6ecff', // zartes Hellblau
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'top center',
        scrub: true,
      },
    });

    gsap.to(cloudRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[160vh] w-full bg-white overflow-hidden">
      {/* Scroll-Einstieg – leerer Bereich oben */}
      <div className="h-[50vh]" />

      {/* Text-Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="flex justify-center pt-80">
        <h2 className="font-lora-semibold leading-snug text-2xl sm:text-3xl md:text-4xl font-light text-center text-neutral-900 max-w-xl">
          Die Reise beginnt – Ein Tropfen Vision fällt ins Unbekannte – und
          entfaltet seine Kraft im Universum.
        </h2>
      </motion.div>

      {/* Wolken-Overlay */}
      <motion.div
        ref={cloudRef}
        className="absolute inset-0 z-0 bg-[url('/images/clouds.png')] bg-cover bg-center opacity-0"
      />

      {/* Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="z-10 text-center pt-64">
        <h2 className="text-3xl md:text-4xl font-light text-neutral-900">
          Alles beginnt mit einem Traum.
        </h2>
      </motion.div>

      {/* Three.js Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            {/* Stars für Hintergrund */}
            <Stars
              radius={100}
              depth={50}
              count={3000}
              factor={4}
              saturation={0}
              fade
            />

            {/* Blob mit GSAP Ref */}
            <group ref={blobRef}>
              <Blob
                scale={0.3}
                intensity={0.3}
                glow={0.2}
                position={[0, 1.2, 0]}
                color={blobPhases[0].rgb.map((c) => c / 255)}
                pulse
                pulseAmount={0.03}
                pulseSpeed={1.5}
              />
            </group>

            {/* Steuerung optional */}
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.3}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default DIAPrincip;
