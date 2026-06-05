import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Package, ScanLine, FlaskConical, Scale, Factory, Cpu, Code, Globe, Shield } from 'lucide-react'
import { viewportConfig } from '@/utils/animations'
import { CTA } from '@/components/sections/CTA'
import { PageSEO } from '@/components/ui/PageSEO'

const allSolutions = [
  { icon: Package, title: 'Warehouse Management System', subtitle: 'Complete warehouse operations', href: '/solutions/wms', gradient: 'from-blue-600 to-cyan-500', glow: 'rgba(37,99,235,0.3)', description: 'End-to-end warehouse management with real-time inventory, smart picking, and ERP integration.' },
  { icon: ScanLine, title: 'Barcode & Traceability', subtitle: 'End-to-end product tracking', href: '/solutions/barcode', gradient: 'from-cyan-600 to-teal-500', glow: 'rgba(6,182,212,0.3)', description: 'Complete product lifecycle tracking using barcode, QR code, and RFID technology.' },
  { icon: FlaskConical, title: 'Pharma Weighing Solution', subtitle: 'GMP-compliant weighing', href: '/solutions/pharma-weighing', gradient: 'from-violet-600 to-purple-500', glow: 'rgba(124,58,237,0.3)', description: 'GMP-compliant dispensing with 21 CFR Part 11 compliance and multi-balance integration.' },
  { icon: Scale, title: 'Weighbridge Management', subtitle: 'Automated vehicle weighing', href: '/solutions/weighbridge', gradient: 'from-orange-600 to-amber-500', glow: 'rgba(234,88,12,0.3)', description: 'Automated weighbridge with RFID vehicle ID, anti-fraud, and ERP integration.' },
  { icon: Factory, title: 'Manufacturing Execution System', subtitle: 'Production floor digitization', href: '/solutions/mes', gradient: 'from-green-600 to-emerald-500', glow: 'rgba(5,150,105,0.3)', description: 'Shop floor digitization with OEE tracking, work orders, and quality management.' },
  { icon: Cpu, title: 'IoT & Industrial Automation', subtitle: 'Smart connected operations', href: '/solutions/iot', gradient: 'from-sky-600 to-blue-500', glow: 'rgba(2,132,199,0.3)', description: 'Connect machines and sensors for predictive maintenance and real-time monitoring.' },
  { icon: Code, title: 'Custom Software Development', subtitle: 'Tailored enterprise solutions', href: '/solutions/custom-software', gradient: 'from-rose-600 to-pink-500', glow: 'rgba(225,29,72,0.3)', description: 'Bespoke software for complex industrial workflows and hardware integrations.' },
  { icon: Globe, title: 'Web Application Development', subtitle: 'Modern enterprise web apps', href: '/solutions/web-development', gradient: 'from-fuchsia-600 to-purple-500', glow: 'rgba(147,51,234,0.3)', description: 'Scalable web applications, portals, and dashboards for enterprise operations.' },
  { icon: Shield, title: 'Annual Maintenance & Support', subtitle: 'Proactive enterprise support', href: '/solutions/amc', gradient: 'from-teal-600 to-cyan-500', glow: 'rgba(20,184,166,0.3)', description: 'Dedicated support, monitoring, and maintenance ensuring maximum system uptime.' },
]

const Solutions: React.FC = () => {
  return (
    <main className="bg-background">
      <PageSEO
        title="Solutions | Privya Solution LLP"
        description="Complete industrial technology solutions: WMS, MES, Pharma Weighing, Weighbridge, Barcode Traceability, IoT Automation, Custom Software. Surat, Gujarat, India."
        canonical="/solutions"
      />
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Complete Solutions Portfolio
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Enterprise-Grade
            <br /><span className="gradient-text-blue">Industrial Solutions</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-text-muted text-xl max-w-2xl mx-auto">
            A complete suite of software, automation, and industrial technology solutions
            built for manufacturing, pharma, logistics, and warehousing operations.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-surface relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="container-xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allSolutions.map((sol, i) => {
              const Icon = sol.icon
              return (
                <motion.div
                  key={sol.href}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportConfig}
                  transition={{ delay: i * 0.07 }}
                  className="card-enterprise p-7 group flex flex-col"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sol.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                    style={{ boxShadow: `0 0 30px ${sol.glow}` }}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{sol.title}</h3>
                  <p className="text-accent text-sm font-medium mb-4">{sol.subtitle}</p>
                  <p className="text-text-muted text-sm leading-relaxed flex-1 mb-6">{sol.description}</p>
                  <Link to={sol.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-accent transition-colors group/link">
                    Explore Solution
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  )
}

export default Solutions

