'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDiaPhaseStore } from '@/lib/store/useDiaPhaseStore';
import ActIcon from '@/components/icons/ActIcon';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

export default function ActSection() {
  const actStartRef = useRef(null);
  const actEndRef = useRef(null);

  const { blobRef, setShowBlob, setShowCanvas, renderer } = useDiaPhaseStore();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // CANVAS VISIBLE
      ScrollTrigger.create({
        trigger: actEndRef.current,
        start: 'top top',
        end: 'top top',
        scrub: true,
        onEnter: () => {
          setShowCanvas(false);
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
          setShowCanvas(true);
        },
        // markers: true,
      });
      // -- END CANVAS VISIBLE --
    });

    return () => ctx.revert();
  }, [blobRef, setShowCanvas, setShowBlob, renderer]);

  return (
    <section
      ref={actStartRef}
      className="relative w-full h-[200vh] scroll-snap-start snap-start bg-transparent">
      <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none z-10">
        <div className="block w-full">
          <div className="flex justify-center mb-7">
            <ActIcon />
          </div>
          <div className="flex flex-row justify-center">
            <div className="text-center">
              <h2 className="text-white text-5xl font-bold tracking-widest">
                ACT
              </h2>
              <div className="text-white font-light text-3xl mt-16">
                <p>Deine Aktion wird</p>
                <p className="mt-3">zu deiner Berufung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={actEndRef} className="h-min-[200vh]"></div>
    </section>
  );
}
