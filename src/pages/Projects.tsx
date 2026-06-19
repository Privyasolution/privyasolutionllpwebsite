import React, { useState, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronRight, Phone, MessageSquare, Warehouse, FlaskConical, Cog, Radio, Barcode } from 'lucide-react'
import { viewportConfig } from '@/utils/animations'
import { CTA } from '@/components/sections/CTA'
import { PageSEO } from '@/components/ui/PageSEO'
import { Link } from 'react-router-dom'
import { DigitalScaleIcon } from '@/components/projects/DigitalScaleIcon'
import type { Project } from '@/types'

// ─── DATA ──────────────────────────────────────────────────────────────────────

interface FeaturedProjectCard {
  id: string
  href: string
  badge: string
  badgeColor: string
  client: string
  name: string
  description: string
  logo?: string
  workflow: string[]
}

const featuredProjects: FeaturedProjectCard[] = [
  {
    id: 'ipqc',
    href: '/projects/ipqc-verification',
    badge: 'Pharmaceutical Manufacturing',
    badgeColor: '#F97316',
    client: 'Amneal Pharmaceuticals',
    name: 'QualiWeigh',
    description:
      'GMP-compliant digital dispensing system with direct balance API integration, real-time IPQC validation, dual-operator verification, and 21 CFR Part 11 electronic batch records.',
    logo: '/clients/amneal.jpg',
    workflow: ['Batch Initiation', 'Balance Connect', 'IPQC Auto-Check', 'Dual Verify', 'e-Batch Record', 'Audit Log'],
  },
  {
    id: 'autoweight',
    href: '/projects/auto-weight-capture',
    badge: 'FMCG & Consumer Goods',
    badgeColor: '#10B981',
    client: 'Believe International Limited',
    name: 'WeightSync API',
    description:
      'Multi-station weighing automation with real-time balance API, automated variance detection, supervisor approval workflow, and instant ERP synchronization.',
    logo: '/clients/believe.webp',
    workflow: ['Product Select', 'Auto Tare', 'Weight Capture', 'Variance Check', 'Supervisor OK', 'ERP Sync'],
  },
  {
    id: 'parcel',
    href: '/projects/smart-parcel-verification',
    badge: 'Logistics & Courier',
    badgeColor: '#8B5CF6',
    client: 'Courier & Logistics Operations',
    name: 'VisionVerify',
    description:
      'Auto stable weight detection integrated with IP camera capture — generates an instant photo-embedded PDF receipt per parcel. Zero billing disputes, 5× faster processing.',
    workflow: ['Parcel Scan', 'Weight Lock', 'Camera Capture', 'PDF Receipt', 'WMS Sync'],
  },
  {
    id: 'weighbridge',
    href: '/projects/vehicle-weighbridge',
    badge: 'Steel, Mining & Logistics',
    badgeColor: '#F59E0B',
    client: 'Steel & Logistics Industry',
    name: 'GateWeigh',
    description:
      'Fully unattended weighbridge with RFID vehicle identification, CCTV anti-fraud verification, automatic gross-tare-net calculation, challan generation, and real-time ERP posting.',
    workflow: ['RFID Detect', 'CCTV Verify', 'Gross Weight', 'Load/Unload', 'Tare Weight', 'Net & ERP'],
  },
]

type Category = 'All' | 'WMS' | 'Pharma' | 'Weighbridge' | 'MES' | 'IoT' | 'Custom'

const portfolioProjects: Project[] = [
  {
    id: 1,
    title: 'Multi-Warehouse WMS',
    category: 'WMS',
    industry: 'Textile Manufacturing',
    description: 'End-to-end warehouse management across 3 facilities covering 2.5 lakh sq ft — wave picking, barcode integration, and live enterprise system connectivity.',
    tags: ['WMS', 'Barcode', 'Multi-Location'],
    color: 'from-blue-600 to-cyan-500',
    icon: Warehouse,
  },
  {
    id: 2,
    title: 'GMP Pharma Weighing System',
    category: 'Pharma',
    industry: 'Pharmaceutical',
    description: 'GMP-compliant dispensing for an API manufacturer — direct weighing balance integration, 21 CFR Part 11 electronic records, and automated batch documentation.',
    tags: ['GMP', '21 CFR Part 11', 'Balance API'],
    color: 'from-violet-600 to-purple-500',
    icon: FlaskConical,
  },
  {
    id: 3,
    title: 'Automated Weighbridge',
    category: 'Weighbridge',
    industry: 'Steel Manufacturing',
    description: 'Fully unattended weighbridge with RFID vehicle identification, CCTV integration, anti-fraud mechanisms, and direct ERP connectivity.',
    tags: ['Weighbridge', 'RFID', 'CCTV', 'ERP'],
    color: 'from-orange-600 to-amber-500',
    icon: DigitalScaleIcon,
  },
  {
    id: 4,
    title: 'MES — Injection Molding',
    category: 'MES',
    industry: 'Plastics Manufacturing',
    description: 'Shop-floor digitization for 48 injection molding machines — real-time OEE tracking, downtime management, quality control, and Modbus connectivity.',
    tags: ['MES', 'OEE', 'Modbus', 'Quality'],
    color: 'from-green-600 to-emerald-500',
    icon: Cog,
  },
  {
    id: 5,
    title: 'IoT Plant Monitoring Platform',
    category: 'IoT',
    industry: 'Chemical Manufacturing',
    description: '120+ sensors across production lines — real-time temperature, pressure, and flow monitoring with predictive maintenance alerting.',
    tags: ['IoT', 'MQTT', 'Predictive Maintenance'],
    color: 'from-sky-600 to-blue-500',
    icon: Radio,
  },
  {
    id: 6,
    title: 'Barcode Traceability — Food',
    category: 'Custom',
    industry: 'Food & Beverage',
    description: 'Complete batch traceability with GS1 compliance, FEFO expiry management, and one-click product recall capability.',
    tags: ['Barcode', 'GS1', 'FEFO', 'Recall'],
    color: 'from-cyan-600 to-teal-500',
    icon: Barcode,
  },
]

const CATEGORIES: Category[] = ['All', 'WMS', 'Pharma', 'Weighbridge', 'MES', 'IoT', 'Custom']

const HERO_STATS = [
  { value: '150+', label: 'Projects Delivered'  },
  { value: '7+',   label: 'Industries Served'   },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '5+',   label: 'Years of Expertise'  },
] as const

// ─── PROJECT CARD (listing) ───────────────────────────────────────────────────

const FeaturedCard = memo(({ p, index }: { p: FeaturedProjectCard; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={viewportConfig}
    transition={{ duration: 0.4, delay: index * 0.07 }}
  >
    <Link
      to={p.href}
      className="group block rounded-xl border border-slate-800 hover:border-slate-600 transition-colors duration-200 overflow-hidden"
      style={{ background: '#0B1220' }}
    >
      {/* Top accent */}
      <div className="h-0.5" style={{ background: p.badgeColor }} />

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
          <div className="flex-1 min-w-0">
            <span
              className="inline-block text-xs font-semibold px-2.5 py-1 rounded border mb-4"
              style={{
                background: `${p.badgeColor}10`,
                borderColor: `${p.badgeColor}28`,
                color: p.badgeColor,
              }}
            >
              {p.badge}
            </span>
            <h3 className="text-white font-bold text-xl sm:text-2xl leading-tight mb-1.5">{p.name}</h3>
            <p className="text-slate-400 text-sm">{p.client}</p>
          </div>

          {p.logo && (
            <div className="w-[68px] h-11 rounded-lg bg-white flex items-center justify-center p-2 flex-shrink-0">
              <img
                src={p.logo}
                alt={p.client}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-slate-400 text-base leading-relaxed mb-6">{p.description}</p>

        {/* Workflow preview */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6">
          {p.workflow.map((step, i) => (
            <React.Fragment key={step}>
              <span className="text-xs text-slate-300 bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-md whitespace-nowrap">
                {step}
              </span>
              {i < p.workflow.length - 1 && (
                <ChevronRight className="w-3 h-3 text-slate-600 flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA link */}
        <div
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-150"
          style={{ color: p.badgeColor }}
        >
          View Full Case Study
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
        </div>
      </div>
    </Link>
  </motion.div>
))
FeaturedCard.displayName = 'FeaturedCard'

// ─── PORTFOLIO CARD ─────────────────────────────────────────────────────────

const PortfolioCard = memo(({ project, index }: { project: Project; index: number }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.97 }}
    transition={{ duration: 0.2, delay: index * 0.04 }}
    className="flex flex-col h-full rounded-xl border border-slate-800 p-6 hover:border-slate-600 transition-colors duration-200"
    style={{ background: '#0B1220' }}
  >
    <div className="flex items-center justify-between mb-5">
      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0`}>
        <project.icon className="w-5 h-5 text-white" />
      </div>
      <span className="text-xs px-2.5 py-1 rounded-md border border-slate-700 bg-slate-800 text-slate-300 font-medium">
        {project.category}
      </span>
    </div>
    <p className="text-blue-400 text-xs font-semibold uppercase tracking-wide mb-2">{project.industry}</p>
    <h3 className="text-white font-bold text-lg leading-snug mb-3">{project.title}</h3>
    <p className="text-slate-400 text-base leading-relaxed flex-1 mb-5">{project.description}</p>
    <div className="flex flex-wrap gap-1.5">
      {project.tags.map((t) => (
        <span key={t} className="text-xs px-2.5 py-1 rounded-md border border-slate-700/60 bg-slate-800/60 text-slate-400">
          {t}
        </span>
      ))}
    </div>
  </motion.article>
))
PortfolioCard.displayName = 'PortfolioCard'

// ─── PAGE ──────────────────────────────────────────────────────────────────────

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  const filtered =
    activeCategory === 'All'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory)

  return (
    <motion.main
      className="bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <PageSEO
        title="Projects & Case Studies | Privya Solution LLP"
        description="Explore IPQC Smart Verification, Auto Weight Capture, Smart Parcel Verification, and Vehicle Weighbridge implementations by Privya Solution LLP — 150+ enterprise deployments."
        canonical="/projects"
      />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 65% 50% at 50% -5%, rgba(37,99,235,0.13) 0%, transparent 70%)' }}
        />
        <div className="absolute inset-0 grid-bg opacity-[0.07] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Client Implementations &amp; Case Studies
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
            Proven Results<br />
            <span className="gradient-text-blue">Across Industries</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12">
            150+ enterprise implementations delivering measurable outcomes in pharmaceutical,
            manufacturing, logistics, and warehousing.
          </p>

          {/* Stats */}
          <div
            className="inline-grid grid-cols-2 sm:grid-cols-4 border border-slate-800 rounded-xl overflow-hidden"
            style={{ background: '#0B1220' }}
          >
            {HERO_STATS.map(({ value, label }, i) => (
              <div
                key={label}
                className={`px-7 py-5 text-center ${i < 3 ? 'border-r border-slate-800' : ''}`}
              >
                <div className="text-3xl font-bold gradient-text-blue mb-1">{value}</div>
                <div className="text-slate-400 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED CASE STUDIES ─────────────────────────────────────── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Featured Implementations
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              In-Depth <span className="gradient-text-blue">Case Studies</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Four of our most impactful enterprise deployments — complete with workflow simulations,
              technology stack, and measured outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {featuredProjects.map((p, i) => (
              <FeaturedCard key={p.id} p={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ─────────────────────────────────────────────── */}
      <section
        className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900"
        style={{ background: '#060D1A' }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Project Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              More <span className="gradient-text-blue">Successful Deployments</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              A curated selection of enterprise deployments across WMS, MES, Pharma Weighing,
              Weighbridge, IoT, and custom industrial software.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'border border-slate-700 bg-slate-800/60 text-slate-400 hover:text-white hover:border-slate-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <PortfolioCard key={p.id} project={p} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="border-t border-slate-900 py-20 sm:py-24 text-center" style={{ background: '#020617' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.4 }}
          >
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Let's Build Together
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Ready to become our next<br className="hidden sm:block" /> success story?
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Schedule a free consultation and discover how Privya Solution LLP can digitize
              and automate your operations — on time, on budget, and compliance-ready.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #2563EB, #0891b2)' }}
              >
                <MessageSquare className="w-4 h-4" /> Start a Conversation
              </Link>
              <a
                href="tel:+919904095104"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-slate-300 font-semibold text-base border border-slate-700 hover:border-slate-500 hover:text-white transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <Phone className="w-4 h-4" /> +91-9904095104
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </motion.main>
  )
}

export default Projects
