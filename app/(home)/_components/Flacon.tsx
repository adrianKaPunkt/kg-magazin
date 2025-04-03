import Image from 'next/image';

const Flacon = () => {
  return (
    <div>
      <Image
        src="/images/flacon.png"
        alt="Flacon"
        width={900}
        height={900}
        className="w-full object-contain"
      />
    </div>
  );
};
export default Flacon;
