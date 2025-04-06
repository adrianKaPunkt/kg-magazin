import { useRef, useEffect } from 'react';
import { Mesh, BufferGeometry, Material } from 'three';
import { useDiaPhaseStore } from '@/lib/store/useDiaPhaseStore';

export const useBlobControl = () => {
  const localRef = useRef<Mesh<BufferGeometry, Material | Material[]> | null>(
    null
  );
  const setBlobRef = useDiaPhaseStore((state) => state.setBlobRef);

  useEffect(() => {
    if (localRef.current) {
      setBlobRef({ current: localRef.current });
    }

    return () => {
      setBlobRef({ current: null }); // Cleanup beim Unmount
    };
  }, [setBlobRef]);

  return localRef;
};
