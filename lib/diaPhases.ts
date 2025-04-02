export const diaPhases = [
  {
    id: 'dream',
    label: 'DREAM',
    color: '#C49A6C',
    description: 'Alles beginnt mit einem Traum.',
    rgb: [140, 250, 55],
    glow: 0.3,
    intensity: 0.25,
    quote: 'Ein Tropfen Vision fällt ins Unbekannte.',
    position: [0, 1.4, 0],
  },
  {
    id: 'imagine',
    label: 'IMAGINE',
    color: '#B28BFF',
    description: 'Die Kraft der Vorstellung.',
    rgb: [236, 50, 250],
    glow: 0.4,
    intensity: 0.3,
    quote: 'Ideen formen Welten, noch bevor sie existieren.',
    position: [0.5, 1.6, 0],
  },
  {
    id: 'act',
    label: 'ACT',
    color: '#D9475A',
    description: 'Der Mut, es zu tun.',
    rgb: [93, 250, 123],
    glow: 0.5,
    intensity: 0.4,
    quote: 'Der Moment, in dem Vision Realität wird.',
    position: [0, 1.8, 0],
  },
];

export type DiaPhase = {
  id: string;
  word: string;
  color: string;
  subtitle: string;
  rgb: [number, number, number];
  glow?: number;
  intensity?: number;
  quote?: string;
};
