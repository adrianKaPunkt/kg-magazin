import Image from 'next/image';

const About = () => {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 py-24 mt-40">
      {/* Überschrift */}
      <h1 className="font-vogue text-7xl">ÜBER MICH</h1>

      {/* Absolutes Bild */}
      <div className="absolute w-[40%] md:right-5 md:top-64 scale-x-[-1] lg:scale-x-[1] lg:top-[20%] lg:left-1/2 lg:-translate-x-1/2 lg:w-[70%] z-0 pointer-events-none">
        <Image
          src="/images/klaus-gerth.png"
          alt="Klaus Gerth"
          width={900}
          height={900}
          className="w-full object-contain"
        />
      </div>

      {/* Grid und Texte über dem Bild */}
      <div className="relative z-10 mt-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Linker Textblock */}
          <div className="col-span-1 text-sm font-light leading-[30px] text-neutral-900 space-y-6">
            <p>Hi, mein Name ist Klaus Gerth…</p>
            <p>
              Als junger Mann war ich erfolgreich – beruflich lief alles
              bestens. Und doch spürte ich: Da fehlt etwas. Nach meiner Flucht
              aus einer religiösen Sekte begegnete ich Jesus Christus. Während
              ich weiter die Karriereleiter hochstieg, fingen meine Frau Gaby
              und ich an, gemeinsam in der Bibel zu lesen.
            </p>
          </div>

          {/* Rechter Textblock */}
          <div className="col-span-1 col-start-1 lg:col-start-4 text-sm font-light leading-[30px] lg:pt-40 lg:text-right text-neutral-700">
            <p>
              Stundenlang. Tagelang. Wir konnten nicht genug bekommen! Eine
              Bibelstelle veränderte alles: Johannes 3, das Gespräch zwischen
              Nikodemus und Jesus über das „Wiedergeborenwerden“.
            </p>
          </div>
        </div>

        {/* Zitat unter dem Bild */}
        <div className="mt-96">
          <h2 className="font-lora-semibold text-4xl text-center leading-relaxed text-neutral-800">
            <p>“Nur noch eins war wichtig:</p>{' '}
            <p>Gottes Plan für mein Leben.“</p>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
