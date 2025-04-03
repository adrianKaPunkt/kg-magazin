import { useMemo } from 'react';
import * as THREE from 'three';

type CloudProps = {
  position: [number, number, number];
  size?: number;
  opacity?: number;
};

const Cloud = ({ position, size = 3, opacity = 0.3 }: CloudProps) => {
  const texture = useMemo(
    () => new THREE.TextureLoader().load('/cloud.png'),
    []
  );

  return (
    <mesh position={position}>
      <planeGeometry args={[size, size]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={opacity}
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default Cloud;
