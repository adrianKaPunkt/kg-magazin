'use client';

import { useEffect, useRef, useState } from 'react';
import BlobScene from '../_components/blob/BlobScene';

const Dia = () => {
  const diaSectionRef = useRef<HTMLDivElement>(null);
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
  return (
    <section
      ref={diaSectionRef}
      className="relative w-full lg:w-screen overflow-hidden text-white pt-32 pb-64"
      style={{ scrollSnapAlign: 'start' }}>
      <BlobScene height={height} />

      <div className="z-10 relative w-full md:max-w-5xl xl:max-w-7xl lg:mx-auto px-9 mt-64 mb-64 text-white">
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
      </div>
    </section>
  );
};
export default Dia;
