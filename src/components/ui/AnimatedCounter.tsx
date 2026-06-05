import React from 'react'
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'

interface AnimatedCounterProps {
  end: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  suffix = '',
  prefix = '',
  label,
  duration = 2000,
}) => {
  const { count, ref } = useAnimatedCounter(end, duration)

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold gradient-text-blue mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-text-muted text-sm font-medium">{label}</div>
    </div>
  )
}
