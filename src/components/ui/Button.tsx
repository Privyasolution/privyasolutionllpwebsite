import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  /** Opt-in magnetic hover — disabled by default to avoid per-mousemove re-renders */
  magnetic?: boolean
  children: React.ReactNode
}

const sizeClasses = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-8 py-4 text-sm',
  lg: 'px-10 py-5 text-base',
} as const

const variantClasses = {
  primary:   'bg-gradient-to-r from-secondary to-accent text-white font-semibold shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)]',
  secondary: 'bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]',
  ghost:     'text-text-muted hover:text-white font-medium',
} as const

const BASE = 'relative inline-flex items-center justify-center gap-2 rounded-full overflow-hidden transition-all duration-300 cursor-pointer select-none'

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size    = 'md',
  magnetic = false, // default OFF — saves useMotionValue subscriptions on every render
  children,
  className,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null)
  const x   = useMotionValue(0)
  const y   = useMotionValue(0)
  const sx  = useSpring(x, { stiffness: 300, damping: 20 })
  const sy  = useSpring(y, { stiffness: 300, damping: 20 })

  const onMove = magnetic
    ? (e: React.MouseEvent) => {
        if (!ref.current) return
        const r = ref.current.getBoundingClientRect()
        x.set((e.clientX - (r.left + r.width  / 2)) * 0.25)
        y.set((e.clientY - (r.top  + r.height / 2)) * 0.25)
      }
    : undefined

  const onLeave = magnetic ? () => { x.set(0); y.set(0) } : undefined

  return (
    <motion.button
      ref={ref}
      style={magnetic ? { x: sx, y: sy } : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.97 }}
      className={cn(BASE, sizeClasses[size], variantClasses[variant], className)}
      {...(props as any)}
    >
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-white/10 to-accent/0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      {children}
    </motion.button>
  )
}
