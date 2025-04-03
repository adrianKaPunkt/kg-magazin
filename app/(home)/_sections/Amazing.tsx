import Image from 'next/image';
import Flacon from '../_components/Flacon';

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
            <div className="absolute xl:w-[55%] xl:top-96 xl:left-32">
              <p>
                Schon als Kind war ich fasziniert von Düften, Crémes und allem,
                was schön war. Ich bewunderte die eleganten Flacons im
                Badezimmer meiner Mutter. Mit 25 war es mein großer Traum,
                einmal Chef einer Kosmetikfirma zu werden. Es war der Wunsch,
                etwas Schönes zu schaffen – etwas, das Menschen berührt. Dieser
                Traum hat mich getragen. Und er wurde zum Ausgangspunkt meiner
                Reise.
              </p>
            </div>
            <Flacon />
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
            <div className="absolute xl:w-[55%] xl:top-96 xl:left-32">
              <p>
                Ich habe mir immer vorgestellt, eines Tages im Smoking auf
                Bällen zu stehen, umgeben von Eleganz und Glanz – ein
                Jet-Set-Leben zu führen. Diese Bilder hatten Macht über mich.
                Sie gaben mir ein Ziel, ein Gefühl von Bedeutung. In meiner
                Vorstellung war ich Teil einer Welt, in der Luxus, Stil und
                Erfolg selbstverständlich waren.
              </p>
            </div>
            <Flacon />
          </div>
          <div className="relative lg:col-span-2 lg:mt-44">
            <div className="absolute xl:w-[55%] xl:top-[450px] xl:left-32">
              <p>
                Mit 27 Jahren wurde ich schließlich Direktor bei einer
                internationalen Parfümfirma – der jüngste in der Geschichte des
                Unternehmens. Ich hatte es geschafft.
              </p>
            </div>
            <Flacon />
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
