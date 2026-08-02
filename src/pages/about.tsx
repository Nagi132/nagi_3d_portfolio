import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { experiences, skills } from '@/constants';

const skillGroups = [
  {
    title: 'Cloud & Infrastructure',
    description: 'Platforms and deployment',
    accent: 'bg-emerald-400',
    skills: ['Azure', 'AWS', 'Docker', 'GitHub'],
  },
  {
    title: 'Development',
    description: 'Building for the web',
    accent: 'bg-sky-400',
    skills: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Three.js'],
  },
  {
    title: 'Data & Tools',
    description: 'The rest of the toolkit',
    accent: 'bg-violet-400',
    skills: ['PostgreSQL', 'MongoDB', 'Git', 'Figma', 'C++', 'Socket.io'],
  },
];

const journeySummaries: Record<string, string> = {
  'CUNY Tech Prep':
    'Built and deployed a real-time full-stack application while working in an agile team and learning testing and CI/CD practices.',
  'Hunter College':
    'Studied algorithms, software engineering, and web development, and won first place at the YPstem Hackathon for PrePair.',
  'LaGuardia Community College':
    'Built a foundation in object-oriented programming, data structures, algorithms, and software development.',
};

const About: React.FC = () => {
  useEffect(() => {
    const journeyItems = document.querySelectorAll<HTMLElement>('[data-journey-item]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('journey-card-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40% 0px',
      },
    );

    journeyItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Nagi&apos;s Portfolio - About</title>
        <meta
          name="description"
          content="Learn about Nagi Williams, a cloud and systems engineer with a background in computer science and software development."
        />
      </Head>

      <main className="min-h-screen bg-slate-300/20">
        <Navbar />

        <section className="max-container">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">
              About me
            </p>
            <h1 className="head-text">
              Hi, I&apos;m{' '}
              <span className="blue-gradient_text font-semibold drop-shadow">Nagi</span>.
            </h1>

            <div className="mt-6 flex flex-col gap-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              <p>
                I&apos;m a cloud and systems engineer with a computer science background,
                focused on Microsoft 365, Azure, endpoint management, network security,
                and cloud migration.
              </p>
              <p>
                I started in software development—building web, real-time, and
                game-inspired projects—and still bring that builder&apos;s mindset to
                infrastructure work. Born in New York and raised in Tokyo, I also bring a
                cross-cultural perspective to collaboration.
              </p>
            </div>
          </div>

          <section className="py-14 sm:py-20" aria-labelledby="skills-heading">
            <div className="max-w-2xl">
              <h2 id="skills-heading" className="subhead-text">
                My Skills
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                A focused look at the technologies I use across cloud infrastructure and
                software development.
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-3xl border border-white/80 bg-white/55 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3">
                    <span className={`mt-1 h-9 w-1 shrink-0 rounded-full ${group.accent}`} />
                    <div>
                      <h3 className="font-poppins text-lg font-semibold text-slate-900">
                        {group.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">{group.description}</p>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2.5">
                    {group.skills.map((skillName) => {
                      const skill = skills.find(({ name }) => name === skillName);

                      if (!skill) return null;

                      return (
                        <div
                          key={skill.name}
                          className="flex min-h-14 items-center gap-2 rounded-2xl border border-slate-200/70 bg-white/80 px-2.5 py-2"
                        >
                          <Image
                            src={skill.imageUrl}
                            alt=""
                            width={30}
                            height={30}
                            className="h-6 w-6 shrink-0 object-contain"
                          />
                          <span className="min-w-0 whitespace-nowrap text-xs font-medium leading-tight text-slate-700">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="pb-6 sm:pb-10" aria-labelledby="journey-heading">
            <div className="max-w-2xl">
              <h2 id="journey-heading" className="subhead-text">
                Experience &amp; Education
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                The experiences that shaped how I build, learn, and solve problems.
              </p>
            </div>

            <ol className="relative mt-9 max-w-3xl space-y-5 before:absolute before:bottom-8 before:left-6 before:top-8 before:w-px before:bg-slate-300 sm:before:left-7">
              {experiences.map((experience) => (
                <li
                  key={experience.company_name}
                  data-journey-item
                  className="journey-card-reveal relative pl-16 sm:pl-20"
                >
                  <div
                    className="absolute left-0 top-5 z-1 flex h-12 w-12 items-center justify-center rounded-2xl border-4 border-slate-100 shadow-sm sm:h-14 sm:w-14"
                    style={{ backgroundColor: experience.iconBg }}
                  >
                    <Image
                      src={experience.icon}
                      alt=""
                      width={36}
                      height={36}
                      className="h-8 w-8 rounded-lg object-contain"
                    />
                  </div>

                  <article className="rounded-3xl border border-white/80 bg-white/65 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-6">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                      <div>
                        <h3 className="font-poppins text-lg font-semibold leading-snug text-slate-900 sm:text-xl">
                          {experience.title}
                        </h3>
                        <p className="mt-1 font-medium text-slate-600">
                          {experience.company_name}
                        </p>
                      </div>
                      <time className="shrink-0 text-sm font-semibold text-sky-700">
                        {experience.date}
                      </time>
                    </div>
                    <p className="mt-4 leading-7 text-slate-600">
                      {journeySummaries[experience.company_name]}
                    </p>
                  </article>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-12 rounded-3xl bg-[#111816] px-6 py-9 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)] sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-9">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                See the work
              </p>
              <h2 className="mt-2 font-poppins text-2xl font-semibold sm:text-3xl">
                Check out the projects I&apos;ve built along the way.
              </h2>
            </div>
            <Link
              href="/projects"
              className="mt-6 inline-flex shrink-0 items-center justify-center rounded-full bg-emerald-300 px-6 py-3 font-semibold text-[#111816] transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-200 sm:mt-0"
            >
              Explore projects <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </section>
        </section>
      </main>
    </>
  );
};

export default About;
