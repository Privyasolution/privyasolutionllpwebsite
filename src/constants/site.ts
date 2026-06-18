export const SITE = {
  name:       'Privya Solution LLP',
  shortName:  'Privya',
  tagline:    'Enterprise Industrial Solutions',
  url:        'https://privyasolution.com',
  email:      'sales@privyasolution.com',
  phone:      '+91-9904095104',
  address:    'Surat, Gujarat, India',
} as const

export const NAV_LINKS = [
  { name: 'Home',       href: '/' },
  { name: 'About',      href: '/about' },
  { name: 'Solutions',  href: '/solutions', hasDropdown: true },
  { name: 'Industries', href: '/industries' },
  { name: 'Projects',   href: '/projects' },
  { name: 'Contact',    href: '/contact' },
] as const

export const SOLUTIONS = [
  { name: 'Warehouse Management System',   href: '/solutions/wms' },
  { name: 'Barcode & Traceability',        href: '/solutions/barcode' },
  { name: 'Pharma Weighing Solution',      href: '/solutions/pharma-weighing' },
  { name: 'Weighbridge Management',        href: '/solutions/weighbridge' },
  { name: 'Manufacturing Execution System',href: '/solutions/mes' },
  { name: 'IoT & Industrial Automation',   href: '/solutions/iot' },
  { name: 'Annual Maintenance & Support',  href: '/solutions/amc' },
] as const

export const STATS = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '7+',   label: 'Industries Served' },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '5+',   label: 'Years of Expertise' },
] as const
