'use client';

import { diaPhases } from '@/lib/diaPhases';
import Ring from '../_components/ring/Ring';
import DreamIcon from '@/components/icons/DreamIcon';
import ImagineIcon from '@/components/icons/ImagineIcon';
import ActIcon from '@/components/icons/ActIcon';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Grace = () => {
  const headlineGraceRef = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<HTMLDivElement>(null);
  const ring1TextRef = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);
  const ring2TextRef = useRef<HTMLDivElement>(null);
  const ring3Ref = useRef<HTMLDivElement>(null);
  const ring3TextRef = useRef<HTMLDivElement>(null);

  const headlineGraceInView = useInView(headlineGraceRef, {
    once: false,
    amount: 0.5,
  });
  const ring1InView = useInView(ring1Ref, {
    once: false,
    amount: 0.5,
  });
  const ring1TextInView = useInView(ring1TextRef, {
    once: false,
    amount: 0.5,
  });
  const ring2InView = useInView(ring2Ref, {
    once: false,
    amount: 0.5,
  });
  const ring2TextInView = useInView(ring2TextRef, {
    once: false,
    amount: 0.5,
  });
  const ring3InView = useInView(ring3Ref, {
    once: false,
    amount: 0.5,
  });
  const ring3TextInView = useInView(ring3TextRef, {
    once: false,
    amount: 0.5,
  });

  return (
    <section>
      {/* Video */}
      <div className="relative w-full h-screen md:max-w-5xl xl:max-w-7xl mx-auto mt-36 mb-20 px-9">
        <motion.div
          className="mb-6 lg:mb-24"
          ref={headlineGraceRef}
          initial={{ opacity: 0 }}
          animate={
            headlineGraceInView ? { opacity: 1 } : { opacity: 0, x: -50 }
          }
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 1 }}>
          <h1 className="font-vogue text-5xl lg:text-8xl md:text-center">
            GRACE
          </h1>
          <h2 className="font-vogue -mt-3 text-xl lg:text-4xl md:text-center text-[#5c5c5c5c]">
            NEW FOUND PASSION
          </h2>
        </motion.div>
        <div className="relative grid grid-cols-2 md:grid-cols-4 md:gap-4 font-light leading-[30px] xl:leading-[40px] text-neutral-900">
          <motion.div
            ref={ring1Ref}
            initial={{ opacity: 0 }}
            animate={ring1InView ? { opacity: 1 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 1 }}
            className="order-1 md:order-1 col-span-2 md:col-span-2 relative md:my-12 mt-6 md:mt-0 mb-12 md:mb-0">
            <Ring
              label="DREAM"
              images={[
                '/images/grace1-1.jpg',
                '/images/grace1-2.jpg',
                '/images/grace1-3.jpg',
              ]}
              bgColor={diaPhases[0].color}
              icon={<DreamIcon color="black" />}
            />
          </motion.div>
          <motion.div
            ref={ring1TextRef}
            initial={{ opacity: 0 }}
            animate={ring1TextInView ? { opacity: 1 } : { opacity: 0, x: +50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 1 }}
            className="order-2 md:order-2 col-span-2 md:col-span-2 md:text-right pl-0 md:pl-28 md:flex md:items-center">
            <p>
              Eine Party in Paris hat mir die Augen geöffnet. Ich war umgeben
              von Schönheit – und spürte plötzlich, dass mir etwas fehlte:
              innere Schönheit. Nicht nur außen glänzen – sondern von innen
              echt, rein und erfüllt sein. Es war der Moment, in dem in mir ein
              neuer Traum entstand: Radikale Umkehr zu Gott.
            </p>
          </motion.div>
          <motion.div
            ref={ring2TextRef}
            initial={{ opacity: 0 }}
            animate={ring2TextInView ? { opacity: 1 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 1 }}
            className="order-4 md:order-3 col-span-2 md:col-span-2 pr-0 md:pr-28 md:flex md:items-center">
            <p>
              Ich begann zu sehen, was wirklich zählt. Nicht länger ein Leben im
              Glanz der Marken – sondern ein Leben mit Bedeutung. Esteé Lauder
              oder ein Buchverlag mit Schulden? Nach einem Unfall wurde mir
              klar: Der Verlag ist meine Berufung. Keine Idee, keine Spinnerei –
              eine Anweisung Gottes. In meinem Herzen formte sich ein Bild: Ein
              Verlag, der Hoffnung bringt. Bücher, die Leben verändern. Und ich
              wusste: Das ist der Weg.
            </p>
          </motion.div>
          <motion.div
            ref={ring2Ref}
            initial={{ opacity: 0 }}
            animate={ring2InView ? { opacity: 1 } : { opacity: 0, x: +50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 1 }}
            className="order-3 md:order-4 col-span-2 md:col-span-2 relative my-12">
            <Ring
              label="IMAGINE"
              images={['/images/grace2-1.jpg', '/images/grace2-2.jpg']}
              bgColor={diaPhases[1].color}
              icon={<ImagineIcon color="black" />}
            />
          </motion.div>
          <motion.div
            ref={ring3Ref}
            initial={{ opacity: 0 }}
            animate={ring3InView ? { opacity: 1 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 1 }}
            className="order-5 md:order-5 col-span-2 md:col-span-2 relative my-12">
            <Ring
              label="ACT"
              images={['/images/grace3-1.jpg', '/images/grace3-2.jpg']}
              bgColor={diaPhases[2].color}
              icon={<ActIcon color="black" />}
            />
          </motion.div>
          <motion.div
            ref={ring3TextRef}
            initial={{ opacity: 0 }}
            animate={ring3TextInView ? { opacity: 1 } : { opacity: 0, x: +50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 1 }}
            className="order-6 md:order-6 col-span-2 md:col-span-2 md:text-right pl-0 md:pl-28 md:flex md:items-center">
            <p>
              Nach meiner Hinwendung zu Gott durfte ich gemeinsam mit meiner
              Frau und großartigen Mitarbeitern den Verlag aufbauen – Schritt
              für Schritt. Was klein begann, wurde ein großes Projekt. Nicht aus
              eigener Kraft, sondern aus Vertrauen. Gott hat geführt – und wir
              sind gegangen.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center items-center mt-12">
          <video
            src="/videos/himmel_auf_erden.mp4"
            controls
            autoPlay
            playsInline
            loop
            className="w-[90%] md:w-[55%]"
          />
        </div>
      </div>
    </section>
  );
};
export default Grace;
