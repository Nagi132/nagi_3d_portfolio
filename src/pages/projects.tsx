import Head from 'next/head';
import React from 'react'
import Navbar from '@/components/Navbar';
import { projects } from '@/constants';
import Link from 'next/link';
import CTA from '@/components/CTA';
import Image from 'next/image';

const Projects: React.FC = () => {
  return (
    <>
      <Head>
        <title>Nagi&apos;s Portfolio - Projects</title>
        <meta name="description" content="Welcome to Nagi Williams' personal portfolio showcasing my projects and skills." />
      </Head>
      <main className="bg-slate-300/20 h-full">
        <Navbar />
        <section className="max-container">
          <h1 className='head-text'>
            My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
          </h1>

          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
              In my academic journey, I have committed myself to create a diverse range of interactive applications and games,
              with a strong emphasis on delivering exceptional real-time gaming experiences. These projects exemplify my passion
              for software development, gaming, and continuous improvement.
              <br />Below are some of the projects I&apos;ve worked on. Most
              are open-source, and I urge you to explore them on my GitHub page. Your input and contributions are highly valued and encouraged!
            </p>
          </div>

          <div className='flex flex-wrap my-20 gap-16'>
            {projects.map((project) => (
              <div className='lg:w-[400px] w-full' key={project.name}>
                <div className='block-container w-12 h-12'>
                  <div className={`btn-back rounded-xl ${project.theme}`} />
                  <div className='btn-front rounded-xl flex justify-center items-center'>
                    <Image
                      src={project.iconUrl}
                      alt="Project Icon"
                      width={64}
                      height={64}
                      className='w-1/2 h-1/2 object-contain'
                    />
                  </div>
                </div>

                <div className='mt-5 flex flex-col'>
                  <h4 className='text-2xl font-poppins font-semibold'>
                    {project.name}
                  </h4>
                  <p className='mt-2 text-slate-500'>
                    {project.description}
                  </p>
                  <div className='mt-5 flex items-center gap-2 font-poppins'>
                    <Link
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-semibold text-blue-600'
                    >
                      Link
                    </Link>
                    <Image
                      src='/assets/icons/arrow.svg'
                      alt='arrow'
                      width={64}
                      height={64}
                      className='w-4 h-4 object-contain'
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>
                </div>

              </div>
            ))}
          </div>

          <hr className=' border-slate-200' />

          <CTA />
        </section>
      </main>
    </>
  )
}

export default Projects