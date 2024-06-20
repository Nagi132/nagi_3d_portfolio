import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';

interface SkyProps {
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
  isRotating?: boolean;
  setIsRotating?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sky: React.FC<SkyProps> = (props) => {
  const { position = [10, 70, 10], scale = [1, 1, 1], rotation = [0, -5, 0], isRotating } = props;
  const sky = useGLTF('/assets/3d/sky.glb') as any;
  const skyRef = React.useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.15 * delta;
    }
  });

  return (
    <mesh ref={skyRef} position={position} scale={scale} rotation={rotation}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky