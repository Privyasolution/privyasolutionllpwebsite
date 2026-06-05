import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  magnetic?: boolean
  children: React.ReactNode
  as?: 'button' | 'a'
  href?: string
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  magnetic = true,
  children,
  className,
  as: Tag = 'button',
  href,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.25)
    y.set((e.clientY - centerY) * 0.25)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-4 text-sm',
    lg: 'px-10 py-5 text-base',
  }

  const variantClasses = {
    primary: 'bg-gradient-to-r from-secondary to-accent text-white font-semibold shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)]',
    secondary: 'bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]',
    ghost: 'text-text-muted hover:text-white font-medium',
  }

  const baseClasses = 'relative inline-flex items-center justify-center gap-2 rounded-full overflow-hidden transition-all duration-300 cursor-pointer select-none'

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      {...(props as any)}
    >
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-white/10 to-accent/0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      {children}
    </motion.button>
  )
}
