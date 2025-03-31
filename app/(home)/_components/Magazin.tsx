"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const title = [
  {
    word: "DREAM",
    color: "#C49A6C",
    subtitle: "Alles beginnt \nmit einem Traum",
  },
  {
    word: "IMAGINE",
    color: "#B28BFF",
    subtitle: "Die Kraft \nder Vorstellung",
  },
  {
    word: "ACT",
    color: "#D9475A",
    subtitle: "Der Mut, \nes zu tun",
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

  const currentStep = title[index];

  return (
    <div className="w-full flex items-center justify-center h-[80vh]">
      <div className="relative w-full h-full aspect-[2/3] lg:w-[666px] lg:h-[1000px] lg:aspect-auto bg-white border border-neutral-300 shadow-xl rounded-sm overflow-hidden">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute -top-6 left-1/2 -translate-x-1/2 z-0"
        >
          <h1
            className="font-vogue text-[6rem] lg:text-[10.6rem] text-black uppercase transition-colors duration-700"
            style={{ color: currentStep.color }}
          >
            {currentStep.word}
          </h1>
        </motion.div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-20 left-3 lg:top-40 lg:left-6"
        >
          <p className="whitespace-pre-line text-xs transition-colors duration-700">
            {currentStep.subtitle}
          </p>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute z-10 top-112 left-10 font-helvetica-compressed"
          style={{ color: currentStep.color }}
        >
          <div className="text-[5.5rem] font-light uppercase leading-[0.8] tracking-wide">
            <p>KLAUS</p>
            <p>GERTH</p>
          </div>
          <p className="text-sm sm:text-base text-neutral-700 tracking-wide mt-1">
            AUTOR · VERLEGER
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.4 }}
          className="absolute bottom-78 right-10 text-right z-10"
        >
          <p
            className="font-helvetica-compressed text-[3rem] uppercase tracking-wide leading-none"
            style={{ color: currentStep.color }}
          >
            DIA-PRINZIP
          </p>
          <p className="font-helvetica-compressed text-sm text-neutral-700 tracking-wide leading-snug">
            Wie das DIA-Prinzip dich und
            <br />
            die Welt verändern wird
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 2 }}
          className="absolute bottom-58 right-10 text-right z-10"
        >
          <p
            className="font-helvetica-compressed text-[3rem] uppercase tracking-wide"
            style={{ color: currentStep.color }}
          >
            MEIN LEBEN
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 2.5 }}
          className="absolute bottom-36 right-10 text-right z-10"
        >
          <p
            className="font-helvetica-compressed text-[3rem] uppercase tracking-wide"
            style={{ color: currentStep.color }}
          >
            BÜCHER
          </p>
        </motion.div>
        {/* Bildcontainer – relativ zur Höhe */}
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.8,
            ease: "easeOut",
          }}
          className="absolute top-6 lg:top-12 left-7 w-full h-[92%]"
        >
          <Image
            src="/images/cover-image.png"
            alt="Klaus Gerth"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Magazin;
