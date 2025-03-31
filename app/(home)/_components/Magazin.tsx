'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const title = [
  {
    word: 'DREAM',
    color: '#C49A6C',
    subtitle: 'Alles beginnt\nmit einem Traum',
  },
  {
    word: 'IMAGINE',
    color: '#B28BFF',
    subtitle: 'Die Kraft\nder Vorstellung',
  },
  {
    word: 'ACT',
    color: '#D9475A',
    subtitle: 'Der Mut,\nes zu tun',
  },
];

const Magazin = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % title.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = title[index];

  return (
    <div className="min-h-screen w-full grid place-items-center bg-neutral-100 overflow-auto py-4">
      <div
        style={{ containerType: 'inline-size' }}
        className="
          aspect-[2/3]
          w-full
          max-w-[420px]
          sm:max-w-[480px]
          md:max-w-[600px]
          lg:max-w-[720px]
          xl:max-w-[840px]
          2xl:max-w-[960px]
          max-h-[100vh]
          h-auto
          relative
          bg-white
          shadow-xl
          rounded-md
          overflow-hidden
        ">
        {/* Titel */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-2 left-1/2 -translate-x-1/2 font-vogue uppercase text-center leading-none z-10"
          style={{
            fontSize: 'clamp(4rem, 25cqw, 16rem)',
            color: current.color,
          }}>
          {current.word}
        </motion.h1>

        {/* Subtitel */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute left-[5%] top-[22%] whitespace-pre-line z-10 leading-2.6 text-[8px] md:text-xs"
          style={{
            top: 'clamp(10%, 20vh, 14%)',
          }}>
          {current.subtitle}
        </motion.p>

        {/* KLAUS GERTH */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute left-[8%] font-helvetica-compressed z-20"
          style={{
            color: current.color,
            top: 'clamp(41%, 20vh, 14%)',
          }}>
          <div
            className="text-[5.5rem] font-light uppercase leading-[0.8] tracking-wide"
            style={{
              fontSize: 'clamp(3rem, 13cqw, 8rem)',
            }}>
            <p>KLAUS</p>
            <p>GERTH</p>
          </div>
          <p className="text-sm sm:text-base text-neutral-700 tracking-wide mt-1">
            AUTOR · VERLEGER
          </p>
        </motion.div>

        {/* DIA-PRINZIP */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.4 }}
          className="absolute bottom-78 right-[6%] text-right z-20"
          style={{ bottom: 'clamp(40%, 3vh, 12%)' }}>
          <p
            className="font-helvetica-compressed text-[3rem] uppercase tracking-wide leading-none"
            style={{
              color: current.color,
              fontSize: 'clamp(1rem, 8cqw, 4rem)',
            }}>
            DIA-PRINZIP
          </p>
          <p className="font-helvetica-compressed text-xs md:text-sm text-neutral-700 tracking-wide leading-snug">
            WIE DAS DIA PRINZIP DICH UND
            <br />
            DIE WELT VERÄNDERN WIRD
          </p>
        </motion.div>

        {/* MEIN LEBEN */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 2 }}
          className="absolute right-[6%] text-right z-20"
          style={{ bottom: 'clamp(30%, 3vh, 12%)' }}>
          <p
            className="font-helvetica-compressed text-[3rem] uppercase tracking-wide"
            style={{
              color: current.color,
              fontSize: 'clamp(1rem, 8cqw, 4rem)',
            }}>
            MEIN LEBEN
          </p>
        </motion.div>

        {/* BÜCHER */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 2.5 }}
          className="absolute bottom-36 right-[6%] text-right z-10"
          style={{ bottom: 'clamp(20%, 3vh, 12%)' }}>
          <p
            className="font-helvetica-compressed text-[3rem] uppercase tracking-wide"
            style={{
              color: current.color,
              fontSize: 'clamp(1rem, 8cqw, 4rem)',
            }}>
            BÜCHER
          </p>
        </motion.div>

        {/* Bild */}
        <Image
          src="/images/cover-image.png"
          alt="Klaus Gerth"
          width={600}
          height={800}
          className="absolute left-1/2 -translate-x-1/2 w-[60%] max-w-[80%] object-contain pointer-events-none z-10 grayscale"
          priority
          style={{
            top: 'clamp(5%, 3vh, 12%)',
          }}
        />
      </div>
    </div>
  );
};

export default Magazin;
