'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function ImpressumModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Button zum Öffnen des Modals */}
      <Button
        variant="ghost"
        className="font-normal hover:bg-transparent"
        onClick={() => setOpen(true)}>
        Impressum & Datenschutz
      </Button>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl w-full h-screen flex flex-col bg-pink-300 pt-10">
          <DialogHeader>
            <DialogTitle className="font-bold text-lg">
              Impressum & Datenschutz
            </DialogTitle>
          </DialogHeader>

          {/* Scrollbarer Content */}
          <div className="overflow-y-auto flex-grow p-5">
            <ul className="leading-relaxed space-y-5">
              <li>
                <span className="font-bold">Betreiber:</span> Klaus Gerth | Cana
                Lola | Apartado de Correos 85 | 07630 Campos | Illes Balears,
                España | Kontakt: E-Mail: info@klausgerth.com
              </li>
              <li>
                <span className="font-bold">Datenschutz:</span> Die Nutzung
                unserer Webseite ist in der Regel ohne Angabe personenbezogener
                Daten möglich. Soweit auf unseren Seiten personenbezogene Daten
                (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben
                werden, erfolgt dies, soweit möglich, stets auf freiwilliger
                Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung
                nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die
                Datenübertragung im Internet (z.B. bei der Kommunikation per
                E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
                der Daten vor dem Zugriff durch Dritte ist nicht möglich. Der
                Nutzung von im Rahmen der Impressumspflicht veröffentlichten
                Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
                angeforderter Werbung und Informationsmaterialien wird hiermit
                ausdrücklich widersprochen. Die Betreiber der Seiten behalten
                sich ausdrücklich rechtliche Schritte im Falle der unverlangten
                Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
              </li>
              <li>
                <span className="font-bold">Urheberrecht:</span> Die durch die
                Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb
                der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und
                Kopien dieser Seite sind nur für den privaten, nicht
                kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
                Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Inhalte umgehend entfernen.
              </li>
              <li>
                <span className="font-bold">Haftung für Links:</span> Unser
                Angebot enthält Links zu externen Webseiten Dritter, auf deren
                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
                der verlinkten Seiten ist stets der jeweilige Anbieter oder
                Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
              </li>
              <li>
                <span className="font-bold">
                  Haftungsausschluss (Disclaimer) | Haftung für Inhalte:
                </span>{' '}
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
                ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
                werden wir diese Inhalte umgehend entfernen.
              </li>
              <li>
                <span className="font-bold">Betreiber der Webseite:</span> Klaus
                Gerth | Cana Lola | Apartado de Correos 85 | 07630 Campos |
                Illes Balears, España | Kontakt: E-Mail: info@klausgerth.com
              </li>
              <li>
                Angaben gemäß § 5 TMGBetreiber der Webseite: Klaus Gerth | Cana
                Lola | Apartado de Correos 85 | 07630 Campos | Illes Balears,
                España | Kontakt: E-Mail: info@klausgerth.comVerantwortlich für
                den Inhalt nach § 55 Abs. 2 RStV:
              </li>
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
