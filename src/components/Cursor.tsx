'use client'

import { useEffect, useState } from 'react'

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    document.body.classList.add('custom-cursor-active')
    return () => document.body.classList.remove('custom-cursor-active')
  }, [])

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-[#f9a8d4]"
      style={{ transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)` }}
    />
  )
}
