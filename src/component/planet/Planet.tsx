import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

interface PlanetProps {
  texture: THREE.Texture;
  position: [number, number, number];
  size: number;
}

const Planet: React.FC<PlanetProps> = ({ texture, position, size }) => {
  const planetRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Sphere ref={planetRef} args={[size, 32, 32]} position={position}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
};

export default Planet;