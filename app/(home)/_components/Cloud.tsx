import Image from 'next/image';

const Cloud = () => {
  return (
    <div>
      <Image
        src="/images/cloud.png"
        alt="Cloud"
        width={2000}
        height={2000}
        className="w-screen h-full"
      />
    </div>
  );
};

export default Cloud;
