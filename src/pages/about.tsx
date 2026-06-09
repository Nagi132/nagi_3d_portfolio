import Head from 'next/head';
import React from 'react';
import Navbar from '@/components/Navbar';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences } from '@/constants';
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
            Hi, I&apos;m <span className='blue-gradient_text font-semibold drop-shadow'>Nagi</span>.
          </h1>

          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
              I&apos;m a cloud and systems engineer with a computer science background, focused on Microsoft 365, Azure, endpoint management, network security, and cloud migration.
            </p>
            <p>
              My background started in software development, where I built web apps, real-time applications, and game-inspired projects before moving deeper into cloud infrastructure.
            </p>
            <p>
              Born in New York and raised in Tokyo, I bring a cross-cultural perspective to problem-solving and collaboration.
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

        </section>
      </main>
    </>
  );
}

export default About;
