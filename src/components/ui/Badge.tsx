import React from 'react'
import { cn } from '@/utils/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'blue'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className }) => {
  const variants = {
    default: 'bg-white/5 border-white/10 text-text-muted',
    accent: 'bg-accent/10 border-accent/20 text-accent',
    blue: 'bg-secondary/10 border-secondary/20 text-secondary',
  }

  return (
    <span className={cn(
      'inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border',
      variants[variant],
      className
    )}>
      {children}
    </span>
  )
}
