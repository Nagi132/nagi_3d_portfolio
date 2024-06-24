import Head from 'next/head';
import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Navbar from '@/components/Navbar';
import Loader from '@/components/Loader';
import Island from '@/models/Island';
import Sky from '@/models/Sky';
import Dragon from '@/models/Dragon';
import Bird from '@/models/Bird';
import HomeInfo from '@/components/HomeInfo';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from 'react-icons/bs';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import * as THREE from 'three';
interface IslandProps {
    position?: [number, number, number];
    scale?: [number, number, number];
    rotation?: [number, number, number];
    isRotating?: boolean;
    setIsRotating?: React.Dispatch<React.SetStateAction<boolean>>;
    dragonScale?: [number, number, number];
    dragonPosition?: [number, number, number];
    currentStage?: number;
    setCurrentStage?: React.Dispatch<React.SetStateAction<number | null>>;
}

const Home: React.FC<IslandProps> = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);
    const [islandScale, setIslandScale] = useState<[number, number, number]>([1, 1, 1]);
    const [islandPosition, setIslandPosition] = useState<[number, number, number]>([0, -6.5, -55]);
    const [islandRotation] = useState<[number, number, number]>([0.1, 4.7, 0]);
    const [isRotating, setIsRotating] = useState<boolean>(false);
    const [currentStage, setCurrentStage] = useState<number | null>(0);

    const [dragonScale, setDragonScale] = useState<[number, number, number]>([0.1, 0.1, 0.1]);
    const [dragonPosition, setDragonPosition] = useState<[number, number, number]>([0, 0, 0]);

    useEffect(() => {
        audioRef.current = new Audio('/assets/sakura.mp3')
        audioRef.current.volume = 0.4;
        audioRef.current.loop = true;
    }, []);

    useEffect(() => {
        if (isPlayingMusic) {
            audioRef.current?.play();
        }
        return () => {
            audioRef.current?.pause();
        }
    }, [isPlayingMusic]);

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

        const adjustDragonForScreenSize = () => {
            let screenScale: [number, number, number];
            let screenPosition: [number, number, number];

            if (window.innerWidth < 768) {
                screenScale = [0.015, 0.015, 0.015];
                screenPosition = [0, 0.5, -3];
            } else {
                screenScale = [0.017, 0.017, 0.017];
                screenPosition = [0, -3, -2];
            }
            setDragonScale(screenScale);
            setDragonPosition(screenPosition);
        };

        adjustIslandForScreenSize();
        adjustDragonForScreenSize();

        window.addEventListener('resize', adjustIslandForScreenSize);
        window.addEventListener('resize', adjustDragonForScreenSize);

        return () => {
            window.removeEventListener('resize', adjustIslandForScreenSize);
            window.removeEventListener('resize', adjustDragonForScreenSize);
        }
    }, []);

    return (
        <>
        <SpeedInsights />
        <Analytics/>
            <Head>
                <title>Nagi&apos;s Portfolio - Home</title>
                <meta name="description" content="Welcome to Nagi Williams' personal portfolio showcasing my projects and skills." />
            </Head>
            <section className='w-full h-screen relative'>
                <Navbar />

                <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                    {currentStage !== null && <HomeInfo currentStage={currentStage} text="text here" link="https://example.com" btnText="Learn More" />}
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
                        <Dragon
                            dragonPosition={dragonPosition}
                            dragonScale={dragonScale}
                            rotation={[0, 20.7, 0]}
                            isRotating={isRotating}
                        />
                    </Suspense>
                </Canvas>

                <div className='absolute bottom-2 left-2 flex flex-col items-center gap-4'>
                    <a href="https://www.linkedin.com/in/nagi1/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700 transition-colors duration-300">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://github.com/Nagi132" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
                        <FaGithub size={30} />
                    </a>
                    <button onClick={() => setIsPlayingMusic(!isPlayingMusic)} className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
                        {isPlayingMusic ? <BsFillVolumeUpFill size={30} /> : <BsFillVolumeMuteFill size={30} />}
                    </button>
                </div>

            </section>
        </>
    );
};

export default Home;
