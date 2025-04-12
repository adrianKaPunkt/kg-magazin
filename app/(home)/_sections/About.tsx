'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const headlineRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const imageRef = useRef(null);
  const quoteRef1 = useRef(null);
  const quoteRef2 = useRef(null);
  const bLeftRef = useRef(null);
  const bRightRef = useRef(null);

  const headlineInView = useInView(headlineRef, { once: false, amount: 0.5 });
  const leftInView = useInView(leftRef, { once: false, amount: 0.1 });
  const rightInView = useInView(rightRef, { once: false, amount: 0.1 });
  const imageInView = useInView(imageRef, { once: false, amount: 0.1 });
  const quoteInView = useInView(quoteRef1, { once: false, amount: 0.1 });
  const bLeftInView = useInView(bLeftRef, { once: false, amount: 0.1 });
  const bRightInView = useInView(bRightRef, { once: false, amount: 0.1 });

  return (
    <section className="relative w-full md:max-w-5xl xl:max-w-7xl mx-auto px-9 pt-16 lg:mt-40 z-20 bg-white overflow-x-hidden">
      {/* Hintergrundbild */}
      <div className="w-full inset-0 z-0 pointer-events-none hidden lg:block">
        <Image
          src="/images/paper.jpg"
          alt="Klaus Gerth - Über mich"
          fill
          className="object-cover opacity-20"
        />
      </div>
      {/* Überschrift */}
      <motion.h1
        ref={headlineRef}
        initial={{ opacity: 0, x: -40 }}
        animate={headlineInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 1 }}
        className="font-vogue text-5xl lg:text-8xl pb-6">
        ÜBER MICH
      </motion.h1>
      <div className="hidden lg:block border-b border-neutral-600"></div>

      {/* Grid und Texte über dem Bild */}
      <div className="relative z-10 mt-8 lg:mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Linker Textblock */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -40 }}
            animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 1 }}
            className="col-span-1 text-base xl:text-xl font-light leading-[30px] xl:leading-[40px] text-neutral-900 space-y-6">
            <p>Hi, mein Name ist Klaus Gerth…</p>
            <p>
              Als junger Mann war ich erfolgreich - beruflich lief alles
              bestens. Und doch spürte ich: Da fehlt etwas. Nach meiner Flucht
              aus einer religiösen Sekte begegnete ich Jesus Christus. Während
              ich weiter die Karriereleiter hochstieg, fingen meine Frau Gaby
              und ich an, gemeinsam in der Bibel zu lesen.
            </p>
          </motion.div>

          {/* Rechter Textblock */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 40 }}
            animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 1 }}
            className="col-span-1 text-base xl:text-xl col-start-1 lg:col-start-4 font-light leading-[30px] xl:leading-[40px] pt-6 lg:pt-40 lg:text-right text-neutral-700">
            <p>
              Stundenlang. Tagelang. Wir konnten nicht genug bekommen! Eine
              Bibelstelle veränderte alles: Johannes 3, das Gespräch zwischen
              Nikodemus und Jesus über das „Wiedergeborenwerden“.
            </p>
          </motion.div>
        </div>

        {/* Absolutes Bild */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -80 }}
          animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: false, amount: 1 }}
          className="pt-14 md:pt-0 md:absolute w-[100%] md:w-[45%] xl:w-[80%] md:right-5 md:-top-8 lg:-top-4 md:scale-x-[1] lg:left-1/2 lg:-translate-x-1/2 w- lg:w-[75%] z-0 hover:scale-105 hover:-top-4 transition-all duration-1200 ease-in-out cursor-pointer">
          <Image
            src="/images/klaus-gerth.png"
            alt="Klaus Gerth"
            width={900}
            height={900}
            className="w-full object-contain"
          />
        </motion.div>

        {/* Zitat unter dem Bild */}
        <div className="mt-16 lg:mt-84 xl:mt-[500px]">
          <h2 className="font-lora-semibold text-2xl md:text-4xl text-center leading-relaxed text-neutral-800">
            <motion.p
              ref={quoteRef1}
              initial={{ opacity: 0 }}
              animate={
                quoteInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 1 }}>
              “Nur noch eines war wichtig:
            </motion.p>{' '}
            <motion.p
              ref={quoteRef2}
              initial={{ opacity: 0 }}
              animate={
                quoteInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 1 }}>
              Gottes Plan für mein Leben.“
            </motion.p>
          </h2>
        </div>

        {/* Grid und Texte unter dem Bild */}
        <div className="grid md:grid-cols-2 gap-8 mt-10 mb-16">
          {/* Linker Textblock */}
          <motion.div
            ref={bLeftRef}
            initial={{ opacity: 0, x: -40 }}
            animate={bLeftInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 1 }}
            className="text-base xl:text-xl col-span-1 font-light leading-[30px] xl:leading-[40px] text-neutral-900 space-y-6 lg:pr-16">
            <p>
              In diesem Moment geschah es – wir wurden neu geboren. Nicht
              körperlich, sondern im Herzen. Durch den Geist Gottes, der sich
              denen offenbart, die ihn wirklich suchen. Wir wussten: Jetzt sind
              wir eine neue Schöpfung.
            </p>
          </motion.div>
          {/* Rechter Textblock */}
          <motion.div
            ref={bRightRef}
            initial={{ opacity: 0, x: 40 }}
            animate={bRightInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 1 }}
            className="text-base xl:text-xl col-span-1 pt-6 md:pt-0 font-light leading-[30px] xl:leading-[40px] text-neutral-900 md:text-right lg:pl-16">
            <p>
              Und auf einmal rückte meine Karriere in den Hintergrund. Nur noch
              eines war wichtig: Gottes Plan für mein Leben.
            </p>
            <p>Und ich traf eine mutige Entscheidung!</p>
          </motion.div>
        </div>
        <div className="hidden lg:block h-20 border-t border-neutral-600"></div>
      </div>
    </section>
  );
};

export default About;
