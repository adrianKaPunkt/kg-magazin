import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Blob from './Blob';
import AnimatedStars from './AnimatedStars';
import { useDiaPhaseStore } from '@/lib/store/useDiaPhaseStore';

export default function BlobScene() {
  const {
    position,
    //scale,
    intensity,
    glow,
    setBlobRef,
    showCanvas,
    showBlob,
    setRenderer,
  } = useDiaPhaseStore();
  const localRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (localRef.current) {
      setBlobRef(localRef as React.RefObject<THREE.Mesh>);
    }
  }, [setBlobRef]);

  if (!showCanvas) return null;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <Canvas
        id="dia-canvas"
        className=""
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000');
          setRenderer(gl);
        }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <AnimatedStars
          radius={40}
          depth={80}
          count={3000}
          factor={5}
          saturation={0.5}
          fade
          speed={1}
          color="#ffffff"
          opacity={0.6}
          scale={1}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          rotationSpeed={0.0003}
        />
        {showBlob && (
          <Blob
            blobRef={localRef}
            position={position}
            //scale={scale}
            intensity={intensity}
            glow={glow}
          />
        )}
      </Canvas>
    </div>
  );
}
