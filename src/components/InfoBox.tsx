import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

interface InfoBoxProps {
    title?: string;
    text: string;
    link?: string;
    btnText?: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, text = "", link = "#", btnText = "Learn More" }) => (
    <div className="mx-5 max-w-2xl rounded-md border border-sky-100/70 bg-sky-50/35 px-6 py-5 text-center text-[#111816] shadow-[0_24px_80px_-60px_rgba(17,24,22,0.55)] backdrop-blur-xl transition duration-200 hover:-translate-y-1">
        {title && <h2 className='mb-2 font-poppins text-2xl font-semibold'>{title}</h2>}
        <p className='mb-4 text-base font-medium leading-7 text-[#3f4a46] sm:text-lg'>{text}</p>
        <Link href={link} className='inline-flex items-center justify-center rounded-md border border-[#111816]/15 bg-[#111816] px-5 py-2.5 text-sm font-semibold text-[#f7f8f4] transition-all duration-200 hover:border-sky-500 hover:bg-sky-600'>
            {btnText}
            <Image src='/assets/icons/arrow.svg'
                alt='Arrow icon'
                width={16}
                height={16}
                className='ml-2 inline-block object-contain invert'
                style={{ width: 'auto', height: 'auto' }}
            />
        </Link>
    </div>
);


export default InfoBox
