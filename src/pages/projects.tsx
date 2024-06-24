import React from 'react'
import Navbar from '@/components/Navbar';
import { projects } from '@/constants';
import Link from 'next/link';
import CTA from '@/components/CTA';

const Projects: React.FC = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <Navbar />
      <section className="max-container">
        <h1 className='head-text'>
          My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
        </h1>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            In my academic journey, I have dedicated myself to creating a variety of interactive
            applications and games, with a special emphasis on real-time gaming experiences.  
            These projects showcase my enthusiasm for software development, gaming, and ongoing learning. 
            Here are some of the projects that I've worked on. Most of them are open-source, and I invite you to explore them on
            my GitHub page. Your input and contributions are greatly valued and welcomed!
          </p>
        </div>

        <div className='flex flex-wrap my-20 gap-16'>
          {projects.map((project) => (
            <div className='lg:w-[400px] w-full' key={project.name}>
              <div className='block-container w-12 h-12'>
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={project.iconUrl}
                    alt="Project Icon"
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
                  <img
                    src='/assets/icons/arrow.svg'
                    alt='arrow'
                    className='w-4 h-4 object-contain'
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
  )
}

export default Projects