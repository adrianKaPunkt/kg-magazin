import ActSection from '../_components/dia/ActSection';
import DiaContent from '../_components/dia/DiaContent';
import DIAIntroSection from '../_components/dia/DiaIntroSection';
import DIAOutroSection from '../_components/dia/DiaOutroSection';
import DreamSection from '../_components/dia/DreamSection';
import ImagineSection from '../_components/dia/ImagineSection';

const Dia = () => {
  return (
    <div>
      <DIAIntroSection />
      <DreamSection />
      <ImagineSection />
      <ActSection />
      <DiaContent />
      <DIAOutroSection />
    </div>
  );
};
export default Dia;
