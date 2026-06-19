import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Factory, FlaskConical, Package, Truck, Store, HeartPulse, Plane } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { viewportConfig } from '@/utils/animations'

const industries = [
  {
    name: 'Manufacturing',
    description: 'MES, quality control, production tracking, and factory automation solutions.',
    icon: Factory,
    color: 'from-blue-500/20 to-blue-600/5',
    border: 'hover:border-blue-500/30',
    solutions: ['MES', 'WMS', 'IoT Automation'],
  },
  {
    name: 'Pharmaceutical',
    description: 'GMP-compliant weighing, batch traceability, and regulatory reporting systems.',
    icon: FlaskConical,
    color: 'from-cyan-500/20 to-cyan-600/5',
    border: 'hover:border-cyan-500/30',
    solutions: ['Pharma Weighing', 'Barcode Traceability', 'MES'],
  },
  {
    name: 'Warehousing',
    description: 'End-to-end warehouse operations from receiving to dispatch with real-time visibility.',
    icon: Package,
    color: 'from-green-500/20 to-green-600/5',
    border: 'hover:border-green-500/30',
    solutions: ['WMS', 'Barcode & RFID', 'IoT'],
  },
  {
    name: 'Logistics',
    description: 'Weighbridge management, fleet tracking, and supply chain integration solutions.',
    icon: Truck,
    color: 'from-orange-500/20 to-orange-600/5',
    border: 'hover:border-orange-500/30',
    solutions: ['Weighbridge', 'WMS', 'Custom Software'],
  },
  {
    name: 'Retail',
    description: 'Inventory management, POS integration, and demand forecasting systems.',
    icon: Store,
    color: 'from-purple-500/20 to-purple-600/5',
    border: 'hover:border-purple-500/30',
    solutions: ['Barcode', 'WMS', 'Web Apps'],
  },
  {
    name: 'Healthcare',
    description: 'Patient data management, medical inventory, and compliance tracking solutions.',
    icon: HeartPulse,
    color: 'from-red-500/20 to-red-600/5',
    border: 'hover:border-red-500/30',
    solutions: ['Custom Software', 'Barcode', 'Web Apps'],
  },
  {
    name: 'Transportation',
    description: 'Fleet management, route optimization, and logistics tracking systems.',
    icon: Plane,
    color: 'from-sky-500/20 to-sky-600/5',
    border: 'hover:border-sky-500/30',
    solutions: ['Weighbridge', 'Custom Software', 'IoT'],
  },
]

export const Industries: React.FC = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-xl relative">
        <SectionHeader
          badge="Trusted Across Industries"
          title="Serving Diverse"
          titleHighlight="Industrial Sectors"
          subtitle="From manufacturing floors to pharmaceutical labs, our solutions are purpose-built for the unique challenges of each industry."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className={`card-enterprise p-6 cursor-pointer group ${industry.border}`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <industry.icon className="w-7 h-7 text-white" />
              </div>

              {/* Name & Description */}
              <h3 className="text-white font-semibold text-lg mb-3">{industry.name}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-5">{industry.description}</p>

              {/* Solutions tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {industry.solutions.map((sol) => (
                  <span key={sol} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-text-muted">
                    {sol}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link
                to="/industries"
                className="inline-flex items-center gap-1 text-xs text-accent font-medium group-hover:gap-2 transition-all"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
