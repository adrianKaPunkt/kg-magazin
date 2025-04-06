'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDiaPhaseStore } from '@/lib/store/useDiaPhaseStore';

gsap.registerPlugin(ScrollTrigger);

export default function ActSection() {
  const sectionRef = useRef(null);
  const actPlaceholderRef = useRef(null);
  const { blobRef, setColor } = useDiaPhaseStore();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!blobRef?.current) return;

      gsap.to(
        {},
        {
          scrollTrigger: {
            trigger: actPlaceholderRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            onUpdate: (self) => {
              const startScale = 0.8;
              const endScale = 0;
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
          <h2 className="text-white text-5xl font-bold tracking-widest">ACT</h2>
          <div className="text-white font-light text-3xl mt-16">
            <p>Deine Aktion wird</p>
            <p className="mt-3">zu deiner Berufung</p>
          </div>
        </div>
      </div>
      <div ref={actPlaceholderRef} className="h-min-[200vh]"></div>
    </section>
  );
}
