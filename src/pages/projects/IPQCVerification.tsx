import React from 'react'
import {
  FileWarning, ShieldAlert, AlertTriangle, Users,
  ShieldCheck, CheckCircle2, FileCheck, Lock, Database, BarChart3, Eye,
} from 'lucide-react'
import { DigitalScaleIcon } from '@/components/projects/DigitalScaleIcon'
import { ProjectDetailPage, type ProjectData } from '@/components/projects/ProjectDetailPage'
import PharmaProcessFlow from '@/components/service-detail/PharmaProcessFlow'

const ScaleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <DigitalScaleIcon className={className} />
)

const data: ProjectData = {
  meta: {
    title: 'IPQC Smart Verification System — Amneal Pharmaceuticals | Privya Solution LLP',
    description:
      'GMP-compliant IPQC digital dispensing system for Amneal Pharmaceuticals — 21 CFR Part 11 compliance, balance API integration, dual-operator verification, and electronic batch records.',
    canonical: '/projects/ipqc-verification',
  },

  hero: {
    badge: 'Pharmaceutical Manufacturing',
    badgeColor: '#F97316',
    client: 'Amneal Pharmaceuticals',
    clientLogo: '/clients/amneal.jpg',
    projectName: 'IPQC Smart Verification System',
    tagline: 'GMP-Compliant Digital Dispensing with 21 CFR Part 11 Compliance',
    description:
      'A precision IPQC and dispensing platform for Amneal Pharmaceuticals. Connects directly to Mettler-Toledo and Sartorius balances via LAN, enforces real-time tolerance checks, routes critical materials through dual-operator verification, and generates tamper-proof electronic batch records — fully compliant with 21 CFR Part 11 and ALCOA+.',
    kpis: [
      { value: '0%',   label: 'Dispensing Errors' },
      { value: '100%', label: 'Audit Compliance'  },
      { value: '+30%', label: 'Throughput Gain'   },
      { value: 'A+',   label: 'GMP Rating'        },
    ],
  },

  challenges: [
    {
      icon: FileWarning,
      title: 'Paper-Based Batch Records',
      description:
        'All weighing records were handwritten, making regulatory audits difficult and creating data integrity risks during US FDA inspections.',
    },
    {
      icon: ShieldAlert,
      title: 'No 21 CFR Part 11 Compliance',
      description:
        'Paper records could not satisfy electronic record and electronic signature requirements, leaving the facility non-compliant with GMP regulations.',
    },
    {
      icon: AlertTriangle,
      title: 'Transcription Errors',
      description:
        'Manual operator reading and writing of balance values introduced a 2–3% transcription error rate, causing batch rejections and costly rework.',
    },
    {
      icon: Users,
      title: 'No Dual-Operator Validation',
      description:
        'Critical and high-potency materials had no enforced second-operator sign-off — a direct GMP protocol violation with no audit evidence.',
    },
  ],

  features: [
    {
      icon: ShieldCheck,
      title: '21 CFR Part 11 Compliant',
      description:
        'Electronic records and electronic signatures meeting US FDA data integrity requirements end to end.',
    },
    {
      icon: ScaleIcon,
      title: 'Balance API Integration',
      description:
        'Direct Mettler-Toledo and Sartorius balance connectivity via LAN, Wi-Fi, and RS232 — zero manual weight entry.',
    },
    {
      icon: CheckCircle2,
      title: 'Real-Time IPQC Validation',
      description:
        'Tolerance check fires automatically on every stable weight reading — out-of-spec is blocked before the operator can proceed.',
    },
    {
      icon: Users,
      title: 'Dual-Operator Verification',
      description:
        'Configurable second-operator confirmation for critical materials — both operators authenticate before the record commits.',
    },
    {
      icon: FileCheck,
      title: 'Electronic Batch Records',
      description:
        'GMP batch record PDFs auto-generated with weights, timestamps, calibration data, and digital signatures.',
    },
    {
      icon: Lock,
      title: 'ALCOA+ Audit Trail',
      description:
        'Every action, edit, and login recorded with user ID, timestamp, and reason — fully attributable and tamper-proof.',
    },
    {
      icon: Eye,
      title: 'Calibration Monitoring',
      description:
        'Live calibration status per balance before each use. Expired calibration locks the balance and alerts QA.',
    },
    {
      icon: Database,
      title: 'ERP Integration',
      description:
        'Batch consumption posted to the enterprise ERP in real time upon record completion — no manual re-entry.',
    },
    {
      icon: BarChart3,
      title: 'QA Dashboard & Analytics',
      description:
        'Shift-level summaries, operator performance, variance trends, and calibration compliance — all in one QA view.',
    },
  ],

  results: [
    {
      value: '0%',
      label: 'Dispensing Errors',
      description: 'Zero batch rejections in 6 months post go-live.',
    },
    {
      value: '100%',
      label: 'Audit Compliance',
      description: 'Passed next regulatory audit — zero data integrity findings.',
    },
    {
      value: '+30%',
      label: 'Throughput Gain',
      description: 'Guided digital workflow eliminated manual documentation delays.',
    },
    {
      value: '4×',
      label: 'Faster Documentation',
      description: 'Batch records now complete in <8 min vs 30–40 min manually.',
    },
  ],

  outcome:
    'Amneal Pharmaceuticals now operates a fully GMP-compliant digital dispensing environment across all dispensing rooms. The IPQC Smart Verification System eliminated all manual transcription, enforced 21 CFR Part 11 electronic records, and delivered a 30% throughput improvement. The facility passed its subsequent regulatory audit with zero data integrity findings.',
}

const IPQCVerification: React.FC = () => (
  <ProjectDetailPage data={data} simulationNode={<PharmaProcessFlow />} />
)
export default IPQCVerification
