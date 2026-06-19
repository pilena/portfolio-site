'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

const roles = ['Frontend Developer', 'React & Next.js Developer', 'Tech Lead', 'UI Perfectionist']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section className="min-h-screen flex items-center px-8 md:px-20 pt-24">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#a0a0a0] mb-6">
            Hello, I&apos;m
          </p>
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-8xl font-light text-[#f0ece4] leading-[1.05] mb-6">
            Lenka<br />
            <span className="italic">Živković</span>
          </h1>
          <div
            className="flex items-center gap-3 mb-8 h-7"
            aria-live="polite"
            aria-atomic="true"
            aria-label={deleting ? '' : displayed}
          >
            <span className="text-[#f9a8d4] text-sm tracking-wide font-light" aria-hidden="true">
              {displayed}
            </span>
            <span className="w-px h-4 bg-[#f9a8d4] animate-pulse" aria-hidden="true" />
          </div>
          <p className="text-[#a0a0a0] text-sm leading-relaxed max-w-md mb-10">
            Five years building complete web solutions - from concept to production.
            Specializing in React, Next.js and headless e-commerce platforms.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="text-xs tracking-widest uppercase px-6 py-3 border border-[#f9a8d4] text-[#f9a8d4] hover:bg-[#f9a8d4] hover:text-[#1a0a10] transition-all duration-300"
            >
              View work
            </a>
            <a
              href="#contact"
              className="text-xs tracking-widest uppercase px-6 py-3 border border-[#242424] text-[#a0a0a0] hover:border-[#f9a8d4] hover:text-[#f9a8d4] transition-all duration-300"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-96 md:w-80 md:h-440px">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/lenka.jpg"
                alt="Lenka Živković"
                fill
                className="object-cover object-top"
                style={{
                  filter: 'grayscale(100%) contrast(1.05) brightness(0.85)',
                  mixBlendMode: 'luminosity',
                }}
                priority
              />
              <div
                className="absolute inset-0"
                style={{ background: 'rgba(249,168,212,0.18)', mixBlendMode: 'multiply' }}
              />
            </div>
            <div className="absolute inset-0 border border-[#f9a8d4]/20" />
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#f9a8d4]/10" />
          </div>

          <motion.div
            initial={reduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-6 -left-4 bg-[#161616] border border-[#242424] px-4 py-3"
          >
            <p className="text-xs text-[#a0a0a0] tracking-wide">Experience</p>
            <p className="font-['Cormorant_Garamond'] text-2xl text-[#f0ece4]">5 years</p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
