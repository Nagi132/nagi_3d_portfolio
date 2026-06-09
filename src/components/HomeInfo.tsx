import React from 'react'
import InfoBox from './InfoBox';

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
                <h1 className="sm:text-xl sm:leading-snug text-center bg-whiteOpacity60 py-4 px-8 mx-5 font-medium rounded-2xl shadow-3xl border-4 border-white border-opacity-80 drop-shadow-lg transform transition duration-500 hover:scale-105 text-black">
                    Hi, I&apos;m Nagi, a cloud and systems engineer.
                    <br />
                    My foundation is in computer science.
                    <br />
                    I enjoy learning how cloud, systems, and software come together.
                </h1>
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
