'use client';

import Image from 'next/image';
import FlaconFill from './FlaconFill';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';

interface FlaconProps {
  title: string;
  labelPosition: string[];
  images: string[];
  interval?: number;
  fillColor?: string;
  positionTop?: string;
  icon?: React.ReactNode;
  initialFillLevel?: number;
}

const Flacon: React.FC<FlaconProps> = ({
  title,
  images,
  interval = 5000,
  fillColor = '#ffffff',
  positionTop,
  labelPosition,
  icon,
  initialFillLevel = 1,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [shouldAnimateIn, setShouldAnimateIn] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const flaconRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(flaconRef, { once: true, amount: 0.5 });
  const labelLeft = isMobile ? labelPosition[0] : labelPosition[1];
  const labelTop = isMobile ? '4' : '6.5';
  const iconLeft = isMobile ? '45' : '47';
  const iconTop = isMobile ? '18.5' : '20';

  const [fillLevel, setFillLevel] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    if (isInView) {
      setShouldAnimateIn(true);
      setFillLevel(initialFillLevel);
    }
  }, [isInView]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  const handleSpray = () => {
    if (fillLevel > 0.1) {
      const newLevel = parseFloat((fillLevel - 0.1).toFixed(1));
      setFillLevel(newLevel);
      audioRef.current?.play();
    }
  };

  return (
    <div ref={flaconRef}>
      <div
        className="relative w-full cursor-pointer hover:scale-105 transition-all duration-1200 ease-in-out"
        onClick={handleSpray}>
        <AnimatePresence mode="wait">
          <motion.div
            key={images[currentImageIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="z-40 absolute w-[55%]"
            style={{ top: `${positionTop}%`, left: '23%' }}>
            <Image
              src={images[currentImageIndex]}
              alt={`Flacon image ${currentImageIndex + 1}`}
              width={900}
              height={900}
              className="opacity-50"
            />
          </motion.div>
        </AnimatePresence>

        <div
          className="absolute z-40 text-white font-literata text-3xl md:text-5xl text-center"
          style={{
            top: `${labelTop}%`,
            left: `${labelLeft}%`,
          }}>
          {title}
        </div>
        {icon && (
          <div
            className="absolute opacity-30"
            style={{
              top: `${iconTop}%`,
              left: `${iconLeft}%`,
            }}>
            {icon}
          </div>
        )}

        <div>
          <Image
            src="/images/flacon.png"
            alt="Flacon"
            width={900}
            height={900}
            className="w-full object-contain"
          />
        </div>
        <div
          className="absolute opacity-20 z-50"
          style={{
            top: '-31%',
            left: '7%',
            width: '147%',
            height: '172%',
          }}>
          <FlaconFill
            fillColor={fillColor}
            fillLevel={fillLevel}
            shouldAnimateIn={shouldAnimateIn}
          />
          <audio ref={audioRef} src={undefined} />
        </div>
      </div>
    </div>
  );
};
export default Flacon;
