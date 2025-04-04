'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import BlobScene from '../_components/blob/BlobScene';
import { useBlobPhaseStore } from '@/lib/store/blobPhaseStore';
import { diaPhases, initialPhase, resetPhase } from '@/lib/diaPhases';
import useMediaQuery from '@/lib/hooks/useMediaQuery';

gsap.registerPlugin(ScrollTrigger);

const DIAPrincip = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const setPhase = useBlobPhaseStore((state) => state.setPhase);

  const initialRef = useRef<HTMLDivElement | null>(null);
  const dreamRef = useRef<HTMLDivElement | null>(null);
  const imagineRef = useRef<HTMLDivElement | null>(null);
  const actRef = useRef<HTMLDivElement | null>(null);
  const resetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setPhase(initialPhase);
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
      console.log('Initial ref:', initialRef.current);
      ScrollTrigger.create({
        trigger: initialRef.current,
        start: 'top center',
        end: 'top top',
        onEnter: () => setPhase(initialPhase),
        onEnterBack: () => setPhase(initialPhase),
        markers: false,
      });
    }

    ScrollTrigger.create({
      trigger: resetRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setPhase(resetPhase),
      onEnterBack: () => setPhase(resetPhase),
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#blob-trigger',
        start: '-300% 21%',
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
    ).fromTo('#reset', { opacity: 1 }, { opacity: 0, ease: 'power2.out' });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
    console.log('🟢 currentPhase:', setPhase);
  }, [setPhase]);

  return (
    <>
      {/* Blob-Trigger für ScrollTrigger */}
      <div className="relative mt-56">
        <div id="blob-trigger" className="z-20 h-16" />
        {/* Intro */}
        <section
          ref={initialRef}
          className="relative h-[200vh] flex justify-center z-20 w-full md:max-w-5xl xl:max-w-7xl mx-auto">
          <div className="block">
            <h1 className="z-20 font-vogue text-5xl lg:text-8xl text-center">
              <p>DAS</p>
              <p>DIA-PRINZIP</p>
            </h1>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 px-9 lg:px-0 text-base xl:text-xl font-light leading-[30px] xl:leading-[40px]">
              <div className="col-span-1 mt-40">
                <p>
                  <span className="font-normal">Dream. Imagine. Act.</span>
                  <br />
                  <span>
                    Drei einfache Worte, die mein Leben geprägt haben. Sie
                    stehen für den inneren Ruf, Visionen zu empfangen (dream),
                    sie mit Glauben und Kreativität auszugestalten (imagine) –
                    und schließlich mutig ins Handeln zu kommen (act).{' '}
                  </span>
                </p>
              </div>
              <div className="col-span-1 md:text-right md:col-start-3 lg:col-start-4 mt-96">
                <p>
                  Dieses Prinzip wurde für mich zum Wegweiser. Nicht nur im
                  Glauben, sondern auch im Alltag, in meiner Arbeit, in meinem
                  Wirken als Verleger. Es beschreibt, wie Gott in meinem Leben
                  gewirkt hat – Schritt für Schritt.
                </p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="z-20 text-center px-6 w-full flex justify-center">
              <h2 className="font-literata leading-relaxed text-2xl md:text-3xl xl:text-4xl font-light text-neutral-900 mt-[800px] ">
                Wie das «DIA-PRINZIP» dich
                <br /> und die Welt verändern wird
              </h2>
            </motion.div>
          </div>
        </section>

        {/* DREAM */}
        <section
          ref={dreamRef}
          className="relative z-20 h-[300vh] flex items-center justify-center">
          <h2 className="text-center font-literata leading-relaxed text-2xl md:text-3xl xl:text-4xl font-light text-neutral-900">
            Träume
            <br />
            Gott liebt dich und spricht mit dir
          </h2>
        </section>

        {/* IMAGINE */}
        <section
          ref={imagineRef}
          className="relative z-20 h-[300vh] flex items-center justify-center">
          <h2 className="font-literata text-3xl md:text-5xl font-light text-white text-center max-w-xl">
            Deine Träume werden zur Vorstellung
          </h2>
        </section>

        {/* ACT */}
        <section
          ref={actRef}
          className="relative z-20 h-[300vh] flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-light text-white text-center max-w-xl">
            Deine Aktion wird zu deiner Berufung führen
          </h2>
        </section>
        <section className="relative z-20 h-screen flex items-center justify-center"></section>

        {/* RESET */}
        <section
          id="reset"
          ref={resetRef}
          className="relative z-20 h-[33vh] flex items-center justify-center"></section>

        {/* BLOB */}
        <div
          id="blob-wrapper"
          className="fixed top-0 left-0 w-full h-screen z-[5]">
          <BlobScene isMobile={isMobile} />
        </div>
      </div>
    </>
  );
};

export default DIAPrincip;
