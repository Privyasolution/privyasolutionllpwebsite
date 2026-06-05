import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Map, Palette, Code, GitBranch, Rocket, HeartHandshake } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { viewportConfig } from '@/utils/animations'

const steps = [
  {
    id: 1,
    icon: Search,
    title: 'Discovery',
    description: 'Deep-dive into your operations, workflows, pain points, and business objectives to define the perfect solution roadmap.',
    details: ['Site visits & process audits', 'Stakeholder interviews', 'Gap analysis', 'Requirements documentation'],
    color: 'from-blue-500 to-blue-600',
    glow: 'rgba(37,99,235,0.4)',
  },
  {
    id: 2,
    icon: Map,
    title: 'Planning',
    description: 'Architecture design, technology selection, project timelines, resource allocation, and risk assessment.',
    details: ['Solution architecture', 'Technology stack selection', 'Sprint planning', 'Risk mitigation plan'],
    color: 'from-cyan-500 to-cyan-600',
    glow: 'rgba(6,182,212,0.4)',
  },
  {
    id: 3,
    icon: Palette,
    title: 'Design',
    description: 'UX/UI design, user flow mapping, interface prototyping, and stakeholder approval of design artifacts.',
    details: ['Wireframes & prototypes', 'UX flow design', 'User testing', 'Design sign-off'],
    color: 'from-violet-500 to-violet-600',
    glow: 'rgba(124,58,237,0.4)',
  },
  {
    id: 4,
    icon: Code,
    title: 'Development',
    description: 'Agile development with regular sprint reviews, continuous testing, and transparent progress reporting.',
    details: ['Agile sprints', 'Code reviews', 'Unit testing', 'Progress demos'],
    color: 'from-green-500 to-green-600',
    glow: 'rgba(5,150,105,0.4)',
  },
  {
    id: 5,
    icon: GitBranch,
    title: 'Integration',
    description: 'Seamless integration with existing ERP, hardware devices, legacy systems, and third-party services.',
    details: ['API development', 'Hardware integration', 'ERP connectivity', 'Data migration'],
    color: 'from-orange-500 to-orange-600',
    glow: 'rgba(234,88,12,0.4)',
  },
  {
    id: 6,
    icon: Rocket,
    title: 'Deployment',
    description: 'Controlled go-live with parallel running, user training, go-live support, and performance validation.',
    details: ['UAT testing', 'User training', 'Go-live support', 'Performance validation'],
    color: 'from-rose-500 to-rose-600',
    glow: 'rgba(225,29,72,0.4)',
  },
  {
    id: 7,
    icon: HeartHandshake,
    title: 'Support',
    description: 'Dedicated AMC support, continuous optimization, feature enhancements, and long-term technology partnership.',
    details: ['Dedicated helpdesk', 'Proactive monitoring', 'Feature enhancements', 'Annual reviews'],
    color: 'from-teal-500 to-teal-600',
    glow: 'rgba(20,184,166,0.4)',
  },
]

export const Journey: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container-xl relative">
        <SectionHeader
          badge="Our Process"
          title="Digital Transformation"
          titleHighlight="Journey"
          subtitle="A proven 7-step methodology to ensure successful delivery, seamless adoption, and lasting business impact."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Center line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Step numbers row */}
          <div className="hidden lg:flex justify-between mb-8">
            {steps.map((step, i) => (
              <motion.button
                key={step.id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportConfig}
                transition={{ delay: i * 0.08 }}
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                className="relative flex-1 flex flex-col items-center group"
              >
                {/* Connector */}
                {i < steps.length - 1 && (
                  <div className="absolute top-6 left-1/2 w-full h-px bg-gradient-to-r from-white/10 to-transparent" />
                )}

                {/* Step bubble */}
                <div className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center
                  transition-all duration-300 group-hover:scale-110 ${activeStep === step.id ? 'scale-110 ring-2 ring-white/20' : ''}`}
                  style={{ boxShadow: `0 0 20px ${step.glow}` }}
                >
                  <step.icon className="w-5 h-5 text-white" />
                </div>

                <span className="mt-3 text-xs font-semibold text-white/60 group-hover:text-white transition-colors">
                  {step.title}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportConfig}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  className="card-enterprise p-5 cursor-pointer group hover:border-white/15"
                >
                  {/* Mobile icon (hidden on lg) */}
                  <div className={`lg:hidden w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <div className="text-xs text-text-muted mb-1 font-medium">Step {step.id}</div>
                  <h3 className="text-white font-semibold text-sm mb-2">{step.title}</h3>
                  <p className="text-text-muted text-xs leading-relaxed line-clamp-3">{step.description}</p>

                  {/* Expanded details */}
                  {activeStep === step.id && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 space-y-1 overflow-hidden"
                    >
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-xs text-text-muted">
                          <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${step.color} flex-shrink-0`} />
                          {detail}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
