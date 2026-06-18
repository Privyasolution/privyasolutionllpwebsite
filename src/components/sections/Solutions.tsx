import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Package, ScanLine, FlaskConical, Scale, Factory, Cpu, Code, Shield, CheckCircle2 } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { viewportConfig } from '@/utils/animations'

const solutions = [
  {
    id: 'wms',
    icon: Package,
    title: 'Warehouse Management System',
    subtitle: 'Complete warehouse operations control',
    description: 'End-to-end warehouse management with real-time inventory visibility, smart putaway, picking optimization, and advanced reporting dashboards.',
    features: ['Real-time Inventory', 'Barcode & RFID Integration', 'Smart Picking', 'Multi-Warehouse Support'],
    href: '/solutions/wms',
    gradient: 'from-blue-600 to-cyan-500',
    headerBg: 'linear-gradient(135deg, #1d4ed8, #0891b2)',
    glow: '#2563EB',
    category: 'Core',
  },
  {
    id: 'barcode',
    icon: ScanLine,
    title: 'Barcode & Traceability System',
    subtitle: 'Complete product traceability',
    description: 'Advanced barcode, QR code, and RFID-based traceability systems ensuring complete product lifecycle tracking from raw material to dispatch.',
    features: ['Barcode / QR / RFID', 'Batch Traceability', 'Expiry Management', 'Audit Trail'],
    href: '/solutions/barcode',
    gradient: 'from-cyan-600 to-teal-500',
    headerBg: 'linear-gradient(135deg, #0891b2, #0d9488)',
    glow: '#06B6D4',
    category: 'Core',
  },
  {
    id: 'pharma',
    icon: FlaskConical,
    title: 'Pharma Weighing Solution',
    subtitle: 'GMP-compliant weighing control',
    description: 'Precision pharmaceutical weighing management with full GMP compliance, electronic batch records, and multi-balance integration.',
    features: ['GMP Compliant', 'Electronic Batch Records', 'Multi-Balance Integration', '21 CFR Part 11'],
    href: '/solutions/pharma-weighing',
    gradient: 'from-violet-600 to-purple-500',
    headerBg: 'linear-gradient(135deg, #7c3aed, #9333ea)',
    glow: '#8B5CF6',
    category: 'Pharma',
  },
  {
    id: 'weighbridge',
    icon: Scale,
    title: 'Weighbridge Management System',
    subtitle: 'Automated vehicle weighing',
    description: 'Intelligent weighbridge management with automated vehicle detection, RFID integration, and comprehensive reporting for logistics operations.',
    features: ['RFID Vehicle Detection', 'Automated Capture', 'Anti-Cheat Features', 'Enterprise System Integration'],
    href: '/solutions/weighbridge',
    gradient: 'from-orange-600 to-amber-500',
    headerBg: 'linear-gradient(135deg, #ea580c, #d97706)',
    glow: '#F59E0B',
    category: 'Logistics',
  },
  {
    id: 'mes',
    icon: Factory,
    title: 'Manufacturing Execution System',
    subtitle: 'Production floor digitization',
    description: 'Complete shop floor digitization with work order management, OEE tracking, quality control, and real-time production monitoring.',
    features: ['Work Order Management', 'OEE Tracking', 'Quality Control', 'Downtime Analysis'],
    href: '/solutions/mes',
    gradient: 'from-green-600 to-emerald-500',
    headerBg: 'linear-gradient(135deg, #16a34a, #059669)',
    glow: '#10B981',
    category: 'Manufacturing',
  },
  {
    id: 'iot',
    icon: Cpu,
    title: 'IoT & Industrial Automation',
    subtitle: 'Smart connected operations',
    description: 'Industrial IoT solutions connecting machines, sensors, and systems for intelligent automation, predictive maintenance, and real-time monitoring.',
    features: ['Machine Connectivity', 'Sensor Integration', 'Predictive Maintenance', 'Cloud Analytics'],
    href: '/solutions/iot',
    gradient: 'from-sky-600 to-blue-500',
    headerBg: 'linear-gradient(135deg, #0284c7, #2563EB)',
    glow: '#3B82F6',
    category: 'Automation',
  },
  {
    id: 'custom',
    icon: Code,
    title: 'Custom Enterprise Solutions',
    subtitle: 'Tailored industrial software',
    description: 'Bespoke software development for complex industrial workflows, hardware integrations, and specialized enterprise applications — built to your exact operational requirements.',
    features: ['Business Process Analysis', 'Industrial Workflow Design', 'Hardware Integration', 'Legacy Modernization'],
    href: '/solutions/custom-software',
    gradient: 'from-rose-600 to-pink-500',
    headerBg: 'linear-gradient(135deg, #e11d48, #db2777)',
    glow: '#F43F5E',
    category: 'Development',
  },
  {
    id: 'amc',
    icon: Shield,
    title: 'Annual Maintenance & Support',
    subtitle: 'Proactive enterprise support',
    description: 'Comprehensive maintenance contracts ensuring maximum uptime, performance optimization, and continuous improvement for all deployed solutions.',
    features: ['Dedicated Support', 'Preventive Maintenance', 'SLA Agreements', 'Remote Monitoring'],
    href: '/solutions/amc',
    gradient: 'from-slate-500 to-slate-600',
    headerBg: 'linear-gradient(135deg, #334155, #475569)',
    glow: '#64748B',
    category: 'Support',
  },
]

const categoryBadge: Record<string, string> = {
  Core:          'bg-blue-500/15 text-blue-300 border-blue-500/25',
  Pharma:        'bg-violet-500/15 text-violet-300 border-violet-500/25',
  Logistics:     'bg-orange-500/15 text-orange-300 border-orange-500/25',
  Manufacturing: 'bg-green-500/15 text-green-300 border-green-500/25',
  Automation:    'bg-sky-500/15 text-sky-300 border-sky-500/25',
  Development:   'bg-rose-500/15 text-rose-300 border-rose-500/25',
  Support:       'bg-slate-500/15 text-slate-300 border-slate-500/25',
}

export const Solutions: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #020617 0%, #070F1F 50%, #020617 100%)' }}
    >
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-xl relative">
        <SectionHeader
          badge="Solutions Portfolio"
          title="Enterprise-Grade"
          titleHighlight="Industrial Solutions"
          subtitle="A comprehensive suite of software and automation solutions designed for manufacturing, pharma, logistics, and warehousing operations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => {
            const Icon = sol.icon
            const isHovered = hoveredId === sol.id

            return (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                onMouseEnter={() => setHoveredId(sol.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative flex flex-col rounded-2xl border border-white/7 overflow-hidden transition-all duration-400"
                style={{
                  background: 'rgba(11,18,32,0.85)',
                  boxShadow: isHovered
                    ? `0 0 0 1px ${sol.glow}50, 0 0 50px ${sol.glow}20, 0 20px 50px rgba(0,0,0,0.4)`
                    : '0 8px 24px rgba(0,0,0,0.25)',
                  transform: isHovered ? 'translateY(-4px)' : undefined,
                }}
              >
                {/* Gradient header band */}
                <div
                  className="relative flex items-end p-6 pb-5 overflow-hidden"
                  style={{ background: sol.headerBg, minHeight: '120px' }}
                >
                  {/* Noise / texture overlay */}
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                    }}
                  />
                  {/* Large ghost icon */}
                  <div className="absolute -right-4 -top-4 opacity-10">
                    <Icon className="w-28 h-28 text-white" />
                  </div>

                  {/* Icon box */}
                  <div className="relative z-10 flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: 'rgba(255,255,255,0.20)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255,255,255,0.25)',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                      }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <span className={`inline-block text-xs px-2.5 py-1 rounded-full border font-semibold mb-1.5 ${categoryBadge[sol.category]}`}
                        style={{ background: 'rgba(0,0,0,0.25)' }}>
                        {sol.category}
                      </span>
                      <div className="text-white/80 text-xs font-medium">{sol.subtitle}</div>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-3 leading-snug">{sol.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-5 flex-1">{sol.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-y-2 gap-x-3 mb-6">
                    {sol.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-1.5 text-xs text-text-muted">
                        <CheckCircle2
                          className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                          style={{ color: sol.glow }}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to={sol.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold group/link transition-all duration-200"
                    style={{ color: sol.glow }}
                  >
                    Explore Solution
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white font-semibold hover:bg-white/5 hover:border-accent/30 transition-all duration-300 group"
          >
            View All Solutions
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
