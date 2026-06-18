// ── Shared domain types ───────────────────────────────────────────────────

export interface NavLink {
  name: string
  href: string
  hasDropdown?: boolean
}

export interface Stat {
  value: string
  label: string
}

export interface Solution {
  name: string
  href: string
}

export interface SolutionHighlight {
  title: string
  icon: string
  detail: string
  highlights: string[]
}

export interface ClientOutcome {
  label: string
  value: string
}

export interface FeaturedClient {
  id: string
  name: string
  logo: string
  industry: string
  color: string
  accentBg: string
  accentBorder: string
  tagline: string
  description: string
  solutions: SolutionHighlight[]
  outcomes: ClientOutcome[]
  tags: string[]
  year: string
}

export interface Project {
  id: number
  title: string
  category: string
  industry: string
  description: string
  tags: string[]
  color: string
  icon: string
}

// ── Viewport / animation ──────────────────────────────────────────────────

export interface ViewportConfig {
  once: boolean
  margin: string
}
