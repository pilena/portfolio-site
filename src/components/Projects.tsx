'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    name: 'Republika Fud',
    description: 'Website for a burger restaurant. Built with a focus on clean layout, brand consistency, and a smooth user experience.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://github.com/pilena/Repulika_Fud',
    type: 'Client work',
  },
  {
    name: 'Amata Solutions',
    description: 'WordPress site for a healthcare-focused company offering value and solution-based services to the industry.',
    tags: ['WordPress', 'CSS', 'PHP'],
    url: 'https://github.com/pilena/amata',
    type: 'Client work',
  },
  {
    name: 'ASAP',
    description: 'Website for All Stars Alliance Pančevo — a local organization. Full build from design to deployment.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://github.com/pilena/ASAP',
    type: 'Client work',
  },
  {
    name: 'Meme Generator',
    description: 'React app that fetches meme templates from the Imgflip API and lets you caption them. A fun exploration of React state and API integration.',
    tags: ['React', 'API', 'JavaScript'],
    url: 'https://github.com/pilena/react-memegenerator',
    type: 'Personal',
  },
  {
    name: 'Tic Tac Toe',
    description: 'Classic game built with React. Straightforward implementation of game state management and component architecture.',
    tags: ['React', 'TypeScript'],
    url: 'https://github.com/pilena/tictactoe',
    type: 'Personal',
  },
  {
    name: 'TypeScript Party',
    description: 'Practice project exploring TypeScript fundamentals — state, props, functions, and events in a component-based architecture.',
    tags: ['React', 'TypeScript'],
    url: 'https://github.com/pilena/typescript-party-project',
    type: 'Personal',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-32 px-8 md:px-20 border-t border-[#242424]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#f9a8d4] mb-4">Projects</p>
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-[#f0ece4]">
            Things I&apos;ve<br />
            <span className="italic">built</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#242424]">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className="group bg-[#0e0e0e] p-8 flex flex-col gap-4 hover:bg-[#161616] transition-colors duration-300"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] tracking-widest uppercase text-[#a0a0a0]">{project.type}</span>
                <span className="text-[#f9a8d4]/0 group-hover:text-[#f9a8d4] transition-colors duration-300 text-lg">↗</span>
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-2xl text-[#f0ece4] group-hover:text-[#f9a8d4] transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-sm text-[#a0a0a0] leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#242424]">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] tracking-wide uppercase text-[#a0a0a0]">{tag}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/pilena"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-[#a0a0a0] hover:text-[#f9a8d4] transition-colors duration-300"
          >
            See all on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
