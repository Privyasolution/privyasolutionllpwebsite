import React from 'react'
import {
  AlertTriangle, EyeOff, Clock, FileX2,
  Camera, FileCheck, Mail, Link2, QrCode, LayoutDashboard,
} from 'lucide-react'
import { DigitalScaleIcon } from '@/components/projects/DigitalScaleIcon'
import { ProjectDetailPage, type ProjectData } from '@/components/projects/ProjectDetailPage'

const ScaleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <DigitalScaleIcon className={className} />
)

const data: ProjectData = {
  meta: {
    title: 'VisionVerify | Privya Solution LLP',
    description:
      'Auto weight capture + camera verification system for courier and logistics — instant PDF receipt with embedded photo, zero billing disputes, 5× faster parcel processing.',
    canonical: '/projects/smart-parcel-verification',
  },

  hero: {
    badge: 'Logistics & Courier Operations',
    badgeColor: '#8B5CF6',
    client: 'Logistics & Courier Industry',
    projectName: 'VisionVerify',
    tagline: 'Auto Weight Capture + Camera Integration + Instant PDF Receipt',
    description:
      'A parcel weighing and verification platform that combines auto weight capture from a calibrated scale with an integrated IP camera — producing an instant PDF receipt containing the parcel photo, weight, timestamp, and operator ID. Built for courier sorting centres and e-commerce fulfilment warehouses that need to eliminate billing disputes and accelerate throughput.',
    kpis: [
      { value: '100%', label: 'Photo Verification' },
      { value: '0%',   label: 'Billing Disputes'   },
      { value: '5×',   label: 'Faster Processing'  },
      { value: '99.9%', label: 'Weight Accuracy'   },
    ],
  },

  challenges: [
    {
      icon: AlertTriangle,
      title: 'Manual Weight Recording Errors',
      description:
        'Operators reading and writing balance values introduced frequent digit transpositions and missed entries — leading to billing discrepancies and customer complaints.',
    },
    {
      icon: EyeOff,
      title: 'No Photographic Evidence',
      description:
        'When customers disputed a parcel weight or condition, there was no photo at the point of weighing — leaving disputes unresolvable and costly to settle.',
    },
    {
      icon: Clock,
      title: 'Slow Parcel Processing',
      description:
        'Manual recording, separate camera steps, and paper receipt printing averaged 45–60 seconds per parcel — a major throughput bottleneck at the sorting centre.',
    },
    {
      icon: FileX2,
      title: 'Paper-Based Receipts',
      description:
        'Printed paper receipts were not linked to digital records, making historical lookups slow and unreliable — and frequently lost by customers.',
    },
  ],

  processFlow: {
    slug: 'single-operator-weighing',
    title: 'Smart Parcel Verification — Live Simulation',
    description:
      'Watch the full parcel weighing cycle — from scan and stable weight lock through camera capture, validation, and instant PDF receipt generation.',
    steps: [
      { step: '1', label: 'Parcel Placed',    desc: 'Barcode scanned; parcel placed on calibrated scale' },
      { step: '2', label: 'Weight Captured',  desc: 'Stable weight auto-detected and locked from scale API' },
      { step: '3', label: 'Camera Captures',  desc: 'IP camera triggered automatically at weight lock' },
      { step: '4', label: 'Data Validated',   desc: 'Weight validated; overweight parcels flagged for review' },
      { step: '5', label: 'PDF Generated',    desc: 'Photo-embedded PDF receipt created within seconds' },
      { step: '6', label: 'Record Stored',    desc: 'Record synced to WMS / courier platform via API' },
    ],
  },

  features: [
    {
      icon: ScaleIcon,
      title: 'Auto Stable Weight Lock',
      description:
        'Stable weight detection algorithm eliminates operator judgment — weight is captured and locked from the calibrated scale API with zero manual entry.',
    },
    {
      icon: Camera,
      title: 'Camera Integration',
      description:
        'IP camera triggered automatically at weight lock. Supports USB webcams and RTSP IP cameras. Image timestamped and stored with every record.',
    },
    {
      icon: FileCheck,
      title: 'Photo-Embedded PDF Receipt',
      description:
        'Dispute-proof receipts with parcel photo, weight, timestamp, operator, and station ID — all generated within seconds of parcel placement.',
    },
    {
      icon: Mail,
      title: 'Digital Receipt Sharing',
      description:
        'PDF sent by email, WhatsApp link, or QR code scan. Eliminates paper printing while giving customers immediate verified proof.',
    },
    {
      icon: Link2,
      title: 'WMS / Courier Platform Sync',
      description:
        'Real-time push of weight and image reference to the WMS, courier platform, or ERP system via REST API.',
    },
    {
      icon: QrCode,
      title: 'Barcode & QR Scanning',
      description:
        'Parcel identified by barcode or QR scan before weighing — eliminating manual entry and linking the weight record to the correct shipment automatically.',
    },
    {
      icon: LayoutDashboard,
      title: 'Multi-Station Dashboard',
      description:
        'Supervisor view of all station statuses, daily throughput, exception counts, and operator performance in real time.',
    },
  ],

  results: [
    {
      value: '100%',
      label: 'Photo Verification',
      description: 'Every parcel photographed at the moment of weighing — complete visual proof for every record.',
    },
    {
      value: '0%',
      label: 'Billing Disputes',
      description: 'Photo + weight evidence eliminated customer billing disputes within the first 30 days.',
    },
    {
      value: '5×',
      label: 'Faster Processing',
      description: 'Cycle time per parcel reduced from ~50 seconds to under 10 seconds.',
    },
    {
      value: '99.9%',
      label: 'Weight Accuracy',
      description: 'Auto stable-weight locking and direct API deliver near-perfect accuracy across all stations.',
    },
  ],

  outcome:
    'VisionVerify transformed parcel weighing from a slow, error-prone manual process into a sub-10-second, dispute-proof digital workflow. Billing disputes — previously running at 8–12% of shipments — dropped to zero within the first month. Operators process five times more parcels per shift, and every record is permanently archived with photo and weight evidence.',
}

const SmartParcelVerification: React.FC = () => <ProjectDetailPage data={data} />
export default SmartParcelVerification
