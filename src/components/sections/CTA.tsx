import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { viewportConfig } from '@/utils/animations'

export const CTA: React.FC = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-xl relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportConfig}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Start Your Transformation
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Ready to Transform
            <br />
            <span className="gradient-text">Your Business?</span>
          </h2>

          <p className="text-text-muted text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto mb-10 sm:mb-12 px-2">
            Partner with Privya Solution LLP to build innovative software, automation, and industrial solutions
            that drive efficiency, productivity, and growth.
          </p>

          {/* Primary CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-secondary to-accent text-white font-bold text-base sm:text-lg shadow-[0_0_60px_rgba(37,99,235,0.5)] hover:shadow-[0_0_80px_rgba(37,99,235,0.8)] transition-all duration-300 hover:-translate-y-1 group"
            >
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white/5 border border-white/15 text-white font-bold text-base sm:text-lg hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
            >
              View All Solutions
            </Link>
          </div>

          {/* Contact options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <a
              href="tel:+919904095104"
              className="flex items-center justify-center gap-3 p-4 rounded-xl glass border border-white/5 hover:border-accent/20 transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Phone className="w-4 h-4 text-accent" />
              </div>
              <div className="text-left">
                <div className="text-xs text-text-muted">Call Us</div>
                <div className="text-sm text-white font-medium">+91-9904095104</div>
              </div>
            </a>

            <a
              href="mailto:privyasolution@gmail.com"
              className="flex items-center justify-center gap-3 p-4 rounded-xl glass border border-white/5 hover:border-accent/20 transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Mail className="w-4 h-4 text-secondary" />
              </div>
              <div className="text-left">
                <div className="text-xs text-text-muted">Email Us</div>
                <div className="text-sm text-white font-medium">Send Message</div>
              </div>
            </a>

            <div className="flex items-center justify-center gap-3 p-4 rounded-xl glass border border-white/5">
              <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                <span className="text-lg">📍</span>
              </div>
              <div className="text-left">
                <div className="text-xs text-text-muted">Located In</div>
                <div className="text-sm text-white font-medium">Surat, Gujarat</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
