'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import BlobScene from './blob/BlobScene';
import { useBlobPhaseStore } from '@/lib/store/blobPhaseStore';
import { diaPhases, initialPhase } from '@/lib/diaPhases';
import useMediaQuery from '@/lib/hooks/useMediaQuery';

gsap.registerPlugin(ScrollTrigger);

const DIAPrincip = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const setPhase = useBlobPhaseStore((state) => state.setPhase);

  const initialRef = useRef<HTMLDivElement | null>(null);
  const dreamRef = useRef<HTMLDivElement | null>(null);
  const imagineRef = useRef<HTMLDivElement | null>(null);
  const actRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const triggers = [
      { ref: dreamRef, phase: diaPhases[0] },
      { ref: imagineRef, phase: diaPhases[1] },
      { ref: actRef, phase: diaPhases[2] },
    ];

    triggers.forEach(({ ref, phase }) => {
      if (!ref.current) return;

      ScrollTrigger.create({
        trigger: ref.current,
        start: 'center center',
        end: 'bottom bottom',
        onEnter: () => setPhase(phase),
        onEnterBack: () => setPhase(phase),
        markers: false,
      });
    });

    if (initialRef.current) {
      ScrollTrigger.create({
        trigger: initialRef.current,
        start: 'top top',
        end: 'bottom bottom',
        onEnter: () => setPhase(initialPhase),
        onEnterBack: () => setPhase(initialPhase),
      });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#blob-trigger',
        start: '21% 21%',
        end: 'bottom bottom',
        scrub: 1,
        toggleActions: 'play none none reverse',
        markers: false,
      },
    });

    tl.fromTo(
      '#blob-wrapper',
      { xPercent: -100, opacity: 0 },
      { xPercent: 0, opacity: 1, ease: 'power2.out' }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [setPhase]);

  return (
    <>
      {/* Blob-Trigger für ScrollTrigger */}
      <div className="relative mt-56">
        <div id="blob-trigger" className="h-16" />
        <h1 className="font-vogue text-5xl lg:text-8xl text-center z-50">
          DAS DIA-PRINZIP
        </h1>
        {/* Intro */}
        <section
          ref={initialRef}
          className="relative h-[120vh] flex justify-center items-center z-50">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center px-6 max-w-xl">
            <h2 className="leading-relaxed text-3xl md:text-5xl font-light text-neutral-900">
              Die Reise beginnt – Ein Tropfen Vision fällt ins Unbekannte – und
              entfaltet seine Kraft im Universum.
            </h2>
          </motion.div>
        </section>

        {/* DREAM */}
        <section
          ref={dreamRef}
          className="relative z-50 h-screen flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-light text-neutral-900 text-center max-w-xl">
            Ein Tropfen Vision fällt ins Unbekannte.
          </h2>
        </section>

        {/* IMAGINE */}
        <section
          ref={imagineRef}
          className="relative z-50 h-screen flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-light text-white text-center max-w-xl">
            Ideen formen Welten, noch bevor sie existieren.
          </h2>
        </section>

        {/* ACT */}
        <section
          ref={actRef}
          className="relative z-50 h-screen flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-light text-white text-center max-w-xl">
            Der Moment, in dem Vision Realität wird.
          </h2>
        </section>
        <section className="relative z-50 h-screen flex items-center justify-center"></section>
        <div
          id="blob-wrapper"
          className="fixed top-0 left-0 w-full h-screen pointer-events-none -z-10">
          <BlobScene isMobile={isMobile} />
        </div>
      </div>
    </>
  );
};

export default DIAPrincip;
