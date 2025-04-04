import { ReactNode } from 'react';
import DreamIcon from '@/components/icons/DreamIcon';
import ImagineIcon from '@/components/icons/ImagineIcon';
import ActIcon from '@/components/icons/ActIcon';

export const initialPhase: DiaPhase = {
  id: 'initial',
  label: 'INITIAL',
  icon: null,
  color: '#95F9F4',
  backgroundColor: '#ffffff',
  description: 'Initial Phase',
  glow: 0.8,
  intensity: 0.3,
  quote: 'Ein Tropfen Vision fällt ins Unbekannte.',
  scale: 0.6,
  position: {
    desktop: [0, 0, 0] as [number, number, number],
    mobile: [0, 0, 0] as [number, number, number],
  },
};

export const diaPhases: DiaPhase[] = [
  {
    id: 'dream',
    label: 'DREAM',
    icon: <DreamIcon />,
    color: '#60DC46',
    backgroundColor: '#83B5DA',
    description: 'Alles beginnt\nmit einem Traum.',
    glow: 1,
    intensity: 0.3,
    quote: 'Ein Tropfen Vision fällt ins Unbekannte.',
    scale: 0.6,
    position: {
      desktop: [0, 0, 0],
      mobile: [0, 0, 0],
    },
  },
  {
    id: 'imagine',
    label: 'IMAGINE',
    icon: <ImagineIcon />,
    color: '#24A9EF',
    backgroundColor: '#0E1E36',
    description: 'Die Kraft\nder Vorstellung.',
    glow: 1,
    intensity: 0.3,
    quote: 'Ideen formen Welten, noch bevor sie existieren.',
    scale: 0.6,
    position: {
      desktop: [0, 0, 0],
      mobile: [0, 0, 0],
    },
  },
  {
    id: 'act',
    label: 'ACT',
    icon: <ActIcon />,
    color: '#EB35F5',
    backgroundColor: '#000000',
    description: 'Der Mut,\nes zu tun.',
    glow: 1,
    intensity: 0.3,
    quote: 'Der Moment, in dem Vision Realität wird.',
    scale: 0.6,
    position: {
      desktop: [0, 0, 0],
      mobile: [0, 0, 0],
    },
  },
];

export const resetPhase: DiaPhase = {
  id: 'reset',
  label: 'RESET',
  icon: null,
  color: '#ffffff',
  backgroundColor: '#ffffff',
  description: 'Reset to white',
  glow: 0,
  intensity: 0,
  quote: 'Ende der Reise.',
  scale: 0.6,
  position: {
    desktop: [0, 0, 0],
    mobile: [0, 0, 0],
  },
};

export type DiaPhase = {
  id: string;
  label: string;
  icon: ReactNode | null;
  color: string;
  backgroundColor?: string;
  description: string;
  glow?: number;
  intensity?: number;
  quote?: string;
  scale?: number;
  position?: {
    desktop: [number, number, number];
    mobile: [number, number, number];
  };
};
