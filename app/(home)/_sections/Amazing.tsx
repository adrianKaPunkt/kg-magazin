'use client';

import Image from 'next/image';
import Flacon from '../_components/flacon/Flacon';
import { diaPhases } from '@/lib/diaPhases';
import DreamIcon from '@/components/icons/DreamIcon';
import ImagineIcon from '@/components/icons/ImagineIcon';
import ActIcon from '@/components/icons/ActIcon';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
//           >

const Amazing = () => {
  const headlineAmazingRef = useRef<HTMLDivElement>(null);
  const flacon1Ref = useRef<HTMLDivElement>(null);
  const flacon1TextRef = useRef<HTMLDivElement>(null);
  const flacon2Ref = useRef<HTMLDivElement>(null);
  const flacon2TextRef = useRef<HTMLDivElement>(null);
  const flacon3Ref = useRef<HTMLDivElement>(null);
  const flacon3TextRef = useRef<HTMLDivElement>(null);

  const headlineAmazingInView = useInView(headlineAmazingRef, {
    once: false,
    amount: 0.5,
  });
  const flacon1InView = useInView(flacon1Ref, {
    once: false,
    amount: 0.5,
  });
  const flacon1TextInView = useInView(flacon1TextRef, {
    once: false,
    amount: 0.5,
  });
  const flacon2InView = useInView(flacon2Ref, {
    once: false,
    amount: 0.5,
  });
  const flacon2TextInView = useInView(flacon2TextRef, {
    once: false,
    amount: 0.5,
  });
  const flacon3InView = useInView(flacon3Ref, {
    once: false,
    amount: 0.5,
  });
  const flacon3TextInView = useInView(flacon3TextRef, {
    once: false,
    amount: 0.5,
  });

  return (
    <section className="relative w-full md:max-w-5xl xl:max-w-7xl lg:mx-auto px-9 pt-16 lg:mt-64 z-20 text-neutral-900 overflow-hidden mt-9 md:mt-0">
      {/* Hintergrundbild */}
      <div className="absolute top-0 w-full inset-0 z-0 hidden lg:block">
        <Image
          src="/images/paper2.jpg"
          alt="Paper"
          width={1000}
          height={1000}
          className="object-cover opacity-20 h-[3600px] w-full hover:scale-105 transition-all duration-1200 ease-in-out cursor-pointer"
        />
      </div>
      <motion.div
        ref={headlineAmazingRef}
        initial={{ opacity: 0 }}
        animate={
          headlineAmazingInView ? { opacity: 1 } : { opacity: 0, x: -50 }
        }
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 1 }}
        className="mb-16">
        <h1 className="font-vogue text-5xl lg:text-8xl md:text-center">
          AMAZING
        </h1>
        <h2 className="font-vogue -mt-3 text-2xl lg:text-4xl md:text-center text-[#5c5c5c5c]">
          THE DREAM
        </h2>
      </motion.div>
      <div className="hidden lg:block border-b border-neutral-600"></div>
      <div className="relative mt-8 lg:mt-16 text-base xl:text-xl font-light leading-[30px] xl:leading-[40px] text-neutral-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          <motion.div
            ref={flacon1Ref}
            initial={{ opacity: 0 }}
            animate={flacon1InView ? { opacity: 1 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 1 }}
            className="order-1 md:order-1 relative col-span-1 lg:col-span-2">
            <Flacon
              title="dream"
              images={['/images/junge.png']}
              fillColor={diaPhases[0].color}
              positionTop="36"
              labelPosition={['32', '34']}
              icon={<DreamIcon color="white" size={25} />}
              initialFillLevel={0.3}
            />
          </motion.div>
          <motion.div
            ref={flacon1TextRef}
            initial={{ opacity: 0 }}
            animate={
              flacon1TextInView ? { opacity: 1 } : { opacity: 0, x: +50 }
            }
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 1 }}
            className="order-2 md:order-2 col-span-1 lg:col-span-2 md:flex md:items-center md:pr-6 md:pl-28 md:text-right mt-6 md:mt-0 pb-10 md:pb-0">
            <p>
              Schon als Kind war ich fasziniert von Düften, Crémes und allem,
              was schön war. Ich bewunderte die eleganten Flacons im Badezimmer
              meiner Mutter. Mit 25 war es mein großer Traum, einmal Chef einer
              Kosmetikfirma zu werden. Es war der Wunsch, etwas Schönes zu
              schaffen – etwas, das Menschen berührt. Dieser Traum hat mich
              getragen. Und er wurde zum Ausgangspunkt meiner Reise.
            </p>
          </motion.div>
          <motion.div
            ref={flacon2TextRef}
            initial={{ opacity: 0 }}
            animate={
              flacon2TextInView ? { opacity: 1 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 1 }}
            className="order-4 md:order-3 col-span-1 lg:col-span-2 md:flex md:items-center mt-6 md:mt-0 md:pr-28 md:pl-6 pb-10 md:pb-0">
            <p>
              Ich habe mir immer vorgestellt, eines Tages im Smoking auf Bällen
              zu stehen, umgeben von Eleganz und Glanz – ein Jet-Set-Leben zu
              führen. Diese Bilder hatten Macht über mich. Sie gaben mir ein
              Ziel, ein Gefühl von Bedeutung. In meiner Vorstellung war ich Teil
              einer Welt, in der Luxus, Stil und Erfolg selbstverständlich
              waren.
            </p>
          </motion.div>
          <motion.div
            ref={flacon2Ref}
            initial={{ opacity: 0 }}
            animate={flacon2InView ? { opacity: 1 } : { opacity: 0, x: +50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 1 }}
            className="order-3 md:order-4 relative col-span-1 lg:col-span-2 lg:mt-44">
            <Flacon
              title="imagine"
              images={['/images/ai01.png', '/images/ai02.png']}
              fillColor={diaPhases[1].color}
              positionTop="43"
              labelPosition={['28', '31']}
              icon={<ImagineIcon color="white" size={25} />}
              initialFillLevel={0.6}
            />
          </motion.div>
          <motion.div
            ref={flacon3Ref}
            initial={{ opacity: 0 }}
            animate={flacon3InView ? { opacity: 1 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 1 }}
            className="order-5 md:order-5 relative col-span-1 lg:col-span-2 lg:mt-44 lg:mb-20">
            <Flacon
              title="act"
              images={['/images/direktor.png']}
              fillColor={diaPhases[2].color}
              positionTop="35"
              labelPosition={['42', '41']}
              icon={<ActIcon color="white" size={25} />}
            />
          </motion.div>
          <motion.div
            ref={flacon3TextRef}
            initial={{ opacity: 0 }}
            animate={
              flacon3TextInView ? { opacity: 1 } : { opacity: 0, x: +50 }
            }
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 1 }}
            className="order-6 md:order-6 flex items-center col-span-1 lg:col-span-2 mt-6 md:mt-0 lg:mb-12 md:pr-6 md:pl-28 md:text-right">
            <p>
              Mit 27 Jahren wurde ich schließlich Direktor bei einer
              internationalen Kosmetikfirma &ldquo;JUVENA&rdquo; – der jüngste
              in der Geschichte des Unternehmens. Ich hatte es geschafft.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Amazing;
