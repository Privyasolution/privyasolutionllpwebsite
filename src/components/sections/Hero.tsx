import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Download, ChevronDown } from 'lucide-react'
import { useMouseParallax } from '@/hooks/useMouseParallax'

/* ─── Animated industrial background ─────────────────────────────────────── */
const HeroBackground: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
    {/* Base grid */}
    <div className="absolute inset-0 grid-bg opacity-30" />

    {/* Edge fades */}
    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />

    {/* Large hero glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[900px] h-[700px] bg-secondary/25 rounded-full blur-[140px]" />
    <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />
    <div className="absolute bottom-1/4 left-1/5 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px]" />

    {/* Animated circuit nodes */}
    <svg
      className="absolute inset-0 w-full h-full opacity-35"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="hLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(6,182,212,0)" />
          <stop offset="50%" stopColor="rgba(6,182,212,0.45)" />
          <stop offset="100%" stopColor="rgba(6,182,212,0)" />
        </linearGradient>
        <filter id="nodeGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Horizontal data lines */}
      {[120, 260, 400, 520, 660].map((y, i) => (
        <line key={y} x1="0" y1={y} x2="1440" y2={y} stroke="url(#hLineGrad)" strokeWidth="0.6">
          <animate attributeName="opacity" values="0.15;0.5;0.15" dur={`${4 + i}s`} repeatCount="indefinite" />
        </line>
      ))}

      {/* Vertical data lines */}
      {[180, 360, 540, 720, 900, 1080, 1260].map((x, i) => (
        <line key={x} x1={x} y1="0" x2={x} y2="800" stroke="url(#hLineGrad)" strokeWidth="0.4">
          <animate attributeName="opacity" values="0.1;0.35;0.1" dur={`${5 + i * 0.4}s`} repeatCount="indefinite" />
        </line>
      ))}

      {/* Network nodes */}
      {[
        { cx: 180, cy: 120 }, { cx: 360, cy: 260 }, { cx: 540, cy: 120 },
        { cx: 900, cy: 260 }, { cx: 1080, cy: 120 }, { cx: 1260, cy: 260 },
        { cx: 180, cy: 520 }, { cx: 720, cy: 400 }, { cx: 1260, cy: 520 },
        { cx: 360, cy: 660 }, { cx: 900, cy: 660 }, { cx: 1080, cy: 520 },
      ].map((n, i) => (
        <g key={i} filter="url(#nodeGlow)">
          <circle cx={n.cx} cy={n.cy} r="16" fill="rgba(6,182,212,0.06)">
            <animate attributeName="r" values="16;24;16" dur={`${3 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={n.cx} cy={n.cy} r="4" fill="rgba(6,182,212,0.9)">
            <animate attributeName="opacity" values="0.5;1;0.5" dur={`${2 + i * 0.25}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* Moving data packets */}
      {[
        { path: "M 0 120 L 1440 120", dur: "6s" },
        { path: "M 1440 260 L 0 260", dur: "8s" },
        { path: "M 0 520 L 1440 520", dur: "7s" },
        { path: "M 180 0 L 180 800", dur: "9s" },
        { path: "M 1080 800 L 1080 0", dur: "5s" },
      ].map((p, i) => (
        <circle key={i} r="3" fill="#06B6D4" opacity="0.8">
          <animateMotion dur={p.dur} repeatCount="indefinite" path={p.path} />
        </circle>
      ))}
    </svg>

    {/* Floating industrial metric cards - hidden on mobile */}
    {([
      { pos: 'top-[18%] left-[5%]',  label: 'WMS Active',     value: '99.8%', color: '#06B6D4', delay: 1.6 },
      { pos: 'top-[12%] right-[6%]', label: 'Automation',     value: 'LIVE',  color: '#2563EB', delay: 2.0 },
      { pos: 'bottom-[30%] right-[5%]', label: 'MES Uptime',  value: '24/7',  color: '#10B981', delay: 2.4 },
      { pos: 'bottom-[35%] left-[4%]',  label: 'Integrations',value: '50+',   color: '#8B5CF6', delay: 2.8 },
    ] as const).map((card, i) => (
      <motion.div
        key={i}
        className={`absolute hidden lg:block ${card.pos}`}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: card.delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4 + i * 0.8, repeat: Infinity, ease: 'easeInOut' }}
          className="glass rounded-2xl px-5 py-4 border border-white/10 shadow-2xl min-w-[130px]"
          style={{ boxShadow: `0 0 40px ${card.color}30` }}
        >
          <div className="text-xs text-text-muted mb-1 font-medium">{card.label}</div>
          <div className="text-2xl font-bold" style={{ color: card.color }}>{card.value}</div>
          <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: card.color }}
              initial={{ width: 0 }}
              animate={{ width: '75%' }}
              transition={{ delay: card.delay + 0.5, duration: 1.2 }}
            />
          </div>
        </motion.div>
      </motion.div>
    ))}

    {/* Large industrial dashboard frame - right side decoration */}
    <motion.div
      className="absolute hidden xl:block right-[3%] top-1/2 -translate-y-1/2 w-72 opacity-20"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 0.2, x: 0 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <div className="rounded-2xl border border-accent/30 p-4 bg-accent/5">
        <div className="text-xs text-accent/70 mb-3 font-mono">PRODUCTION MONITOR</div>
        {['Line 01', 'Line 02', 'Line 03', 'Line 04'].map((line, i) => (
          <div key={line} className="flex items-center gap-2 mb-2">
            <span className="text-xs text-white/50 w-12">{line}</span>
            <div className="flex-1 h-1.5 rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent to-secondary"
                initial={{ width: 0 }}
                animate={{ width: `${[78, 92, 65, 88][i]}%` }}
                transition={{ delay: 2 + i * 0.2, duration: 1 }}
              />
            </div>
            <span className="text-xs text-accent/70">{[78, 92, 65, 88][i]}%</span>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
)

/* ─── Main Hero ───────────────────────────────────────────────────────────── */
export const Hero: React.FC = () => {
  const parallax = useMouseParallax(0.012)
  const { scrollY } = useScroll()
  const y       = useTransform(scrollY, [0, 600], [0, 180])
  const opacity = useTransform(scrollY, [0, 380], [1, 0])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      <HeroBackground />

      {/* Subtle parallax layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: parallax.x, y: parallax.y }}
      >
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-accent/8 rounded-full blur-3xl" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-accent/25 text-accent text-xs sm:text-sm font-medium mb-8 sm:mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Industrial Technology &amp; Automation Solutions
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.04] mb-6 sm:mb-8"
        >
          Transforming Businesses
          <br />
          <span className="gradient-text">Through Intelligent</span>
          <br />
          <span className="text-white">Software &amp; Automation</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-text-muted text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10 sm:mb-14 px-2"
        >
          Privya Solution LLP helps organizations streamline operations, improve efficiency,
          and accelerate growth through innovative software, automation, and industrial technology solutions.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-secondary to-accent text-white font-semibold text-base shadow-[0_0_40px_rgba(37,99,235,0.45)] hover:shadow-[0_0_60px_rgba(37,99,235,0.75)] transition-all duration-300 hover:-translate-y-1 group"
          >
            Request Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/12 text-white font-semibold text-base hover:bg-white/10 hover:border-accent/35 transition-all duration-300"
          >
            Explore Solutions
          </Link>
          <a
            href="/brochure.pdf"
            download
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/12 text-white font-semibold text-base hover:bg-white/10 hover:border-accent/35 transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Download Brochure
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — well below content with plenty of breathing room */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted z-20"
      >
        <span className="text-xs uppercase tracking-[0.2em] hidden sm:block">Scroll to explore</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
