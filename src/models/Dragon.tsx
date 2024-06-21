import React, { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface DragonProps {
    dragonPosition?: [number, number, number];
    dragonScale?: [number, number, number];
    rotation?: [number, number, number];
    isRotating?: boolean;
}

const Dragon: React.FC<DragonProps> = ({
    dragonPosition = [0, 0, 0],
    dragonScale = [1, 1, 1],
    rotation = [0, 0, 0],
    isRotating,
    ...props
}) => {
    const ref = useRef<THREE.Group>(null);
    const { scene, animations } = useGLTF('assets/3d/dragon.glb') as any; 
    const { actions, names } = useAnimations(animations, ref);

    useEffect(() => {
        if (actions) {
            const action = actions[names[0]]; 
            if (action) {
                if (isRotating) {
                    action.paused = false;
                    action.play();
                    action.timeScale = 1.2; 
                } else {
                    action.paused = true;
                }
            }
        }
    }, [actions, isRotating, names]);

    return (
        <group ref={ref} position={dragonPosition} scale={dragonScale} rotation={rotation} {...props}>
            <primitive object={scene} />
        </group>
    );
}

export default Dragon;
