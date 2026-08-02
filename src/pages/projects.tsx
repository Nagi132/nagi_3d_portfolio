import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navbar from '@/components/Navbar';
import { projects } from '@/constants';

type PortfolioProject = (typeof projects)[number];

const projectVisuals: Record<string, string> = {
  'btn-back-orange': 'from-rose-200/80 via-orange-100/70 to-white',
  'btn-back-blue': 'from-sky-200/80 via-cyan-100/70 to-white',
  'btn-back-black': 'from-slate-300/80 via-slate-100 to-white',
  'btn-back-green': 'from-emerald-200/80 via-teal-100/70 to-white',
  'btn-back-pink': 'from-violet-200/80 via-fuchsia-100/70 to-white',
  'btn-back-yellow': 'from-amber-200/80 via-yellow-100/70 to-white',
  'btn-back-red': 'from-orange-200/80 via-rose-100/70 to-white',
};

const categoryStyles: Record<PortfolioProject['category'], string> = {
  Game: 'border-rose-200 bg-rose-50 text-rose-700',
  'Cloud app': 'border-emerald-200 bg-emerald-50 text-emerald-700',
  Hackathon: 'border-violet-200 bg-violet-50 text-violet-700',
  'C++': 'border-amber-200 bg-amber-50 text-amber-700',
  'Desktop tool': 'border-sky-200 bg-sky-50 text-sky-700',
};

const ProjectIcon = ({ project }: { project: PortfolioProject }) => (
  <div className="block-container h-14 w-14">
    <div className={['btn-back rounded-2xl', project.theme].join(' ')} />
    <div className="btn-front flex items-center justify-center rounded-2xl border border-white/50">
      <Image
        src={project.iconUrl}
        alt=""
        width={32}
        height={32}
        loading="eager"
        className="h-7 w-7 object-contain"
      />
    </div>
  </div>
);

const ExternalArrow = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    fill="none"
    className="h-4 w-4"
  >
    <path
      d="M5 15 15 5m0 0H7.5M15 5v7.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProjectLink = ({ project }: { project: PortfolioProject }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={[project.linkLabel, 'for', project.name, '(opens in a new tab)'].join(' ')}
    className="inline-flex items-center gap-1.5 font-semibold text-sky-700 transition-colors hover:text-sky-500"
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
          content="Explore Nagi Williams' real-time, cloud, web, and C++ software projects."
        />
      </Head>

      <main className="min-h-screen overflow-x-hidden bg-slate-300/20">
        <Navbar />

        <section className="max-container">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">
              Projects
            </p>
            <h1 className="head-text">
              What I&apos;ve{' '}
              <span className="blue-gradient_text font-semibold drop-shadow">built</span>.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              A mix of real-time games, cloud-backed applications, and C++ experiments.
              <br />
              Each one taught me something new about building useful,{' '}
              <span className="whitespace-nowrap">reliable software.</span>
            </p>
          </div>

          <section className="py-14 sm:py-20" aria-labelledby="all-projects-heading">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 id="all-projects-heading" className="subhead-text">
                  All projects
                </h2>
                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  Games, applications, and experiments from different points in my journey.
                </p>
              </div>
              <span className="hidden shrink-0 text-sm font-semibold text-slate-500 sm:block">
                {projects.length} projects
              </span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="relative flex items-start gap-4 overflow-hidden rounded-3xl border border-white/80 bg-white/60 p-4 shadow-[0_16px_45px_rgba(15,23,42,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-[0_22px_55px_rgba(15,23,42,0.1)] sm:flex-col sm:gap-0 sm:p-5"
                >
                  <div
                    aria-hidden="true"
                    className={[
                      'absolute -right-8 -top-8 h-28 w-28 rounded-full bg-linear-to-br opacity-60 blur-2xl',
                      projectVisuals[project.theme],
                    ].join(' ')}
                  />

                  <div className="relative shrink-0">
                    <ProjectIcon project={project} />
                  </div>

                  <div className="relative flex min-w-0 flex-1 flex-col sm:mt-5 sm:w-full">
                    <span
                      className={[
                        'w-fit rounded-full border px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em]',
                        categoryStyles[project.category],
                      ].join(' ')}
                    >
                      {project.category}
                    </span>

                    <h3 className="mt-2 font-poppins text-base font-semibold leading-snug text-slate-900 sm:text-xl">
                      {project.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 flex-1 text-xs leading-5 text-slate-600 sm:mt-2 sm:line-clamp-none sm:text-sm sm:leading-6">
                      {project.description}
                    </p>

                    <div className="mt-4 hidden flex-wrap gap-1.5 sm:flex">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-200/60 px-2.5 py-1 text-xs font-medium text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 text-xs sm:mt-5 sm:border-t sm:border-slate-200/70 sm:pt-4 sm:text-sm">
                      <ProjectLink project={project} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-4 rounded-3xl bg-[#111816] px-6 py-9 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)] sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-9">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Have an idea?
              </p>
              <h2 className="mt-2 font-poppins text-2xl font-semibold sm:text-3xl">
                Let&apos;s build something useful together.
              </h2>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex shrink-0 items-center justify-center rounded-full bg-emerald-300 px-6 py-3 font-semibold text-[#111816] transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-200 sm:mt-0"
            >
              Get in touch <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </section>
        </section>
      </main>
    </>
  );
};

export default Projects;
