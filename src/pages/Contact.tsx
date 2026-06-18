import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { viewportConfig } from '@/utils/animations'
import { PageSEO } from '@/components/ui/PageSEO'

const services = [
  'Warehouse Management System',
  'Barcode & Traceability',
  'Pharma Weighing Solution',
  'Weighbridge Management',
  'Manufacturing Execution System',
  'IoT & Industrial Automation',
  'Annual Maintenance & Support',
  'Customization & Integration',
  'Other / General Inquiry',
]

const schema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters.').max(100),
  company: z.string().optional(),
  email: z.string().email('Please enter a valid email address.'),
  mobile: z.string().optional().refine(
    (val) => !val || /^[+\d\s\-().]{7,20}$/.test(val),
    { message: 'Invalid phone number format.' }
  ),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters.').max(2000, 'Message is too long.'),
  website: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-text-muted text-sm focus:outline-none focus:border-accent/50 transition-colors'
const errorClass = 'mt-1.5 text-xs text-red-400'

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      company: '',
      email: '',
      mobile: '',
      service: '',
      message: '',
      website: '',
    },
  })

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const json = await res.json()

      if (!res.ok || !json.success) {
        const msg =
          json.errors?.map((e: { message: string }) => e.message).join(' ') ||
          json.message ||
          'Something went wrong. Please try again.'
        toast.error(msg, { duration: 5000 })
        return
      }

      setSubmitted(true)
      toast.success('Message sent! We will get back to you within 3-4 business days.', { duration: 6000 })
    } catch {
      toast.error('Network error. Please check your connection and try again.', { duration: 5000 })
    }
  }

  return (
    <main className="bg-background">
      <PageSEO
        title="Contact Us | Privya Solution LLP"
        description="Contact Privya Solution LLP for industrial software, automation, WMS, MES, pharma weighing, and weighbridge solutions. Surat, Gujarat, India."
        canonical="/contact"
      />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Let's Build Together
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Get In
            <br /><span className="gradient-text-blue">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-text-muted text-xl max-w-2xl mx-auto"
          >
            Schedule a free consultation with our industrial technology experts.
            We'll understand your challenges and propose the right solution.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-surface relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left - Info */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportConfig}
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  Start Your <span className="gradient-text-blue">Journey</span>
                </h2>
                <p className="text-text-muted leading-relaxed mb-8">
                  Whether you need a complete warehouse management system, pharma compliance solution,
                  or custom industrial software — our experts are ready to help.
                </p>

                <div className="space-y-4">
                  <div className="card-enterprise p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-text-muted mb-1">Call Us</div>
                      <a href="tel:+919904095104" className="text-white font-semibold hover:text-accent transition-colors">
                        +91-9904095104
                      </a>
                      <div className="text-xs text-text-muted mt-1">Mon-Sat, 9AM-6PM IST</div>
                    </div>
                  </div>

                  <div className="card-enterprise p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-xs text-text-muted mb-1">Email Us</div>
                      <a href="mailto:sales@privyasolution.com" className="text-white font-semibold hover:text-accent transition-colors">
                        sales@privyasolution.com
                      </a>
                      <div className="text-xs text-text-muted mt-1">We respond to all inquiries as soon as possible</div>
                    </div>
                  </div>

                  <div className="card-enterprise p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-xs text-text-muted mb-1">Visit Us</div>
                      <div className="text-white font-semibold text-sm leading-snug">
                        523, Universal Trade Center, Opp. Mahendra Showroom,
                        Near Hari Om Circle, L.P. Savani Rd, Surat, Gujarat
                      </div>
                      <div className="text-xs text-text-muted mt-1">On-site visits available across India</div>
                    </div>
                  </div>

                  <div className="card-enterprise p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-xs text-text-muted mb-1">Business Hours</div>
                      <div className="text-white font-semibold">Mon-Sat: 9:00 AM - 6:00 PM</div>
                      <div className="text-xs text-text-muted mt-1">AMC clients: priority on-call support</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              className="lg:col-span-3"
            >
              <div className="card-enterprise p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-white font-bold text-2xl mb-4">Message Sent!</h3>
                    <p className="text-text-muted">
                      Thank you for reaching out. Our team will contact you within 3-4 business days
                      to discuss your requirements. Please check your inbox for a confirmation email.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); reset() }}
                      className="mt-8 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-white hover:bg-white/10 transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-white font-bold text-2xl mb-2">Request Free Consultation</h3>
                    <p className="text-text-muted text-sm mb-8">Fill in your details and we'll get back within 3-4 business days.</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                      {/* Honeypot — CSS-only hidden, no aria-hidden, bots fill it, humans don't */}
                      <div style={{ position: 'absolute', left: '-9999px', top: 0, width: '1px', height: '1px', overflow: 'hidden' }}>
                        <input
                          type="text"
                          tabIndex={-1}
                          autoComplete="off"
                          {...register('website')}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs text-text-muted mb-2">Full Name *</label>
                          <input
                            type="text"
                            autoComplete="name"
                            placeholder="Your full name"
                            className={inputClass}
                            {...register('fullName')}
                          />
                          {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
                        </div>
                        <div>
                          <label className="block text-xs text-text-muted mb-2">Company Name</label>
                          <input
                            type="text"
                            autoComplete="organization"
                            placeholder="Your company name"
                            className={inputClass}
                            {...register('company')}
                          />
                          {errors.company && <p className={errorClass}>{errors.company.message}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs text-text-muted mb-2">Email Address *</label>
                          <input
                            type="email"
                            autoComplete="email"
                            placeholder="your@email.com"
                            className={inputClass}
                            {...register('email')}
                          />
                          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                        </div>
                        <div>
                          <label className="block text-xs text-text-muted mb-2">Phone Number</label>
                          <input
                            type="tel"
                            autoComplete="tel"
                            placeholder="+91 XXXXX XXXXX"
                            className={inputClass}
                            {...register('mobile')}
                          />
                          {errors.mobile && <p className={errorClass}>{errors.mobile.message}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs text-text-muted mb-2">Solution of Interest</label>
                        <select
                          className={`${inputClass} appearance-none`}
                          {...register('service')}
                        >
                          <option value="" className="bg-surface">Select a solution...</option>
                          {services.map((s) => (
                            <option key={s} value={s} className="bg-surface">{s}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs text-text-muted mb-2">Project Details *</label>
                        <textarea
                          rows={5}
                          placeholder="Tell us about your business, challenges, and what you're looking to achieve..."
                          className={`${inputClass} resize-none`}
                          {...register('message')}
                        />
                        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-secondary to-accent text-white font-semibold hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 group disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>

                      <p className="text-center text-xs text-text-muted">
                        By submitting, you agree to our Privacy Policy. We never share your data.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="h-64 bg-surface relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-white font-semibold text-xl">Surat, Gujarat, India</h3>
            <p className="text-text-muted mt-2">Serving clients across India with on-site and remote support</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
