import React from 'react'
import { Package } from 'lucide-react'
import { ServicePage } from '@/components/layout/ServicePage'

const WMS: React.FC = () => (
  <ServicePage
    icon={Package}
    gradient="from-blue-600 to-cyan-500"
    glow="rgba(37,99,235,0.3)"
    badge="Warehouse Management"
    title="Warehouse Management System"
    subtitle="Complete warehouse operations from receiving to dispatch"
    description="Privya Solution's WMS gives you complete real-time control over your warehouse operations — from inbound receiving and putaway to picking, packing, and dispatch — with seamless barcode and RFID integration."
    benefits={[
      'Real-time inventory visibility across single or multi-warehouse locations',
      'Up to 40% reduction in picking errors through guided workflows',
      'Automated stock replenishment and reorder alerts',
      'Complete audit trail for every movement with barcode/RFID tracking',
      'Integration with ERP systems including SAP, Tally, and custom systems',
      'Mobile-ready interfaces for handheld scanners and tablets',
      'Advanced reporting: stock aging, ABC analysis, space utilization',
      'Multi-unit handling: lot, batch, serial, and expiry tracking',
    ]}
    features={[
      { title: 'Inbound Management', description: 'Streamlined receiving with PO matching, quality inspection workflows, and automated putaway suggestions.', icon: '📥' },
      { title: 'Inventory Control', description: 'Real-time stock levels, multi-location tracking, lot/batch/serial control, and expiry date management.', icon: '📦' },
      { title: 'Order Fulfillment', description: 'Wave picking, zone picking, cluster picking, and smart pick path optimization for maximum efficiency.', icon: '✅' },
      { title: 'Barcode & RFID', description: 'Native support for barcode scanners, RFID readers, and mobile devices — any hardware, any brand.', icon: '📊' },
      { title: 'ERP Integration', description: 'Pre-built connectors for SAP, Tally, Oracle, and any custom ERP through REST API or direct DB integration.', icon: '🔗' },
      { title: 'Analytics Dashboard', description: 'Real-time KPI dashboards: fill rate, cycle time, accuracy, space utilization, and labor productivity.', icon: '📈' },
      { title: 'Multi-Warehouse', description: 'Manage multiple warehouses, zones, racks, and bin locations from a single unified platform.', icon: '🏭' },
      { title: 'Returns Management', description: 'Streamlined reverse logistics with damage assessment, restocking, and vendor return workflows.', icon: '🔄' },
      { title: 'Cross-Docking', description: 'Direct flow-through operations without put-away for high-velocity items and just-in-time requirements.', icon: '⚡' },
    ]}
    useCases={[
      { industry: 'Manufacturing', useCase: 'Raw material management and WIP tracking', outcome: 'Reduced raw material waste by 25% through better visibility' },
      { industry: 'Pharmaceutical', useCase: 'Batch and expiry-controlled inventory', outcome: 'Zero expired stock incidents with FEFO enforcement' },
      { industry: 'Logistics & 3PL', useCase: 'Multi-client warehouse management', outcome: 'Handled 3x volume with same headcount post-WMS' },
      { industry: 'Retail', useCase: 'High-velocity consumer goods fulfillment', outcome: '99.8% order accuracy and 2-hour pick-to-ship cycles' },
      { industry: 'E-commerce', useCase: 'Multi-channel order management', outcome: 'Reduced order processing time by 60%' },
      { industry: 'Automotive', useCase: 'Spare parts and component tracking', outcome: 'Eliminated stockouts with automated reorder system' },
    ]}
    technologies={[
      'Barcode Scanning', 'RFID Integration', 'Mobile Handheld Devices',
      'SAP Integration', 'Tally Integration', 'REST API', 'SQL Server',
      'Cloud Hosting', 'On-Premise', 'Android / iOS Apps', 'Web Dashboard',
      'Label Printing', 'Thermal Printers', 'EDI', 'Excel Import/Export',
    ]}
    workflow={[
      { step: 1, title: 'Goods Receipt', description: 'Items arrive at receiving dock — scan supplier barcode or PO, system validates quantities and raises discrepancy alerts automatically.' },
      { step: 2, title: 'Quality Check & Putaway', description: 'QC inspection is logged, and system suggests optimal bin location based on ABC classification, weight, and available space.' },
      { step: 3, title: 'Inventory Management', description: 'Real-time stock ledger with full lot, batch, serial, and expiry tracking. Cycle count management for perpetual accuracy.' },
      { step: 4, title: 'Order Processing', description: 'Sales order downloaded from ERP. System creates pick wave, assigns to picker with optimized route on handheld device.' },
      { step: 5, title: 'Picking & Packing', description: 'Guided pick with barcode confirmation at every step. Packing station generates shipping label and updates ERP automatically.' },
      { step: 6, title: 'Dispatch & Analytics', description: 'Dispatch records created, POD captured, and KPI dashboards updated in real-time for management visibility.' },
    ]}
  />
)

export default WMS
