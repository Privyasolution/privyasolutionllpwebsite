import React from 'react'
import { FlaskConical } from 'lucide-react'
import { ServicePage } from '@/components/layout/ServicePage'

const PharmaWeighing: React.FC = () => (
  <ServicePage
    icon={FlaskConical}
    gradient="from-violet-600 to-purple-500"
    glow="rgba(124,58,237,0.3)"
    badge="Pharmaceutical Solutions"
    title="Pharma Weighing Solution"
    subtitle="GMP-compliant precision weighing for pharmaceutical operations"
    description="Privya Solution's Pharma Weighing System delivers fully GMP-compliant dispensing, sampling, and bulk weighing operations with complete electronic batch records, 21 CFR Part 11 audit trails, and multi-balance integration."
    benefits={[
      'Full GMP compliance with electronic batch records and audit trails',
      '21 CFR Part 11 compliant electronic signatures and access control',
      'Multi-balance integration for analytical, precision, and floor scales',
      'Yield calculation with automatic variance alerts',
      'Elimination of manual transcription errors through direct balance interface',
      'Real-time compliance monitoring with automatic batch blocking on deviation',
      'Integration with LIMS, ERP, and MES systems',
      'Paperless dispensing room operations',
    ]}
    features={[
      { title: 'Balance Integration', description: 'Direct RS232/USB integration with 50+ balance brands — Mettler-Toledo, Sartorius, Shimadzu, Ohaus, and more.', icon: '⚖️' },
      { title: 'GMP Dispensing', description: 'Step-by-step dispensing workflow with mandatory tare, pre-weigh, and post-weigh verification at every stage.', icon: '🧪' },
      { title: 'Electronic Batch Records', description: 'Complete eBMR with automatic capture of weights, operator, date/time, and balance calibration status.', icon: '📋' },
      { title: '21 CFR Part 11', description: 'Full electronic signature support, audit trail, user access control, and data integrity compliance.', icon: '🔒' },
      { title: 'Yield Management', description: 'Theoretical vs actual yield calculation with automatic alerts on variance exceeding defined limits.', icon: '📊' },
      { title: 'Label Printing', description: 'GMP-compliant dispensing labels with lot, quantity, operator, date, and unique dispensing ID.', icon: '🖨️' },
      { title: 'Sampling Management', description: 'QC sampling workflows with sample identification, storage location tracking, and LIMS integration.', icon: '🔬' },
      { title: 'Calibration Tracking', description: 'Balance calibration schedule management with blocking of uncalibrated instruments and certificate storage.', icon: '⏱️' },
      { title: 'Dashboard & Reports', description: 'Shift-wise dispensing summary, variance reports, compliance dashboards, and regulatory-ready PDFs.', icon: '📈' },
    ]}
    useCases={[
      { industry: 'API Manufacturing', useCase: 'Bulk dispensing with yield calculation', outcome: 'Reduced material variance from 2.1% to 0.3% across batches' },
      { industry: 'Formulation', useCase: 'Tablet and capsule ingredient weighing', outcome: 'Eliminated manual errors — 100% electronic batch record compliance' },
      { industry: 'QC Laboratory', useCase: 'Sample weighing and LIMS integration', outcome: 'Cut sample preparation time by 45% with automated recording' },
      { industry: 'Nutraceuticals', useCase: 'GMP dispensing for dietary supplements', outcome: 'Passed FDA audit with zero data integrity observations' },
      { industry: 'Cosmetics', useCase: 'Fragrance and active ingredient dispensing', outcome: 'Reduced batch dispensing cycle by 30%' },
      { industry: 'Veterinary Pharma', useCase: 'Schedule M compliance for animal drugs', outcome: 'Achieved Schedule M compliance in 3 weeks post-implementation' },
    ]}
    technologies={[
      'Mettler-Toledo Integration', 'Sartorius Integration', 'Shimadzu Integration',
      'Ohaus Integration', 'RS232 / USB / Ethernet', '21 CFR Part 11',
      'Schedule M (India)', 'GMP Guidelines', 'LIMS Integration',
      'ERP Integration', 'SAP PM Integration', 'PDF Report Generation',
      'Electronic Signature', 'Audit Trail', 'SQL Server', 'On-Premise',
    ]}
    workflow={[
      { step: 1, title: 'Batch Initiation', description: 'Production order received from ERP. System creates dispensing request with BOM, standards, and allowed variance.' },
      { step: 2, title: 'Material Verification', description: 'Operator scans material barcode, system verifies expiry, quarantine status, and quantity availability.' },
      { step: 3, title: 'Tare & Pre-Weigh', description: 'Balance connected in real-time. Tare value automatically captured. Weighing starts with live display.' },
      { step: 4, title: 'Dispensing with Verification', description: 'Weight captured directly from balance. System checks against target range and alerts on deviation.' },
      { step: 5, title: 'Electronic Batch Record', description: 'Complete eBMR auto-generated with weights, operator ID, e-signature, timestamps, and balance calibration status.' },
      { step: 6, title: 'Yield & Compliance', description: 'Yield calculated, deviations logged, and batch released to next stage only after supervisor e-sign approval.' },
    ]}
  />
)

export default PharmaWeighing
