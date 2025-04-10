'use client';

import { useRef } from 'react';
import { useAnimationFrame } from 'framer-motion';

type OrbitingIconsProps = {
  radius?: number;
  speed?: number;
  size?: number;
  icons: React.ReactNode[]; // z. B. [<DreamIcon />, <ImagineIcon />, <ActIcon />]
};

const OrbitingIcons = ({
  radius = 100,
  speed = 0.5,
  size = 48,
  icons,
}: OrbitingIconsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);

  useAnimationFrame(() => {
    angleRef.current += speed * 0.01;
    if (containerRef.current) {
      const children = Array.from(
        containerRef.current.children
      ) as HTMLElement[];

      children.forEach((el, i) => {
        const angle = angleRef.current + (i * (Math.PI * 2)) / icons.length;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        el.style.transform = `translate(${x}px, ${y}px)`;
      });
    }
  });

  return (
    <div className="relative w-[300px] h-[300px]">
      <div
        ref={containerRef}
        className="absolute top-1/2 left-1/2"
        style={{ transform: 'translate(-50%, -50%)' }}>
        {icons.map((icon, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              width: `${size}px`,
              height: `${size}px`,
              opacity: 0.5,
            }}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrbitingIcons;
