import React from 'react'
import { Code, Search, Factory, Plug, RefreshCw, Link2, Zap, Database, Lock, Shield } from 'lucide-react'
import { ServicePage } from '@/components/layout/ServicePage'

const CustomSoftware: React.FC = () => (
  <ServicePage
    icon={Code}
    gradient="from-rose-600 to-pink-500"
    glow="rgba(225,29,72,0.3)"
    badge="Custom Development"
    title="Custom Software Development"
    subtitle="Bespoke enterprise software built for your exact requirements"
    description="When off-the-shelf software doesn't fit your workflows, Privya Solution builds it from scratch. We specialize in industrial business software, hardware-integrated applications, and complex enterprise solutions."
    benefits={[
      'Software built exactly for your business process — zero compromise',
      'Deep hardware integration expertise for industrial devices',
      'Full ownership of source code with no licensing constraints',
      'Seamless integration with existing systems and legacy infrastructure',
      'Scalable architecture designed for long-term business growth',
      'Dedicated project manager and transparent Agile development',
      'Complete documentation and knowledge transfer',
      'Post-delivery support and continuous enhancement',
    ]}
    features={[
      { title: 'Business Analysis', description: 'In-depth process analysis, stakeholder interviews, and requirement documentation before a single line of code is written.', icon: Search },
      { title: 'Industrial Applications', description: 'Specialized in factory, warehouse, and logistics applications with hardware device integration expertise.', icon: Factory },
      { title: 'Hardware Integration', description: 'Integration with weighing scales, barcode scanners, RFID readers, PLCs, cameras, and any industrial device.', icon: Plug },
      { title: 'Legacy Modernization', description: 'Transform aging VB6, FoxPro, or Access applications into modern, secure, web-based enterprise systems.', icon: RefreshCw },
      { title: 'API Development', description: 'RESTful API development for third-party integrations, mobile apps, and inter-system communication.', icon: Link2 },
      { title: 'Agile Delivery', description: 'Sprint-based development with regular demos, transparent progress tracking, and flexible scope management.', icon: Zap },
      { title: 'Database Design', description: 'Enterprise-grade SQL Server or PostgreSQL database design optimized for industrial transaction volumes.', icon: Database },
      { title: 'Security', description: 'Role-based access control, encrypted data storage, audit logging, and secure API design as standard.', icon: Lock },
      { title: 'Support & AMC', description: 'Post-deployment support, bug fixes, enhancements, and annual maintenance contracts for long-term partnership.', icon: Shield },
    ]}
    useCases={[
      { industry: 'Manufacturing', useCase: 'Production planning and scheduling tool', outcome: 'Replaced 5 Excel spreadsheets with one integrated system' },
      { industry: 'Trading', useCase: 'Purchase-to-dispatch management system', outcome: 'Reduced order cycle time from 4 days to 6 hours' },
      { industry: 'Logistics', useCase: 'Fleet and delivery management platform', outcome: 'Tracked 500+ daily deliveries with real-time visibility' },
      { industry: 'Services', useCase: 'Field service management application', outcome: 'Increased technician productivity by 35%' },
      { industry: 'Government', useCase: 'Citizen service portal with document management', outcome: 'Served 10,000+ applications monthly with zero data loss' },
    ]}
    technologies={[
      'C# / .NET', 'ASP.NET Core', 'WinForms', 'WPF', 'Python',
      'React', 'Angular', 'Vue.js', 'SQL Server', 'PostgreSQL', 'MySQL',
      'REST API', 'SignalR', 'Windows Services', 'Scheduled Jobs',
      'Azure', 'AWS', 'On-Premise', 'Docker', 'CI/CD Pipelines',
    ]}
    workflow={[
      { step: 1, title: 'Discovery & Analysis', description: 'Workshop sessions to understand your business, workflows, pain points, and goals. Documented requirements with stakeholder sign-off.' },
      { step: 2, title: 'Architecture Design', description: 'Technical architecture, database design, integration plan, and UI/UX wireframes presented for approval.' },
      { step: 3, title: 'Sprint Development', description: 'Iterative development in 2-week sprints with working demos at each sprint end. Regular client feedback incorporated.' },
      { step: 4, title: 'Testing & QA', description: 'Unit testing, integration testing, UAT with client team, performance testing, and security review.' },
      { step: 5, title: 'Deployment', description: 'Controlled deployment with parallel running, user training, go-live support, and 30-day hypercare period.' },
      { step: 6, title: 'Support & Growth', description: 'Ongoing AMC support, enhancement releases, and technology upgrade advisory as your business evolves.' },
    ]}
  />
)

export default CustomSoftware
