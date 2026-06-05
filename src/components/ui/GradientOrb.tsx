import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface GradientOrbProps {
  className?: string
  color?: 'blue' | 'cyan' | 'purple'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animate?: boolean
}

export const GradientOrb: React.FC<GradientOrbProps> = ({
  className,
  color = 'blue',
  size = 'lg',
  animate = true,
}) => {
  const colors = {
    blue: 'bg-secondary/20',
    cyan: 'bg-accent/20',
    purple: 'bg-purple-500/20',
  }

  const sizes = {
    sm: 'w-48 h-48',
    md: 'w-72 h-72',
    lg: 'w-96 h-96',
    xl: 'w-[600px] h-[600px]',
  }

  return (
    <motion.div
      className={cn(
        'absolute rounded-full blur-3xl pointer-events-none',
        colors[color],
        sizes[size],
        className
      )}
      animate={animate ? {
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      } : undefined}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
