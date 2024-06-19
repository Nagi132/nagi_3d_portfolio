import Navbar from '@/components/Navbar';
import Loader from '@/components/Loader';
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Island from '@/models/Island';

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                POPUP
            </div> */}

interface IslandProps {
    position?: [number, number, number];
    scale?: [number, number, number];
    rotation?: [number, number, number];
}

const Home: React.FC<IslandProps> = () => {
    const [islandScale, setIslandScale] = useState<[number, number, number]>([1, 1, 1]);
    const [islandPosition] = useState<[number, number, number]>([0, -6.5, -43]);
    const [islandRotation] = useState<[number, number, number]>([0.1, 4.7, 0]);

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

        adjustIslandForScreenSize();
        window.addEventListener('resize', adjustIslandForScreenSize);
        return () => window.removeEventListener('resize', adjustIslandForScreenSize);
    }, []);

    return (
        <section className='w-full h-screen relative'>
            <Navbar />
            <Canvas
                className='w-full h-screen bg-transparent'
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight />
                    <spotLight />
                    <hemisphereLight />
                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                    />
                </Suspense>
            </Canvas>
        </section>
    );
};

export default Home;