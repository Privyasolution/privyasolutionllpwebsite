import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, TrendingUp } from 'lucide-react'
import { viewportConfig } from '@/utils/animations'
import { CTA } from '@/components/sections/CTA'
import { PageSEO } from '@/components/ui/PageSEO'

type Category = 'All' | 'WMS' | 'Pharma' | 'Weighbridge' | 'MES' | 'IoT' | 'Custom'

const projects = [
  {
    id: 1,
    title: 'Multi-Warehouse WMS for Textile Giant',
    category: 'WMS',
    industry: 'Manufacturing',
    year: '2024',
    description: 'End-to-end warehouse management across 3 facilities covering 2.5 lakh sq ft of storage. Implemented wave picking, barcode integration, and system integration.',
    metrics: [
      { label: 'Inventory Accuracy', value: '99.7%' },
      { label: 'Picking Error Reduction', value: '92%' },
      { label: 'Order Cycle Time', value: '-45%' },
    ],
    tags: ['WMS', 'Barcode', 'Multi-Location', 'System Integration'],
    color: 'from-blue-600 to-cyan-500',
    icon: '🏭',
  },
  {
    id: 2,
    title: 'GMP Pharma Weighing System',
    category: 'Pharma',
    industry: 'Pharmaceutical',
    year: '2024',
    description: 'Complete GMP-compliant dispensing system for an API manufacturer with Mettler-Toledo balance integration, 21 CFR Part 11, and electronic batch records.',
    metrics: [
      { label: 'Manual Errors', value: '0%' },
      { label: 'Dispensing Speed', value: '+35%' },
      { label: 'Audit Compliance', value: '100%' },
    ],
    tags: ['GMP', '21 CFR Part 11', 'Pharma', 'Balance Integration'],
    color: 'from-violet-600 to-purple-500',
    icon: '⚗️',
  },
  {
    id: 3,
    title: 'Automated Weighbridge for Steel Plant',
    category: 'Weighbridge',
    industry: 'Steel Manufacturing',
    year: '2024',
    description: 'Fully unattended weighbridge with RFID vehicle identification, CCTV integration, anti-fraud mechanisms, and system integration for a major steel plant.',
    metrics: [
      { label: 'Fraud Incidents', value: '0' },
      { label: 'Queue Time', value: '-80%' },
      { label: 'Manual Entry', value: '0%' },
    ],
    tags: ['Weighbridge', 'RFID', 'CCTV', 'Anti-Fraud'],
    color: 'from-orange-600 to-amber-500',
    icon: '⚖️',
  },
  {
    id: 4,
    title: 'MES for Plastic Injection Molding',
    category: 'MES',
    industry: 'Plastics Manufacturing',
    year: '2023',
    description: 'Shop floor digitization for 48 injection molding machines with OEE tracking, downtime management, quality control, and machine connectivity via Modbus.',
    metrics: [
      { label: 'OEE Improvement', value: '+18%' },
      { label: 'Unplanned Downtime', value: '-42%' },
      { label: 'Paper Records', value: '0%' },
    ],
    tags: ['MES', 'OEE', 'Modbus', 'Quality Control'],
    color: 'from-green-600 to-emerald-500',
    icon: '🔧',
  },
  {
    id: 5,
    title: 'IoT Plant Monitoring Platform',
    category: 'IoT',
    industry: 'Chemical Manufacturing',
    year: '2023',
    description: 'Industrial IoT platform connecting 120+ sensors across production lines for real-time temperature, pressure, and flow monitoring with predictive maintenance.',
    metrics: [
      { label: 'Downtime Prevention', value: '3 incidents' },
      { label: 'Energy Savings', value: 'Rs 12L/yr' },
      { label: 'Sensor Uptime', value: '99.9%' },
    ],
    tags: ['IoT', 'MQTT', 'Predictive Maintenance', 'Edge Computing'],
    color: 'from-sky-600 to-blue-500',
    icon: '📡',
  },
  {
    id: 6,
    title: 'Barcode Traceability for Food Industry',
    category: 'Custom',
    industry: 'Food & Beverage',
    year: '2023',
    description: 'Complete batch traceability system with GS1 compliance, expiry management, and one-click recall capability for a food processing company serving modern retail.',
    metrics: [
      { label: 'Traceability Coverage', value: '100%' },
      { label: 'Recall Response Time', value: '< 2 hrs' },
      { label: 'Compliance Status', value: 'GS1 Compliant' },
    ],
    tags: ['Barcode', 'GS1', 'FEFO', 'Recall Management'],
    color: 'from-cyan-600 to-teal-500',
    icon: '🍃',
  },
  {
    id: 7,
    title: 'Distribution Center WMS with RFID',
    category: 'WMS',
    industry: 'Logistics',
    year: '2023',
    description: 'RFID-enabled WMS for a 3PL distribution center managing 500+ clients with multi-client inventory, cross-docking, and real-time customer portal.',
    metrics: [
      { label: 'Volume Handled', value: '+200%' },
      { label: 'Picking Accuracy', value: '99.9%' },
      { label: 'Customer Queries', value: '-70%' },
    ],
    tags: ['WMS', 'RFID', '3PL', 'Customer Portal'],
    color: 'from-blue-600 to-indigo-500',
    icon: '🚛',
  },
  {
    id: 9,
    title: 'Pharmaceutical MES with eBMR',
    category: 'MES',
    industry: 'Pharmaceutical',
    year: '2022',
    description: 'Full MES implementation for a tablet manufacturing plant with electronic batch manufacturing records, in-process quality, and complete production traceability.',
    metrics: [
      { label: 'Batch Record Accuracy', value: '100%' },
      { label: 'Release Time', value: '-55%' },
      { label: 'GMP Score', value: 'A+' },
    ],
    tags: ['MES', 'eBMR', 'GMP', 'Quality Management'],
    color: 'from-violet-600 to-fuchsia-500',
    icon: '💊',
  },
]

const categories: Category[] = ['All', 'WMS', 'Pharma', 'Weighbridge', 'MES', 'IoT', 'Custom']

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <main className="bg-background">
      <PageSEO
        title="Projects | Privya Solution LLP"
        description="Explore 150+ successful project deliveries across manufacturing, pharmaceutical, logistics, and warehousing sectors by Privya Solution LLP."
        canonical="/projects"
      />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Our Work
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Proven Results
            <br /><span className="gradient-text-blue">Across Industries</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-text-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2"
          >
            150+ projects delivered with measurable business outcomes for manufacturing,
            pharmaceutical, logistics, and warehousing companies.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-surface border-y border-white/5">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: '12+',  label: 'Industries Served' },
              { value: '98%',  label: 'Client Satisfaction' },
              { value: '8+',   label: 'States Covered' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text-blue mb-2">{stat.value}</div>
                <div className="text-text-muted text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Projects */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="container-xl relative">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-secondary to-accent text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                    : 'bg-white/5 border border-white/10 text-text-muted hover:text-white'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="card-enterprise p-5 sm:p-6 flex flex-col group"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform`}>
                      {project.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-text-muted">{project.industry}</span>
                      <div className="text-xs text-accent font-medium">{project.year}</div>
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-base sm:text-lg mb-3">{project.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-5 p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <TrendingUp className="w-3 h-3 text-green-400 mr-1 flex-shrink-0" />
                          <span className="text-green-400 font-bold text-xs sm:text-sm">{metric.value}</span>
                        </div>
                        <span className="text-text-muted text-xs leading-tight">{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTA />
    </main>
  )
}

export default Projects
