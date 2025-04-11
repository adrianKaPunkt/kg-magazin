'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MyLife = () => {
  const paperRef = useRef(null);
  const separatorRef1 = useRef(null);
  const headlineRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const imageRef = useRef(null);
  const quoteRef1 = useRef(null);
  const quoteRef2 = useRef(null);
  const bLeftRef = useRef(null);
  const bRightRef = useRef(null);
  const imgRightRef = useRef(null);
  const imgLeftRef = useRef(null);

  const paperInView = useInView(paperRef, { once: true, amount: 0.5 });
  const headlineInView = useInView(headlineRef, { once: false, amount: 0.5 });
  const leftInView = useInView(leftRef, { once: false, amount: 0.1 });
  const rightInView = useInView(rightRef, { once: false, amount: 0.1 });
  const imageInView = useInView(imageRef, { once: false, amount: 0.1 });
  const quoteInView = useInView(quoteRef1, { once: false, amount: 0.1 });
  const bLeftInView = useInView(bLeftRef, { once: false, amount: 0.1 });
  const bRightInView = useInView(bRightRef, { once: false, amount: 0.1 });
  const imgRightInView = useInView(imgRightRef, { once: false, amount: 0.1 });
  const imgLeftInView = useInView(imgLeftRef, { once: false, amount: 0.1 });

  return (
    <section
      id="mein-leben"
      className="relative w-full md:max-w-5xl xl:max-w-7xl lg:mx-auto px-9 pt-16 lg:mt-40 z-80 text-neutral-900 overflow-x-hidden">
      {/* Hintergrundbild */}
      <motion.div
        ref={paperRef}
        initial={{ opacity: 0 }}
        animate={paperInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 1 }}
        className="absolute top-0 w-full inset-0 z-0 pointer-events-none hidden lg:block">
        <Image
          src="/images/paper.jpg"
          alt="Klaus Gerth - Über mich"
          width={1000}
          height={1000}
          className="object-cover opacity-20 h-[2010px] w-full"
        />
      </motion.div>
      {/* Überschrift */}
      <motion.h1
        ref={headlineRef}
        initial={{ opacity: 0, x: -40 }}
        animate={headlineInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 1 }}
        className="font-vogue text-5xl lg:text-8xl pb-6">
        MEIN LEBEN
      </motion.h1>
      <motion.div
        ref={separatorRef1}
        initial={{ opacity: 0 }}
        animate={headlineInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: false, amount: 1 }}
        className="hidden lg:block border-b border-neutral-600"></motion.div>

      {/* Grid */}
      <div className="relative mt-8 lg:mt-16">
        <div className="md:grid md:grid-cols-4 md:gap-8">
          {/* Linker Textblock */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -40 }}
            animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 1 }}
            className="col-span-1 md:col-span-2 lg:col-span-1 text-base xl:text-xl font-light leading-[30px] xl:leading-[40px] text-neutral-900 space-y-6">
            <p>
              Ich lade dich ein, meine Lebensgeschichte durch die Phasen von
              Dream, Imagine und Act zu entdecken. Denn jeder Abschnitt meines
              Weges war geprägt von einem inneren Ruf, von Momenten des
              Zweifelns und Hoffens, vom Loslassen und Neuanfangen.
            </p>
          </motion.div>

          {/* Rechter Textblock */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 40 }}
            animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 1 }}
            className="col-span-1 text-base xl:text-xl col-start-1 lg:col-start-4 font-light leading-[30px] xl:leading-[40px] pt-6 lg:text-right text-neutral-700 mb-8 md:pb-0">
            <p>
              Was wie eine klassische Karriere begann,wurde zur geistlichen
              Reise – voller Wendepunkte, leiser Wunder und mutiger
              Entscheidungen.
            </p>
          </motion.div>

          {/* Absolutes Bild */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: false, amount: 1 }}
            className="lg:absolute md:w-[80%] lg:w-[95%] xl:w-[95%] md:col-span-3 lg:-top-8 lg:left-1/2  lg:-translate-x-1/2 hover:scale-105 hover:-top-8 transition-all duration-1200 ease-in-out cursor-pointer">
            <Image
              src="/images/gaby-klaus.png"
              alt="Klaus Gerth"
              width={900}
              height={900}
              className="w-full object-contain"
            />
          </motion.div>

          {/* Zitat unter dem Bild */}
          <div className="mt-16 lg:mt-[430px] xl:mt-[510px] xl:mb-16 col-span-4">
            <h2 className="font-lora-semibold text-2xl md:text-4xl text-center leading-relaxed text-neutral-800 block">
              <motion.p
                ref={quoteRef1}
                initial={{ opacity: 0 }}
                animate={
                  quoteInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 1 }}>
                “Meine Geschichte beginnt nicht
              </motion.p>{' '}
              <motion.p
                ref={quoteRef2}
                initial={{ opacity: 0 }}
                animate={
                  quoteInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 1 }}>
                in Glanz und Erfolg.”
              </motion.p>
            </h2>
          </div>

          {/* Linker Textblock */}
          <motion.div
            ref={bLeftRef}
            initial={{ opacity: 0, x: -40 }}
            animate={bLeftInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 1 }}
            className="text-base xl:text-xl md:col-span-2 font-light leading-[30px] xl:leading-[40px] text-neutral-900 space-y-6 lg:pr-12 mt-12">
            <p>
              Meine Geschichte beginnt nicht in Glanz und Erfolg, sondern in
              einer Zeit des Mangels.Ich wuchs als Halbwaise auf – mein Vater
              fiel im Zweiten Weltkrieg, da war ich noch ein Kind. Meine Mutter
              zog mich alleine groß. Es war eine schwere Zeit, geprägt von
              Entbehrung, aber auch von Stärke, Hoffnung und dem tiefen Wunsch
              nach einem besseren Leben. Vielleicht war es gerade diese
              Kindheit, die in mir den ersten Traum weckte: den Traum von
              Freiheit, Schönheit, von einem Leben, das mehr sein könnte als
              bloßes Überleben.
            </p>
          </motion.div>
          <motion.div
            ref={imgRightRef}
            initial={{ opacity: 0 }}
            animate={
              imgRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }
            }
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: false, amount: 1 }}
            className="md:col-span-2 lg:col-start-3 md:flex md:justify-end lg:pl-12 z-10 mt-8">
            <Image
              src="/images/kind.png"
              alt="Kindheit"
              width={300}
              height={300}
              className="w-[120%] md:w-[80%] hover:scale-105 hover:-rotate-12 transition-all duration-1200 ease-in-out cursor-pointer"
            />
          </motion.div>
          {/* Rechter Textblock */}
          <motion.div
            ref={imgLeftRef}
            initial={{ opacity: 0 }}
            animate={
              imgLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }
            }
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: false, amount: 1 }}
            className="md:col-span-2 lg:pr-12 mt-12 z-10 ">
            <Image
              src="/images/panzer.png"
              alt="Kindheit"
              width={300}
              height={300}
              className="w-[120%] md:w-[80%] hover:scale-105 hover:rotate-12 transition-all duration-1200 ease-in-out cursor-pointer"
            />
          </motion.div>
          <motion.div
            ref={bRightRef}
            initial={{ opacity: 0, x: 40 }}
            animate={bRightInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 1 }}
            className="text-base xl:text-xl col-span-2 mt-12 md:pt-0 font-light leading-[30px] xl:leading-[40px] text-neutral-900 md:text-right lg:pl-12">
            <p>
              In jedem Kapitel meines Lebens findest du diesen Rhythmus: Zuerst
              war da ein Traum – manchmal leise, manchmal drängend. Dann kam die
              Vorstellungskraft, die Vision, die mich tragen und formen durfte.
              Und schließlich: das Handeln. Der Moment, in dem ein Schritt getan
              wurde – oft gegen den Strom, aber geführt von etwas Größerem.
              Diese drei Kräfte – Dream, Imagine, Act – halfen mir, meine
              Berufung zu erkennen. Und sie führten mich von Amazing, durch
              Grace, hin zu dem, was bleibt: How sweet the sound.
            </p>
          </motion.div>
        </div>
        <div className="hidden mt-16 lg:block h-20 border-t border-neutral-600"></div>
      </div>
    </section>
  );
};
export default MyLife;
