'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const links = ['About', 'Experience', 'Projects', 'Interests', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        aria-label="Main navigation"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center transition-all duration-500 ${
          scrolled ? 'bg-[#0e0e0e]/80 backdrop-blur-sm border-b border-[#242424]' : ''
        }`}
      >
        <a href="#" className="font-['Cormorant_Garamond'] text-lg tracking-widest text-[#f0ece4]">
          LŽ
        </a>

        <ul className="hidden md:flex gap-8">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-xs tracking-widest uppercase text-[#a0a0a0] hover:text-[#f9a8d4] transition-colors duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen(open => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block w-6 h-px bg-[#f0ece4] transition-transform duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[3px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#f0ece4] transition-transform duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[3px]' : ''
            }`}
          />
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0e0e0e] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-['Cormorant_Garamond'] text-[#f0ece4] hover:text-[#f9a8d4] transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
