import React from 'react'

interface Props {
  className?: string
}

/** Digital bench-top weighing scale / analytical balance — custom SVG icon */
export const DigitalScaleIcon: React.FC<Props> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Weighing pan — oval top platform */}
    <ellipse cx="12" cy="6.5" rx="6" ry="1.75" />
    {/* Support pillar / column */}
    <line x1="12" y1="8.25" x2="12" y2="10.5" />
    {/* Platform shelf */}
    <rect x="3" y="10.5" width="18" height="2" rx="1" />
    {/* Body housing */}
    <rect x="4" y="12.5" width="16" height="7.5" rx="1.5" />
    {/* Digital display screen */}
    <rect x="6" y="14" width="12" height="4" rx="0.75" />
    {/* LCD digit lines */}
    <line x1="8" y1="15.75" x2="16" y2="15.75" strokeWidth="0.9" />
    <line x1="8" y1="17"    x2="13" y2="17"    strokeWidth="0.6" strokeDasharray="1 0.8" />
    {/* Base */}
    <rect x="2" y="20" width="20" height="2.5" rx="1.25" />
  </svg>
)
