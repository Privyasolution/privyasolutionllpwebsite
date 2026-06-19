import React from 'react'

interface Props {
  className?: string
}

/** Digital weighing scale — platform + display head with LCD readout, custom SVG icon */
export const DigitalScaleIcon: React.FC<Props> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Digital display head */}
    <rect x="5" y="3" width="14" height="6" rx="1.25" />
    {/* LCD readout segments */}
    <line x1="7.5" y1="5.4" x2="16.5" y2="5.4" strokeWidth="1" />
    <line x1="7.5" y1="7" x2="12.5" y2="7" strokeWidth="0.7" strokeDasharray="1 0.8" />
    {/* Support pole */}
    <line x1="12" y1="9" x2="12" y2="16.5" />
    {/* Weighing platform */}
    <rect x="2.5" y="16.5" width="19" height="2.5" rx="1.25" />
    {/* Feet */}
    <line x1="6" y1="19" x2="6" y2="20.5" />
    <line x1="18" y1="19" x2="18" y2="20.5" />
    <line x1="4" y1="20.5" x2="20" y2="20.5" />
  </svg>
)
