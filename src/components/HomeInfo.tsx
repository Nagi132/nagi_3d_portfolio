import React from 'react'
import InfoBox from './InfoBox';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

interface HomeInfoProps {
    currentStage?: number;
    text: string;
    link?: string;
    btnText?: string;
}

const renderContent = (currentStage: number | null) => {
    switch (currentStage) {
        case 1:
            return (
                <div className="mx-5 w-fit max-w-[calc(100vw-2.5rem)] border-l-2 border-sky-400 bg-white/45 px-5 py-4 text-left text-[#111816] shadow-[0_18px_50px_-32px_rgba(17,24,22,0.65)] backdrop-blur-md">
                    <p className="mb-1 font-mono text-[0.625rem] font-semibold tracking-[0.18em] text-[#61706a]">
                        01 / 04
                    </p>
                    <h1 className="font-poppins text-xl font-semibold sm:text-2xl">
                        Hi, welcome to my page.
                    </h1>
                    <p className="mt-2 flex items-center justify-center gap-2 text-sm font-medium text-[#3f4a46]">
                        <FiArrowLeft className="h-4 w-4 text-sky-500" aria-hidden="true" />
                        <span>Rotate the island.</span>
                        <FiArrowRight className="h-4 w-4 text-sky-500" aria-hidden="true" />
                    </p>
                </div>
            );
        case 2:
            return (
                <InfoBox
                    title="About"
                    text="Learn about my journey so far."
                    link="/about"
                    btnText="Learn More"
                    variant="about"
                    stage="02 / 04"
                />
            );
        case 3:
            return (
                <InfoBox
                    title="Projects"
                    text="Check out the projects I&apos;ve built along the way."
                    link="/projects"
                    btnText="Explore Projects"
                    variant="projects"
                    stage="03 / 04"
                />
            );
        case 4:
            return (
                <InfoBox
                    title="Contact"
                    text="Send me a message through the contact form."
                    link="/contact"
                    btnText="Get in Touch"
                    variant="contact"
                    stage="04 / 04"
                />
            );
        default:
            return null;
    }
};

const HomeInfo: React.FC<HomeInfoProps> = ({ currentStage }) => {
    return (
        <div className="home-info-enter">
            {renderContent(currentStage ?? null)}
        </div>
    );
};

export default HomeInfo
