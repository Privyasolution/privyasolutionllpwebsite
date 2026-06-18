import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'

const footerSolutions = [
  { name: 'Warehouse Management System',    href: '/solutions/wms' },
  { name: 'Barcode & Traceability',          href: '/solutions/barcode' },
  { name: 'Pharma Weighing Solution',        href: '/solutions/pharma-weighing' },
  { name: 'Weighbridge Management',          href: '/solutions/weighbridge' },
  { name: 'Manufacturing Execution System',  href: '/solutions/mes' },
  { name: 'IoT & Industrial Automation',     href: '/solutions/iot' },
  { name: 'Annual Maintenance & Support',    href: '/solutions/amc' },
]

const quickLinks = [
  { name: 'Home',        href: '/' },
  { name: 'About Us',    href: '/about' },
  { name: 'Solutions',   href: '/solutions' },
  { name: 'Industries',  href: '/industries' },
  { name: 'Projects',    href: '/projects' },
  { name: 'Contact Us',  href: '/contact' },
]

const industries = [
  'Pharmaceutical',
  'Manufacturing',
  'Warehousing & Logistics',
  'Food & Beverage',
  'Chemical Processing',
]

const SocialLinkedIn = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const SocialX = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const SocialFacebook = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const socialLinks = [
  { label: 'LinkedIn',    href: 'https://www.linkedin.com/company/privya-solution', Icon: SocialLinkedIn },
  { label: 'X (Twitter)', href: 'https://twitter.com/privyasolution',               Icon: SocialX },
  { label: 'Facebook',    href: 'https://www.facebook.com/privyasolution',           Icon: SocialFacebook },
]

const NavColHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-5 pb-3 border-b border-slate-800">
    {children}
  </h4>
)

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link
    to={href}
    className="text-slate-400 text-sm hover:text-white transition-colors duration-150"
  >
    {children}
  </Link>
)

export const Footer: React.FC = () => (
  <footer
    className="relative border-t border-slate-900 overflow-hidden"
    style={{ background: '#060D1A' }}
  >
    {/* ── Animated background: isometric 3D perspective grid ───────── */}
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
      style={{ perspective: '600px' }}
    >
      {/* Horizon glow behind the grid */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(6,182,212,0.14) 0%, rgba(37,99,235,0.06) 45%, transparent 75%)',
        }}
      />

      {/* Isometric grid floor — recedes toward a vanishing point */}
      <div
        className="absolute inset-x-0 bottom-0 animate-pulse-slow"
        style={{
          height: '260%',
          backgroundImage:
            'linear-gradient(rgba(6,182,212,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.22) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
          transform: 'rotateX(62deg) translateZ(0)',
          transformOrigin: 'bottom center',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, black 30%, transparent 78%)',
          maskImage: 'linear-gradient(to top, black 0%, black 30%, transparent 78%)',
        }}
      />

      {/* Corner glows for depth */}
      <div
        className="absolute right-0 top-0 w-[420px] h-[420px] rounded-full opacity-[0.05]"
        style={{
          background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute left-0 top-0 w-[320px] h-[320px] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)',
          transform: 'translate(-30%, -30%)',
        }}
      />

      {/* Ghost outline watermark text, anchored at the bottom of the grid */}
      <div className="absolute inset-x-0 bottom-20 flex flex-col items-center gap-1 leading-none">
        <span
          className="whitespace-nowrap"
          style={{
            fontSize: 'clamp(10.5rem, 9vw, 8rem)',
            letterSpacing: '0.5em',
            fontFamily: 'var(--font-heading)',
            fontWeight: 'bolder',
            color: 'transparent',
            WebkitTextStroke: '5px rgba(255,255,255,0.05)',
          }}
        >
          PRIVYA
        </span>
        <span
          className="whitespace-nowrap"
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 6rem)',
            letterSpacing: '0.5em',
            fontFamily: 'var(--font-heading)',
            fontWeight: 'bolder',
            color: 'transparent',
            WebkitTextStroke: '5px rgba(255,255,255,0.05)',
          }}
        >
          SOLUTION LLP
        </span>
      </div>
    </div>

    {/* Main grid */}
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

        {/* Col 1 — Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-flex items-center mb-5">
            <img
              src="/logo-light.svg"
              alt="Privya Solution LLP"
              className="h-8 w-auto"
              style={{ maxWidth: '160px' }}
            />
          </Link>

          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Industrial technology company delivering enterprise-grade WMS, MES, Pharma
            Weighing, Weighbridge, and IoT automation for manufacturing and pharmaceutical sectors.
          </p>

          {/* Compliance badges */}
          <div className="flex flex-wrap gap-2 mb-7">
            {['GMP Ready', 'ALCOA+', '21 CFR Part 11'].map((badge) => (
              <span
                key={badge}
                className="text-[11px] font-semibold px-2.5 py-1 rounded border text-cyan-400"
                style={{
                  background: 'rgba(6,182,212,0.06)',
                  borderColor: 'rgba(6,182,212,0.18)',
                }}
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-slate-800 bg-slate-800/40 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all duration-150"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Solutions */}
        <div>
          <NavColHeader>Solutions</NavColHeader>
          <ul className="space-y-3">
            {footerSolutions.map((sol) => (
              <li key={sol.href}>
                <NavLink href={sol.href}>{sol.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Quick Links + Industries */}
        <div>
          <NavColHeader>Company</NavColHeader>
          <ul className="space-y-3 mb-8">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href}>{link.name}</NavLink>
              </li>
            ))}
          </ul>

          <NavColHeader>Industries</NavColHeader>
          <ul className="space-y-3">
            {industries.map((ind) => (
              <li key={ind}>
                <NavLink href="/industries">{ind}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div>
          <NavColHeader>Contact</NavColHeader>
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <p className="text-slate-400 text-sm leading-relaxed">
                523, Universal Trade Center,<br />
                Opp. Mahendra Showroom,<br />
                Near Hari Om Circle, L.P. Savani Rd,<br />
                Surat, Gujarat &mdash; 395009
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <a
                href="tel:+919904095104"
                className="text-slate-400 text-sm hover:text-white transition-colors duration-150"
              >
                +91-9904095104
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <a
                href="mailto:sales@privyasolution.com"
                className="text-slate-400 text-sm hover:text-white transition-colors duration-150 break-all"
              >
                sales@privyasolution.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-900 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-slate-500 text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} Privya Solution LLP. All rights reserved. &nbsp;&middot;&nbsp; Surat, Gujarat, India
        </p>
        <div className="flex items-center gap-5 flex-wrap justify-center">
          <Link to="#" className="text-slate-500 text-sm hover:text-slate-300 transition-colors">Privacy Policy</Link>
          <Link to="#" className="text-slate-500 text-sm hover:text-slate-300 transition-colors">Terms of Service</Link>
          <Link to="#" className="text-slate-500 text-sm hover:text-slate-300 transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </div>
  </footer>
)
