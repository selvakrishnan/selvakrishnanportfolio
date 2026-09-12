import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import ParticleField from './ParticleField';
import DataStreamLines from './DataStreamLines';

export default function HeroCanvas() {
  return (
    <div className="canvas-container" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={0.5} color="#6366f1" />
          <pointLight position={[-5, -5, 3]} intensity={0.3} color="#8b5cf6" />
          <ParticleField />
          <DataStreamLines />
        </Suspense>
      </Canvas>
    </div>
  );
}
