'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL',
  'Apollo Client', 'REST APIs', 'Chakra UI', 'Headless CMS',
  'WordPress / WpGraphQL', 'WooCommerce', 'Figma', 'Vercel', 'Git',
  'SEO', 'Screaming Frog', 'Google Search Console',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const reduceMotion = useReducedMotion()

  return (
    <section id="about" className="py-32 px-8 md:px-20" ref={ref}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">

        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
          animate={reduceMotion ? { opacity: 1, y: 0 } : (inView ? { opacity: 1, y: 0 } : {})}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#f9a8d4] mb-4">About me</p>
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-[#f0ece4] mb-8 leading-tight">
            Crafting interfaces<br />
            <span className="italic">where design<br />meets code</span>
          </h2>
          <div className="space-y-4 text-[#a0a0a0] text-sm leading-relaxed">
            <p>
              I&apos;m a frontend developer based in Serbia with five years of experience
              delivering complete web solutions — from early discovery and design phases
              through to production and post-launch optimization.
            </p>
            <p>
              Most recently I led a team of five frontend developers at Forga, driving
              technical strategy, mentoring, and shipping projects across multiple clients.
              I specialize in scalable React and Next.js architectures, headless e-commerce
              with WooCommerce, and working closely with design teams to produce
              pixel-perfect interfaces.
            </p>
            <p>
              When I&apos;m not building for the web, you&apos;ll find me reading.
            </p>
          </div>
          <div className="mt-8 flex gap-4">
            <a
              href="https://www.linkedin.com/in/lenka-zivkovic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-[#f9a8d4] border-b border-[#f9a8d4]/40 hover:border-[#f9a8d4] transition-colors pb-0.5"
              aria-label="LinkedIn profile - opens in a new tab"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/pilena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-[#a0a0a0] border-b border-[#a0a0a0]/40 hover:text-[#f9a8d4] hover:border-[#f9a8d4] transition-colors pb-0.5"
              aria-label="GitHub profile - opens in a new tab"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
          animate={reduceMotion ? { opacity: 1, y: 0 } : (inView ? { opacity: 1, y: 0 } : {})}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#a0a0a0] mb-6">Tech stack</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={reduceMotion ? {} : { opacity: 0, scale: 0.85 }}
                animate={reduceMotion ? { opacity: 1, scale: 1 } : (inView ? { opacity: 1, scale: 1 } : {})}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.04 }}
                className="text-xs px-3 py-1.5 border border-[#242424] text-[#a0a0a0] hover:border-[#f9a8d4]/50 hover:text-[#f9a8d4] transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
