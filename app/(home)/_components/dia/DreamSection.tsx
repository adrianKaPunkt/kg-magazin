'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDiaPhaseStore } from '@/lib/store/useDiaPhaseStore';
import { diaPhases } from '@/lib/diaPhases';
import { hexToRgbArray } from '@/lib/utils/hexToRgb';
import * as THREE from 'three';
import DreamIcon from '@/components/icons/DreamIcon';

gsap.registerPlugin(ScrollTrigger);

export default function DreamSection() {
  const dreamStartRef = useRef(null);
  const dreamEndRef = useRef(null);
  const { setColor, setScale } = useDiaPhaseStore();

  useEffect(() => {
    let dreamInitialScale: THREE.Vector3 | null = null;
    const ctx = gsap.context(() => {
      // BLOB COLOR, SCALE

      const targetScale = new THREE.Vector3(0.8, 0.8, 0.8);
      const initialColor = new THREE.Color(
        ...hexToRgbArray(diaPhases[0].color)
      );
      const targetColor = new THREE.Color(...hexToRgbArray(diaPhases[1].color));
      ScrollTrigger.create({
        trigger: dreamEndRef.current,
        start: 'top bottom-=30%',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const progress = self.progress;

          // nur einmal initial holen
          if (!dreamInitialScale) {
            dreamInitialScale = useDiaPhaseStore.getState().scale.clone();
            console.log('🎯 DREAM initialScale:', dreamInitialScale.toArray());
          }

          const newScale = dreamInitialScale
            .clone()
            .lerp(targetScale, progress);
          setScale(newScale);

          const newColor = initialColor.clone().lerp(targetColor, progress);
          setColor(newColor.toArray() as [number, number, number]);
        },
        // markers: {
        //   startColor: 'blue',
        //   endColor: 'blue',
        //   fontWeight: 'bold',
        // },
      });
      // -- END BLOB COLOR, SCALE --
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={dreamStartRef}
        className="relative w-full h-[300px] z-20 bg-transparent"
        style={{ scrollSnapAlign: 'start' }}
      />
      <section className="relative w-full h-[100vh] scroll-snap-start snap-start bg-transparent">
        <div className="h-screen flex items-center justify-center pointer-events-none z-10">
          <div className="block w-full">
            <div className="flex justify-center mb-7">
              <DreamIcon />
            </div>
            <div className="flex flex-row justify-center">
              <div className="text-center">
                <h2 className="text-white text-5xl font-bold tracking-widest">
                  DREAM
                </h2>
                <div className="text-white font-light text-3xl mt-16">
                  <p>Träume</p>
                  <p className="mt-3">Gott liebt dich und spricht mit dir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          ref={dreamEndRef}
          className="relative h-[100vh] bg-transparent"
        />
      </section>
    </>
  );
}
