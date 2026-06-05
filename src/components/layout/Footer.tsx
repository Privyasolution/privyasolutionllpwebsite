import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Globe, ArrowUpRight, Download } from 'lucide-react'

const footerSolutions = [
  { name: 'Warehouse Management System',   href: '/solutions/wms' },
  { name: 'Barcode & Traceability',         href: '/solutions/barcode' },
  { name: 'Pharma Weighing Solution',       href: '/solutions/pharma-weighing' },
  { name: 'Weighbridge Management',         href: '/solutions/weighbridge' },
  { name: 'Manufacturing Execution System', href: '/solutions/mes' },
  { name: 'IoT & Industrial Automation',    href: '/solutions/iot' },
  { name: 'Custom Software Development',    href: '/solutions/custom-software' },
  { name: 'Web Application Development',    href: '/solutions/web-development' },
  { name: 'Annual Maintenance & Support',   href: '/solutions/amc' },
]

const footerLinks = [
  { name: 'About Us',    href: '/about' },
  { name: 'Industries',  href: '/industries' },
  { name: 'Projects',    href: '/projects' },
  { name: 'Contact Us',  href: '/contact' },
]

const industries = [
  'Manufacturing', 'Pharmaceutical', 'Warehousing', 'Logistics',
  'Retail', 'Healthcare', 'Transportation',
]

/* Real social-brand SVG icons */
const SocialLinkedIn = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const SocialX = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const SocialFacebook = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/privya-solution', Icon: SocialLinkedIn },
  { label: 'X (Twitter)', href: 'https://twitter.com/privyasolution', Icon: SocialX },
  { label: 'Facebook', href: 'https://www.facebook.com/privyasolution', Icon: SocialFacebook },
]

export const Footer: React.FC = () => (
  <footer className="relative bg-surface border-t border-white/5 overflow-hidden">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Top CTA Banner */}
      <div className="py-12 md:py-16 border-b border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Ready to Transform Your{' '}
              <span className="gradient-text-blue">Business?</span>
            </h3>
            <p className="text-text-muted text-base md:text-lg">Let's build intelligent solutions together.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-secondary to-accent text-white font-semibold text-sm hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Schedule Free Consultation
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="/brochure.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-sm hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
            >
              <Download className="w-4 h-4 text-accent" />
              Download Brochure
            </a>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

        {/* Company Info */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="flex items-center mb-6">
            <img src="/logo-light.svg" alt="Privya Solution LLP" className="h-9 w-auto" style={{ maxWidth: '170px' }} />
          </Link>
          <p className="text-text-muted text-sm leading-relaxed mb-6">
            Transforming businesses through intelligent software, automation, and industrial technology solutions.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 text-text-muted text-sm">
              <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                523, Universal Trade Center, Opp. Mahendra Showroom,
                Near Hari Om Circle, L.P. Savani Rd, Surat, Gujarat
              </span>
            </div>
            <div className="flex items-center gap-3 text-text-muted text-sm">
              <Phone className="w-4 h-4 text-accent flex-shrink-0" />
              <a href="tel:+919904095104" className="hover:text-white transition-colors">+91-9904095104</a>
            </div>
            <div className="flex items-center gap-3 text-text-muted text-sm">
              <Mail className="w-4 h-4 text-accent flex-shrink-0" />
              <a href="mailto:privyasolution@gmail.com" className="hover:text-white transition-colors break-all">
                privyasolution@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-text-muted text-sm">
              <Globe className="w-4 h-4 text-accent flex-shrink-0" />
              <span>privyasolution.com</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 mt-6">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:border-accent/40 hover:bg-accent/10 transition-all duration-200"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Solutions</h4>
          <ul className="space-y-3">
            {footerSolutions.map((sol) => (
              <li key={sol.href}>
                <Link to={sol.href}
                  className="text-text-muted text-sm hover:text-accent transition-colors duration-200 flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-accent transition-colors flex-shrink-0" />
                  {sol.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries + Company */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Industries</h4>
          <ul className="space-y-3">
            {industries.map((ind) => (
              <li key={ind}>
                <Link to="/industries"
                  className="text-text-muted text-sm hover:text-accent transition-colors duration-200 flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-accent transition-colors flex-shrink-0" />
                  {ind}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mt-8 mb-6">Company</h4>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href}
                  className="text-text-muted text-sm hover:text-accent transition-colors duration-200 flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-accent transition-colors flex-shrink-0" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter + Certs */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Stay Updated</h4>
          <p className="text-text-muted text-sm mb-4">
            Get the latest updates on industrial technology and automation solutions.
          </p>
          <div className="space-y-3 mb-8">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-text-muted text-sm focus:outline-none focus:border-accent/50 transition-colors"
            />
            <button className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-secondary to-accent text-white text-sm font-semibold hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300">
              Subscribe
            </button>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-xs text-text-muted uppercase tracking-wider mb-3">Certifications</div>
            <div className="flex flex-wrap gap-2">
              {['MSME', 'GST Registered', 'Startup India'].map((cert) => (
                <span key={cert} className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} Privya Solution LLP. All rights reserved.
        </p>
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
          <Link to="#" className="text-text-muted text-xs hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="#" className="text-text-muted text-xs hover:text-white transition-colors">Terms of Service</Link>
          <Link to="#" className="text-text-muted text-xs hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </div>
  </footer>
)
