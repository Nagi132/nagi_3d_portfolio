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
    description: 'Data, design, and tooling',
    accent: 'bg-violet-400',
    skills: ['PostgreSQL', 'MongoDB', 'Git', 'Figma', 'C++', 'Socket.io'],
  },
];

const journeySummaries: Record<string, string> = {
  'CUNY Tech Prep':
    'Built and deployed a real-time full-stack application while working in an agile team and learning testing and CI/CD practices.',
  'Hunter College':
    'Studied algorithms, software engineering, and web development, and won first place at the 2022 YPSTEM Funathon for PrePair.',
  'LaGuardia Community College':
    'Built a foundation in object-oriented programming, data structures, algorithms, and software development.',
};

const ArrowRight = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
    <path
      d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
        threshold: 0.08,
        rootMargin: '0px 0px -15% 0px',
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

      <main className="relative min-h-screen overflow-x-hidden bg-slate-300/20">
        <Navbar />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148, 163, 184, 0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.18) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-8rem] top-32 h-80 w-80 rounded-full bg-violet-200/20 blur-3xl"
        />

        <section className="max-container relative z-10">
          <header>
            <div className="max-w-4xl">
              <p className="flex items-center gap-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sky-700">
                <span aria-hidden="true" className="h-px w-8 bg-sky-500" />
                About / Profile
              </p>

              <h1 className="head-text mt-5">
                Hi, I&apos;m{' '}
                <span className="blue-gradient_text font-semibold drop-shadow">Nagi</span>.
              </h1>

              <div className="mt-5 flex flex-col gap-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                <p>
                  I&apos;m a cloud and systems engineer with a computer science background,
                  focused on Microsoft 365, Azure, endpoint management, and secure cloud
                  migrations.
                </p>
                <p>
                  <span className="block">
                    I began in software development, building web, real-time, and
                    game-inspired projects.
                  </span>
                  <span className="block">
                    That background still shapes how I approach infrastructure work.
                  </span>
                  <span className="block">
                    Born in New York and raised in Tokyo, I also bring a cross-cultural
                    perspective to collaboration.
                  </span>
                </p>
              </div>
            </div>

            <dl className="mt-9 grid max-w-4xl border-y border-slate-300/80 sm:grid-cols-2 sm:divide-x sm:divide-slate-300/80">
              <div className="border-b border-slate-300/80 py-4 sm:border-b-0 sm:pr-6">
                <dt className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Focus
                </dt>
                <dd className="mt-1.5 font-poppins text-sm font-semibold text-slate-900 sm:text-base">
                  Cloud &amp; systems
                </dd>
              </div>
              <div className="py-4 sm:pl-6">
                <dt className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Foundation
                </dt>
                <dd className="mt-1.5 font-poppins text-sm font-semibold text-slate-900 sm:text-base">
                  Computer science
                </dd>
              </div>
            </dl>
          </header>

          <section className="py-14 sm:py-16" aria-labelledby="skills-heading">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Toolkit / 02
                </p>
                <h2 id="skills-heading" className="mt-2 font-poppins text-2xl font-semibold text-slate-950 sm:text-3xl">
                  Tools I work with
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-slate-600 sm:text-right">
                Across infrastructure and software development.
              </p>
            </div>

            <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-slate-300/80 bg-slate-300/80 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <article key={group.title} className="bg-[#f5f7fa] p-5 sm:p-6">
                  <div className="flex items-start gap-3">
                    <span aria-hidden="true" className={`mt-2 h-2 w-2 shrink-0 rounded-full ${group.accent}`} />
                    <div>
                      <h3 className="font-poppins text-base font-semibold text-slate-950 sm:text-lg">
                        {group.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">{group.description}</p>
                    </div>
                  </div>

                  <ul className="mt-5 grid grid-cols-2 border-t border-slate-200/90">
                    {group.skills.map((skillName, index) => {
                      const skill = skills.find(({ name }) => name === skillName);

                      if (!skill) return null;

                      return (
                        <li
                          key={skill.name}
                          className={[
                            'flex min-w-0 items-center gap-2 border-b border-slate-200/90 py-3',
                            index % 2 === 0 ? 'pr-3' : 'border-l pl-3',
                          ].join(' ')}
                        >
                          <Image
                            src={skill.imageUrl}
                            alt=""
                            width={24}
                            height={24}
                            className="h-5 w-5 shrink-0 object-contain"
                          />
                          <span className="min-w-0 text-xs font-medium leading-tight text-slate-700">
                            {skill.name}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="journey-heading">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Path / 03
                </p>
                <h2 id="journey-heading" className="mt-2 font-poppins text-2xl font-semibold text-slate-950 sm:text-3xl">
                  Experience &amp; education
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-slate-600 sm:text-right">
                The work and study behind the projects.
              </p>
            </div>

            <ol className="mt-6 border-y border-slate-300/80">
              {experiences.map((experience, index) => (
                <li
                  key={experience.company_name}
                  data-journey-item
                  className="journey-card-reveal grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 border-b border-slate-300/70 px-1 py-6 last:border-b-0 sm:grid-cols-[2.75rem_minmax(0,1fr)] sm:gap-x-5 sm:px-3 md:grid-cols-[3rem_3.5rem_minmax(0,1fr)_auto] md:items-start md:gap-x-6 md:px-4"
                >
                  <span className="row-span-2 pt-1 font-mono text-xs tabular-nums text-slate-400 md:row-span-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div
                    className="hidden h-12 w-12 items-center justify-center rounded-xl border border-white/90 shadow-sm md:flex"
                    style={{ backgroundColor: experience.iconBg }}
                  >
                    <Image
                      src={experience.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-lg object-contain"
                    />
                  </div>

                  <div className="min-w-0 md:col-start-3">
                    <div className="flex items-start gap-3 md:block">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/90 shadow-sm md:hidden"
                        style={{ backgroundColor: experience.iconBg }}
                      >
                        <Image
                          src={experience.icon}
                          alt=""
                          width={28}
                          height={28}
                          className="h-7 w-7 rounded-lg object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-poppins text-base font-semibold leading-snug text-slate-950 sm:text-lg">
                          {experience.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-slate-600">
                          {experience.company_name}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                      {journeySummaries[experience.company_name]}
                    </p>
                  </div>

                  <time className="col-start-2 mt-3 shrink-0 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-sky-700 md:col-start-4 md:mt-1">
                    {experience.date}
                  </time>
                </li>
              ))}
            </ol>
          </section>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-300/80 pt-6 sm:flex-row sm:items-center">
            <p className="text-sm text-slate-600">Want to see what I&apos;ve built?</p>
            <Link
              href="/projects"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-sky-700 transition-colors hover:text-sky-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500"
            >
              View the project index
              <ArrowRight />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
