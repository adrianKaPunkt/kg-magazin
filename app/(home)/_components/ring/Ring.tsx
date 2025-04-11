'use client';

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import './ring.css';

interface RingProps {
  label?: string;
  images: string[];
  interval?: number;
  bgColor?: string;
  icon?: React.ReactNode;
}

const Ring = ({
  label,
  images,
  interval = 5000,
  bgColor = '#000',
  icon,
}: RingProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div>
      <div className=" group/grace relative w-full h-full cursor-pointer">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[currentImageIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}>
            <Image
              src={images[currentImageIndex]}
              alt="Grace image"
              width={800}
              height={800}
              className="z-70 rounded-full scale-[97%] grayscale group-hover/grace:grayscale-0"
            />
          </motion.div>
        </AnimatePresence>
        <Image
          src="/images/gold-ring.png"
          alt="Frame"
          width={800}
          height={800}
          className="absolute z-80 top-0 left-0 h-full w-full"
        />
        <div
          className="blur-box absolute -z-10 top-0 left-0 h-full w-full rounded-full blur-3 scale-[98%]"
          style={{ backgroundColor: bgColor }}
        />
        <div className="absolute -z-[9] top-0 left-0 h-full w-full rounded-full bg-white scale-[98%]" />
        <div className="absolute -z-[8] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
          <div className="flex flex-col items-center">
            {icon}
            <p>{label}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ring;
