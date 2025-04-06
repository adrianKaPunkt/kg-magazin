'use client';

import { useEffect, useRef, useLayoutEffect } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDiaPhaseStore } from '@/lib/store/useDiaPhaseStore';
import BlobScene from '../blob/BlobScene';
import * as THREE from 'three';
import { hexToRgbArray } from '@/lib/utils/hexToRgb';
import { diaPhases } from '@/lib/diaPhases';

gsap.registerPlugin(ScrollTrigger);

export default function DIAIntroSection() {
  const { setPhase, blobRef, setTargetScale, setColor } = useDiaPhaseStore();
  const introPlaceholderRef = useRef(null);
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
    setPhase('intro', {
      position: [0, 0, 0],
      scale: 0.1,
      intensity: 0.6,
      glow: 1.0,
      color: '#ff4040',
    });
  }, [setPhase]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!blobRef?.current) return;

      // 📦 Intro-Vergrößerung
      gsap.to(blobRef.current.scale, {
        x: 1.2,
        y: 1.2,
        z: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=3000',
          scrub: true,
        },
      });

      // 🔽 Smooth Verkleinerung im Placeholder
      gsap.to(
        {},
        {
          scrollTrigger: {
            trigger: introPlaceholderRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const startScale = 1.2;
              const endScale = 0.4;
              const current = startScale + (endScale - startScale) * progress;
              setTargetScale([current, current, current]);
            },
          },
        }
      );

      // 🌌 Hintergrundfarbe (Canvas)
      interface CustomWindow extends Window {
        __diaRenderer?: THREE.WebGLRenderer;
      }
      const renderer = (window as CustomWindow).__diaRenderer;
      if (renderer && typeof renderer.setClearColor === 'function') {
        const color = { r: 1, g: 1, b: 1 };
        gsap.to(color, {
          r: 0,
          g: 0,
          b: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=2500',
            scrub: true,
          },
          onUpdate: () => {
            renderer.setClearColor(new THREE.Color(color.r, color.g, color.b));
          },
        });
      }

      // 🎨 Farbe animieren von Intro zu Dream
      const introRGB = hexToRgbArray('#ff4040');
      const dreamRGB = hexToRgbArray(diaPhases[0].color);
      const current = { r: introRGB[0], g: introRGB[1], b: introRGB[2] };

      gsap.fromTo(
        current,
        { r: introRGB[0], g: introRGB[1], b: introRGB[2] },
        {
          r: dreamRGB[0],
          g: dreamRGB[1],
          b: dreamRGB[2],
          scrollTrigger: {
            trigger: introPlaceholderRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
          onUpdate: () => {
            const currentColor = [current.r, current.g, current.b] as [
              number,
              number,
              number
            ];
            console.log('🎨 Aktuelle Farbe:', currentColor);
            setColor([current.r, current.g, current.b]);
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [blobRef, setColor, setTargetScale]);

  return (
    <>
      <BlobScene />

      <motion.section
        ref={sectionRef}
        className="relative w-full h-[400vh] scroll-snap-start snap-start"
        style={{ scrollSnapAlign: 'start' }}>
        <motion.div
          className="sticky top-0 h-screen flex items-center justify-center pointer-events-none z-10 bg-transparent"
          style={{ opacity: textOpacity, y: textY }}>
          <div className="text-2xl md:text-3xl font-bold tracking-widest text-center text-neutral-900">
            <p>Wie das DIA-Prinzip</p>
            <p>dich und die Welt verändert</p>
          </div>
        </motion.div>
      </motion.section>

      <section
        ref={introPlaceholderRef}
        id="intro-placeholder"
        className="h-[200vh] bg-transparent"></section>
    </>
  );
}
