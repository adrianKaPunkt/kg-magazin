'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { diaPhases } from '@/lib/diaPhases';

const Magazin = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleTogglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % diaPhases.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = diaPhases[index];

  return (
    <div className="min-h-screen w-full grid place-items-center bg-white overflow-auto pt-4 pb-12">
      <div
        style={{ containerType: 'inline-size' }}
        className={`
          aspect-[2/3]
          w-full
          max-w-[420px]
          sm:max-w-[480px]
          md:max-w-[600px]
          lg:max-w-[720px]
          xl:max-w-[840px]
          2xl:max-w-[960px]
          h-auto
          relative
          bg-white
          md:bg-gray-50
          md:shadow-xl
          md:rounded-md
          overflow-hidden
        `}>
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
          {current.label}
        </motion.h1>

        {/* Subtitel */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute cursor-pointer hover:scale-140 left-[5%] top-[22%] whitespace-pre-line z-10 leading-2.6 text-[8px] md:text-xs"
          style={{
            top: 'clamp(10%, 20vh, 15%)',
          }}>
          {current.description}
        </motion.p>

        {/* KLAUS GERTH */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute left-[8%] z-20 cursor-pointer"
          style={{
            color: current.color,
            top: 'clamp(41%, 20vh, 14%)',
          }}>
          <div className="hover:scale-120 transition-transform duration-450">
            <div
              className="font-helvetica-compressed text-[5.5rem] font-light uppercase leading-[0.8] tracking-wide "
              style={{
                fontSize: 'clamp(3rem, 13cqw, 8rem)',
              }}>
              <p>KLAUS</p>
              <p>GERTH</p>
            </div>
            <p className="text-[8px] sm:text-base text-neutral-600 tracking-widest mt-1 indent-1 md:indent-2">
              AUTOR · VERLEGER
            </p>
          </div>
        </motion.div>

        {/* DIA-PRINZIP */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.4 }}
          className="absolute bottom-78 right-[6%] text-right z-20 cursor-pointer"
          style={{ bottom: 'clamp(30%, 3cqh, 12%)' }}>
          <div className="hover:scale-120 transition-transform duration-450">
            <p
              className="font-helvetica-compressed text-[3rem] uppercase tracking-wide leading-none"
              style={{
                color: current.color,
                fontSize: 'clamp(1rem, 8cqw, 4rem)',
              }}>
              DIA-PRINZIP
            </p>
            <p className="text-[6px] lg:text-[10px] text-neutral-600 tracking-wide leading-snug -indent-3">
              WIE DAS «DIA-PRINZIP» DICH UND
              <br />
              DIE WELT VERÄNDERN WIRD
            </p>
          </div>
        </motion.div>

        {/* MEIN LEBEN */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 2 }}
          className="absolute right-[6%] text-right z-20 cursor-pointer "
          style={{ bottom: 'clamp(20%, 3vh, 12%)' }}>
          <p
            className="font-helvetica-compressed text-[3rem] uppercase tracking-wide hover:scale-120 transition-transform duration-450"
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
          className="absolute bottom-36 right-[6%] text-right z-10 cursor-pointer "
          style={{ bottom: 'clamp(10%, 3vh, 12%)' }}>
          <p
            className="font-helvetica-compressed text-[3rem] uppercase tracking-wide hover:scale-120 transition-transform duration-450"
            style={{
              color: current.color,
              fontSize: 'clamp(1rem, 8cqw, 4rem)',
            }}>
            BÜCHER
          </p>
        </motion.div>

        {/* Bild */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.8,
            ease: 'easeOut',
          }}
          style={{
            top: 'clamp(5%, 3vh, 12%)',
          }}
          className="absolute left-1/2 -translate-x-1/2 w-[60%] max-w-[70%] z-10">
          <Image
            onClick={handleTogglePlay}
            src="/images/cover-image.png"
            alt="Klaus Gerth"
            width={600}
            height={800}
            className=" object-contain grayscale hover:grayscale-25 cursor-pointer hover:scale-105 transition-transform duration-450"
            priority
          />
        </motion.div>

        <audio ref={audioRef} src="/audio/kg_intro.mp3" />
      </div>
    </div>
  );
};

export default Magazin;
