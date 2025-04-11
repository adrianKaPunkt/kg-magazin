'use client';

import { useEffect, useRef, useState } from 'react';
import BlobScene from '../_components/blob/BlobScene';
import OrbitingIcons from '../_components/OrbitingIcons';
import DreamIcon from '@/components/icons/DreamIcon';
import ImagineIcon from '@/components/icons/ImagineIcon';
import ActIcon from '@/components/icons/ActIcon';
import { diaPhases } from '@/lib/diaPhases';
import { useDiaPhaseStore } from '@/lib/store/useDiaPhaseStore';

const Dia = () => {
  const diaSectionRef = useRef<HTMLDivElement>(null);
  const { currentIndex, setIndex } = useDiaPhaseStore();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (diaSectionRef.current) {
        setHeight(diaSectionRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((currentIndex + 1) % diaPhases.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, setIndex]);

  if (!diaPhases.length) return null;

  const current = diaPhases[currentIndex] ?? diaPhases[0];
  if (!current) return null;

  return (
    <section
      ref={diaSectionRef}
      className="relative w-full lg:w-screen overflow-hidden text-white"
      style={{ scrollSnapAlign: 'start' }}>
      <BlobScene height={height} />

      <div className="z-10 relative w-full md:max-w-5xl xl:max-w-7xl lg:mx-auto px-9 mt-32 lg:mt-64 pb-32 text-white">
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
            <div className="col-span-4 h-[400px] lg:h-[800px] mt-16 lg:mt-24">
              <div className="flex flex-col items-center">
                <div className="mb-4 lg:mb-8">{current?.icon}</div>
                <p className="text-center text-white text-3xl lg:text-5xl font-literata">
                  {current.label}
                </p>
              </div>
            </div>
            <div className="col-span-2 col-start-2 text-white">
              <p>
                Dieses Prinzip wurde für mich zum Wegweiser. Nicht nur im
                Glauben, sondern auch im Alltag, in meiner Arbeit, in meinem
                Wirken als Verleger. Es beschreibt, wie Gott in meinem Leben
                gewirkt hat – Schritt für Schritt.
              </p>
            </div>
          </div>
          <div className="mt-16 lg:mt-12 flex justify-center">
            <OrbitingIcons
              radius={100}
              speed={0.5}
              size={200}
              text={['DREAM', 'IMAGINE', 'ACT']}
              icons={[
                <DreamIcon key="dream" color={diaPhases[0].color} />,
                <ImagineIcon key="imagine" color={diaPhases[1].color} />,
                <ActIcon key="act" color={diaPhases[2].color} />,
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dia;
