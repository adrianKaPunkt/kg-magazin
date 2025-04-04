const Grace = () => {
  return (
    <section>
      {/* Video */}
      <div className="relative w-full h-screen flex justify-center md:max-w-5xl xl:max-w-7xl mx-auto">
        <video
          src="/videos/himmel_auf_erden.mp4"
          autoPlay
          playsInline
          loop
          className="w-[90%] lg:w-[75%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </section>
  );
};
export default Grace;
