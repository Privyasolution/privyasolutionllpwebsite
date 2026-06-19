import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FileX2, AlertTriangle, EyeOff, Clock,
  Network, Target, Users, FileCheck, RefreshCw, BarChart3,
  ArrowRight, Database, CheckCircle2,
} from 'lucide-react'
import { DigitalScaleIcon } from '@/components/projects/DigitalScaleIcon'
import { ProjectDetailPage, type ProjectData } from '@/components/projects/ProjectDetailPage'

// ─── ERP Integration Flow ─────────────────────────────────────────────────────

const ScaleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <DigitalScaleIcon className={className} />
)

const integrationNodes = [
  {
    id: 'scale',
    label: 'Weighing Balance',
    sub: 'USB · RS232 · LAN · Wi-Fi',
    Icon: ScaleIcon,
    color: '#06B6D4',
    accentBg: 'rgba(6,182,212,0.08)',
    accentBorder: 'rgba(6,182,212,0.22)',
  },
  {
    id: 'platform',
    label: 'Auto Weight Platform',
    sub: 'Variance check · Supervisor routing',
    Icon: Network,
    color: '#2563EB',
    accentBg: 'rgba(37,99,235,0.08)',
    accentBorder: 'rgba(37,99,235,0.22)',
  },
  {
    id: 'erp',
    label: 'ERP / SAP System',
    sub: 'Batch consumption in real time',
    Icon: Database,
    color: '#10B981',
    accentBg: 'rgba(16,185,129,0.08)',
    accentBorder: 'rgba(16,185,129,0.22)',
  },
]

const auditNode = {
  label: 'Audit Log',
  sub: 'Immutable timestamped trail — ALCOA+',
  Icon: FileCheck,
  color: '#8B5CF6',
  accentBg: 'rgba(139,92,246,0.08)',
  accentBorder: 'rgba(139,92,246,0.22)',
}

const auditEvents = [
  'Product selected — 09:14:02',
  'Balance linked — 09:14:17',
  'Tare captured — 09:14:44',
  'Weight locked — 09:15:03 ✓',
  'Variance check — PASS',
  'PDF generated — 09:15:08',
  'ERP posted — 09:15:09',
]

function ERPIntegrationFlow() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 border-t border-slate-900"
      style={{ background: '#060D1A' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center"
        >
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
            System Integration
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Weight Capture → API → ERP Integration
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            Every weight captured from the balance flows automatically through the platform — variance-checked, supervisor-routed — and posts to ERP within seconds.
          </p>
        </motion.div>

        {/* Main flow — horizontal on desktop, vertical on mobile */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 mb-10">
          {integrationNodes.map((node, i) => (
            <React.Fragment key={node.id}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="flex flex-col items-center text-center w-full lg:w-56 rounded-xl border p-5 flex-shrink-0"
                style={{
                  background: node.accentBg,
                  borderColor: node.accentBorder,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${node.color}18`, border: `1px solid ${node.color}35` }}
                >
                  <node.Icon className="w-6 h-6" style={{ color: node.color }} />
                </div>
                <p className="text-white font-semibold text-sm mb-1">{node.label}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{node.sub}</p>
              </motion.div>

              {i < integrationNodes.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: i * 0.12 + 0.2 }}
                  className="flex items-center justify-center flex-shrink-0 lg:mx-3"
                >
                  {/* Animated data dot */}
                  <div className="relative lg:w-14 h-px lg:h-0.5 w-0.5 h-10 flex items-center justify-center">
                    <div
                      className="absolute inset-0 lg:inset-auto lg:w-full lg:h-0.5"
                      style={{ background: 'rgba(37,99,235,0.25)' }}
                    />
                    <motion.div
                      className="absolute w-2 h-2 rounded-full z-10"
                      style={{ background: '#06B6D4', boxShadow: '0 0 6px #06B6D4' }}
                      animate={inView ? { x: [-22, 22] } : {}}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.4,
                      }}
                    />
                    <ArrowRight
                      className="absolute right-0 w-3 h-3 hidden lg:block"
                      style={{ color: '#2563EB' }}
                    />
                  </div>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Audit Log branch */}
        <div className="flex flex-col items-center gap-3 mb-12">
          {/* Vertical connector line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="w-0.5 h-8 origin-top"
            style={{ background: 'rgba(139,92,246,0.4)' }}
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl rounded-xl border p-5"
            style={{
              background: auditNode.accentBg,
              borderColor: auditNode.accentBorder,
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: `${auditNode.color}18`, border: `1px solid ${auditNode.color}35` }}
            >
              <auditNode.Icon className="w-5 h-5" style={{ color: auditNode.color }} />
            </div>
            <div className="flex-1 min-w-0 text-center sm:text-left">
              <p className="text-white font-semibold text-sm mb-0.5">{auditNode.label}</p>
              <p className="text-slate-400 text-xs">{auditNode.sub}</p>
            </div>
            {/* Live audit entries */}
            <div className="flex flex-col gap-0.5 min-w-0 text-right hidden md:flex">
              {auditEvents.slice(0, 4).map((entry) => (
                <span key={entry} className="text-[10px] font-mono text-slate-400">{entry}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Outcome row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.75 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { icon: CheckCircle2, color: '#10B981', label: 'Zero Manual Entry', sub: 'Every weight locked directly from balance API' },
            { icon: RefreshCw,    color: '#06B6D4', label: 'Real-Time ERP Sync', sub: 'Batch consumption posted within seconds' },
            { icon: FileCheck,    color: '#8B5CF6', label: 'Complete Audit Trail', sub: 'ALCOA+ compliant — every action timestamped' },
          ].map(({ icon: Icon, color, label, sub }) => (
            <div
              key={label}
              className="flex items-start gap-3 p-4 rounded-xl border border-slate-800"
              style={{ background: '#0B1220' }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: `${color}12`, border: `1px solid ${color}28` }}
              >
                <Icon className="w-4 h-4" style={{ color }} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-0.5">{label}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Page data ────────────────────────────────────────────────────────────────

const data: ProjectData = {
  meta: {
    title: 'WeightSync API — Believe International | Privya Solution LLP',
    description:
      'Multi-station automated weighing system for Believe International Limited — real-time balance API, supervisor approval workflow, variance detection, and ERP synchronization.',
    canonical: '/projects/auto-weight-capture',
  },

  hero: {
    badge: 'FMCG & Consumer Goods',
    badgeColor: '#10B981',
    client: 'Believe International Limited',
    clientLogo: '/clients/believe.webp',
    projectName: 'WeightSync API',
    tagline: 'Multi-Station Weighing Automation with Real-Time ERP Integration',
    description:
      'A production-scale automated weighing platform deployed across all dispensing stations at Believe International Limited. Direct balance API integration, automated variance detection, supervisor approval routing, and instant ERP sync — eliminating every manual transcription step.',
    kpis: [
      { value: '0%',   label: 'Transcription Errors' },
      { value: '3×',   label: 'Faster Documentation' },
      { value: '+40%', label: 'Operator Efficiency'   },
      { value: '100%', label: 'ERP Accuracy'          },
    ],
  },

  challenges: [
    {
      icon: FileX2,
      title: 'Paper-Based Weighing Records',
      description:
        'All weighment data was recorded on paper forms and manually transferred to ERP — creating documentation backlogs and frequent entry errors across shifts.',
    },
    {
      icon: AlertTriangle,
      title: 'High Transcription Error Rate',
      description:
        'Manual reading of balance displays and handwriting values introduced digit transpositions and omissions that propagated directly into inventory records.',
    },
    {
      icon: EyeOff,
      title: 'No Supervisor Visibility',
      description:
        'Supervisors had no real-time view of station status, pending approvals, or variance incidents — requiring physical floor walks for every oversight check.',
    },
    {
      icon: Clock,
      title: 'Delayed ERP Synchronization',
      description:
        'Batch consumption data was uploaded to ERP once per day, keeping live inventory levels permanently out of date for production planning.',
    },
  ],

  features: [
    {
      icon: Network,
      title: 'Multi-Station Balance Network',
      description:
        'All production weighing stations connected simultaneously via USB, RS232, and LAN. Each station operates independently — one failure does not affect others.',
    },
    {
      icon: ScaleIcon,
      title: 'Direct Balance API',
      description:
        'Live weight streamed directly from balance; stable reading auto-detected and locked — zero manual keyboard entry at any point.',
    },
    {
      icon: Target,
      title: 'Automated Variance Detection',
      description:
        'Every weighment validated against formula target and tolerance in real time. Out-of-spec events are blocked and routed for supervisor review.',
    },
    {
      icon: Users,
      title: 'Supervisor Approval Workflow',
      description:
        'Flagged weighments routed to supervisor dashboard. Every approval or rejection is documented with a reason — full accountability trail.',
    },
    {
      icon: FileCheck,
      title: 'Auto PDF Weighing Records',
      description:
        'Weighing record PDFs auto-generated on completion — weight, tare, product, batch, timestamp, operator ID, and supervisor sign-off.',
    },
    {
      icon: RefreshCw,
      title: 'Real-Time ERP Sync',
      description:
        'Batch consumption posted to ERP within seconds of record confirmation — replacing end-of-day batch uploads entirely.',
    },
    {
      icon: BarChart3,
      title: 'Supervisor Dashboard',
      description:
        'Live view of all station statuses, pending approvals, operator performance, and shift-level production summaries in one screen.',
    },
  ],

  results: [
    {
      value: '0%',
      label: 'Transcription Errors',
      description: 'All weights captured directly from balance API — manual entry eliminated.',
    },
    {
      value: '3×',
      label: 'Faster Documentation',
      description: 'Per-record time cut from 8–12 min to under 3 minutes.',
    },
    {
      value: '+40%',
      label: 'Operator Efficiency',
      description: 'Guided digital workflow enables significantly more weighments per shift.',
    },
    {
      value: '100%',
      label: 'ERP Accuracy',
      description: 'Real-time posting replaced batch uploads — inventory always current.',
    },
  ],

  outcome:
    'Believe International Limited now operates a paperless, fully automated weighing environment. Transcription errors have been eliminated, documentation speed improved threefold, and ERP inventory data is updated in real time. Every weighment is fully traceable — giving the business complete audit readiness.',
}

const AutoWeightCapture: React.FC = () => (
  <ProjectDetailPage data={data} simulationNode={<ERPIntegrationFlow />} />
)
export default AutoWeightCapture
