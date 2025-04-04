import Image from 'next/image';
import Flacon from '../_components/flacon/Flacon';
import { flaconText } from '../_components/flacon/flaconText';
import { diaPhases } from '@/lib/diaPhases';

const Amazing = () => {
  return (
    <section className="h-[250vh] relative w-full md:max-w-5xl xl:max-w-7xl mx-auto px-9 pt-16 lg:mt-64 z-20 text-neutral-900">
      {/* Hintergrundbild */}
      <div className="absolute top-0 w-full inset-0 z-0 pointer-events-none hidden lg:block">
        <Image
          src="/images/paper2.jpg"
          alt="Klaus Gerth - Paper"
          width={1000}
          height={1000}
          className="object-cover opacity-20 h-[4100px] w-full"
        />
      </div>
      <h1 className="font-vogue text-5xl lg:text-8xl pb-6 text-center">
        AMAZING
      </h1>
      <div className="relative mt-8 lg:mt-16 text-base xl:text-xl font-light leading-[30px] xl:leading-[40px] text-neutral-900">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative col-span-2">
            <Flacon
              title={flaconText[0].title}
              text={flaconText[0].decription}
              fillColor={diaPhases[0].color}
              positionTop={flaconText[0].positionTop}
            />
          </div>
          <div className="flex justify-center items-center col-span-2 pl-36">
            <Image
              src="/images/junge.png"
              alt="Junge Klaus Gerth"
              width={900}
              height={900}
            />
          </div>
          <div className="lg:col-span-2 flex justify-center items-center pr-32">
            <Image
              src="/images/jetset.png"
              alt="Klaus Gerth Kollektion"
              width={900}
              height={900}
            />
          </div>
          <div className="relative lg:col-span-2 lg:mt-44">
            <Flacon
              title={flaconText[1].title}
              text={flaconText[1].decription}
              fillColor={diaPhases[1].color}
              positionTop={flaconText[1].positionTop}
            />
          </div>
          <div className="relative lg:col-span-2 lg:mt-44">
            <Flacon
              title={flaconText[2].title}
              text={flaconText[2].decription}
              fillColor={diaPhases[2].color}
              positionTop={flaconText[1].positionTop}
            />
          </div>
          <div className="flex justify-center items-center col-span-2 pl-32">
            <Image
              src="/images/direktor.png"
              alt="Klaus Gerth Direktor"
              width={900}
              height={900}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Amazing;
