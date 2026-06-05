import React from 'react'
import { Scale } from 'lucide-react'
import { ServicePage } from '@/components/layout/ServicePage'

const Weighbridge: React.FC = () => (
  <ServicePage
    icon={Scale}
    gradient="from-orange-600 to-amber-500"
    glow="rgba(234,88,12,0.3)"
    badge="Logistics Solutions"
    title="Weighbridge Management System"
    subtitle="Automated vehicle weighing with complete fraud prevention"
    description="Privya Solution's Weighbridge Management System automates the complete vehicle weighing process — from entry to dispatch — with RFID vehicle identification, automated weight capture, anti-cheat mechanisms, and ERP integration."
    benefits={[
      'Automated RFID vehicle identification eliminates manual entry errors',
      'Anti-cheat features: CCTV integration, axle weight analysis, photo capture',
      'Unattended weighbridge operations reducing manpower requirements by 60%',
      'Real-time integration with ERP, dispatch, and billing systems',
      'Automated challan/invoice generation on second weighment',
      'Complete audit trail with timestamps and operator records',
      'SMS/email alerts for overweight, underweight, and unauthorized vehicles',
      'Multi-weighbridge management from centralized dashboard',
    ]}
    features={[
      { title: 'RFID Vehicle ID', description: 'RFID tag-based automatic vehicle identification at entry — no manual typing, no human errors, no manipulation.', icon: '📡' },
      { title: 'Auto Weight Capture', description: 'Direct interface with weighbridge controller for automatic weight capture with calibration certificate tracking.', icon: '⚖️' },
      { title: 'Anti-Cheat System', description: 'Axle weight variance analysis, minimum weight time enforcement, CCTV frame capture, and anomaly detection.', icon: '🛡️' },
      { title: 'Photo Documentation', description: 'Automatic camera snapshot at each weighment — vehicle, registration plate, and load visible in every transaction.', icon: '📷' },
      { title: 'Unattended Operation', description: 'Fully automated entry/exit with traffic light control, boom barrier automation, and remote supervision.', icon: '🤖' },
      { title: 'Challan Generation', description: 'Automatic weighment challan, delivery challan, and invoice generation with second weighment completion.', icon: '📄' },
      { title: 'ERP Integration', description: 'Seamless integration with purchase, dispatch, and billing modules of any ERP system through API or direct DB.', icon: '🔗' },
      { title: 'Overload Alerts', description: 'Real-time SMS and email alerts for overloaded vehicles, underweight deliveries, and unauthorized vehicles.', icon: '🚨' },
      { title: 'Multi-Site Dashboard', description: 'Centralized monitoring of all weighbridges across multiple locations from a single management dashboard.', icon: '🖥️' },
    ]}
    useCases={[
      { industry: 'Steel & Metals', useCase: 'Inbound raw material and outbound finished goods weighing', outcome: 'Eliminated 99% of weighment discrepancies post-implementation' },
      { industry: 'Mining', useCase: 'Ore dispatch and royalty calculation', outcome: 'Reduced weighment fraud by ₹50L annually' },
      { industry: 'Agriculture', useCase: 'Grain and produce procurement weighing', outcome: 'Processed 200% more vehicles per shift with unattended operation' },
      { industry: 'Chemicals', useCase: 'Tanker and bulk truck weighing', outcome: 'Automated challan generation cut dispatch time by 70%' },
      { industry: 'Cement', useCase: 'Fly ash and raw material inbound weighing', outcome: 'CCTV integration caught manipulation worth ₹20L in first month' },
      { industry: 'Sugar', useCase: 'Cane procurement and molasses dispatch', outcome: 'Reduced queue waiting time from 45 mins to 8 mins' },
    ]}
    technologies={[
      'RFID UHF Tags & Readers', 'Weighbridge Controller Interface',
      'IP Camera Integration', 'Traffic Light Control', 'Boom Barrier Control',
      'RS232 / TCP-IP Interface', 'ERP Integration', 'SAP MM/SD Integration',
      'Tally Integration', 'SMS Gateway', 'Email Alerts', 'Thermal Printing',
      'Cloud Dashboard', 'On-Premise', 'SQL Server', 'Mobile App',
    ]}
    workflow={[
      { step: 1, title: 'Vehicle Entry', description: 'Vehicle enters weighbridge zone. RFID reader auto-identifies vehicle. Gate opens automatically for registered vehicles.' },
      { step: 2, title: 'First Weighment (Gross)', description: 'Vehicle drives onto platform. Weight captured automatically after stability. Photo taken. Receipt printed.' },
      { step: 3, title: 'Loading / Unloading', description: 'Vehicle proceeds to loading/unloading area. Material handling completed. Vehicle returns for second weighment.' },
      { step: 4, title: 'Second Weighment (Tare)', description: 'Empty vehicle weighed. Net weight calculated = Gross - Tare. Anti-cheat checks run automatically.' },
      { step: 5, title: 'Document Generation', description: 'Weighment challan, delivery note, and invoice auto-generated and printed. ERP updated in real-time.' },
      { step: 6, title: 'Vehicle Exit', description: 'Exit boom opens after document confirmation. All data archived with timestamps, photos, and operator details.' },
    ]}
  />
)

export default Weighbridge
