import Image from 'next/image';
import FlaconFill from './FlaconFill';

interface FlaconProps {
  title: string;
  text?: string;
  fillColor?: string;
  positionTop?: string;
  labelPosition?: string;
  icon?: React.ReactNode;
}

const Flacon: React.FC<FlaconProps> = ({
  title,
  text,
  fillColor,
  positionTop,
  labelPosition,
  icon,
}) => {
  return (
    <div className="hover:rotate-3 hover:scale-105 transition-all duration-1200 ease-in-out cursor-pointer">
      <div className="relative">
        <div
          className="z-40 absolute w-[55%]"
          style={{ top: `${positionTop}%`, left: '23%' }}>
          <p>{text}</p>
        </div>
        <div
          className="absolute z-40 text-white font-literata text-3xl text-center"
          style={{
            top: `7%`,
            left: `${labelPosition}%`,
          }}>
          {title}
        </div>
        {icon && (
          <div className="absolute top-[20%] left-[46%] opacity-30">{icon}</div>
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
          className="absolute opacity-20"
          style={{
            top: '-31%',
            left: '7%',
            width: '147%',
            height: '172%',
          }}>
          <FlaconFill fillColor={fillColor} />
        </div>
      </div>
    </div>
  );
};
export default Flacon;
