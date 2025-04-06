import { create } from 'zustand';
import * as THREE from 'three';

type BlobMesh = THREE.Mesh<
  THREE.BufferGeometry,
  THREE.Material | THREE.Material[],
  THREE.Object3DEventMap
>;

// ✅ Hilfsfunktion: Hex → RGB
const hexToRgbArray = (hex: string): [number, number, number] => {
  const col = new THREE.Color(hex);
  return [col.r, col.g, col.b];
};

type Phase = 'intro' | 'dream' | 'imagine' | 'act';

interface DiaPhaseStore {
  showCanvas: boolean;
  setShowCanvas: (value: boolean) => void;
  activePhase: Phase;
  position: [number, number, number];
  scale: number;
  intensity: number;
  glow: number;
  color: [number, number, number];
  blobRef: React.RefObject<
    THREE.Mesh<
      THREE.BufferGeometry,
      THREE.Material | THREE.Material[],
      THREE.Object3DEventMap
    >
  > | null;

  // 🆕 Smooth-Ziel-Skalierung
  targetScale: THREE.Vector3;
  setTargetScale: (scale: [number, number, number]) => void;

  setPhase: (
    phase: Phase,
    config: {
      position: [number, number, number];
      scale: number;
      intensity: number;
      glow: number;
      color?: string | [number, number, number];
    }
  ) => void;

  setColor: (color: string | [number, number, number]) => void;
  setBlobRef: (ref: React.RefObject<BlobMesh>) => void;
}

export const useDiaPhaseStore = create<DiaPhaseStore>((set) => ({
  showCanvas: false,
  setShowCanvas: (value: boolean) => set({ showCanvas: value }),
  activePhase: 'intro',
  position: [0, 0, 0],
  scale: 0.1,
  intensity: 0.6,
  glow: 1.0,
  color: hexToRgbArray('#ff4040'),
  blobRef: null,

  targetScale: new THREE.Vector3(0.1, 0.1, 0.1),
  setTargetScale: (scale) => set({ targetScale: new THREE.Vector3(...scale) }),

  setPhase: (phase, config) =>
    set((state) => ({
      activePhase: phase,
      position: config.position,
      scale: config.scale,
      intensity: config.intensity,
      glow: config.glow,
      color:
        typeof config.color === 'string'
          ? hexToRgbArray(config.color)
          : config.color ?? state.color,
    })),

  setColor: (color) =>
    set({
      color: typeof color === 'string' ? hexToRgbArray(color) : color,
    }),

  setBlobRef: (ref) => {
    if (ref.current) {
      set({ blobRef: ref });
    }
  },
}));
