import { diaPhases } from '@/lib/diaPhases';
import Ring from '../_components/ring/Ring';
import DreamIcon from '@/components/icons/DreamIcon';

const Grace = () => {
  return (
    <section>
      {/* Video */}
      <div className="relative w-full h-screen md:max-w-5xl xl:max-w-7xl mx-auto mt-36 px-9">
        <div className="mb-6 lg:mb-24">
          <h1 className="font-vogue text-5xl lg:text-8xl md:text-center">
            GRACE
          </h1>
          <h2 className="font-vogue -mt-3 text-xl lg:text-4xl md:text-center text-[#5c5c5c5c]">
            NEW FOUND PASSION
          </h2>
        </div>
        <div className="relative grid grid-cols-2 md:grid-cols-4 md:gap-4 font-light leading-[30px] xl:leading-[40px] text-neutral-900">
          {/* <div className="absolute top-0 left-0 z-70 col-span-4">
            <Cloud />
          </div> */}
          <div className="order-1 md:order-1 col-span-2 md:col-span-2 relative md:my-12">
            <Ring
              label="DREAM"
              images={['/images/grace1-1.jpg', '/images/grace1-2.jpg']}
              bgColor={diaPhases[0].color}
              icon={<DreamIcon color="black" />}
            />
          </div>
          <div className="order-2 md:order-2 col-span-2 md:col-span-2 md:text-right pl-0 md:pl-28 md:flex md:items-center">
            <p>
              Eine Party in Paris hat mir die Augen geöffnet. Ich war umgeben
              von Schönheit – und spürte plötzlich, dass mir etwas fehlte:
              innere Schönheit. Nicht nur außen glänzen – sondern von innen
              echt, rein und erfüllt sein. Es war der Moment, in dem in mir ein
              neuer Traum entstand: Radikale Umkehr zu Gott.
            </p>
          </div>
          <div className="order-4 md:order-3 col-span-2 md:col-span-2 pr-0 md:pr-28 md:flex md:items-center">
            <p>
              Ich begann zu sehen, was wirklich zählt. Nicht länger ein Leben im
              Glanz der Marken – sondern ein Leben mit Bedeutung. Esteé Lauder
              oder ein Buchverlag mit Schulden? Nach einem Unfall wurde mir
              klar: Der Verlag ist meine Berufung. Keine Idee, keine Spinnerei –
              eine Anweisung Gottes. In meinem Herzen formte sich ein Bild: Ein
              Verlag, der Hoffnung bringt. Bücher, die Leben verändern. Und ich
              wusste: Das ist der Weg.
            </p>
          </div>
          <div className="order-3 md:order-4 col-span-2 md:col-span-2 relative md:my-12">
            <Ring
              images={['/images/grace1-1.jpg']}
              bgColor={diaPhases[1].color}
            />
          </div>
          <div className="order-5 md:order-5 col-span-2 md:col-span-2 relative md:my-12">
            <Ring
              images={['/images/grace1-1.jpg']}
              bgColor={diaPhases[2].color}
            />
          </div>
          <div className="order-6 md:order-6 col-span-2 md:col-span-2 md:text-right pl-0 md:pl-28 md:flex md:items-center">
            <p>
              Nach meiner Hinwendung zu Gott durfte ich gemeinsam mit meiner
              Frau und großartigen Mitarbeitern den Verlag aufbauen – Schritt
              für Schritt. Was klein begann, wurde ein großes Projekt. Nicht aus
              eigener Kraft, sondern aus Vertrauen. Gott hat geführt – und wir
              sind gegangen.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-44">
          <video
            src="/videos/himmel_auf_erden.mp4"
            controls
            autoPlay
            playsInline
            loop
            className="w-[90%] md:w-[55%]"
          />
        </div>
      </div>
    </section>
  );
};
export default Grace;
