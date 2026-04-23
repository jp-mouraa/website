'use client'

import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

type Project = {
  year: string
  title: string
  description: string
  tags: string[]
  href?: string
  status?: 'live' | 'wip' | 'archived' | 'private'
}

const projects: Project[] = [
  {
    year: '2024',
    title: 'Resume Screening',
    description:
      'Using Natural Language Processing (NLP) and Machine Learning (ML) techniques to screen HR resumes.',
    tags: ['Python', 'NLP', 'Embeddings'],
    status: 'live',
    href: 'https://github.com/jp-mouraa/resume-screening',
  },
  {
    year: '2023',
    title: 'Game Rater',
    description:
      'An end-to-end machine learning project that scrapes game data from Metacritic, processes it, and trains a model to predict game ratings based on features such as genre, platform, and developer.',
    tags: ['Python', 'scikit-learn', 'NLP'],
    status: 'live',
    href: 'https://github.com/jp-mouraa/game-rater',
  },
  {
    year: '2023',
    title: 'Machine Learning',
    description:
      'A collection of machine learning experiments, notebooks, and utilities built while studying core ML techniques.',
    tags: ['Python', 'scikit-learn', 'Jupyter'],
    status: 'live',
    href: 'https://github.com/jp-mouraa/machine-learning',
  },
]

const statusStyles: Record<NonNullable<Project['status']>, string> = {
  live: 'text-[#a8a8a8]',
  wip: 'text-[#d4d4d4]',
  archived: 'text-[#707070]',
  private: 'text-[#707070]',
}

const statusLabels: Record<NonNullable<Project['status']>, string> = {
  live: 'live',
  wip: 'in progress',
  archived: 'archived',
  private: 'private',
}

export default function Work() {
  return (
    <section id="work" className="px-6 py-24 border-t border-[#262626]">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex justify-between items-baseline mb-10">
            <div className="text-[11px] text-[#707070] tracking-[0.2em] uppercase">
              03 — Side Projects
            </div>
            <div className="text-[11px] text-[#707070] tracking-[0.2em] uppercase">
              2023 — now
            </div>
          </div>
        </FadeIn>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.08}>
              <motion.a
                href={project.href ?? '#'}
                target={project.href ? '_blank' : undefined}
                rel={project.href ? 'noopener noreferrer' : undefined}
                className="group grid grid-cols-[60px_1fr_auto] gap-5 items-start py-7 border-t border-[#262626]"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <span className="text-[13px] text-[#707070] pt-1 font-mono">
                  {project.year}
                </span>

                <div className="min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-serif text-[24px] md:text-[28px] leading-none text-[#ededed] group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    {project.status && (
                      <span
                        className={`text-[10px] tracking-[0.15em] uppercase ${statusStyles[project.status]}`}
                      >
                        · {statusLabels[project.status]}
                      </span>
                    )}
                  </div>
                  <p className="text-[14px] text-[#8a8a8a] leading-[1.6] mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-[#707070] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="text-[#4a4a4a] text-[14px] group-hover:text-[#a8a8a8] group-hover:translate-x-1 transition-all pt-1">
                  ↗
                </span>
              </motion.a>
            </FadeIn>
          ))}

          <FadeIn delay={projects.length * 0.08}>
            <div className="grid grid-cols-[60px_1fr_auto] gap-5 items-start py-7 border-t border-b border-[#262626]">
              <span className="text-[13px] text-[#707070] pt-1 font-mono">
                2025
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-serif text-[24px] md:text-[28px] leading-none text-[#707070] italic">
                    Something new
                  </h3>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#707070]">
                    · private
                  </span>
                </div>
                <p className="text-[14px] text-[#707070] leading-[1.6]">
                  A few projects are cooking in private repos. Will share
                  once they&apos;re ready.
                </p>
              </div>
              <span className="text-[#404040] text-[14px] pt-1">—</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}