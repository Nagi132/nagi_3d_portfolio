import React from 'react';
import Link from 'next/link';

const CTA: React.FC = () => {
    return (
        <section className='cta bg-gradient-to-r from-teal-200 to-lime-200 text-white py-10 px-5 rounded-lg shadow-lg flex flex-col items-center'>
            <p className='cta-text text-center text-xl mb-5'>
                Have a project in mind?
                <br className='sm:block hidden' />
                Let&apos;s make it happen!
            </p>
            <Link href="/contact" className='btn text-white bg-gradient-to-r from-cyan-500 to-blue-500 
            hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 
            font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 
            transition-transform transform hover:scale-105'>
    Contact Me
</Link>


        </section>
    );
}

export default CTA;
