import { create } from 'zustand';

type DiaPhaseStore = {
  currentIndex: number;
  setIndex: (index: number | ((prev: number) => number)) => void;
};

export const useDiaPhaseStore = create<DiaPhaseStore>((set) => ({
  currentIndex: 0,
  setIndex: (index) =>
    set((state) => ({
      currentIndex:
        typeof index === 'function' ? index(state.currentIndex) : index,
    })),
}));
