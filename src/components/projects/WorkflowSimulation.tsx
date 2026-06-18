import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export interface WorkflowStep {
  step: number
  icon: string
  title: string
  description: string
}

interface Props {
  steps: WorkflowStep[]
  accentColor?: string
}

const vp = { once: true, margin: '-60px' } as const

export const WorkflowSimulation: React.FC<Props> = ({
  steps,
  accentColor = '#2563EB',
}) => {
  return (
    <div>
      {/* ── Desktop: horizontal ─────────────────────────────────── */}
      <div className="hidden lg:block">
        <div className="flex items-start">
          {steps.map((s, i) => (
            <React.Fragment key={s.step}>
              {/* Step card */}
              <motion.div
                className="flex flex-col items-center text-center flex-1 px-3 xl:px-4"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.35, delay: i * 0.07 }}
              >
                {/* Number bubble */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base mb-3 flex-shrink-0 relative"
                  style={{ background: accentColor }}
                >
                  {s.step}
                  {/* Pulse ring */}
                  <span
                    className="absolute inset-0 rounded-full animate-ping opacity-20"
                    style={{ background: accentColor, animationDuration: `${2 + i * 0.3}s` }}
                  />
                </div>
                {/* Icon */}
                <span className="text-2xl mb-2.5 leading-none">{s.icon}</span>
                {/* Title */}
                <h4 className="text-white font-semibold text-sm leading-snug mb-2 px-1">{s.title}</h4>
                {/* Description */}
                <p className="text-slate-400 text-xs leading-relaxed max-w-[140px]">{s.description}</p>
              </motion.div>

              {/* Connector */}
              {i < steps.length - 1 && (
                <motion.div
                  className="flex items-center pt-5 flex-shrink-0"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={vp}
                  transition={{ duration: 0.25, delay: i * 0.07 + 0.2 }}
                >
                  <div
                    className="h-px w-6 xl:w-8"
                    style={{ background: `linear-gradient(90deg, ${accentColor}60, ${accentColor}20)` }}
                  />
                  <ChevronRight className="w-4 h-4 flex-shrink-0" style={{ color: `${accentColor}60` }} />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── Mobile/tablet: vertical timeline ───────────────────── */}
      <div className="lg:hidden">
        <div className="relative">
          {/* Vertical track */}
          <div
            className="absolute left-[21px] top-5 bottom-5 w-px"
            style={{ background: `linear-gradient(180deg, ${accentColor}40 0%, transparent 100%)` }}
          />
          <div className="space-y-0">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                className="flex gap-4 pb-7 last:pb-0"
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={vp}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                {/* Number */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 relative z-10"
                  style={{ background: accentColor }}
                >
                  {s.step}
                </div>
                {/* Content */}
                <div className="pt-2 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xl leading-none">{s.icon}</span>
                    <h4 className="text-white font-semibold text-base">{s.title}</h4>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
