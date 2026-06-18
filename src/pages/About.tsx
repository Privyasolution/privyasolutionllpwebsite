import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, Lightbulb, TrendingUp, Shield, Star, MapPin, Phone, Mail, Building2, Linkedin, CheckCircle2, Cpu, FlaskConical, Scale, Package, Factory, Wifi, Layers, ScanLine } from 'lucide-react'
import { viewportConfig } from '@/utils/animations'
import { CTA } from '@/components/sections/CTA'
import { PageSEO } from '@/components/ui/PageSEO'

const values = [
  { icon: Lightbulb, title: 'Innovation',           description: 'Continuously exploring emerging technologies to deliver forward-thinking solutions that give our clients a competitive edge.', gradient: 'from-yellow-500 to-orange-500' },
  { icon: Shield,    title: 'Integrity',             description: 'Operating with transparency, honesty, and unwavering ethical standards in every client engagement and business relationship.',  gradient: 'from-blue-500 to-cyan-500' },
  { icon: Award,     title: 'Quality',               description: 'Delivering excellence in every line of code, every integration, and every client interaction — no compromise on quality.',      gradient: 'from-violet-500 to-purple-500' },
  { icon: Users,     title: 'Commitment',            description: 'Staying fully invested in your project from discovery to deployment and beyond, ensuring long-term success.',                   gradient: 'from-green-500 to-emerald-500' },
  { icon: Star,      title: 'Customer Success',      description: "Measuring our success by our clients' outcomes — every solution is built to deliver measurable business value.",             gradient: 'from-pink-500 to-rose-500' },
  { icon: TrendingUp, title: 'Continuous Improvement', description: 'Constantly enhancing our methodologies, tools, and skills to stay at the forefront of industrial technology.',             gradient: 'from-cyan-500 to-teal-500' },
]

const teamLeaders = [
  {
    name: 'Jenin Shah',
    title: 'Director',
    photo: '/team/Jeninsir.png',
    fallbackPhoto: '/team/jenin-shah-placeholder.svg',
    initials: 'JS',
    color: 'from-secondary to-cyan-500',
    linkedin: '#',
    bio: 'Leads technology strategy and client delivery with deep expertise in industrial automation, software architecture, and enterprise digital transformation.',
  },
  {
    name: 'Ishani Desai',
    title: 'Director',
    photo: '/team/IshaniDesai.jpg',
    fallbackPhoto: '/team/ishani-desai-placeholder.svg',
    initials: 'ID',
    color: 'from-violet-600 to-purple-500',
    linkedin: '#',
    bio: 'Drives business development and operations, bringing a client-first approach to every engagement and ensuring the highest standards of project delivery.',
  },
]

const TeamCard: React.FC<typeof teamLeaders[0]> = ({ name, title, photo, fallbackPhoto, initials, color, linkedin, bio }) => {
  const [imgError, setImgError] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{ duration: 0.7 }}
      className="group relative overflow-hidden rounded-3xl border border-white/8 bg-surface transition-all duration-500 hover:border-accent/30"
      style={{ boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}
    >
      {/* Photo — tall portrait */}
      <div className="relative h-[460px] sm:h-[520px] overflow-hidden">
        {!imgError ? (
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${color} flex items-center justify-center`}>
            <span className="text-white font-black text-[140px] opacity-15 select-none">{initials}</span>
          </div>
        )}

        {/* Bottom-to-top dark gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/40 to-transparent" />

        {/* Hover color tint */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-8 transition-opacity duration-500 pointer-events-none`} />

        {/* Name + title overlaid at photo bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pb-8">
          <div className={`inline-flex items-center gap-1.5 mb-3 px-3.5 py-1.5 rounded-full bg-gradient-to-r ${color} text-white text-xs font-bold tracking-wide shadow-lg`}>
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            {title}
          </div>
          <h3 className="text-white font-bold text-2xl sm:text-3xl tracking-tight drop-shadow-lg">{name}</h3>
        </div>

        {/* LinkedIn badge */}
        <a
          href={linkedin}
          aria-label={`${name} LinkedIn`}
          className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-accent/50 hover:bg-accent/25 transition-all duration-200 backdrop-blur-md"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>

      {/* Bio strip */}
      <div className="px-6 py-5 border-t border-white/5">
        <p className="text-text-muted text-sm leading-relaxed">{bio}</p>
      </div>

      {/* Bottom accent line on hover */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    </motion.div>
  )
}

const About: React.FC = () => {
  return (
    <main className="bg-background">
      <PageSEO
        title="About Us | Privya Solution LLP"
        description="Learn about Privya Solution LLP — a decade of delivering industrial software, automation, and technology solutions from Surat, Gujarat, India."
        canonical="/about"
      />

      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            About Privya Solution LLP
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
            We Build Industrial
            <br /><span className="gradient-text-blue">Technology That Works</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="text-text-muted text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto px-2">
            Delivering purpose-built software, automation, and industrial technology solutions
            to manufacturing, pharmaceutical, warehousing, and logistics organizations across India.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-surface relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />
        <div className="container-xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportConfig}
              transition={{ duration: 0.7 }} className="card-enterprise p-8 sm:p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-cyan-500 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-text-muted text-base sm:text-lg leading-relaxed">
                  To empower businesses across manufacturing, pharmaceutical, warehousing, and logistics sectors
                  with intelligent software and automation solutions that drive operational excellence,
                  improve traceability, and accelerate sustainable growth.
                </p>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="text-accent font-medium italic text-sm sm:text-base">
                    "We don't just build software — we build competitive advantages."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportConfig}
              transition={{ duration: 0.7 }} className="card-enterprise p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-teal-500 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-text-muted text-base sm:text-lg leading-relaxed">
                  To be India's most trusted industrial technology partner — recognized for delivering
                  complete business technology ecosystems that combine hardware expertise, software innovation,
                  and dedicated support to transform how industrial businesses operate.
                </p>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="text-secondary font-medium italic text-sm sm:text-base">
                    "Building India's connected industrial future, one solution at a time."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container-xl relative">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Core Values
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
              transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Principles That <span className="gradient-text-blue">Drive Us</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportConfig} transition={{ delay: i * 0.08 }} className="card-enterprise p-6 sm:p-8 group">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-3">{value.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Leadership Team ─────────────────────────────────────────────── */}
      <section className="section-padding bg-surface relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />

        <div className="container-xl relative">
          <div className="text-center mb-14">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              Meet Our Leadership
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
              transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="gradient-text-blue">Team Leaders</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
              transition={{ delay: 0.2 }} className="text-text-muted text-base sm:text-lg max-w-xl mx-auto">
              Experienced professionals driving innovation and excellence in every solution we deliver.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamLeaders.map((leader) => (
              <TeamCard key={leader.name} {...leader} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container-xl relative">
          <div className="text-center mb-14">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Why Choose Us
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
              transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              What Sets Us <span className="gradient-text-blue">Apart</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
              transition={{ delay: 0.2 }} className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto mt-4">
              We combine deep industrial domain expertise with modern technology to deliver solutions that actually work on the shop floor.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Award, title: 'Proven Track Record', desc: '150+ successful deployments across manufacturing, pharma, warehousing, and logistics sectors with measurable outcomes.', gradient: 'from-blue-500 to-cyan-500' },
              { icon: Cpu, title: 'Hardware-to-Cloud Expertise', desc: 'From weighing scale integrations and RFID readers to cloud dashboards — we handle the full technology stack.', gradient: 'from-violet-500 to-purple-500' },
              { icon: Layers, title: 'End-to-End Delivery', desc: 'Discovery, design, development, hardware setup, training, and AMC support — one partner for the entire project lifecycle.', gradient: 'from-green-500 to-emerald-500' },
              { icon: Shield, title: 'Compliance-Ready Solutions', desc: 'GMP, 21 CFR Part 11, and audit-trail requirements are built into our pharmaceutical and industrial solutions by design.', gradient: 'from-orange-500 to-amber-500' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportConfig} transition={{ delay: i * 0.1 }} className="card-enterprise p-6 group">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="section-padding bg-surface relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container-xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportConfig}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                Industry Expertise
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                Deep Domain Knowledge <br /><span className="gradient-text-blue">Across Industries</span>
              </h2>
              <p className="text-text-muted text-base leading-relaxed mb-8">
                Our solutions are purpose-built for the operational realities of each industry — not generic software adapted as an afterthought.
                We understand the compliance requirements, hardware environments, and workflow challenges that matter most to your sector.
              </p>
              <div className="space-y-3">
                {[
                  'GMP & 21 CFR Part 11 for pharmaceutical manufacturing',
                  'RFID vehicle tracking for steel, mining, and logistics',
                  'Electronic batch records for process industries',
                  'Multi-client inventory for 3PL and distribution',
                  'OEE and machine connectivity for discrete manufacturing',
                  'Weighing device integration across all industrial segments',
                ].map((point, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportConfig} transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3 text-text-muted text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    {point}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FlaskConical, label: 'Pharmaceutical',     color: '#8B5CF6', bg: 'rgba(139,92,246,0.12)',  border: 'rgba(139,92,246,0.25)', detail: 'GMP Weighing · MES · eBMR' },
                { icon: Factory,      label: 'Manufacturing',      color: '#10B981', bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.25)', detail: 'WMS · MES · OEE Tracking' },
                { icon: Package,      label: 'Warehousing & 3PL',  color: '#2563EB', bg: 'rgba(37,99,235,0.12)',  border: 'rgba(37,99,235,0.25)',  detail: 'Multi-Site WMS · RFID' },
                { icon: Scale,        label: 'Steel & Mining',      color: '#F59E0B', bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.25)', detail: 'Weighbridge · Anti-Fraud' },
                { icon: Wifi,         label: 'IoT & Automation',   color: '#06B6D4', bg: 'rgba(6,182,212,0.12)',  border: 'rgba(6,182,212,0.25)',  detail: 'Sensors · SCADA · MQTT' },
                { icon: ScanLine,     label: 'Food & Logistics',   color: '#EC4899', bg: 'rgba(236,72,153,0.12)', border: 'rgba(236,72,153,0.25)', detail: 'Traceability · GS1 · FEFO' },
              ].map((ind, i) => {
                const Icon = ind.icon
                return (
                  <motion.div key={ind.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportConfig} transition={{ delay: i * 0.07 }}
                    className="p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                    style={{ background: ind.bg, borderColor: ind.border }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: `${ind.color}25`, border: `1px solid ${ind.color}40` }}>
                      <Icon className="w-4.5 h-4.5" style={{ color: ind.color }} />
                    </div>
                    <div className="text-white font-semibold text-sm mb-1">{ind.label}</div>
                    <div className="text-text-muted text-xs leading-snug">{ind.detail}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="container-xl relative">
          <div className="text-center mb-14">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Core Capabilities
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
              transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              What We <span className="gradient-text-blue">Build & Deliver</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Enterprise Software Development', desc: 'React + Vite frontend, FastAPI backend, PostgreSQL database — modern, maintainable, and scalable.', tags: ['React + Vite', 'FastAPI', 'PostgreSQL'] },
              { title: 'Industrial Device Integration', desc: 'Native connectivity with weighing scales, barcode scanners, RFID readers, PLCs, and SCADA systems.', tags: ['Weighing Devices', 'RFID', 'PLC / SCADA'] },
              { title: 'IoT & Sensor Networks', desc: 'Deploy and connect industrial IoT sensors for real-time monitoring, alerts, and predictive maintenance.', tags: ['MQTT', 'Edge Computing', 'Dashboards'] },
              { title: 'Enterprise System Integration', desc: 'REST API bridges and middleware for SAP, Tally, and legacy enterprise systems.', tags: ['REST APIs', 'SAP', 'Tally'] },
              { title: 'Business Process Solutions', desc: 'Field-ready Android and web apps for supervisors, operators, and management — all responsive and offline-capable.', tags: ['Android', 'Web Apps', 'Offline Mode'] },
              { title: 'Post-Deployment & AMC', desc: 'Comprehensive annual maintenance contracts with remote and on-site support, upgrades, and training.', tags: ['Remote Support', 'On-site Service', 'Training'] },
            ].map((cap, i) => (
              <motion.div key={cap.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig} transition={{ delay: i * 0.08 }}
                className="card-enterprise p-6 group hover:border-accent/20 transition-colors">
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-accent transition-colors">{cap.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-5">{cap.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {cap.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-accent/8 border border-accent/15 text-accent/80 font-tech">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="section-padding bg-surface relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="container-xl relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
              className="card-enterprise p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-cyan-500 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Headquarters</h3>
              <div className="flex items-start justify-center gap-2 text-text-muted text-sm">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-left">523, Universal Trade Center, Opp. Mahendra Showroom, Near Hari Om Circle, L.P. Savani Rd, Surat, Gujarat</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
              transition={{ delay: 0.1 }} className="card-enterprise p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-teal-500 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Contact</h3>
              <div className="space-y-2">  
                <div className="flex items-center justify-center gap-2 text-text-muted text-sm">
                  <Mail className="w-4 h-4 text-accent" />
                  <a href="mailto:sales@privyasolution.com" className="hover:text-white break-all">sales@privyasolution.com</a>
                </div>
                <div className="flex items-center justify-center gap-2 text-text-muted text-sm">
                  <Phone className="w-4 h-4 text-accent" />
                  <a href="tel:+919904095104" className="hover:text-white">+91-9904095104</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}

export default About
