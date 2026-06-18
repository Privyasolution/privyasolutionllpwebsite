import React from 'react'
import { Shield } from 'lucide-react'
import { ServicePage } from '@/components/layout/ServicePage'

const AMC: React.FC = () => (
  <ServicePage
    icon={Shield}
    gradient="from-teal-600 to-cyan-500"
    glow="rgba(20,184,166,0.3)"
    badge="Maintenance & Support"
    title="Annual Maintenance & Support"
    subtitle="Proactive support ensuring maximum uptime for your operations"
    description="Privya Solution's AMC program provides comprehensive maintenance, rapid technical support, proactive monitoring, and continuous optimization to ensure your industrial software systems perform at peak efficiency year-round."
    benefits={[
      'Dedicated technical support through phone, email, and remote access',
      'Proactive system health monitoring preventing issues before they occur',
      'Guaranteed response times with clear SLA commitments',
      'Regular system health reports and performance reviews',
      'Priority bug fixes and security patches included',
      'Version upgrades and minor enhancements at no additional cost',
      'On-site visits for critical issues with same-day response for Surat region',
      'Dedicated account manager who knows your system inside out',
    ]}
    features={[
      { title: 'Dedicated Help Desk', description: 'Technical support through dedicated phone hotline, email ticketing, and remote desktop access during business hours and on-call for critical issues.', icon: '📞' },
      { title: 'Remote Monitoring', description: 'Proactive monitoring of system health, database performance, service availability, and integration status.', icon: '🖥️' },
      { title: 'SLA Commitments', description: 'Defined response times: Critical issues in 2 hours, High in 4 hours, Medium in 8 hours, Low in 24 hours.', icon: '⏱️' },
      { title: 'Preventive Maintenance', description: 'Scheduled preventive maintenance visits, database optimization, log cleanup, and performance tuning.', icon: '🔧' },
      { title: 'Security Updates', description: 'Regular security patches, OS updates, and vulnerability assessments included in all AMC plans.', icon: '🔒' },
      { title: 'Performance Optimization', description: 'Quarterly performance reviews with database query optimization, index tuning, and cache configuration.', icon: '📈' },
      { title: 'User Training', description: 'Refresher training for new users, advanced feature training, and onboarding for system changes.', icon: '🎓' },
      { title: 'Backup Management', description: 'Automated backup configuration, regular verification, offsite backup, and disaster recovery testing.', icon: '💾' },
      { title: 'Enhancement Requests', description: 'Minor enhancements and configuration changes handled within AMC — no surprise bills for small changes.', icon: '⚡' },
    ]}
    useCases={[
      { industry: 'Manufacturing', useCase: 'MES and WMS maintenance', outcome: '99.7% system uptime maintained across 3 years of AMC' },
      { industry: 'Pharmaceutical', useCase: 'Pharma weighing system compliance support', outcome: 'Zero audit findings related to system availability in 4 audits' },
      { industry: 'Logistics', useCase: 'Weighbridge system support', outcome: 'Average ticket resolution in 1.8 hours vs 12-hour industry average' },
      { industry: 'Healthcare', useCase: 'Hospital information system support', outcome: 'Zero critical downtime during peak hours over 2 years' },
      { industry: 'Retail', useCase: 'POS and inventory system support', outcome: 'Festival season handled with zero system failures' },
      { industry: 'Industrial', useCase: 'Multi-system annual maintenance', outcome: 'Examination season supported with 100% availability' },
    ]}
    technologies={[
      'Remote Desktop Support', 'TeamViewer / AnyDesk', 'Ticket Management',
      'Database Monitoring', 'PostgreSQL DBA', 'Windows Server',
      'Network Monitoring', 'Backup Automation', 'Log Analysis',
      'Performance Profiling', 'Security Scanning', 'API Health Checks',
      'Automated Testing', 'CI/CD Pipelines', 'Azure Monitor', 'Cloud Alerts',
    ]}
    workflow={[
      { step: 1, title: 'AMC Onboarding', description: 'System audit and documentation of current infrastructure, integrations, and configuration. SLA agreement signed.' },
      { step: 2, title: 'Proactive Monitoring', description: 'Monitoring agents deployed. Automated health checks run regularly. Alerts configured for all critical parameters.' },
      { step: 3, title: 'Issue Reporting', description: 'User reports issue via hotline, email, or web portal. Ticket created automatically with priority classification.' },
      { step: 4, title: 'Remote Resolution', description: 'Technical team connects remotely within SLA window. 85% of issues resolved remotely without site visit.' },
      { step: 5, title: 'On-Site Support', description: 'Critical issues requiring physical intervention handled with dedicated on-site engineer dispatch.' },
      { step: 6, title: 'Monthly Reviews', description: 'Monthly ticket summary, uptime report, and system health review shared with client management team.' },
    ]}
  />
)

export default AMC
