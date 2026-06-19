'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type Book = {
  title: string
  author: string
  cover: string
  rating: string
  link: string
}

const interests = [
  { icon: '🎮', label: 'Gaming', description: 'A strong believer that gaming is a perfectly valid hobby for adults.' },
  { icon: '💪🏻', label: 'Gym', description: 'Strength training a few times a week to clear my mind.' },
  { icon: '☕', label: 'Coffee', description: 'Like every respectable developer, I’m powered primarily by coffee.' },
  { icon: '✈️', label: 'Travel', description: 'Always planning the next trip - new cities, new food, new perspective.' },
  { icon: '🍳', label: 'Cooking', description: "If there's good food involved, I'm interested!" },
]

export default function Interests() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const reduceMotion = useReducedMotion()
  const [book, setBook] = useState<Book | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/goodreads')
      .then(res => res.json())
      .then(data => setBook(data.book))
      .catch(() => setBook(null))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="interests" className="py-32 px-8 md:px-20 border-t border-[#242424]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={reduceMotion ? { opacity: 1, y: 0 } : (inView ? { opacity: 1, y: 0 } : {})}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#f9a8d4] mb-4">Beyond the screen</p>
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-[#f0ece4]">
            What I do<br />
            <span className="italic">when I&apos;m not coding</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-[#242424] mb-px">

          <motion.div
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={reduceMotion ? { opacity: 1, y: 0 } : (inView ? { opacity: 1, y: 0 } : {})}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 bg-[#0e0e0e] p-8 flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] tracking-widest uppercase text-[#a0a0a0]">Reading · live from Goodreads</span>
              <span className="text-lg">📖</span>
            </div>

            {loading && (
              <div className="flex-1 flex items-center">
                <p className="text-sm text-[#a0a0a0]">Loading current book…</p>
              </div>
            )}

            {!loading && book && (
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${book.title} by ${book.author} on Goodreads - opens in a new tab`}
                className="group flex gap-6 items-start flex-1"
              >
                {book.cover && (
                  <img
                    src={book.cover}
                    alt={`Cover of ${book.title}`}
                    className="w-20 h-auto flex-shrink-0 border border-[#242424]"
                  />
                )}
                <div>
                  <p className="text-xs tracking-widest uppercase text-[#a0a0a0] mb-2">Currently reading</p>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl text-[#f0ece4] group-hover:text-[#f9a8d4] transition-colors duration-300 mb-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-[#a0a0a0] mb-3">{book.author}</p>
                  {book.rating && (
                    <p className="text-xs text-[#f9a8d4]">★ {book.rating} average rating</p>
                  )}
                </div>
              </a>
            )}

            {!loading && !book && (
              <div className="flex-1 flex items-center">
                <p className="text-sm text-[#a0a0a0]">
                  I read 30+ books a year — check out my{' '}
                  <a
                    href="https://www.goodreads.com/user/show/158553546-lenka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f9a8d4] hover:underline"
                  >
                    Goodreads
                  </a>
                  .
                </p>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-[#242424]">
              <a
                href="https://www.goodreads.com/user/show/158553546-lenka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase text-[#a0a0a0] hover:text-[#f9a8d4] transition-colors duration-300"
                aria-label="See my Goodreads profile - opens in a new tab"
              >
                See my Goodreads →
              </a>
            </div>
          </motion.div>

          {interests.map((interest, i) => (
            <motion.div
              key={interest.label}
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={reduceMotion ? { opacity: 1, y: 0 } : (inView ? { opacity: 1, y: 0 } : {})}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              className="bg-[#0e0e0e] p-8 flex flex-col gap-2"
            >
              <span className="text-2xl mb-2" aria-hidden="true">{interest.icon}</span>
              <h3 className="font-['Cormorant_Garamond'] text-xl text-[#f0ece4]">{interest.label}</h3>
              <p className="text-sm text-[#a0a0a0] leading-relaxed">{interest.description}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
