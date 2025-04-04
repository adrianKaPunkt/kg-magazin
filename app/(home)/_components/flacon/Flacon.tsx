import Image from 'next/image';
import FlaconFill from './FlaconFill';

interface FlaconProps {
  title: string;
  text?: string;
  fillColor?: string;
  positionTop?: string;
}

const Flacon: React.FC<FlaconProps> = ({
  title,
  text,
  fillColor,
  positionTop,
}) => {
  return (
    <div className="">
      <div className="relative">
        <div
          className="z-40 absolute w-[55%]"
          style={{ top: `${positionTop}%`, left: '23%' }}>
          <p>{text}</p>
        </div>
        <div className="absolute top-[7%] left-[39%] z-40 text-white font-literata text-3xl text-center">
          {title}
        </div>
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
