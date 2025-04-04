const Grace = () => {
  return (
    <section>
      {/* Video */}
      <div className="relative w-full md:max-w-5xl xl:max-w-7xl mx-auto">
        <video
          src="/videos/himmel_auf_erden.mp4"
          controls
          autoPlay
          playsInline
          loop
          className="w-full rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};
export default Grace;
