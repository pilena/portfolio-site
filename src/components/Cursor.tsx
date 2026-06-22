'use client'

import { useEffect, useState } from 'react'

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [isCoarsePointer, setIsCoarsePointer] = useState(() =>
    typeof window === 'undefined' ? true : window.matchMedia('(pointer: coarse)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(pointer: coarse)')
    const onChange = (e: MediaQueryListEvent) => setIsCoarsePointer(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (isCoarsePointer) return
    document.body.classList.add('custom-cursor-active')
    return () => document.body.classList.remove('custom-cursor-active')
  }, [isCoarsePointer])

  useEffect(() => {
    if (isCoarsePointer) return
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [isCoarsePointer])

  if (isCoarsePointer) return null

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-[#f9a8d4]"
      style={{ transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)` }}
    />
  )
}
