import React from 'react'
import { cn } from '@/utils/cn'

interface LogoProps {
  variant?: 'dark' | 'light' | 'color'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showTagline?: boolean
  className?: string
  iconOnly?: boolean
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'color',
  size = 'md',
  showTagline = false,
  className,
  iconOnly = false,
}) => {
  const sizes = {
    sm: { icon: 32, text: 'text-sm', sub: 'text-xs', tagline: 'text-xs' },
    md: { icon: 42, text: 'text-base', sub: 'text-xs', tagline: 'text-xs' },
    lg: { icon: 56, text: 'text-xl', sub: 'text-sm', tagline: 'text-sm' },
    xl: { icon: 80, text: 'text-3xl', sub: 'text-base', tagline: 'text-sm' },
  }

  const s = sizes[size]

  const textColor = variant === 'light' ? '#1e293b' : '#ffffff'
  const subColor = variant === 'light' ? '#2563EB' : '#06B6D4'
  const taglineColor = variant === 'light' ? '#64748b' : '#94A3B8'

  const iconSize = s.icon

  return (
    <div className={cn('inline-flex items-center gap-3', className)}>
      {/* Icon Mark */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`psLogo_${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB"/>
            <stop offset="100%" stopColor="#06B6D4"/>
          </linearGradient>
        </defs>
        {/* Background */}
        <rect width="64" height="64" rx="14" fill={`url(#psLogo_${variant})`}/>

        {/* Outer hexagon */}
        <path
          d="M32 9L51 20V44L32 55L13 44V20L32 9Z"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="rgba(255,255,255,0.10)"
        />

        {/* Inner hexagon */}
        <path
          d="M32 19L43 25.5V38.5L32 45L21 38.5V25.5L32 19Z"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="rgba(255,255,255,0.18)"
        />

        {/* Center node */}
        <circle cx="32" cy="32" r="5" fill="white" fillOpacity="0.95"/>

        {/* Connector lines */}
        <line x1="32" y1="27" x2="32" y2="9" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="2 2"/>
        <line x1="32" y1="37" x2="32" y2="55" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="2 2"/>
        <line x1="27.3" y1="29.5" x2="13" y2="20" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="2 2"/>
        <line x1="36.7" y1="29.5" x2="51" y2="20" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="2 2"/>
      </svg>

      {/* Text Mark */}
      {!iconOnly && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span
              className={cn('font-bold tracking-tight leading-none', s.text)}
              style={{ color: textColor }}
            >
              Privya Solution
            </span>
            <span
              className={cn('font-semibold leading-none', s.sub)}
              style={{ color: subColor }}
            >
              LLP
            </span>
          </div>
          {showTagline && (
            <span
              className={cn('mt-1 font-normal leading-tight', s.tagline)}
              style={{ color: taglineColor }}
            >
              Industrial Technology & Automation
            </span>
          )}
        </div>
      )}
    </div>
  )
}

// Standalone SVG logo export for use in non-React contexts
export const LogoSVGDark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 56" fill="none">
  <defs>
    <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
  </defs>
  <rect width="56" height="56" rx="12" fill="url(#g1)"/>
  <path d="M28 6L45 16V40L28 50L11 40V16L28 6Z" stroke="white" stroke-width="2" stroke-linejoin="round" fill="rgba(255,255,255,0.10)"/>
  <path d="M28 16L37 21.5V34.5L28 40L19 34.5V21.5L28 16Z" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linejoin="round" fill="rgba(255,255,255,0.18)"/>
  <circle cx="28" cy="28" r="4.5" fill="white" fill-opacity="0.95"/>
  <text x="72" y="30" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="700" fill="#ffffff">Privya Solution</text>
  <text x="72" y="48" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="#06B6D4">LLP</text>
</svg>`

export const LogoSVGLight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 56" fill="none">
  <defs>
    <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
  </defs>
  <rect width="56" height="56" rx="12" fill="url(#g2)"/>
  <path d="M28 6L45 16V40L28 50L11 40V16L28 6Z" stroke="white" stroke-width="2" stroke-linejoin="round" fill="rgba(255,255,255,0.10)"/>
  <path d="M28 16L37 21.5V34.5L28 40L19 34.5V21.5L28 16Z" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linejoin="round" fill="rgba(255,255,255,0.18)"/>
  <circle cx="28" cy="28" r="4.5" fill="white" fill-opacity="0.95"/>
  <text x="72" y="30" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="700" fill="#0F172A">Privya Solution</text>
  <text x="72" y="48" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="#2563EB">LLP</text>
</svg>`
