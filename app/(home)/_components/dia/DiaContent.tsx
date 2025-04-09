'use client';

import { useEffect, useRef, useLayoutEffect } from 'react';
import { useMotionValue } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDiaPhaseStore } from '@/lib/store/useDiaPhaseStore';
import * as THREE from 'three';
import { hexToRgbArray } from '@/lib/utils/hexToRgb';
import { diaPhases } from '@/lib/diaPhases';
import BlobScene from '../blob/BlobScene';

gsap.registerPlugin(ScrollTrigger);

const DiaContent = () => {
  const { blobRef, setTargetScale, setColor, setShowCanvas, setShowBlob } =
    useDiaPhaseStore();

  const introTriggerRef = useRef(null);
  const introPlaceholderRef = useRef(null);
  const scrollY = useMotionValue(0);

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
      // 🌌 Canvas sichtbar machen (mit sauberem Trigger)
      ScrollTrigger.create({
        trigger: introTriggerRef.current,
        start: 'top 90%',
        end: 'bottom top',
        onEnter: () => {
          setShowCanvas(true);
          const renderer = (window as any).__diaRenderer;
          renderer?.setClearColor(new THREE.Color(0, 0, 0));
        },
        onLeaveBack: () => setShowCanvas(false),
        markers: { startColor: 'blue', endColor: 'blue', fontWeight: 'bold' },
      });

      // 💫 Blob erst im Placeholder anzeigen
      ScrollTrigger.create({
        trigger: introPlaceholderRef.current,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setShowBlob(true),
        onLeaveBack: () => setShowBlob(false),
        markers: {
          startColor: 'green',
          endColor: 'green',
          fontWeight: 'bold',
        },
      });

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
            setColor([current.r, current.g, current.b]);
          },
        }
      );
    });

    return () => ctx.revert();
  }, [blobRef, setColor, setTargetScale, setShowCanvas, setShowBlob]);

  return (
    <>
      <BlobScene />

      {/* Dummy für frühes Canvas-Einschalten */}
      <section
        ref={introTriggerRef}
        className="relative w-full md:max-w-5xl xl:max-w-7xl lg:mx-auto px-9 pt-16 lg:mt-64 z-20 text-white overflow-hidden mt-9 md:mt-0 scroll-snap-start snap-start"
        style={{ scrollSnapAlign: 'start' }}
      />

      {/* Dia-Prinzip Content */}
      <section
        className="relative w-full md:max-w-5xl xl:max-w-7xl lg:mx-auto px-9 pt-16 lg:mt-64 z-20 text-white overflow-hidden mt-9 md:mt-0 scroll-snap-start snap-start"
        style={{ scrollSnapAlign: 'start' }}>
        <h1 className="font-vogue text-5xl lg:text-8xl pb-6">
          DAS DIA-PRINZIP
        </h1>
        <div className="hidden lg:block border-b border-white"></div>
        <div className="relative mt-8 lg:mt-16 text-base xl:text-xl font-light leading-[30px] xl:leading-[40px] text-neutral-900">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
            <div className="text-white col-span-2">
              <p className="font-bold">
                <span>Dream. </span>
                <span>Imagine. </span>
                <span>Act.</span>
              </p>
              <p>
                Drei einfache Worte, die mein Leben geprägt haben. Sie stehen
                für den inneren Ruf, Visionen zu empfangen (dream), sie mit
                Glauben und Kreativität auszugestalten (imagine) – und
                schließlich mutig ins Handeln zu kommen (act).
              </p>
            </div>
            <div className="col-span-4 h-[500px]"></div>
            <div className="col-span-2 col-start-2 text-white">
              <p>
                Dieses Prinzip wurde für mich zum Wegweiser. Nicht nur im
                Glauben, sondern auch im Alltag, in meiner Arbeit, in meinem
                Wirken als Verleger. Es beschreibt, wie Gott in meinem Leben
                gewirkt hat – Schritt für Schritt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder → startet Farbe/Blob */}
      <section
        ref={introPlaceholderRef}
        id="intro-placeholder"
        className="h-[200vh] bg-transparent"
      />
    </>
  );
};

export default DiaContent;
