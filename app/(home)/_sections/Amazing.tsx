import Image from 'next/image';
import Flacon from '../_components/Flacon';

const Amazing = () => {
  return (
    <section className="h-[250vh] relative w-full md:max-w-5xl xl:max-w-7xl mx-auto px-9 pt-16 lg:mt-40 z-20 text-neutral-900">
      {/* Hintergrundbild */}
      <div className="absolute top-0 w-full inset-0 z-0 pointer-events-none hidden lg:block">
        <Image
          src="/images/paper2.jpg"
          alt="Klaus Gerth - Paper"
          width={1000}
          height={1000}
          className="object-cover opacity-20 h-[2540px] w-full"
        />
      </div>
      <h1 className="font-vogue text-5xl lg:text-8xl pb-6 text-center">
        AMAZING
      </h1>
      <div className="relative mt-8 lg:mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Flacon />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Amazing;
