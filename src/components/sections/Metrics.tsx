import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { viewportConfig } from '@/utils/animations'

const metrics = [
  { value: 95, suffix: '%', label: 'Operational Efficiency Improvement', description: 'Average efficiency gain across deployments' },
  { value: 99, suffix: '.9%', label: 'Traceability Accuracy', description: 'Product tracking precision rate' },
  { value: 80, suffix: '%', label: 'Automation Coverage', description: 'Manual processes automated on average' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction', description: 'Projects rated excellent or above' },
]

const impactItems = [
  { label: 'Projects Delivered', value: 150, suffix: '+' },
  { label: 'Industries Served', value: 12, suffix: '+' },
  { label: 'States in India', value: 8, suffix: '+' },
  { label: 'Hardware Integrations', value: 50, suffix: '+' },
  { label: 'Years Experience', value: 10, suffix: '+' },
  { label: 'System Uptime', value: 99, suffix: '%' },
]

export const Metrics: React.FC = () => {
  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container-xl relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            Business Impact Metrics
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Results That <span className="gradient-text-blue">Speak For Themselves</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.2 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            Measurable outcomes across every engagement — from factory floors to distribution centers.
          </motion.p>
        </div>

        {/* Large metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: i * 0.1 }}
              className="card-enterprise p-8 text-center group"
            >
              <AnimatedCounter
                end={metric.value}
                suffix={metric.suffix}
                label={metric.label}
                duration={2200}
              />
              <p className="text-text-muted text-xs mt-3">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          className="glass rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {impactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportConfig}
                transition={{ delay: i * 0.07 }}
                className="text-center"
              >
                <AnimatedCounter
                  end={item.value}
                  suffix={item.suffix}
                  label={item.label}
                  duration={1800}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
