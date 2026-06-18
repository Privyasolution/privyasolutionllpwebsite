import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight, Package, ScanLine, FlaskConical, Scale, Factory, Cpu, Shield } from 'lucide-react'

const solutions = [
  { name: 'Warehouse Management System',   href: '/solutions/wms',            Icon: Package,    color: 'text-blue-400',   bg: 'bg-blue-500/10' },
  { name: 'Barcode & Traceability',         href: '/solutions/barcode',        Icon: ScanLine,   color: 'text-cyan-400',   bg: 'bg-cyan-500/10' },
  { name: 'Pharma Weighing Solution',       href: '/solutions/pharma-weighing',Icon: FlaskConical,color: 'text-violet-400',bg: 'bg-violet-500/10' },
  { name: 'Weighbridge Management',         href: '/solutions/weighbridge',    Icon: Scale,      color: 'text-orange-400', bg: 'bg-orange-500/10' },
  { name: 'Manufacturing Execution System', href: '/solutions/mes',            Icon: Factory,    color: 'text-green-400',  bg: 'bg-green-500/10' },
  { name: 'IoT & Industrial Automation',    href: '/solutions/iot',            Icon: Cpu,        color: 'text-sky-400',    bg: 'bg-sky-500/10' },
  { name: 'Annual Maintenance & Support',   href: '/solutions/amc',            Icon: Shield,     color: 'text-teal-400',   bg: 'bg-teal-500/10' },
]

const navLinks = [
  { name: 'Home',       href: '/' },
  { name: 'About',      href: '/about' },
  { name: 'Solutions',  href: '/solutions', hasDropdown: true },
  { name: 'Industries', href: '/industries' },
  { name: 'Projects',   href: '/projects' },
  { name: 'Contact',    href: '/contact' },
]

export const Header: React.FC = () => {
  const [isScrolled,    setIsScrolled]    = useState(false)
  const [mobileOpen,    setMobileOpen]    = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location    = useLocation()
  const { scrollY } = useScroll()
  const headerBg    = useTransform(scrollY, [0, 80], ['rgba(2,6,23,0)', 'rgba(2,6,23,0.97)'])

  useEffect(() => scrollY.on('change', (v) => setIsScrolled(v > 40)), [scrollY])
  useEffect(() => { setMobileOpen(false); setSolutionsOpen(false) }, [location])
  useEffect(() => {
    const cb = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setSolutionsOpen(false)
    }
    document.addEventListener('mousedown', cb)
    return () => document.removeEventListener('mousedown', cb)
  }, [])
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        style={{ backgroundColor: headerBg }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'backdrop-blur-2xl border-b border-white/8 shadow-2xl shadow-black/40' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/logo-light.svg" alt="Privya Solution LLP" className="h-9 sm:h-10 md:h-11 w-auto" style={{ maxWidth: '175px' }} />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative" ref={link.hasDropdown ? dropdownRef : undefined}>
                  {link.hasDropdown ? (
                    <button
                      onClick={() => setSolutionsOpen(!solutionsOpen)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        location.pathname.startsWith('/solutions') || solutionsOpen
                          ? 'text-accent bg-accent/8'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                      <motion.span animate={{ rotate: solutionsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </motion.span>
                    </button>
                  ) : (
                    <Link to={link.href}
                      className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        location.pathname === link.href
                          ? 'text-accent bg-accent/8'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* ── Dropdown ─────────────────────────────────────────── */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {solutionsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] rounded-2xl overflow-hidden shadow-[0_8px_80px_rgba(0,0,0,0.7)] border border-white/12"
                          style={{ background: 'rgba(8,14,28,0.98)', backdropFilter: 'blur(24px)' }}
                        >
                          {/* Dropdown header */}
                          <div className="px-5 py-4 border-b border-white/8 flex items-center justify-between">
                            <div>
                              <div className="text-white font-semibold text-sm">Our Solutions</div>
                              <div className="text-text-muted text-xs mt-0.5">Complete industrial technology portfolio</div>
                            </div>
                            <Link to="/solutions" className="text-xs text-accent font-medium hover:underline flex items-center gap-1">
                              View All <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>

                          {/* Solution items — 2-column grid */}
                          <div className="p-3 grid grid-cols-2 gap-1">
                            {solutions.map((sol) => {
                              const { Icon } = sol
                              return (
                                <Link
                                  key={sol.href}
                                  to={sol.href}
                                  className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/6 transition-all duration-150 group"
                                >
                                  <div className={`w-8 h-8 rounded-lg ${sol.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                                    <Icon className={`w-4 h-4 ${sol.color}`} />
                                  </div>
                                  <span className="text-sm text-white/75 group-hover:text-white transition-colors leading-tight">{sol.name}</span>
                                </Link>
                              )
                            })}
                          </div>

                          {/* Dropdown footer */}
                          <div className="px-5 py-3 border-t border-white/8 bg-white/[0.02]">
                            <Link to="/contact"
                              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-secondary to-accent text-white text-sm font-semibold hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-200">
                              Request Free Consultation
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link to="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-secondary to-accent text-white text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-0.5">
                Get Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu"
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Menu ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] overflow-y-auto lg:hidden"
            style={{ background: 'rgba(2,6,23,1)', backdropFilter: 'blur(24px)' }}
          >
            {/* Mobile logo + close row */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
              <img src="/logo-light.svg" alt="Privya Solution LLP" className="h-8 w-auto" style={{ maxWidth: '150px' }} />
              <button onClick={() => setMobileOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-5 py-6">
              <nav className="space-y-1 mb-6">
                {navLinks.map((link, i) => (
                  <motion.div key={link.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    {link.hasDropdown ? (
                      <>
                        <button onClick={() => setSolutionsOpen(!solutionsOpen)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-white/80 font-medium text-base hover:bg-white/5 transition-colors">
                          {link.name}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {solutionsOpen && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-3">
                              {solutions.map(({ name, href, Icon, color, bg }) => (
                                <Link key={href} to={href}
                                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all text-sm">
                                  <div className={`w-7 h-7 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}>
                                    <Icon className={`w-3.5 h-3.5 ${color}`} />
                                  </div>
                                  {name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link to={link.href}
                        className={`flex items-center px-4 py-3 font-medium text-base rounded-xl transition-all ${
                          location.pathname === link.href ? 'text-accent bg-accent/8' : 'text-white/80 hover:text-white hover:bg-white/5'
                        }`}>
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              <Link to="/contact"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-secondary to-accent text-white font-semibold mb-6">
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Mobile contact info */}
              <div className="pt-5 border-t border-white/8 space-y-3">
                <a href="tel:+919904095104" className="flex items-center gap-3 text-text-muted text-sm hover:text-white transition-colors">
                  📞 +91-9904095104
                </a>
                <a href="mailto:sales@privyasolution.com" className="flex items-center gap-3 text-text-muted text-sm hover:text-white transition-colors">
                  ✉️ sales@privyasolution.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
