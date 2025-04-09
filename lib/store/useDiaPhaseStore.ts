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
  showBlob: boolean;
  setShowBlob: (value: boolean) => void;
  showCanvas: boolean;
  setShowCanvas: (value: boolean) => void;
  renderer: THREE.WebGLRenderer | null;
  setRenderer: (renderer: THREE.WebGLRenderer) => void;
  activePhase: Phase;
  position: [number, number, number];
  scale: THREE.Vector3;
  setScale: (scale: THREE.Vector3) => void;
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

  // setPhase: (
  //   phase: Phase,
  //   config: {
  //     position: [number, number, number];
  //     scale: number;
  //     intensity: number;
  //     glow: number;
  //     color?: string | [number, number, number];
  //   }
  // ) => void;

  setColor: (color: string | [number, number, number]) => void;
  setBlobRef: (ref: React.RefObject<BlobMesh>) => void;
}

export const useDiaPhaseStore = create<DiaPhaseStore>((set) => ({
  showBlob: false,
  setShowBlob: (value: boolean) => set({ showBlob: value }),
  showCanvas: false,
  setShowCanvas: (value: boolean) => set({ showCanvas: value }),
  renderer: null,
  setRenderer: (renderer) => set({ renderer }),
  activePhase: 'intro',
  position: [0, 0, 0],
  scale: new THREE.Vector3(0.0, 0.0, 0.0),
  setScale: (scale) => set({ scale }),
  intensity: 0.6,
  glow: 1.0,
  color: hexToRgbArray('#fff'),
  setColor: (color) =>
    set({
      color: typeof color === 'string' ? hexToRgbArray(color) : color,
    }),
  blobRef: null,
  setBlobRef: (ref) => {
    if (ref.current) {
      set({ blobRef: ref });
    }
  },
}));

// setPhase: (phase, config) =>
//   set((state) => ({
//     activePhase: phase,
//     position: config.position,
//     scale: config.scale,
//     intensity: config.intensity,
//     glow: config.glow,
//     color:
//       typeof config.color === 'string'
//         ? hexToRgbArray(config.color)
//         : config.color ?? state.color,
//   })),
