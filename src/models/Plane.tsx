import React, { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface PlaneProps {
    planePosition?: [number, number, number];
    planeScale?: [number, number, number];
    rotation?: [number, number, number];
    isRotating?: boolean;
}

const Plane: React.FC<PlaneProps> = ({
    planePosition = [0, 0, 0],
    planeScale = [1, 1, 1],
    rotation = [0, 0, 0],
    isRotating,
    ...props
}) => {
    const ref = useRef<THREE.Group>(null);
    const { scene, animations } = useGLTF('assets/3d/plane.glb') as any; 
    const { actions, names } = useAnimations(animations, ref);

    useEffect(() => {
        const action = actions[names[0]]; 
        if (isRotating && action) {
            action?.play();
            action.timeScale = 1.2;
        } else {
            action?.stop();
        }
    }, [actions, isRotating, names]);

    return (
        <group ref={ref} position={planePosition} scale={planeScale} rotation={rotation} {...props}>
            <primitive object={scene} />
        </group>
    );
}

export default Plane;
