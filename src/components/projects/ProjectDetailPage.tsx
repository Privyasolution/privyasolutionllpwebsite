import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageSEO } from '@/components/ui/PageSEO'
import { CTA } from '@/components/sections/CTA'
import ProcessFlow from '@/components/service-detail/ProcessFlow'

// ─── Types ────────────────────────────────────────────────────────────────────

export type IconComponent = React.ComponentType<{ className?: string }>

export interface ChallengeItem {
  icon: IconComponent
  title: string
  description: string
}

export interface FeatureItem {
  icon: IconComponent
  title: string
  description: string
}

export interface ProcessFlowConfig {
  slug: string
  title: string
  description: string
  steps: Array<{ step: string; label: string; desc: string }>
}

export interface ProjectData {
  meta: { title: string; description: string; canonical: string }
  hero: {
    badge: string
    badgeColor: string
    client: string
    clientLogo?: string
    projectName: string
    tagline: string
    description: string
    kpis: Array<{ value: string; label: string }>
  }
  challenges: ChallengeItem[]
  processFlow?: ProcessFlowConfig
  features: FeatureItem[]
  results: Array<{ value: string; label: string; description?: string }>
  outcome: string
}

// ─── Animation preset ─────────────────────────────────────────────────────────

const vp = { once: true, margin: '-50px' } as const

// ─── Tiny helpers ─────────────────────────────────────────────────────────────

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">{children}</p>
)

// ─── Main ─────────────────────────────────────────────────────────────────────

export const ProjectDetailPage: React.FC<{
  data: ProjectData
  simulationNode?: React.ReactNode
}> = ({ data, simulationNode }) => {
  const { hero, challenges, processFlow, features, results, outcome } = data

  return (
    <motion.main
      className="bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <PageSEO
        title={data.meta.title}
        description={data.meta.description}
        canonical={data.meta.canonical}
      />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 50% -5%, rgba(37,99,235,0.14) 0%, transparent 68%)',
          }}
        />
        <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-1.5 text-sm text-slate-500 mb-8"
            aria-label="Breadcrumb"
          >
            <Link to="/projects" className="hover:text-slate-300 transition-colors">
              Projects
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-400 truncate max-w-[200px]">{hero.client}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            {/* Left — Text */}
            <div>
              <span
                className="inline-block text-xs font-semibold px-3 py-1.5 rounded border mb-5"
                style={{
                  background: `${hero.badgeColor}14`,
                  borderColor: `${hero.badgeColor}35`,
                  color: hero.badgeColor,
                }}
              >
                {hero.badge}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-3">
                {hero.projectName}
              </h1>

              <p className="text-blue-400 font-semibold text-base mb-5">{hero.tagline}</p>

              <p className="text-slate-300 text-lg leading-relaxed mb-8">{hero.description}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm hover:-translate-y-0.5 transition-all duration-200"
                  style={{ background: 'linear-gradient(135deg, #2563EB, #0891b2)' }}
                >
                  Discuss Your Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-slate-300 font-semibold text-sm border border-slate-700 hover:border-slate-500 hover:text-white transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  All Projects
                </Link>
              </div>
            </div>

            {/* Right — Client card + KPIs */}
            <div className="flex flex-col gap-4">
              {/* Client identity card */}
              <div
                className="rounded-xl border border-slate-800 p-5 flex items-center gap-4 overflow-hidden relative"
                style={{ background: '#0B1220' }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5"
                  style={{ background: hero.badgeColor }}
                />
                {hero.clientLogo && (
                  <div className="w-[72px] h-12 rounded-lg bg-white flex items-center justify-center p-2 flex-shrink-0 ml-2">
                    <img
                      src={hero.clientLogo}
                      alt={hero.client}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                    />
                  </div>
                )}
                <div>
                  <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-0.5">Client</p>
                  <p className="text-white font-bold text-lg leading-tight">{hero.client}</p>
                  <p className="text-slate-400 text-sm mt-0.5">{hero.badge}</p>
                </div>
              </div>

              {/* KPI grid */}
              <div className="grid grid-cols-2 gap-4">
                {hero.kpis.map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-xl border border-slate-800 p-5 text-center"
                    style={{ background: '#0B1220' }}
                  >
                    <div className="text-3xl sm:text-4xl font-bold gradient-text-blue leading-none mb-2">
                      {kpi.value}
                    </div>
                    <div className="text-slate-400 text-sm">{kpi.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUSINESS CHALLENGES ────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900"
        style={{ background: '#060D1A' }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Label>Business Challenges</Label>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Problems We Solved</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {challenges.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="flex gap-4 p-5 rounded-xl border border-slate-800"
                style={{ background: '#0B1220' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.18)' }}
                >
                  <c.icon className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1">{c.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{c.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIMULATION / WORKFLOW ─────────────────────────────────── */}
      {simulationNode ? (
        <div className="border-t border-slate-900">
          {simulationNode}
        </div>
      ) : processFlow ? (
        <section className="border-t border-slate-900 overflow-hidden">
          <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.4 }}
            >
              <Label>Live Process Simulation</Label>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {processFlow.title}
              </h2>
              <p className="text-slate-400 text-base max-w-2xl">{processFlow.description}</p>
            </motion.div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
            <ProcessFlow
              slug={processFlow.slug}
              title={processFlow.title}
              steps={processFlow.steps}
            />
          </div>
        </section>
      ) : null}

      {/* ── CORE FEATURES ──────────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900"
        style={{ background: '#060D1A' }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Label>System Capabilities</Label>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Core Features</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="p-5 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors duration-200"
                style={{ background: '#0B1220' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.2)' }}
                >
                  <f.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-base mb-1.5">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Label>Impact &amp; Outcomes</Label>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Results Delivered</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
            {results.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className="rounded-xl border border-slate-800 p-5 sm:p-6 text-center"
                style={{ background: '#0B1220' }}
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text-blue mb-2 leading-none">
                  {r.value}
                </div>
                <div className="text-white font-semibold text-sm mb-1">{r.label}</div>
                {r.description && (
                  <div className="text-slate-400 text-xs leading-relaxed mt-1">{r.description}</div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.4 }}
            className="rounded-xl border p-6 sm:p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(37,99,235,0.07) 0%, rgba(6,182,212,0.04) 100%)',
              borderColor: 'rgba(37,99,235,0.22)',
            }}
          >
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3">
              Outcome
            </p>
            <p className="text-white text-base sm:text-lg leading-relaxed">{outcome}</p>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 text-center border-t border-slate-900"
        style={{ background: '#060D1A' }}
      >
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.4 }}
          >
            <Label>Need a Similar Solution?</Label>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Let's Build It for Your Organisation
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              We've delivered similar systems for pharmaceutical, FMCG, logistics, and
              manufacturing enterprises. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold text-sm hover:-translate-y-0.5 transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #2563EB, #0891b2)' }}
              >
                Schedule Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919904095104"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-slate-300 font-semibold text-sm border border-slate-700 hover:border-slate-500 hover:text-white transition-all duration-200"
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
