import { useEffect, useRef, useState } from 'react'

export function useMouseParallax(strength = 0.02) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const rafRef    = useRef<number | null>(null)
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Skip on touch/pointer-coarse devices — saves a continuous RAF loop on mobile
    if (window.matchMedia('(hover: none)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = {
        x: (e.clientX / window.innerWidth  - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      }
    }

    const animate = () => {
      const cx = currentRef.current
      const tx = targetRef.current
      cx.x += (tx.x - cx.x) * 0.08
      cx.y += (tx.y - cx.y) * 0.08
      setPosition({ x: cx.x * strength * 100, y: cx.y * strength * 100 })
      rafRef.current = requestAnimationFrame(animate)
    }

    // passive: true — browser can skip calling preventDefault, improves scroll perf
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [strength])

  return position
}
