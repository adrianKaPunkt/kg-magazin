import { create } from 'zustand';
import { DiaPhase, initialPhase } from '@/lib/diaPhases';

type BlobPhaseStore = {
  currentPhase: DiaPhase;
  setPhase: (phase: DiaPhase) => void;
};

export const useBlobPhaseStore = create<BlobPhaseStore>((set) => ({
  currentPhase: initialPhase,
  setPhase: (phase) => {
    console.log('✅ STORE Phase gesetzt:', phase.label);
    set({ currentPhase: phase });
  },
}));
