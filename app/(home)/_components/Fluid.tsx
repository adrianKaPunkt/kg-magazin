'use client';

import { motion } from 'framer-motion';

const Fluid = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.8, scale: 1, rotate: 0 }}
        animate={{
          opacity: [0.8, 1, 0.8],
          scale: [1, 1.05, 1],
          rotate: [0, 2, -2, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
        <div className="relative w-[50px] h-[50px]">
          {/* Farbebene, wird in Form der Blase gemaskt */}
          <div
            className="absolute inset-0 bg-pink-500 opacity-30"
            style={{
              WebkitMaskImage: 'url(/images/fluid.png)',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskSize: 'contain',
              WebkitMaskPosition: 'center',
              maskImage: 'url(/images/fluid1.png)',
              maskRepeat: 'no-repeat',
              maskSize: 'contain',
              maskPosition: 'center',
            }}
          />
        </div>
      </motion.div>
    </>
  );
};
export default Fluid;
