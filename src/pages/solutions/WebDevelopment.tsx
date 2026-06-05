import React from 'react'
import { Globe } from 'lucide-react'
import { ServicePage } from '@/components/layout/ServicePage'

const WebDevelopment: React.FC = () => (
  <ServicePage
    icon={Globe}
    gradient="from-fuchsia-600 to-purple-500"
    glow="rgba(147,51,234,0.3)"
    badge="Web Development"
    title="Web Application Development"
    subtitle="Modern, scalable enterprise web applications"
    description="Privya Solution builds enterprise-grade web applications that are fast, secure, and scalable — from internal business portals and dashboards to customer-facing platforms and B2B web apps."
    benefits={[
      'Modern, responsive design that works on desktop, tablet, and mobile',
      'Enterprise-grade security with role-based access and audit logging',
      'Scalable cloud-hosted architecture for growing businesses',
      'SEO-optimized for maximum online visibility',
      'Integration with existing ERP, CRM, and business systems',
      'Progressive Web App capability for native app-like experience',
      'Fast loading times with code splitting and performance optimization',
      'Complete source code ownership with full documentation',
    ]}
    features={[
      { title: 'React / Angular / Vue', description: 'Modern frontend frameworks delivering fast, dynamic web interfaces with component-based architecture.', icon: '⚛️' },
      { title: 'Enterprise Dashboards', description: 'Data-rich dashboards with real-time charts, KPIs, and analytics for management decision-making.', icon: '📊' },
      { title: 'Progressive Web Apps', description: 'PWA development for offline capability, push notifications, and native app experience in the browser.', icon: '📱' },
      { title: 'API-First Design', description: 'RESTful or GraphQL APIs enabling seamless integration with mobile apps, IoT systems, and third-party services.', icon: '🔗' },
      { title: 'Authentication & Security', description: 'Multi-factor authentication, SSO, RBAC, encrypted data transmission, and security audit compliance.', icon: '🔒' },
      { title: 'Cloud Deployment', description: 'Hosted on Azure, AWS, or Google Cloud with auto-scaling, CDN, and 99.9% uptime SLA.', icon: '☁️' },
      { title: 'B2B Portals', description: 'Customer, supplier, and dealer portals with self-service order placement, tracking, and document management.', icon: '🤝' },
      { title: 'E-commerce Integration', description: 'Product catalogs, online ordering, payment gateway integration, and inventory sync with warehouse systems.', icon: '🛒' },
      { title: 'SEO & Performance', description: 'Server-side rendering, Core Web Vitals optimization, structured data, and Google Analytics integration.', icon: '🚀' },
    ]}
    useCases={[
      { industry: 'Manufacturing', useCase: 'B2B dealer portal for order management', outcome: '2,000+ dealers self-serving orders reducing call center load by 80%' },
      { industry: 'Healthcare', useCase: 'Patient appointment and health record portal', outcome: 'Served 5,000+ daily appointments with zero downtime' },
      { industry: 'Logistics', useCase: 'Shipment tracking and POD portal', outcome: 'Customer queries reduced by 70% through self-service tracking' },
      { industry: 'Real Estate', useCase: 'Property listing and inquiry management platform', outcome: '300% increase in qualified leads through SEO and portal automation' },
      { industry: 'Financial Services', useCase: 'Loan processing and document management web app', outcome: 'Reduced loan processing time from 7 days to 48 hours' },
    ]}
    technologies={[
      'React.js', 'Next.js', 'Angular', 'Vue.js', 'TypeScript',
      'Node.js', 'ASP.NET Core', 'Python / Django', 'FastAPI',
      'SQL Server', 'PostgreSQL', 'MongoDB', 'Redis',
      'Azure', 'AWS', 'Vercel', 'Docker', 'CI/CD',
      'Tailwind CSS', 'Material UI', 'REST / GraphQL API',
    ]}
    workflow={[
      { step: 1, title: 'Requirements & Wireframing', description: 'Detailed requirements gathering followed by wireframes and interactive prototypes for stakeholder approval.' },
      { step: 2, title: 'UI/UX Design', description: 'Full UI design with brand guidelines, responsive layouts, and user experience flows optimized for conversion.' },
      { step: 3, title: 'Frontend Development', description: 'Component-based development with React/Angular/Vue, responsive design, and accessibility compliance.' },
      { step: 4, title: 'Backend & API Development', description: 'Secure API development, database design, business logic implementation, and third-party integrations.' },
      { step: 5, title: 'Testing & Performance', description: 'Cross-browser testing, performance optimization, security audit, load testing, and SEO validation.' },
      { step: 6, title: 'Deployment & Support', description: 'Cloud deployment with monitoring, SSL, CDN, backup automation, and ongoing support agreement.' },
    ]}
  />
)

export default WebDevelopment
