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
                <div className="mx-5 max-w-2xl rounded-md border border-sky-100/70 bg-sky-50/35 px-6 py-5 text-center text-[#111816] shadow-[0_24px_80px_-60px_rgba(17,24,22,0.55)] backdrop-blur-xl transition duration-200 hover:-translate-y-1">
                    <h1 className="font-poppins text-xl font-semibold sm:text-2xl">
                        Hi, welcome to my page.
                    </h1>
                    <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-sky-100/70 bg-white/35 px-4 py-2 text-sm font-medium text-[#3f4a46]">
                        <FiArrowLeft className="h-4 w-4 text-sky-500" aria-hidden="true" />
                        <span>Rotate the island to explore</span>
                        <FiArrowRight className="h-4 w-4 text-sky-500" aria-hidden="true" />
                    </div>
                </div>
            );
        case 2:
            return (
                <InfoBox
                    title="About"
                    text="Learn more about my background, experience, and technical journey."
                    link="/about"
                    btnText="Learn More"
                />
            );
        case 3:
            return (
                <InfoBox
                    title="Projects"
                    text={"Take a look at some of the software projects I've built along the way."}
                    link="/projects"
                    btnText="Explore Projects"
                />
            );
        case 4:
            return (
                <InfoBox
                    title="Contact"
                    text="Send me a message through the contact form."
                    link="/contact"
                    btnText="Get in Touch"
                />
            );
        default:
            return null;
    }
};

const HomeInfo: React.FC<HomeInfoProps> = ({ currentStage }) => {
    return <div>{renderContent(currentStage ?? null)}</div>;
};

export default HomeInfo
