import Head from 'next/head';
import React from 'react';
import Navbar from '@/components/Navbar';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences } from '@/constants';
import CTA from '@/components/CTA';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>Nagi&apos;s Portfolio - About</title>
        <meta name="description" content="Welcome to Nagi Williams' personal portfolio showcasing my projects and skills." />
      </Head>
      <main className="bg-slate-300/20 h-full">
        <Navbar />
        <section className="max-container">
          <h1 className='head-text'>
            Hello, I&apos;m <span className='blue-gradient_text font-semibold drop-shadow'>Nagi</span>
          </h1>

          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
              I am a passionate software engineer and full-stack developer with a love for creating innovative web applications and exploring the latest technologies. Being born in New York and raised in Tokyo exposed me to a diverse range of cultural influences, which in turn has shaped my unique perspective on problem-solving and creativity. Living in two different environments has given me the ability to adapt to new situations and think outside the box when it comes to finding solutions.
            </p>
            <p>
              My interests span various fields, including software development, web development, and video games. I find joy in playing games and often draw inspiration from them for my projects. Whether diving into a complex coding challenge or brainstorming new ideas, I&apos;m eager to learn and grow.
            </p>
          </div>

          <div className='py-10 flex flex-col'>
            <h3 className='subhead-text'>My Skills</h3>

            <div className='mt-16 flex flex-wrap gap-12'>
              {skills.map((skill) => (
                <div key={skill.name} className='block-container w-20 h-20'>
                  <div className='btn-back rounded-xl' />
                  <div className='btn-front rounded-xl flex justify-center items-center'>
                    <Image
                      src={skill.imageUrl}
                      alt={skill.name}
                      width={64}
                      height={64}
                      className='w-1/2 h-1/2 object-contain'
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='py-16'>
            <h3 className='subhead-text'>Academic Journey</h3>
            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
              <p>
                My academic journey has provided me with a solid computer science and
                software development foundation.
                <br /> Here are some key highlights:
              </p>
            </div>
            <div className='mt-12 flex'>
              <VerticalTimeline>
                {experiences.map((experience) => (
                  <VerticalTimelineElement
                    key={experience.company_name}
                    date={experience.date}
                    icon={<div className='flex justify-center items-center w-full h-full'>
                      <Image
                        src={experience.icon}
                        alt={experience.company_name}
                        width={64}
                        height={64}
                        className='w-[60%] h-[60%] object-contain'
                      />
                    </div>}
                    iconStyle={{ background: experience.iconBg }}
                    contentStyle={{
                      borderBottom: '8px',
                      borderStyle: 'solid',
                      borderColor: experience.iconBg,
                      boxShadow: 'none',
                    }}
                  >
                    <div>
                      <h3 className='text-black text-xl font-poppins font-semibold'>
                        {experience.title}
                      </h3>
                      <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>
                        {experience.company_name}
                      </p>
                    </div>
                    <ul className='my-5 list-disc ml-5 space-y-2'>
                      {experience.points.map((point, index) => (
                        <li key={`experience-point-${index}`}
                          className='text-black-500/50 font-normal pl-1 text-sm'
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
          </div>

          <hr className='border-slate-200' />

          <CTA />
        </section>
      </main>
    </>
  );
}

export default About;
