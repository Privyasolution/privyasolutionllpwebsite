import React from 'react'
import { motion } from 'framer-motion'
import { Target, Cpu, Layers, Activity, Cloud, HeartHandshake } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { viewportConfig } from '@/utils/animations'

const reasons = [
  {
    icon: Target,
    title: 'Industry-Specific Solutions',
    description: 'Every solution is purpose-built for your industry with deep domain expertise in manufacturing, pharma, warehousing, and logistics.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Cpu,
    title: 'Hardware & Software Expertise',
    description: 'Unique ability to integrate weighing scales, barcode scanners, RFID readers, and industrial sensors with enterprise software.',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description: 'Future-proof modular architecture that grows with your business, from single-site deployments to enterprise-wide rollouts.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description: 'Live dashboards, instant alerts, and real-time operational visibility across all connected systems and facilities.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Cloud,
    title: 'Cloud & On-Premise Deployment',
    description: 'Flexible deployment options — cloud-hosted for agility, on-premise for compliance-sensitive operations.',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Support',
    description: 'Dedicated technical support, proactive maintenance, and a team that stays invested in your long-term success.',
    gradient: 'from-rose-500 to-pink-500',
  },
]

export const WhyChoose: React.FC = () => {
  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Header */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Why Choose Privya Solution LLP
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Built for Industrial
              <br />
              <span className="gradient-text-blue">Excellence</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: 0.2 }}
              className="text-text-muted text-lg leading-relaxed mb-8"
            >
              We combine deep industrial domain knowledge with cutting-edge technology to deliver solutions that
              actually work on the factory floor, in the warehouse, and across your entire operation.
            </motion.p>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              {['10+ Years Experience', 'Surat Based', 'Pan-India Deployment', 'Hardware Experts'].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-text-muted">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right - Reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => {
              const Icon = reason.icon
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportConfig}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="card-enterprise p-5 group"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{reason.title}</h3>
                  <p className="text-text-muted text-xs leading-relaxed">{reason.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
