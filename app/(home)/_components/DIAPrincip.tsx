'use client';

import * as THREE from 'three';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlobScene from './blob/BlobScene';
import { useLayoutEffect, useRef } from 'react';
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
      className="px-6 relative min-h-[160vh] mx-auto w-full md:max-w-5xl xl:max-w-7xl bg-white overflow-hidden">
      {/* Scroll-Einstieg – leerer Bereich oben */}
      <div className="h-[20vh]" />

      <h1 className="font-vogue text-5xl lg:text-8xl pb-6 text-center">
        DAS DIA PRINZIP
      </h1>

      {/* Text-1 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="flex justify-center pt-80">
        <h2 className="mt-102 font-lora-semibold leading-snug text-2xl sm:text-3xl md:text-4xl font-light text-center text-neutral-900 max-w-xl">
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
        <BlobScene />
      </div>
    </section>
  );
};

export default DIAPrincip;
