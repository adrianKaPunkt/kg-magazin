'use client';

import { useEffect } from 'react';
import { motion, useAnimate } from 'framer-motion';

type FlaconFillProps = {
  fillColor?: string;
  fillLevel: number;
  className?: string;
  shouldAnimateIn?: boolean;
};

const FlaconFill = ({
  fillColor = '#60DCFA',
  fillLevel,
  className = '',
  shouldAnimateIn = false,
}: FlaconFillProps) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!scope.current) return;

    const duration = shouldAnimateIn ? 5 : 0.4;

    animate(
      scope.current,
      { scaleY: fillLevel },
      {
        duration,
        ease: 'easeInOut',
      }
    );
  }, [fillLevel, shouldAnimateIn]);

  return (
    <div
      className={`absolute bottom-0 left-0 w-full h-full ${className}`}
      style={{ transformOrigin: 'bottom center', pointerEvents: 'none' }}>
      <svg
        viewBox="0 0 595.3 841.9"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet">
        <defs>
          <mask id="flacon-mask">
            <path
              d="M13.5,17.8c1.3,8.2,4,25.9,5.1,31.6c1.4,7.5,3.8,34.2,4.5,46.5
              c0.7,12.3,2.3,48.3,1.9,54.9
              c-0.4,6.6-0.3,23.7,0.1,29.2s1.8,70.2,2.5,83.9c0.7,13.7,2,65.5,2.9,77.2s2.6,34,2.6,34s3.2,22.8,6.9,26.3
              c3.8,3.5,8.5,9.5,69.9,10.1c61.4,0.6,124.1,0.1,128,0c3.9-0.1,47.5-0.4,53.5-3.9c5.9-3.5,17.3-15.5,19.6-24.7
              c2.3-9.2,7.8-78,8.1-105.6s2-89.3,2-100.8c0-11.6,5.5-96.1,8.7-112.6c3.2-16.5,5.6-38.7,6.1-40.9c0.2-1.2,0.3-3.2,0.3-5.2H13.5z"
              fill="white"
            />
          </mask>
        </defs>

        <motion.rect
          ref={scope}
          x="0"
          y="0"
          width="100%"
          height="100%"
          style={{ transformOrigin: 'center bottom' }}
          fill={fillColor}
          opacity={0.6}
          mask="url(#flacon-mask)"
        />
      </svg>
    </div>
  );
};

export default FlaconFill;
