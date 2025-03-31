import Image from "next/image";

const About = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-20 xl:px-32 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-3 gap-6 items-start">
        <div className="text-left text-sm leading-relaxed col-span-1">
          <p>
            Hi, mein Name ist Klaus Gerth.
            <br />
            Als junger Mann war ich erfolgreich - beruflich lief alles bestens.
            Und doch spürte ich: Da fehlt etwas. Nach meiner Flucht aus einer
            religiösen Sekte begegnete ich Jesus Christus. Während ich weiter
            die Karriereleiter hochstieg, fingen meine Frau Gaby und ich an,
            gemeinsam in der Bibel zu lesen.
          </p>
        </div>

        <div className="col-span-1">
          <Image
            src="/images/klaus-gerth.png"
            alt="Klaus Gerth"
            width={40}
            height={60}
          />
        </div>

        <div className="text-left text-sm leading-relaxed col-span-1">
          Stundenlang. Tagelang. Wir konnten nicht genug bekommen! Eine
          Bibelstelle veränderte alles: Johannes 3, das Gespräch zwischen
          Nikodemus und Jesus über das Wiedergeborenwerden.
        </div>
      </div>
    </div>
  );
};

export default About;
