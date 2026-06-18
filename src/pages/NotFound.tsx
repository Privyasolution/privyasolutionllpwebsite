import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Home, Phone } from 'lucide-react'

const NotFound: React.FC = () => {
  return (
    <main className="bg-background min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-secondary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-2xl mx-auto">
        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span
            className="text-[120px] sm:text-[160px] font-black leading-none gradient-text-blue"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            404
          </span>
        </motion.div>

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="flex justify-center mb-8"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center"
            style={{ boxShadow: '0 0 40px rgba(37,99,235,0.3)' }}>
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-3xl font-bold text-white mb-4"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-text-muted text-base sm:text-lg leading-relaxed mb-10"
        >
          The page you're looking for doesn't exist or has been moved.
          Let us help you find what you need.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-secondary to-accent text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            to="/solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            View Solutions
          </Link>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-white/5 pt-8"
        >
          <p className="text-text-muted text-sm mb-5">Or navigate directly to:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'About Us', href: '/about' },
              { name: 'WMS', href: '/solutions/wms' },
              { name: 'Pharma Weighing', href: '/solutions/pharma-weighing' },
              { name: 'Weighbridge', href: '/solutions/weighbridge' },
              { name: 'Industries', href: '/industries' },
              { name: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/8 text-text-muted text-xs hover:text-accent hover:border-accent/30 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Contact strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.03] border border-white/5 text-text-muted text-sm"
        >
          <Phone className="w-4 h-4 text-accent" />
          Need help?&nbsp;
          <a href="tel:+919904095104" className="text-accent hover:text-accent/80 transition-colors font-medium">
            +91-9904095104
          </a>
        </motion.div>
      </div>
    </main>
  )
}

export default NotFound
