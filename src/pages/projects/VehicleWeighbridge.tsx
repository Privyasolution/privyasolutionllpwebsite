import React from 'react'
import {
  Users, ShieldOff, Clock, FileX2,
  Wifi, Camera, Shield, FileCheck, RefreshCw, BarChart3,
} from 'lucide-react'
import { DigitalScaleIcon } from '@/components/projects/DigitalScaleIcon'
import { ProjectDetailPage, type ProjectData } from '@/components/projects/ProjectDetailPage'

const ScaleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <DigitalScaleIcon className={className} />
)

const data: ProjectData = {
  meta: {
    title: 'Vehicle Gross-Tare Validation System | Privya Solution LLP',
    description:
      'Fully automated weighbridge management with RFID vehicle detection, CCTV anti-fraud verification, automatic gross-tare-net calculation, and real-time ERP integration.',
    canonical: '/projects/vehicle-weighbridge',
  },

  hero: {
    badge: 'Steel, Mining & Logistics',
    badgeColor: '#F59E0B',
    client: 'Steel & Logistics Industry',
    projectName: 'Vehicle Gross-Tare Validation System',
    tagline: 'Fully Automated Weighbridge — RFID + CCTV + Anti-Fraud + ERP',
    description:
      'A fully unattended weighbridge management system that automates the complete vehicle weighment cycle — RFID-based vehicle identification, CCTV verification at entry and exit, dual gross-tare weighment, net weight calculation, delivery challan generation, and real-time ERP sync — with no manual operator involvement.',
    kpis: [
      { value: '100%', label: 'Automated'          },
      { value: '0',    label: 'Fraud Incidents'    },
      { value: '3×',   label: 'Vehicle Throughput' },
      { value: '100%', label: 'Paperless Ops'      },
    ],
  },

  challenges: [
    {
      icon: Users,
      title: 'Manual Weighbridge Operation',
      description:
        'A dedicated operator was required every shift to manually record vehicle numbers, weights, and materials — creating staffing dependency and human error risk across every shift.',
    },
    {
      icon: ShieldOff,
      title: 'Weight Fraud Vulnerability',
      description:
        'Without camera verification, vehicles could swap cargo, carry concealed loads, or repeat weighments fraudulently — causing significant material loss and billing discrepancies.',
    },
    {
      icon: Clock,
      title: 'Slow Vehicle Throughput',
      description:
        'Manual weighment cycles took 8–15 minutes per vehicle. At peak hours, queues of 20–30 trucks formed at the gate, disrupting logistics schedules.',
    },
    {
      icon: FileX2,
      title: 'Paper-Based Delivery Challans',
      description:
        'Handwritten challans were prone to errors, required physical handling between weighbridge and stores, and caused delays in material movement tracking.',
    },
  ],

  processFlow: {
    slug: 'dual-verification-weighing',
    title: 'Vehicle Weighment Cycle — Live Simulation',
    description:
      'Watch the complete automated weighbridge cycle — from RFID detection and CCTV capture at entry through dual weighment, anti-fraud check, and instant ERP posting at exit.',
    steps: [
      { step: '1', label: 'Truck Arrives',         desc: 'RFID reader activates; vehicle tag scanned at gate' },
      { step: '2', label: 'CCTV Captures Plate',   desc: 'IP camera captures vehicle and number plate (entry)' },
      { step: '3', label: '1st Weighment',          desc: 'Loaded vehicle gross weight auto-recorded' },
      { step: '4', label: 'Load / Unload',          desc: 'Material transferred at loading / unloading bay' },
      { step: '5', label: 'CCTV Re-Verifies',       desc: 'Exit camera checks plate — fraud engine compares entry/exit' },
      { step: '6', label: '2nd Weighment',          desc: 'Empty vehicle tare weight recorded automatically' },
      { step: '7', label: 'Net Weight & Report',    desc: 'Net = Gross − Tare; challan printed; ERP updated' },
    ],
  },

  features: [
    {
      icon: Wifi,
      title: 'RFID Vehicle Identification',
      description:
        'UHF RFID readers at entry and exit automatically identify registered vehicles — no manual driver check-in or data entry required.',
    },
    {
      icon: Camera,
      title: 'CCTV Anti-Fraud Verification',
      description:
        'IP cameras at both gates capture vehicle and number plate at each pass. Anti-fraud engine detects swaps, duplicate weighments, and load tampering.',
    },
    {
      icon: ScaleIcon,
      title: 'Dual Weighment System',
      description:
        'Gross (loaded) and tare (empty) weights recorded automatically at each gate pass. Net weight computed instantly — zero manual calculation.',
    },
    {
      icon: Shield,
      title: 'Anti-Fraud Engine',
      description:
        'Detects suspicious patterns: same vehicle weighing twice, unusual weight differentials, plate mismatches, and blacklisted vehicles — all blocked automatically.',
    },
    {
      icon: FileCheck,
      title: 'Auto Challan Generation',
      description:
        'Digital and printed delivery challans generated at exit gate with gross, tare, net, material, supplier, and timestamps — no handwritten paperwork.',
    },
    {
      icon: RefreshCw,
      title: 'Real-Time ERP Integration',
      description:
        'Material inward/outward posted to ERP within 2 seconds of tare weighment. Supports SAP, Oracle, Tally, and custom ERP via REST API or ODBC.',
    },
    {
      icon: BarChart3,
      title: 'Operations Dashboard',
      description:
        'Live view of active vehicles, daily throughput, pending weighments, material-wise summaries, and supplier-wise reports — all in one screen.',
    },
  ],

  results: [
    {
      value: '100%',
      label: 'Automated',
      description: 'Complete weighment cycle runs unattended every shift — zero operator involvement.',
    },
    {
      value: '0',
      label: 'Fraud Incidents',
      description: 'CCTV and RFID verification eliminated all documented fraud attempts post go-live.',
    },
    {
      value: '3×',
      label: 'Vehicle Throughput',
      description: 'Weighment cycle reduced from 10–15 min to under 4 minutes per vehicle.',
    },
    {
      value: '<2s',
      label: 'ERP Sync Time',
      description: 'Material movement posted to ERP within 2 seconds of tare weighment completion.',
    },
  ],

  outcome:
    'The Vehicle Gross-Tare Validation System transformed a manual, fraud-prone weighbridge into a fully automated, unmanned facility operating 24 hours a day. Vehicle throughput tripled, weighbridge staffing costs were eliminated, and no weight fraud incidents have occurred since implementation. Every material movement is tracked in real time with CCTV evidence and posted to ERP within seconds.',
}

const VehicleWeighbridge: React.FC = () => <ProjectDetailPage data={data} />
export default VehicleWeighbridge
