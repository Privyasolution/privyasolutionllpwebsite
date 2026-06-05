import React from 'react'
import { ScanLine } from 'lucide-react'
import { ServicePage } from '@/components/layout/ServicePage'

const Barcode: React.FC = () => (
  <ServicePage
    icon={ScanLine}
    gradient="from-cyan-600 to-teal-500"
    glow="rgba(6,182,212,0.3)"
    badge="Traceability Solutions"
    title="Barcode & Traceability System"
    subtitle="End-to-end product tracking from raw material to delivery"
    description="Privya Solution's Barcode & Traceability System provides complete product lifecycle visibility using barcode, QR code, and RFID technology — ensuring compliance, quality control, and recall readiness."
    benefits={[
      '100% product traceability from raw material to finished goods dispatch',
      'Instant product recall capability with complete batch lineage',
      'Counterfeit prevention through unique serialization',
      'GS1 standard compliance for pharma, food, and retail sectors',
      'Integration with WMS, ERP, and manufacturing systems',
      'Expiry management with automated alerts and FEFO enforcement',
      'Supplier and customer-side traceability with portal access',
      'Audit-ready reporting for regulatory compliance',
    ]}
    features={[
      { title: 'Barcode Generation', description: 'Generate 1D barcodes (Code39, Code128, EAN) and 2D codes (QR, DataMatrix, PDF417) with custom label printing.', icon: '📊' },
      { title: 'RFID Integration', description: 'High-read-rate RFID scanning for pallet, carton, and item-level tracking in fast-moving operations.', icon: '📡' },
      { title: 'Batch Traceability', description: 'Complete forward and backward traceability by batch, lot, and serial number across the entire supply chain.', icon: '🔍' },
      { title: 'Expiry Management', description: 'Automatic FEFO enforcement, expiry alerts, and blocked-stock management for perishable products.', icon: '⏰' },
      { title: 'Label Design', description: 'Built-in label designer supporting ZPL, EPL, and PDF printing with dynamic data merge and compliance templates.', icon: '🖨️' },
      { title: 'GS1 Compliance', description: 'Full GS1 standard support including GTIN, GLN, SSCC, and GS1-128 labels for pharma and food industries.', icon: '✅' },
      { title: 'Recall Management', description: 'One-click batch recall with complete impact analysis showing all affected customers and locations.', icon: '🚨' },
      { title: 'Mobile Scanning', description: 'Android and iOS apps for handheld scanning, label printing, and real-time inventory updates on the go.', icon: '📱' },
      { title: 'Supplier Portal', description: 'Web portal for suppliers to register incoming goods, print labels, and share compliance documents.', icon: '🌐' },
    ]}
    useCases={[
      { industry: 'Pharmaceutical', useCase: 'Serialization and track-and-trace compliance', outcome: 'Met Schedule M and DSCSA requirements with zero compliance failures' },
      { industry: 'Food & Beverage', useCase: 'Allergen and expiry-controlled batch tracking', outcome: 'Executed batch recall in under 2 hours covering 500+ locations' },
      { industry: 'Manufacturing', useCase: 'WIP tracking and component genealogy', outcome: 'Reduced defect rate by 35% through component traceability' },
      { industry: 'Retail', useCase: 'Anti-counterfeiting with QR serialization', outcome: 'Eliminated counterfeit incidents in distribution channel' },
      { industry: 'Automotive', useCase: 'Component-level VIN-linked traceability', outcome: 'Full warranty claim support with part genealogy in 30 seconds' },
      { industry: 'Chemicals', useCase: 'Hazardous material labeling and tracking', outcome: 'Achieved regulatory compliance across 12 product categories' },
    ]}
    technologies={[
      'Barcode (Code128, EAN, Code39)', 'QR Code', 'DataMatrix', 'PDF417',
      'RFID (UHF/HF)', 'GS1 Standards', 'ZPL Label Printing',
      'Zebra Printers', 'Honeywell Scanners', 'Android App', 'iOS App',
      'REST API', 'ERP Integration', 'SQL Server', 'Cloud/On-Premise',
    ]}
    workflow={[
      { step: 1, title: 'Item Registration', description: 'Define product master with batch/serial attributes. Generate and print barcode/QR labels at production or receiving.' },
      { step: 2, title: 'Inbound Scanning', description: 'All incoming materials scanned at receiving — automatic batch creation with supplier lot linkage.' },
      { step: 3, title: 'Production Tracking', description: 'Each WIP stage scanned to capture process parameters, components used, and operator details.' },
      { step: 4, title: 'Finished Goods Labeling', description: 'Finished goods labeled with batch/serial/expiry. Carton and pallet SSCC labels generated automatically.' },
      { step: 5, title: 'Dispatch Verification', description: 'Outbound scan verifies correct items, quantities, and batches before shipping. POD captured digitally.' },
      { step: 6, title: 'Traceability & Recall', description: 'Complete forward/backward trace with one click. Recall impact analysis in seconds with customer notification.' },
    ]}
  />
)

export default Barcode
