import Image from 'next/image';

const Grace = () => {
  return (
    <section>
      {/* Video */}
      <div className="relative w-full h-screen md:max-w-5xl xl:max-w-7xl mx-auto mt-36 px-9">
        <h1 className="font-vogue text-5xl lg:text-8xl pb-6 md:text-center">
          GRACE
        </h1>
        <div className="absolute top-24 w-full inset-0 z-50 hidden lg:block">
          <Image
            src="/images/gold-frame.png"
            alt="Frame"
            width={1100}
            height={800}
          />
        </div>
        <div className="flex justify-center items-center">
          <video
            src="/videos/himmel_auf_erden.mp4"
            controls
            autoPlay
            playsInline
            loop
            className="w-[90%] lg:w-[55%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </section>
  );
};
export default Grace;
