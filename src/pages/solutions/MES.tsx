import React from 'react'
import { Factory } from 'lucide-react'
import { ServicePage } from '@/components/layout/ServicePage'

const MES: React.FC = () => (
  <ServicePage
    icon={Factory}
    gradient="from-green-600 to-emerald-500"
    glow="rgba(5,150,105,0.3)"
    badge="Manufacturing Solutions"
    title="Manufacturing Execution System"
    subtitle="Real-time production control and shop floor digitization"
    description="Privya Solution's MES bridges the gap between planning systems and the shop floor — providing real-time work order execution, OEE tracking, quality management, and production analytics to drive manufacturing excellence."
    benefits={[
      'Real-time production visibility — know exactly what is happening on every line',
      'OEE improvement of 15-25% through downtime analysis and quick alerts',
      'Elimination of paper-based production records and data entry delays',
      'Complete lot traceability from raw material to finished goods',
      'Quality defect reduction through statistical process control alerts',
      'On-time delivery improvement with dynamic scheduling visibility',
      'Energy and resource consumption monitoring per production order',
      'Integration with enterprise planning, WMS, SCADA, and IoT systems',
    ]}
    features={[
      { title: 'Work Order Management', description: 'Digital work orders with routing, BOM, resource requirements, and step-by-step operator instructions.', icon: '📋' },
      { title: 'OEE Tracking', description: 'Automatic availability, performance, and quality capture with drill-down root cause analysis for losses.', icon: '📊' },
      { title: 'Production Scheduling', description: 'Visual production board with drag-and-drop scheduling, capacity checks, and real-time progress tracking.', icon: '📅' },
      { title: 'Quality Management', description: 'In-process quality checks, SPC charts, defect recording, and automatic hold on out-of-control conditions.', icon: '✅' },
      { title: 'Downtime Management', description: 'One-touch downtime logging with reason codes, duration tracking, and MTTR/MTBF analytics dashboards.', icon: '⏸️' },
      { title: 'Material Traceability', description: 'Complete component genealogy linking finished goods to every raw material batch and production operation.', icon: '🔍' },
      { title: 'Operator Interface', description: 'Touchscreen operator terminals showing work order details, quality checks, material requirements, and alerts.', icon: '🖥️' },
      { title: 'SCADA Integration', description: 'Direct machine data collection from PLCs, SCADA systems, and industrial controllers for automated OEE.', icon: '⚙️' },
      { title: 'Production Reports', description: 'Shift production reports, daily/weekly summaries, variance analysis, and regulatory-compliant batch records.', icon: '📈' },
    ]}
    useCases={[
      { industry: 'Automotive', useCase: 'Assembly line tracking and quality gates', outcome: 'Reduced rework by 40% through in-line quality enforcement' },
      { industry: 'Pharmaceutical', useCase: 'Batch production with eBMR and compliance', outcome: 'Achieved 100% paperless batch records across 5 production lines' },
      { industry: 'Food & Beverage', useCase: 'Recipe-controlled production with allergen management', outcome: 'Eliminated allergen incidents with mandatory material verification' },
      { industry: 'Electronics', useCase: 'SMT and assembly traceability', outcome: 'Board-level genealogy enabling 30-second recall response' },
      { industry: 'Plastics', useCase: 'Injection molding cycle monitoring', outcome: 'OEE improved from 58% to 74% in 6 months' },
      { industry: 'Chemicals', useCase: 'Batch process monitoring and control', outcome: 'Reduced batch deviation rate by 65%' },
    ]}
    technologies={[
      'PLC Integration', 'SCADA Integration', 'OPC-UA', 'Modbus TCP',
      'Touchscreen HMI', 'Barcode Scanning', 'RFID', 'IoT Sensors',
      'SAP PP Integration', 'Enterprise System Integration', 'PostgreSQL', 'REST API',
      'Real-time Dashboards', 'Mobile Alerts', 'SPC Charts', 'On-Premise',
    ]}
    workflow={[
      { step: 1, title: 'Production Planning', description: 'Production order sent to MES from planning system. MES validates material availability, capacity, and resource readiness.' },
      { step: 2, title: 'Work Order Dispatch', description: 'Work order displayed on shop floor terminal. Operator confirms start with ID scan. Timer starts automatically.' },
      { step: 3, title: 'Material Issuance', description: 'WMS/store issues material against work order. Barcode scan confirms correct material, batch, and quantity.' },
      { step: 4, title: 'Production Execution', description: 'Machine data captured automatically via PLC/SCADA. Manual entries captured via operator terminal.' },
      { step: 5, title: 'Quality Inspection', description: 'In-process QC checks triggered at defined stages. SPC chart updated in real-time. Defects recorded immediately.' },
      { step: 6, title: 'Completion & Reporting', description: 'Work order closed. Production report generated. Enterprise system updated with actuals. OEE dashboard refreshed.' },
    ]}
  />
)

export default MES
