import React from 'react'
import Navbar from '@/components/Navbar';
import { skills } from '@/constants'

const About: React.FC = () => {
  return (
    <main className="bg-slate-300/20">
      <Navbar />
      <section className="max-container">
        <h1 className='head-text'>
          Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Nagi </span>
        </h1>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Software Engineer based in Tokyo, Japan. I have a passion for building web applications and solving problems. I am currently working as a Frontend Engineer at <a href='https://www.zeals.co.jp/' target='_blank' rel='noreferrer'>Zeals</a>.
          </p>
        </div>

        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text'>My Skills</h3>

          <div className='mt-16 flex flex-wrap gap-12'>
            {skills.map((skill) => (
              <div className='block-container w-20 h-20'>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About