import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Navbar from '@/components/Navbar';
import Loader from '@/components/Loader';
import Island from '@/models/Island';
import Sky from '@/models/Sky';
import Plane from '@/models/Plane';
import Bird from '@/models/Bird';
import HomeInfo from '@/components/HomeInfo';

import * as THREE from 'three';

interface IslandProps {
    position?: [number, number, number];
    scale?: [number, number, number];
    rotation?: [number, number, number];
    isRotating?: boolean;
    setIsRotating?: React.Dispatch<React.SetStateAction<boolean>>;
    planeScale?: [number, number, number];
    planePosition?: [number, number, number];
    currentStage?: number;
    setCurrentStage?: React.Dispatch<React.SetStateAction<number | null>>;
}

const Home: React.FC<IslandProps> = () => {
    const [islandScale, setIslandScale] = useState<[number, number, number]>([1, 1, 1]);
    const [islandPosition, setIslandPosition] = useState<[number, number, number]>([0, -6.5, -43]);
    const [islandRotation] = useState<[number, number, number]>([0.1, 4.7, 0]);
    const [isRotating, setIsRotating] = useState<boolean>(false);
    const [currentStage, setCurrentStage] = useState<number | null>(0);

    const [planeScale, setPlaneScale] = useState<[number, number, number]>([0.1, 0.1, 0.1]); // Adjust the scale here
    const [planePosition, setPlanePosition] = useState<[number, number, number]>([0, 0, 0]);

    useEffect(() => {
        const adjustIslandForScreenSize = () => {
            let screenScale: [number, number, number];

            if (window.innerWidth < 768) {
                screenScale = [0.9, 0.9, 0.9];
            } else {
                screenScale = [1, 1, 1];
            }
            setIslandScale(screenScale);
        };

        const adjustPlaneForScreenSize = () => {
            let screenScale: [number, number, number];
            let screenPosition: [number, number, number];

            if (window.innerWidth < 768) {
                screenScale = [0.015, 0.015, 0.015];
                screenPosition = [0, 0.5, -4];
            } else {
                screenScale = [0.017, 0.017, 0.017];
                screenPosition = [0, 1, -5];
            }
            setPlaneScale(screenScale);
            setPlanePosition(screenPosition);
        };

        adjustIslandForScreenSize();
        adjustPlaneForScreenSize();

        window.addEventListener('resize', adjustIslandForScreenSize);
        window.addEventListener('resize', adjustPlaneForScreenSize);

        return () => {
            window.removeEventListener('resize', adjustIslandForScreenSize);
            window.removeEventListener('resize', adjustPlaneForScreenSize);
        }
    }, []);

    return (
        <section className='w-full h-screen relative'>
            <Navbar />

            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                {currentStage !== null && <HomeInfo currentStage={currentStage} text="text here" link="https://example.com" btnText="Learn More"/>}
            </div>
            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight color={new THREE.Color('#b1e1ff')} groundColor={new THREE.Color('#000000')} intensity={1} />
                    <spotLight
                        position={[5, 5, 5]}
                        intensity={200}
                        angle={15}
                        penumbra={1}
                        castShadow
                    />
                    <Sky
                        position={[10, 70, 10]}
                        scale={[1, 1, 1]}
                        rotation={[0, -5, 0]}
                        isRotating={isRotating} />
                    <Bird />
                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                    <Plane
                        planePosition={planePosition}
                        planeScale={planeScale}
                        rotation={[0, 20.7, 0]}
                        isRotating={isRotating}
                    />
                </Suspense>
            </Canvas>
        </section>
    );
};

export default Home;
