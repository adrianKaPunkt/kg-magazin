'use client';

import Image from 'next/image';

const MyLife = () => {
  return (
    <section className="relative w-full md:max-w-5xl xl:max-w-7xl mx-auto px-9 pt-16 lg:mt-40 z-80 text-neutral-900">
      {/* Hintergrundbild */}
      <div className="absolute top-0 w-full inset-0 z-0 pointer-events-none hidden lg:block">
        <Image
          src="/images/paper.jpg"
          alt="Klaus Gerth - Über mich"
          width={1000}
          height={1000}
          className="object-cover opacity-20 h-[2100px] w-full"
        />
      </div>
      {/* Überschrift */}
      <h1 className="font-vogue text-5xl lg:text-8xl pb-6">MEIN LEBEN</h1>
      <div className="hidden lg:block border-b border-neutral-600"></div>

      {/* Grid */}
      <div className="relative mt-8 lg:mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Linker Textblock */}
          <div className="col-span-1 text-base xl:text-xl font-light leading-[30px] xl:leading-[40px] text-neutral-900 space-y-6">
            <p>
              Ich lade dich ein, meine Lebensgeschichte durch die Phasen von
              Dream, Imagine und Act zu entdecken. Denn jeder Abschnitt meines
              Weges war geprägt von einem inneren Ruf, von Momenten des
              Zweifelns und Hoffens, vom Loslassen und Neuanfangen.
            </p>
          </div>

          {/* Rechter Textblock */}
          <div className="col-span-1 text-base xl:text-xl col-start-1 lg:col-start-4 font-light leading-[30px] xl:leading-[40px] pt-6 lg:text-right text-neutral-700">
            <p>
              Was wie eine klassische Karriere begann,wurde zur geistlichen
              Reise – voller Wendepunkte, leiser Wunder und mutiger
              Entscheidungen.
            </p>
          </div>

          {/* Absolutes Bild */}
          <div className="md:absolute w-[100%] md:w-[45%] lg:w-[95%] xl:w-[95%] md:right-5 md:-top-8 lg:-top-8 lg:left-1/2  lg:-translate-x-1/2 hover:scale-105 hover:-top-8 transition-all duration-1200 ease-in-out cursor-pointer">
            <Image
              src="/images/gaby-klaus.png"
              alt="Klaus Gerth"
              width={900}
              height={900}
              className="w-full object-contain"
            />
          </div>

          {/* Zitat unter dem Bild */}
          <div className="mt-16 lg:mt-[430px] xl:mt-[510px] xl:mb-16 col-span-4">
            <h2 className="font-lora-semibold text-2xl md:text-4xl text-center leading-relaxed text-neutral-800">
              <p>“Meine Geschichte beginnt nicht</p>{' '}
              <p>in Glanz und Erfolg.”</p>
            </h2>
          </div>

          {/* Linker Textblock */}
          <div className="text-base xl:text-xl col-span-2 font-light leading-[30px] xl:leading-[40px] text-neutral-900 space-y-6 pr-12">
            <p>
              Meine Geschichte beginnt nicht in Glanz und Erfolg, sondern in
              einer Zeit des Mangels.Ich wuchs als Halbwaise auf – mein Vater
              fiel im Zweiten Weltkrieg, da war ich noch ein Kind. Meine Mutter
              zog mich alleine groß. Es war eine schwere Zeit, geprägt von
              Entbehrung, aber auch von Stärke, Hoffnung und dem tiefen Wunsch
              nach einem besseren Leben. Vielleicht war es gerade diese
              Kindheit, die in mir den ersten Traum weckte: den Traum von
              Freiheit, Schönheit, von einem Leben, das mehr sein könnte als
              bloßes Überleben.
            </p>
          </div>
          <div className="lg:col-span-2 lg:col-start-3 pl-12 z-10">
            <Image
              src="/images/kind.png"
              alt="Kindheit"
              width={300}
              height={300}
              className="w-[120%]"
            />
          </div>
          {/* Rechter Textblock */}
          <div className="lg:col-span-2 pr-12 mt-12 z-10">
            <Image
              src="/images/panzer.png"
              alt="Kindheit"
              width={300}
              height={300}
              className="w-[120%]"
            />
          </div>
          <div className="text-base xl:text-xl col-span-2 mt-12 md:pt-0 font-light leading-[30px] xl:leading-[40px] text-neutral-900 md:text-right pl-12">
            <p>
              In jedem Kapitel meines Lebens findest du diesen Rhythmus: Zuerst
              war da ein Traum – manchmal leise, manchmal drängend. Dann kam die
              Vorstellungskraft, die Vision, die mich tragen und formen durfte.
              Und schließlich: das Handeln. Der Moment, in dem ein Schritt getan
              wurde – oft gegen den Strom, aber geführt von etwas Größerem.
              Diese drei Kräfte – Dream, Imagine, Act – halfen mir, meine
              Berufung zu erkennen. Und sie führten mich von Amazing, durch
              Grace, hin zu dem, was bleibt: How sweet the sound.
            </p>
          </div>
        </div>
        <div className="hidden mt-16 lg:block h-20 border-t border-neutral-600"></div>
      </div>
    </section>
  );
};
export default MyLife;
