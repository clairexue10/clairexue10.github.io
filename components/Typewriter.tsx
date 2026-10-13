'use client'

import { useEffect, useState } from 'react'

const TYPE_MS = 120
const DELETE_MS = 60
const HOLD_MS = 2200
const RESTART_MS = 500

export default function Typewriter({ text, className = '' }: { text: string; className?: string }) {
  const [count, setCount] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(text.length)
      return
    }

    let delay = deleting ? DELETE_MS : TYPE_MS
    if (!deleting && count === text.length) delay = HOLD_MS
    if (deleting && count === 0) delay = RESTART_MS

    const id = setTimeout(() => {
      if (!deleting && count === text.length) setDeleting(true)
      else if (deleting && count === 0) setDeleting(false)
      else setCount((c) => c + (deleting ? -1 : 1))
    }, delay)
    return () => clearTimeout(id)
  }, [count, deleting, text])

  return (
    <span className={`relative inline-block ${className}`} aria-label={text}>
      {/* invisible full text reserves space so the layout doesn't shift */}
      <span className="invisible" aria-hidden>
        {text}
      </span>
      <span className="absolute inset-0 whitespace-pre" aria-hidden>
        {text.slice(0, count)}
        <span className="inline-block w-[2px] h-[1em] -mb-[0.15em] ml-0.5 bg-current animate-blink" />
      </span>
    </span>
  )
}
