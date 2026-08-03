import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Navbar from '@/components/Navbar';
import { freelanceProjects, projects } from '@/constants';

type PortfolioProject = (typeof projects)[number];
type FreelanceProject = (typeof freelanceProjects)[number];

type ProjectTone = {
  dot: string;
  icon: string;
  label: string;
};

const projectTones: Record<PortfolioProject['category'], ProjectTone> = {
  Game: {
    dot: 'bg-rose-400',
    icon: 'border-rose-200/80 bg-rose-50',
    label: 'text-rose-700',
  },
  'Cloud app': {
    dot: 'bg-emerald-400',
    icon: 'border-emerald-200/80 bg-emerald-50',
    label: 'text-emerald-700',
  },
  Hackathon: {
    dot: 'bg-violet-400',
    icon: 'border-violet-200/80 bg-violet-50',
    label: 'text-violet-700',
  },
  'C++': {
    dot: 'bg-amber-400',
    icon: 'border-amber-200/80 bg-amber-50',
    label: 'text-amber-700',
  },
  'Desktop tool': {
    dot: 'bg-sky-400',
    icon: 'border-sky-200/80 bg-sky-50',
    label: 'text-sky-700',
  },
};

const freelanceTones: Record<FreelanceProject['category'], Pick<ProjectTone, 'dot' | 'label'>> = {
  'E-commerce': { dot: 'bg-amber-400', label: 'text-amber-700' },
  'Business site': { dot: 'bg-sky-400', label: 'text-sky-700' },
  Portfolio: { dot: 'bg-slate-400', label: 'text-slate-600' },
  'Web app': { dot: 'bg-emerald-400', label: 'text-emerald-700' },
};

const ExternalArrow = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
    <path
      d="M5 15 15 5m0 0H7.5M15 5v7.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProjectIcon = ({ project }: { project: PortfolioProject }) => {
  const tone = projectTones[project.category];

  return (
    <div
      className={[
        'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border sm:h-11 sm:w-11',
        tone.icon,
      ].join(' ')}
    >
      <Image
        src={project.iconUrl}
        alt=""
        width={26}
        height={26}
        loading="eager"
        className="h-6 w-6 object-contain sm:h-7 sm:w-7"
      />
    </div>
  );
};

const ProjectCategory = ({ project }: { project: PortfolioProject }) => {
  const tone = projectTones[project.category];

  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.14em]',
        tone.label,
      ].join(' ')}
    >
      <span aria-hidden="true" className={['h-1.5 w-1.5 rounded-full', tone.dot].join(' ')} />
      {project.category}
    </span>
  );
};

const ProjectLink = ({ project }: { project: PortfolioProject }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={[project.linkLabel, 'for', project.name, '(opens in a new tab)'].join(' ')}
    className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-semibold text-sky-700 transition-colors hover:text-sky-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 sm:text-sm"
  >
    {project.linkLabel}
    <ExternalArrow />
  </a>
);

const Projects: React.FC = () => {
  return (
    <>
      <Head>
        <title>Nagi&apos;s Portfolio - Projects</title>
        <meta
          name="description"
          content="Explore Nagi Williams' freelance websites, full-stack applications, real-time games, and C++ projects."
        />
      </Head>

      <main className="relative min-h-screen overflow-x-hidden bg-slate-300/20">
        <Navbar />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148, 163, 184, 0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.18) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-8rem] top-28 h-80 w-80 rounded-full bg-sky-200/25 blur-3xl"
        />

        <section className="max-container relative z-10">
          <header className="max-w-3xl pb-10 sm:pb-12">
            <p className="flex items-center gap-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sky-700">
              <span aria-hidden="true" className="h-px w-8 bg-sky-500" />
              Projects / Index
            </p>

            <h1 className="head-text mt-5">
              What I&apos;ve{' '}
              <span className="blue-gradient_text font-semibold drop-shadow">built</span>.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              A running collection of games, applications, and technical experiments.
              <br className="hidden sm:block" /> Each one marks something I wanted to understand
              better.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-slate-500">
              <span>
                <strong className="mr-1.5 font-semibold text-slate-800">
                  {String(projects.length).padStart(2, '0')}
                </strong>
                independent
              </span>
              <span aria-hidden="true" className="h-px w-5 bg-slate-300" />
              <span>
                <strong className="mr-1.5 font-semibold text-slate-800">
                  {String(freelanceProjects.length).padStart(2, '0')}
                </strong>
                freelance
              </span>
            </div>
          </header>

          <section aria-labelledby="project-index-heading">
            <div className="mb-5 flex items-end justify-between gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Independent work
                </p>
                <h2 id="project-index-heading" className="mt-2 font-poppins text-2xl font-semibold text-slate-950 sm:text-3xl">
                  Project index
                </h2>
              </div>
              <p className="hidden max-w-sm text-right text-sm leading-6 text-slate-500 md:block">
                Coursework, collaborations, and experiments.
              </p>
            </div>

            <div className="border-y border-slate-300/80">
              {projects.map((project, index) => (
                <article
                  key={project.name}
                  className="group relative grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 border-b border-slate-300/70 px-1 py-5 transition-colors last:border-b-0 hover:bg-white/45 sm:grid-cols-[2.75rem_minmax(0,1fr)] sm:gap-x-5 sm:px-3 md:grid-cols-[3rem_minmax(11rem,0.9fr)_minmax(0,1.25fr)_auto] md:items-start md:gap-x-6 md:px-4 md:py-6"
                >
                  <span className="row-span-3 pt-1 font-mono text-xs tabular-nums text-slate-400 md:row-span-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="flex min-w-0 items-start gap-3">
                    <ProjectIcon project={project} />
                    <div className="min-w-0 pt-0.5">
                      <ProjectCategory project={project} />
                      <h3 className="mt-1.5 font-poppins text-base font-semibold leading-snug text-slate-950 sm:text-lg">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  <div className="col-start-2 mt-3 min-w-0 md:col-start-3 md:mt-0">
                    <p className="line-clamp-2 text-sm leading-6 text-slate-600">
                      {project.description}
                    </p>
                    <div className="mt-2.5 hidden flex-wrap gap-x-3 gap-y-1 sm:flex">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium text-slate-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="col-start-2 mt-3 md:col-start-4 md:mt-1">
                    <ProjectLink project={project} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 border-t border-slate-300/80 pt-8 sm:mt-16 sm:pt-10" aria-labelledby="freelance-work-heading">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end sm:gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Beyond the project log
                </p>
                <h2 id="freelance-work-heading" className="mt-2 font-poppins text-xl font-semibold text-slate-950 sm:text-2xl">
                  Freelance work
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-600 sm:text-right">
                Websites I built for others.
              </p>
            </div>

            <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-slate-300/80 bg-slate-300/80 sm:grid-cols-2 xl:grid-cols-4">
              {freelanceProjects.map((project, index) => {
                const tone = freelanceTones[project.category];

                return (
                  <a
                    key={project.name}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={['Visit', project.name, '(opens in a new tab)'].join(' ')}
                    className="group flex min-h-44 flex-col bg-[#f5f7fa] p-5 transition-colors hover:bg-white focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-sky-500"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={[
                          'inline-flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.13em]',
                          tone.label,
                        ].join(' ')}
                      >
                        <span aria-hidden="true" className={['h-1.5 w-1.5 rounded-full', tone.dot].join(' ')} />
                        {project.category}
                      </span>
                      <span className="font-mono text-[0.65rem] tabular-nums text-slate-400">
                        F{String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="mt-4 font-poppins text-base font-semibold leading-snug text-slate-950">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {project.description}
                    </p>

                    <span className="mt-auto flex items-center justify-between gap-3 pt-5 text-xs font-semibold text-sky-700">
                      <span>Visit site</span>
                      <ExternalArrow className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Projects;
