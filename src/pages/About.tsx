import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, Lightbulb, TrendingUp, Shield, Star, MapPin, Phone, Mail, Building2, Linkedin } from 'lucide-react'
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

const milestones = [
  { year: '2014', event: 'Company Founded',             detail: 'Privya Solution LLP established in Surat, Gujarat with a focus on industrial software.' },
  { year: '2016', event: 'First WMS Deployment',        detail: 'Successfully deployed our first Warehouse Management System for a leading Surat manufacturer.' },
  { year: '2018', event: 'Pharma Division Launch',      detail: 'Launched dedicated pharmaceutical weighing and compliance solutions for the pharma sector.' },
  { year: '2019', event: 'IoT Integration',             detail: 'Integrated IoT capabilities, connecting machines and sensors to cloud-based monitoring platforms.' },
  { year: '2021', event: '100+ Projects Milestone',     detail: 'Crossed 100 successful project deliveries across manufacturing, pharma, and logistics sectors.' },
  { year: '2023', event: 'Pan-India Expansion',         detail: 'Expanded operations to serve clients across 8+ states in India.' },
  { year: '2024', event: 'MES Platform Launch',         detail: 'Released next-generation Manufacturing Execution System with real-time OEE analytics.' },
  { year: '2025', event: '150+ Projects & Beyond',      detail: 'Serving 150+ clients with comprehensive industrial technology and automation solutions.' },
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
            A decade of experience delivering software, automation, and industrial solutions
            to manufacturing, pharmaceutical, and logistics organizations across India.
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

      {/* Company Timeline */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="container-xl relative">
          <div className="text-center mb-14">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              Company Journey
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig}
              transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              A Decade of <span className="gradient-text-blue">Growth &amp; Innovation</span>
            </motion.h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary/30 to-transparent hidden md:block" />
            {milestones.map((milestone, i) => (
              <motion.div key={milestone.year} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }} viewport={viewportConfig} transition={{ delay: i * 0.08 }}
                className={`flex items-center gap-6 sm:gap-8 mb-8 sm:mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="card-enterprise p-5 sm:p-6 inline-block w-full">
                    <div className="text-accent text-sm font-semibold mb-1">{milestone.year}</div>
                    <div className="text-white font-bold text-base sm:text-lg mb-2">{milestone.event}</div>
                    <div className="text-text-muted text-sm leading-relaxed">{milestone.detail}</div>
                  </div>
                </div>
                <div className="hidden md:flex flex-col items-center relative z-10">
                  <div className="w-4 h-4 rounded-full bg-secondary ring-4 ring-secondary/20" />
                </div>
                <div className="hidden md:block flex-1" />
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
                  <a href="mailto:privyasolution@gmail.com" className="hover:text-white break-all">privyasolution@gmail.com</a>
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
