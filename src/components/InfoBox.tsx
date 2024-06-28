import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

interface InfoBoxProps {
    text: string;
    link?: string;
    btnText?: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ text = "", link = "#", btnText = "Learn More" }) => (
    <div className="sm:text-xl sm:leading-snug text-center bg-whiteOpacity60 py-4 px-8 mx-5 font-semibold rounded-2xl shadow-3xl border-4 border-white border-opacity-80 drop-shadow-lg transform transition duration-500 hover:scale-105">
        <p className='font-medium text-xl text-black mb-4'>{text}</p>
        <Link href={link} className='inline-block px-6 py-2 text-sm font-semibold text-indigo-500 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all duration-300'>
            {btnText}
            <Image src='/assets/icons/arrow.svg'
                alt='Arrow icon'
                width={16}
                height={16}
                className='inline-block ml-2 object-contain'
                style={{ width: 'auto', height: 'auto' }}
            />
        </Link>
    </div>
);


export default InfoBox