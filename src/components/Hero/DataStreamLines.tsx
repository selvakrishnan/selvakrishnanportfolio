import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function DataLine({ startX, speed, delay }: { startX: number; speed: number; delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const progressRef = useRef(delay);

  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 20; i++) {
      pts.push(new THREE.Vector3(startX + (Math.random() - 0.5) * 0.1, -8 + i * 0.8, (Math.random() - 0.5) * 0.5));
    }
    return pts;
  }, [startX]);

  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);
  const tubeGeometry = useMemo(
    () => new THREE.TubeGeometry(curve, 30, 0.005, 4, false),
    [curve]
  );

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    progressRef.current = (progressRef.current + delta * speed) % 1;
    const mat = meshRef.current.material as THREE.MeshBasicMaterial;
    mat.opacity = Math.sin(progressRef.current * Math.PI) * 0.4;
  });

  return (
    <mesh ref={meshRef} geometry={tubeGeometry}>
      <meshBasicMaterial color="#6366f1" transparent opacity={0} />
    </mesh>
  );
}

export default function DataStreamLines() {
  const lines = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        startX: (i - 4) * 1.5,
        speed: 0.15 + Math.random() * 0.2,
        delay: Math.random(),
      })),
    []
  );

  return (
    <group>
      {lines.map((line) => (
        <DataLine key={line.id} startX={line.startX} speed={line.speed} delay={line.delay} />
      ))}
    </group>
  );
}
