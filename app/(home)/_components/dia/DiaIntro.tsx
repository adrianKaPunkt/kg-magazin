'use client';

import { useDiaPhaseStore } from '@/lib/store/useDiaPhaseStore';
import BlobScene from '../blob/BlobScene';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { hexToRgbArray } from '@/lib/utils/hexToRgb';
import { diaPhases } from '@/lib/diaPhases';

gsap.registerPlugin(ScrollTrigger);

const DiaIntro = () => {
  const { blobRef, setColor, setScale, setShowBlob, setShowCanvas, renderer } =
    useDiaPhaseStore();
  const introStartRef = useRef(null);
  const introEndRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // CANVAS VISIBLE
      ScrollTrigger.create({
        trigger: introStartRef.current,
        start: 'top top',
        end: 'top top',
        scrub: true,
        onEnter: () => {
          setShowCanvas(true);
          try {
            if (renderer && renderer.getContext) {
              const context = renderer.getContext();
              if (!context.isContextLost()) {
                renderer.setClearColor(new THREE.Color(0, 0, 0));
              }
            }
          } catch (error) {
            console.error('WebGL Context Error:', error);
          }
        },
        onLeaveBack: () => {
          setShowCanvas(false);
        },
        // markers: true,
      });
      // -- END CANVAS VISIBLE --

      // BLOB VISIBLE, SCALE, COLOR
      const initialScale = useDiaPhaseStore.getState().scale.clone();
      const targetScale = new THREE.Vector3(0.5, 0.5, 0.5);
      const targetColor = hexToRgbArray(diaPhases[0].color);
      ScrollTrigger.create({
        trigger: introEndRef.current,
        start: 'top center+=30%',
        end: 'bottom+=20% center+=30%',
        onEnter: () => setShowBlob(true),
        onLeaveBack: () => setShowBlob(false),
        onUpdate: (self) => {
          const progress = self.progress;
          const newScale = initialScale.clone().lerp(targetScale, progress);
          setScale(newScale);
          console.log(
            'progress INTRO:',
            progress.toFixed(2),
            'newScale:',
            newScale.toArray()
          );
          const newColor = targetColor.map((v) => v * progress);
          setColor(newColor as [number, number, number]);
        },
        // markers: {
        //   startColor: 'pink',
        //   endColor: 'pink',
        //   fontWeight: 'bold',
        // },
      });
      // -- END BLOB VISIBLE --
    });

    return () => ctx.revert();
  }, [blobRef, setShowCanvas, setShowBlob, renderer]);

  return (
    <>
      <BlobScene />

      {/* Dummy für frühes Canvas-Einschalten */}
      <section
        ref={introStartRef}
        className="relative w-full md:max-w-5xl xl:max-w-7xl lg:mx-auto px-9 h-[300px] z-20 text-white scroll-snap-start snap-start"
        style={{ scrollSnapAlign: 'start' }}
      />

      {/* Dia-Prinzip Content */}
      <section
        className=" bg-transparent relative w-full md:max-w-5xl xl:max-w-7xl lg:mx-auto px-9 pt-16 mt-64 z-20 text-white overflow-hidden md:mt-64 scroll-snap-start snap-start"
        style={{ scrollSnapAlign: 'start' }}>
        <h1 className="font-vogue text-5xl lg:text-8xl pb-6">
          <span className="block md:inline">DAS </span>
          <span>DIA-PRINZIP</span>
        </h1>
        <div className="hidden lg:block border-b border-white"></div>
        <div className="relative mt-8 lg:mt-16 text-base xl:text-xl font-light leading-[30px] xl:leading-[40px] text-neutral-900">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:gap-8">
            <div className="text-white col-span-4 md:col-span-2">
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
      <section ref={introEndRef} className="h-[120vh] bg-transparent" />
    </>
  );
};
export default DiaIntro;
