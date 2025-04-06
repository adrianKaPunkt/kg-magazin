'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDiaPhaseStore } from '@/lib/store/useDiaPhaseStore';
import { diaPhases } from '@/lib/diaPhases';
import { hexToRgbArray } from '@/lib/utils/hexToRgb';

gsap.registerPlugin(ScrollTrigger);

export default function DreamSection() {
  const sectionRef = useRef(null);
  const dreamPlaceholderRef = useRef(null);
  const { blobRef, setColor } = useDiaPhaseStore();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!blobRef?.current) return;

      const dreamRGB = hexToRgbArray(diaPhases[0].color);
      const imagineRGB = hexToRgbArray(diaPhases[1].color);
      const current = { r: dreamRGB[0], g: dreamRGB[1], b: dreamRGB[2] };

      gsap.fromTo(
        current,
        { r: dreamRGB[0], g: dreamRGB[1], b: dreamRGB[2] },
        {
          r: imagineRGB[0],
          g: imagineRGB[1],
          b: imagineRGB[2],
          scrollTrigger: {
            trigger: dreamPlaceholderRef.current,
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

      gsap.to(
        {},
        {
          scrollTrigger: {
            trigger: dreamPlaceholderRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            onUpdate: (self) => {
              const startScale = 0.4;
              const endScale = 0.8;
              const progress = self.progress;
              const current = startScale + (endScale - startScale) * progress;

              useDiaPhaseStore
                .getState()
                .setTargetScale([current, current, current]);
            },
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [blobRef, setColor]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[200vh] scroll-snap-start snap-start bg-transparent">
      <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none z-10">
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
      <div ref={dreamPlaceholderRef} className="h-min-[200vh]"></div>
    </section>
  );
}
