import React from 'react'
import Link from 'next/link';
import { FiArrowUpRight, FiCode, FiSend, FiUser } from 'react-icons/fi';

type InfoBoxVariant = 'about' | 'projects' | 'contact';

interface InfoBoxProps {
    title?: string;
    text: string;
    link?: string;
    btnText?: string;
    variant?: InfoBoxVariant;
    stage?: string;
}

const variants = {
    about: {
        Icon: FiUser,
        border: 'border-sky-400',
        icon: 'text-sky-600',
        link: 'text-sky-600 hover:text-sky-700',
    },
    projects: {
        Icon: FiCode,
        border: 'border-amber-400',
        icon: 'text-amber-600',
        link: 'text-amber-600 hover:text-amber-700',
    },
    contact: {
        Icon: FiSend,
        border: 'border-emerald-400',
        icon: 'text-emerald-600',
        link: 'text-emerald-600 hover:text-emerald-700',
    },
};

const InfoBox: React.FC<InfoBoxProps> = ({
    title,
    text = "",
    link = "#",
    btnText = "Learn More",
    variant = 'about',
    stage,
}) => {
    const { Icon, border, icon, link: linkColor } = variants[variant];

    return (
        <div className={`mx-5 w-[calc(100vw-2.5rem)] max-w-[26rem] border-l-2 ${border} bg-white/45 px-5 py-4 text-left text-[#111816] shadow-[0_18px_50px_-32px_rgba(17,24,22,0.65)] backdrop-blur-md`}>
            {stage && (
                <p className="mb-1 font-mono text-[0.625rem] font-semibold tracking-[0.18em] text-[#61706a]">
                    {stage}
                </p>
            )}
            {title && (
                <div className="mb-2 flex items-center gap-2.5">
                    <Icon className={`h-5 w-5 ${icon}`} aria-hidden="true" />
                    <h2 className="font-poppins text-xl font-semibold sm:text-2xl">{title}</h2>
                </div>
            )}
            <p className="mb-3 text-sm font-medium leading-6 text-[#3f4a46] sm:text-base">{text}</p>
            <Link href={link} className={`group inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 ${linkColor}`}>
                {btnText}
                <FiArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
        </div>
    );
};


export default InfoBox
