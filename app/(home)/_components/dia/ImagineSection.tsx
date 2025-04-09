'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDiaPhaseStore } from '@/lib/store/useDiaPhaseStore';
import { diaPhases } from '@/lib/diaPhases';
import { hexToRgbArray } from '@/lib/utils/hexToRgb';
import ImagineIcon from '@/components/icons/ImagineIcon';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

export default function DreamSection() {
  const imagineStartRef = useRef(null);
  const imagineEndRef = useRef(null);
  const { setColor, setScale } = useDiaPhaseStore();

  useEffect(() => {
    let imagineInitialScale: THREE.Vector3 | null = null;
    const ctx = gsap.context(() => {
      // BLOB COLOR, SCALE

      const targetScale = new THREE.Vector3(0.7, 0.7, 0.7);
      const initialColor = new THREE.Color(
        ...hexToRgbArray(diaPhases[1].color)
      );
      const targetColor = new THREE.Color(...hexToRgbArray(diaPhases[2].color));
      ScrollTrigger.create({
        trigger: imagineEndRef.current,
        start: 'top bottom',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const progress = self.progress;

          // nur einmal initial holen
          if (!imagineInitialScale) {
            imagineInitialScale = useDiaPhaseStore.getState().scale.clone();
          }

          const newScale = imagineInitialScale
            .clone()
            .lerp(targetScale, progress);
          setScale(newScale);

          const newColor = initialColor.clone().lerp(targetColor, progress);
          setColor(newColor.toArray() as [number, number, number]);
        },
        markers: {
          startColor: 'blue',
          endColor: 'blue',
          fontWeight: 'bold',
        },
      });
      // -- END BLOB COLOR, SCALE --
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={imagineStartRef}
        className="relative w-full h-[300px] overflow-hidden bg-transparent"
        style={{ scrollSnapAlign: 'start' }}
      />
      <section className="relative w-full h-[200vh] scroll-snap-start snap-start bg-transparent">
        <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none z-10">
          <div className="block w-full">
            <div className="flex justify-center mb-7">
              <ImagineIcon />
            </div>
            <div className="flex flex-row justify-center">
              <div className="text-center">
                <h2 className="text-white text-5xl font-bold tracking-widest">
                  IMAGINE
                </h2>
                <div className="text-white font-light text-3xl mt-16">
                  <p>Deine Träume</p>
                  <p className="mt-3">werden zur Vorstellung</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={imagineEndRef}
          className="h-min-[200vh] bg-indigo-500/80"></div>
      </section>
    </>
  );
}
