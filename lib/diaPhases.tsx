import ActIcon from '@/components/icons/ActIcon';
import DreamIcon from '@/components/icons/DreamIcon';
import ImagineIcon from '@/components/icons/ImagineIcon';

export type DiaPhase = {
  id: string;
  label: string;
  color: string;
  icon: React.ReactNode | null;
  backgroundColor?: string;
  description: string;
  quote?: string;
  glow?: number;
  intensity?: number;
  scale?: {
    desktop: number | [number, number, number];
    mobile: number | [number, number, number];
  };
  position?: {
    desktop: [number, number, number];
    mobile: [number, number, number];
  };
};

export const initialPhase: DiaPhase = {
  id: 'initial',
  label: 'INITIAL',
  color: '#ffffff',
  icon: null,
  backgroundColor: '#ffffff',
  description: 'Initial Phase',
  glow: 0.8,
  intensity: 0.3,
  quote: 'Ein Tropfen Vision fällt ins Unbekannte.',
  scale: {
    desktop: 0.6,
    mobile: 0.2,
  },
  position: {
    desktop: [0, 0, 0] as [number, number, number],
    mobile: [0, 0, 0] as [number, number, number],
  },
};

export const diaPhases: DiaPhase[] = [
  {
    id: 'dream',
    label: 'DREAM',
    color: '#60DC46',
    icon: <DreamIcon />,
    backgroundColor: '#83B5DA',
    description: 'Alles beginnt\nmit einem Traum.',
    glow: 1,
    intensity: 0.3,
    quote: 'Ein Tropfen Vision fällt ins Unbekannte.',
    scale: {
      desktop: 0.4,
      mobile: 0.18,
    },
    position: {
      desktop: [0, -0.2, 0],
      mobile: [0, 0, 0],
    },
  },
  {
    id: 'imagine',
    label: 'IMAGINE',
    color: '#24A9EF',
    icon: <ImagineIcon />,
    backgroundColor: '#0E1E36',
    description: 'Die Kraft\nder Vorstellung.',
    glow: 1,
    intensity: 0.3,
    quote: 'Ideen formen Welten, noch bevor sie existieren.',
    scale: {
      desktop: 0.4,
      mobile: 0.18,
    },
    position: {
      desktop: [0, -0.2, 0],
      mobile: [0, 0, 0],
    },
  },
  {
    id: 'act',
    label: 'ACT',
    color: '#EB35F5',
    icon: <ActIcon />,
    backgroundColor: '#000000',
    description: 'Der Mut,\nes zu tun.',
    glow: 1,
    intensity: 0.3,
    quote: 'Der Moment, in dem Vision Realität wird.',
    scale: {
      desktop: 0.4,
      mobile: 0.18,
    },
    position: {
      desktop: [0, -0.2, 0],
      mobile: [0, 0, 0],
    },
  },
];

// export const resetPhase: DiaPhase = {
//   id: 'reset',
//   label: 'RESET',
//   color: '#ffffff',
//   backgroundColor: '#ffffff',
//   description: 'Reset to white',
//   glow: 0,
//   intensity: 0,
//   quote: 'Ende der Reise.',
//   scale: 0.6,
//   position: {
//     desktop: [0, 0, 0],
//     mobile: [0, 0, 0],
//   },
// };
