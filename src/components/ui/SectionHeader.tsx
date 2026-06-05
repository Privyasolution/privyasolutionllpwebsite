import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, viewportConfig } from '@/utils/animations'

interface SectionHeaderProps {
  badge?: string
  title: string
  titleHighlight?: string
  subtitle?: string
  centered?: boolean
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  titleHighlight,
  subtitle,
  centered = true,
}) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {badge}
        </motion.div>
      )}
      <motion.h2
        {...fadeInUp}
        viewport={viewportConfig}
        whileInView={fadeInUp.animate}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
      >
        {title}{' '}
        {titleHighlight && (
          <span className="gradient-text-blue">{titleHighlight}</span>
        )}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7, delay: 0.15 }}
          className={`text-text-muted text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-0 ${centered ? 'max-w-3xl mx-auto' : 'max-w-2xl'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
