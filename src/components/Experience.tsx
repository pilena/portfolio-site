'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const jobs = [
  {
    role: 'Frontend Tech Lead',
    company: 'Forga',
    location: 'Belgrade, Serbia',
    period: '2022 — 2025',
    bullets: [
      'Led a team of five frontend developers across multiple client projects',
      'Oversaw full projects from architecture planning to production deployment',
      'Drove technical strategy — stack evolution, build optimizations, CMS/API integrations',
      'Mentored developers through code reviews, workshops, and pair programming',
      'Collaborated directly with clients, designers, SEO specialists, and marketing teams',
    ],
  },
  {
    role: 'Frontend Developer — Mid-level',
    company: 'Forga',
    location: 'Belgrade, Serbia',
    period: '2020 — 2022',
    bullets: [
      'Built high-performance headless e-commerce apps with React, Next.js, and GraphQL',
      'Implemented product filtering, promo codes, wishlists, and tier-based pricing',
      'Developed custom checkout flows and third-party payment integrations',
      'Co-built and maintained the company design system and component library',
      'Migrated from Chakra UI to Tailwind CSS for improved performance and consistency',
    ],
  },
  {
    role: 'Junior Frontend Developer',
    company: 'Forga',
    location: 'Belgrade, Serbia',
    period: '2019 — 2020',
    bullets: [
      'Built responsive websites using HTML, CSS, JavaScript and early React setups',
      'Contributed to migrations from traditional WordPress to headless React/Next.js',
      'Implemented SEO optimizations, improving Lighthouse and Core Web Vitals scores',
      'Translated Figma prototypes into pixel-perfect, cross-browser interfaces',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const reduceMotion = useReducedMotion()

  return (
    <section id="experience" className="py-32 px-8 md:px-20 border-t border-[#242424]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={reduceMotion ? { opacity: 1, y: 0 } : (inView ? { opacity: 1, y: 0 } : {})}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#f9a8d4] mb-4">Experience</p>
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-[#f0ece4]">
            Where I&apos;ve<br />
            <span className="italic">been building</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#242424]" />

          <div className="space-y-16 pl-8 md:pl-16">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={reduceMotion ? {} : { opacity: 0, x: -20 }}
                animate={reduceMotion ? { opacity: 1, x: 0 } : (inView ? { opacity: 1, x: 0 } : {})}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.15 }}
                className="relative"
              >
                <div className="absolute -left-8 md:-left-16 top-1.5 w-2 h-2 bg-[#f9a8d4] rounded-full border border-[#f9a8d4] bg-[#0e0e0e]" />

                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3 gap-1">
                  <h3 className="font-['Cormorant_Garamond'] text-2xl text-[#f0ece4]">
                    {job.role}
                  </h3>
                  <span className="text-xs tracking-widest text-[#a0a0a0] uppercase">{job.period}</span>
                </div>
                <p className="text-xs tracking-wide text-[#f9a8d4] mb-4 uppercase">{job.company} · {job.location}</p>
                <ul className="space-y-2">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-[#a0a0a0] leading-relaxed flex items-center gap-3">
                      <span className="text-[#f9a8d4]/40 ">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
