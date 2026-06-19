'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-32 px-8 md:px-20 border-t border-[#242424]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#f9a8d4] mb-6">Contact</p>
          <h2 className="font-['Cormorant_Garamond'] text-6xl md:text-8xl text-[#f0ece4] mb-6 leading-tight">
            Let&apos;s work<br />
            <span className="italic">together</span>
          </h2>
          <p className="text-sm text-[#a0a0a0] max-w-sm mx-auto mb-12 leading-relaxed">
            Open to new opportunities — whether that&apos;s a full-time role, a freelance project, or just a conversation.
          </p>
          <a
            href="mailto:lenkazivkovic24@gmail.com"
            className="inline-block text-xs tracking-widest uppercase px-10 py-4 border border-[#f9a8d4] text-[#f9a8d4] hover:bg-[#f9a8d4] hover:text-[#1a0a10] transition-all duration-300 mb-12"
          >
            lenkazivkovic24@gmail.com
          </a>
          <div className="flex justify-center gap-8">
            <a
              href="https://www.linkedin.com/in/lenka-zivkovic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-[#a0a0a0] hover:text-[#f9a8d4] transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/pilena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-[#a0a0a0] hover:text-[#f9a8d4] transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="mt-24 pt-8 border-t border-[#242424] flex justify-between items-center text-[10px] tracking-widest uppercase text-[#a0a0a0]"
      >
        <span>Lenka Živković</span>
        <span>© 2025</span>
      </motion.div>
    </section>
  )
}
