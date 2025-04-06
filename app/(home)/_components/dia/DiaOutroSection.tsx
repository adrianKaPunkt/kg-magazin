'use client';

import { useEffect, useRef, useLayoutEffect } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDiaPhaseStore } from '@/lib/store/useDiaPhaseStore';
import BlobScene from '../blob/BlobScene';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

export default function DIAOutroSection() {
  const { blobRef, setTargetScale, setColor } = useDiaPhaseStore();
  const outroPlaceholderRef = useRef(null);
  const sectionRef = useRef(null);
  const scrollY = useMotionValue(0);
  const textOpacity = useTransform(scrollY, [0.8, 0.95], [0, 1]);
  const textY = useTransform(scrollY, [0.8, 0.95], [100, 0]);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight * 3.5;
      const progress = Math.min(scrollTop / maxScroll, 1);
      scrollY.set(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!blobRef?.current) return;

      // 🌌 Hintergrundfarbe (Canvas)
      interface CustomWindow extends Window {
        __diaRenderer?: THREE.WebGLRenderer;
      }
      const renderer = (window as CustomWindow).__diaRenderer;
      if (renderer && typeof renderer.setClearColor === 'function') {
        const color = { r: 0, g: 0, b: 0 };
        gsap.to(color, {
          r: 1,
          g: 1,
          b: 1,
          scrollTrigger: {
            trigger: outroPlaceholderRef.current,
            start: 'top top',
            end: '+=2500',
            scrub: true,
          },
          onUpdate: () => {
            renderer.setClearColor(new THREE.Color(color.r, color.g, color.b));
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [blobRef, setColor, setTargetScale]);

  return (
    <>
      <BlobScene />

      <motion.section
        ref={sectionRef}
        className="relative w-full h-[100px] scroll-snap-start snap-start"
        style={{ scrollSnapAlign: 'start' }}>
        <motion.div
          className="sticky top-0 h-screen flex items-center justify-center pointer-events-none z-10 bg-transparent"
          style={{ opacity: textOpacity, y: textY }}>
          <div className="text-2xl md:text-3xl font-bold tracking-widest text-center text-neutral-900"></div>
        </motion.div>
      </motion.section>

      <section
        ref={outroPlaceholderRef}
        id="outro-placeholder"
        className="h-[200vh] bg-transparent"></section>
    </>
  );
}
