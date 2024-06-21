import React from 'react'
import Link from 'next/link';

interface HomeInfoProps {
    currentStage?: number;
    text: string;
    link?: string;
    btnText?: string;
}

const InfoBox: React.FC<HomeInfoProps> = ({ text = "", link = "#", btnText = "Learn More" }) => (
    <div className='info-box p-4 bg-white rounded-lg shadow-md text-center'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link href={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src='/assets/icons/arrow.svg' className='w-4 h-4 object-contain' />
        </Link>
    </div>
);

const renderContent = (currentStage: number | null) => {
    switch (currentStage) {
        case 1:
            return (
                <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
                    Hi, I'm <span className='font-semibold'>Nagi</span>👋
                    <br />
                    Loves creating software, and video games.
                    <br />
                    Based in the USA, currently exploring new technologies and cool stuff.
                </h1>
            );
        case 2:
            return (
                <InfoBox
                    text="Learn more section here"
                    link="/about"
                    btnText="Learn More"
                />
            );
        case 3:
            return (
                <InfoBox
                    text="Check out some of my projects!"
                    link="/projects"
                    btnText="Explore Projects"
                />
            );
        case 4:
            return (
                <InfoBox
                    text="Get in touch text here"
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