import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, LucideIcon } from 'lucide-react'
import { viewportConfig } from '@/utils/animations'
import { CTA } from '@/components/sections/CTA'

interface ServicePageProps {
  icon: LucideIcon
  gradient: string
  glow: string
  badge: string
  title: string
  subtitle: string
  description: string
  benefits: string[]
  features: { title: string; description: string; icon: string }[]
  useCases: { industry: string; useCase: string; outcome: string }[]
  technologies: string[]
  workflow: { step: number; title: string; description: string }[]
}

export const ServicePage: React.FC<ServicePageProps> = ({
  icon: Icon,
  gradient,
  glow,
  badge,
  title,
  subtitle,
  description,
  benefits,
  features,
  useCases,
  technologies,
  workflow,
}) => {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${glow.replace('0.3', '0.2')}, transparent)` }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {badge}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-8`}
            style={{ boxShadow: `0 0 60px ${glow}` }}
          >
            <Icon className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-accent text-base sm:text-lg md:text-xl font-medium mb-6"
          >
            {subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-text-muted text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r ${gradient} text-white font-semibold transition-all duration-300 hover:-translate-y-1`}
              style={{ boxShadow: `0 0 30px ${glow}` }}
            >
              Request Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Get Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-surface relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="container-xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Key Benefits
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: 0.1 }}
                className="text-4xl font-bold text-white mb-8"
              >
                Why Businesses Choose <span className="gradient-text-blue">This Solution</span>
              </motion.h2>
              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportConfig}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-text-muted">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportConfig}
              className="relative"
            >
              <div className={`card-enterprise p-10 text-center`}
                style={{ boxShadow: `0 0 80px ${glow.replace('0.3', '0.15')}` }}>
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-white font-bold text-2xl mb-4">{title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Fully Customizable', 'Cloud Ready', 'Hardware Integration', 'Real-time Data'].map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-sm text-text-muted">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient}`} />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="container-xl relative">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Core <span className="gradient-text-blue">Features</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: i * 0.07 }}
                className="card-enterprise p-7 group"
              >
                <div className="text-3xl mb-4">{feat.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3">{feat.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section-padding bg-surface relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="container-xl relative">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              How It <span className="gradient-text-blue">Works</span>
            </motion.h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {workflow.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {step.step}
                  </div>
                  {i < workflow.length - 1 && <div className="w-px flex-1 bg-gradient-to-b from-white/20 to-transparent mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="container-xl relative">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Industry <span className="gradient-text-blue">Use Cases</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: i * 0.08 }}
                className="card-enterprise p-6"
              >
                <div className="text-accent text-xs font-semibold uppercase tracking-wider mb-3">{uc.industry}</div>
                <h3 className="text-white font-semibold text-base mb-3">{uc.useCase}</h3>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <p className="text-text-muted text-xs">{uc.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-surface relative overflow-hidden">
        <div className="container-xl relative">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              className="text-3xl font-bold text-white"
            >
              Technology & <span className="gradient-text-blue">Integrations</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            className="flex flex-wrap justify-center gap-3"
          >
            {technologies.map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-text-muted text-sm hover:border-accent/30 hover:text-white transition-all duration-200">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
