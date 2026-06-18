'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = ['About', 'Experience', 'Projects', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
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
      <ul className="flex gap-8">
        {links.map(link => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-xs tracking-widest uppercase text-[#6b6b6b] hover:text-[#f9a8d4] transition-colors duration-300"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
