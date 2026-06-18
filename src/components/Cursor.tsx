'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [dot, setDot] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)

    const onEnter = () => setHovered(true)
    const onLeave = () => setHovered(false)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => window.removeEventListener('mousemove', move)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setDot(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12,
      }))
    }, 16)
    return () => clearInterval(interval)
  }, [pos])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[#f9a8d4]"
        style={{
          width: hovered ? 44 : 28,
          height: hovered ? 44 : 28,
          x: dot.x - (hovered ? 22 : 14),
          y: dot.y - (hovered ? 22 : 14),
          transition: 'width 0.2s, height 0.2s',
        }}
      />
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-1 h-1 rounded-full bg-[#f9a8d4]"
        style={{ transform: `translate(${pos.x - 2}px, ${pos.y - 2}px)` }}
      />
    </>
  )
}
