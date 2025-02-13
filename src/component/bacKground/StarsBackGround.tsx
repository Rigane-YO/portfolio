
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import * as THREE from "three";

const StarsBackground: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta / 10;
      pointsRef.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Points ref={pointsRef} positions={new Float32Array(random.inSphere(new Float32Array(5000), { radius: 1.5 }))}>
      <PointMaterial transparent color="#ffffff" size={0.01} sizeAttenuation depthWrite={false} />
    </Points>
  );
};

export default StarsBackground;