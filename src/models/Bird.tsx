import React, { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export const Bird: React.FC = () => {
    const birdRef = useRef<THREE.Group>(null!);
    const { scene, animations } = useGLTF('assets/3d/bird.glb') as any;
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
        actions['Take 001']?.play();
    }, [actions]);

    useFrame(({ clock, camera }) => {
        // Bird moving in a sin wave at a higher position
        const baseY = 4; 
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + baseY;

        if (birdRef.current.position.x > camera.position.x + 10) {
            birdRef.current.rotation.y = Math.PI;
        } else if (birdRef.current.position.x < camera.position.x - 10) {
            birdRef.current.rotation.y = 0;
        }
        if (birdRef.current.rotation.y === 0) {
            birdRef.current.position.x += 0.01;
            birdRef.current.position.z -= 0.01;
        } else {
            birdRef.current.position.x -= 0.01;
            birdRef.current.position.z += 0.01;
        }
    });

    return (
        <group
            position={[-5, 5, 1]} 
            scale={[0.003, 0.003, 0.003]}
            ref={birdRef}>
            <primitive object={scene} />
        </group>
    );
}

export default Bird;
