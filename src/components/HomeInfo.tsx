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
                    Hi, I&apos;m <span className='font-semibold'>Nagi</span>!👋
                    <br />
                    I love playing games and learning new technologies.
                    <br />
                    Born in New York and grew up in Tokyo.
                    <br />
                    My area of interests includes software, web developments and video games.
                </h1>
            );
        case 2:
            return (
                <InfoBox
                    text="Explore my journey and discover my background."
                    link="/about"
                    btnText="Learn More"
                />
            );
        case 3:
            return (
                <InfoBox
                    text="Visit my projects and take a look at what I've made so far."
                    link="/projects"
                    btnText="Explore Projects"
                />
            );
        case 4:
            return (
                <InfoBox
                    text="I'd love to hear from you! Reach out and let's connect."
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