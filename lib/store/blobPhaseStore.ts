import { create } from 'zustand';
import { DiaPhase } from '@/lib/diaPhases';

type BlobPhaseStore = {
  currentPhase: DiaPhase;
  setPhase: (phase: DiaPhase) => void;
};

export const useBlobPhaseStore = create<BlobPhaseStore>((set) => ({
  currentPhase: {
    id: 'initial',
    label: 'INITIAL',
    color: '#95F9F4',
    backgroundColor: '#ffffff',
    description: 'Initial Phase',
    glow: 0.2,
    intensity: 0.2,
    position: {
      desktop: [0, 1.5, 0],
      mobile: [0, 1.2, 0],
    },
  },
  setPhase: (phase) => set({ currentPhase: phase }),
}));
