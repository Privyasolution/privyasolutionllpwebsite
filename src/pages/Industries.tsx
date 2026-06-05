import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { viewportConfig } from '@/utils/animations'
import { CTA } from '@/components/sections/CTA'
import { PageSEO } from '@/components/ui/PageSEO'

const industries = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: '🏭',
    tagline: 'Smart Factory, Superior Output',
    color: 'from-blue-600 to-cyan-500',
    glow: 'rgba(37,99,235,0.3)',
    description: 'From discrete to process manufacturing, we deliver MES, WMS, and IoT solutions that digitize your shop floor, improve OEE, and enable real-time production control.',
    challenges: [
      'Manual production tracking leading to data inaccuracies',
      'Inability to track raw material-to-finished goods traceability',
      'Unplanned machine downtime reducing throughput',
      'Disconnected shop floor and management operations',
    ],
    solutions: [
      'Manufacturing Execution System (MES)',
      'Warehouse Management System (WMS)',
      'Barcode & Traceability System',
      'IoT Machine Monitoring',
    ],
    outcomes: [
      '25% OEE improvement',
      '40% reduction in picking errors',
      'Real-time production visibility',
      'Complete lot traceability',
    ],
  },
  {
    id: 'pharmaceutical',
    name: 'Pharmaceutical',
    icon: '⚗️',
    tagline: 'GMP Compliance, Precision Operations',
    color: 'from-violet-600 to-purple-500',
    glow: 'rgba(124,58,237,0.3)',
    description: 'GMP-compliant software for pharmaceutical dispensing, batch manufacturing, quality control, and regulatory reporting including Schedule M and 21 CFR Part 11 compliance.',
    challenges: [
      'Manual weighing records prone to transcription errors',
      'Paper-based batch records failing regulatory audits',
      'Inability to quickly recall batches in case of quality issues',
      'Balance calibration tracking done manually',
    ],
    solutions: [
      'Pharma Weighing Solution',
      'Manufacturing Execution System',
      'Barcode & Batch Traceability',
      'WMS for RM and FG stores',
    ],
    outcomes: [
      '100% paperless batch records',
      'Zero GMP observation audits',
      'Batch recall in under 2 hours',
      '21 CFR Part 11 compliance',
    ],
  },
  {
    id: 'warehousing',
    name: 'Warehousing',
    icon: '📦',
    tagline: 'Intelligent Storage, Perfect Fulfillment',
    color: 'from-green-600 to-emerald-500',
    glow: 'rgba(5,150,105,0.3)',
    description: 'End-to-end warehouse operations management with real-time inventory visibility, barcode/RFID scanning, smart putaway, and optimized picking for maximum throughput.',
    challenges: [
      'Inventory discrepancies between physical and system stock',
      'Slow picking due to unoptimized bin locations',
      'Difficulty managing multiple batches and expiry dates',
      'No visibility into space utilization and slow-moving items',
    ],
    solutions: [
      'Warehouse Management System',
      'Barcode & RFID Integration',
      'Batch & Expiry Tracking',
      'Analytics Dashboard',
    ],
    outcomes: [
      '99.8% inventory accuracy',
      '35% faster order fulfillment',
      'Zero expired stock incidents',
      'Real-time space utilization',
    ],
  },
  {
    id: 'logistics',
    name: 'Logistics',
    icon: '🚛',
    tagline: 'Faster Movement, Smarter Operations',
    color: 'from-orange-600 to-amber-500',
    glow: 'rgba(234,88,12,0.3)',
    description: 'Vehicle weighing automation, consignment tracking, fleet management, and supply chain visibility solutions that streamline logistics from gate to delivery.',
    challenges: [
      'Weighbridge manipulation and fraud by truck drivers',
      'Manual challan generation creating delays at gate',
      'No real-time tracking of consignment status',
      'Disconnected systems for purchase, dispatch, and billing',
    ],
    solutions: [
      'Weighbridge Management System',
      'WMS for Distribution Centers',
      'Barcode & Consignment Tracking',
      'Custom Fleet Management',
    ],
    outcomes: [
      'Eliminated weighment fraud',
      '70% faster gate-to-dispatch',
      'Real-time consignment visibility',
      'Auto-challan and invoicing',
    ],
  },
  {
    id: 'retail',
    name: 'Retail',
    icon: '🏪',
    tagline: 'Smart Inventory, Happy Customers',
    color: 'from-pink-600 to-rose-500',
    glow: 'rgba(219,39,119,0.3)',
    description: 'Inventory management, barcode scanning, demand forecasting, and omnichannel order management solutions for retail chains and distributors.',
    challenges: [
      'Stock-outs and overstocking due to poor demand visibility',
      'Manual inventory counts leading to inaccuracies',
      'Difficulty managing multiple SKUs and fast-moving goods',
      'Disconnected online and offline inventory',
    ],
    solutions: [
      'WMS for Retail Distribution',
      'Barcode & RFID Inventory',
      'Custom Order Management',
      'Web Portal Development',
    ],
    outcomes: [
      '30% reduction in stockouts',
      '50% faster stocktaking',
      'Unified omnichannel inventory',
      'Real-time sales analytics',
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: '🏥',
    tagline: 'Digital Health, Better Outcomes',
    color: 'from-red-600 to-rose-500',
    glow: 'rgba(220,38,38,0.3)',
    description: 'Hospital information systems, medical inventory management, patient data management, and compliance-ready healthcare IT solutions.',
    challenges: [
      'Manual patient data management prone to errors',
      'Inability to track medical supply consumption by ward',
      'Disconnected billing, pharmacy, and clinical systems',
      'Compliance with healthcare data regulations',
    ],
    solutions: [
      'Hospital Information System',
      'Medical Inventory Management',
      'Barcode Patient Tracking',
      'Web Application Development',
    ],
    outcomes: [
      'Paperless patient records',
      'Real-time medical inventory',
      'Integrated billing and clinical',
      'HIPAA-aligned data security',
    ],
  },
  {
    id: 'transportation',
    name: 'Transportation',
    icon: '🚢',
    tagline: 'Optimized Routes, Maximum Utilization',
    color: 'from-sky-600 to-blue-500',
    glow: 'rgba(2,132,199,0.3)',
    description: 'Fleet management, weighbridge operations, cargo tracking, and logistics optimization solutions for road, rail, and freight operations.',
    challenges: [
      'Vehicle load compliance and overloading penalties',
      'Manual cargo documentation and challan generation',
      'No real-time fleet visibility and tracking',
      'Inefficient routing and vehicle utilization',
    ],
    solutions: [
      'Weighbridge Management System',
      'IoT Fleet Tracking',
      'Custom Dispatch Management',
      'Barcode Cargo Tracking',
    ],
    outcomes: [
      'Zero overloading penalties',
      'Real-time fleet visibility',
      '40% idle time reduction',
      'Automated compliance reporting',
    ],
  },
]

const Industries: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('manufacturing')
  const active = industries.find(i => i.id === activeId)!

  return (
    <main className="bg-background">
      <PageSEO
        title="Industries We Serve | Privya Solution LLP"
        description="Industry-specific software and automation solutions for manufacturing, pharmaceutical, warehousing, logistics, retail, healthcare, and transportation sectors."
      />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Industries We Serve
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Built for Your
            <br /><span className="gradient-text-blue">Industry</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-text-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2"
          >
            Industry-specific solutions built with deep domain knowledge across manufacturing,
            pharmaceutical, warehousing, logistics, and more.
          </motion.p>
        </div>
      </section>

      {/* Industry Selector */}
      <section className="section-padding bg-surface relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="container-xl relative">
          {/* Tab Selector */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
            {industries.map((ind) => (
              <motion.button
                key={ind.id}
                onClick={() => setActiveId(ind.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeId === ind.id
                    ? 'bg-gradient-to-r from-secondary to-accent text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                    : 'bg-white/5 border border-white/10 text-text-muted hover:text-white hover:border-white/20'
                }`}
              >
                <span>{ind.icon}</span>
                {ind.name}
              </motion.button>
            ))}
          </div>

          {/* Active Industry Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start"
            >
              {/* Left */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${active.color} flex items-center justify-center text-2xl sm:text-3xl`}
                    style={{ boxShadow: `0 0 40px ${active.glow}` }}>
                    {active.icon}
                  </div>
                  <div>
                    <div className="text-accent text-xs sm:text-sm font-medium mb-1">{active.tagline}</div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">{active.name}</h2>
                  </div>
                </div>

                <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-8">{active.description}</p>

                <h3 className="text-white font-semibold text-base sm:text-lg mb-4">Industry Challenges</h3>
                <div className="space-y-3 mb-8">
                  {active.challenges.map((ch, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-400 text-xs font-bold">!</span>
                      </div>
                      <span className="text-text-muted text-sm">{ch}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r ${active.color} text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:-translate-y-1`}
                  style={{ boxShadow: `0 0 30px ${active.glow}` }}
                >
                  Get Industry Solution
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right */}
              <div className="space-y-5 sm:space-y-6">
                <div className="card-enterprise p-5 sm:p-6">
                  <h3 className="text-white font-semibold mb-4">Recommended Solutions</h3>
                  <div className="space-y-3">
                    {active.solutions.map((sol, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.color} flex-shrink-0`} />
                        <span className="text-text-muted text-sm">{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-enterprise p-5 sm:p-6">
                  <h3 className="text-white font-semibold mb-4">Business Outcomes</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {active.outcomes.map((outcome, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-text-muted text-xs">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* All Industries Grid */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container-xl relative">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
            >
              All <span className="gradient-text-blue">Industries</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <motion.button
                key={ind.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportConfig}
                transition={{ delay: i * 0.06 }}
                onClick={() => {
                  setActiveId(ind.id)
                  window.scrollTo({ top: 350, behavior: 'smooth' })
                }}
                className="card-enterprise p-5 sm:p-6 text-center group"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${ind.color} flex items-center justify-center text-xl sm:text-2xl mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                  {ind.icon}
                </div>
                <h3 className="text-white font-semibold text-sm sm:text-base">{ind.name}</h3>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}

export default Industries
