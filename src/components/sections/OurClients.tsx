import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const clients = [
  { name: 'Amneal Pharmaceuticals',        logo: '/clients/amneal.jpg' },
  { name: 'Believe International Limited', logo: '/clients/believe.webp' },
  { name: 'Shree Bhagwati Flour & Foods',  logo: '/clients/bhagwatilogo.png' },
  { name: 'Emcure Pharmaceuticals',        logo: '/clients/Emcure.png' },
  { name: 'Stallion Laboratories',         logo: '/clients/stallion_laboratories_pvt_ltd_logo.jpg' },
]

// Double the list — animation goes 0 → -50%, making the loop seamless
const marqueeItems = [...clients, ...clients]

// ~5 s per card (one full loop = clients.length cards), floor at 24 s
const DURATION = `${Math.max(clients.length * 5, 24)}s`

// Must match section edge colour for the fade overlays to blend
const EDGE = '#020617'

export const OurClients: React.FC = () => (
  <section
    className="py-14 sm:py-20"
    style={{ background: 'linear-gradient(180deg, #020617 0%, #060D1A 50%, #020617 100%)' }}
  >
    {/* Header */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        Trusted by Leading Enterprises
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Clients</h2>
      <p className="text-slate-400 text-sm mt-2">
        Serving pharmaceutical, FMCG, manufacturing &amp; logistics enterprises across India
      </p>
    </div>

    {/* Marquee */}
    <div className="relative">
      {/* Edge fades */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10"
        style={{ background: `linear-gradient(to right, ${EDGE}, transparent)` }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10"
        style={{ background: `linear-gradient(to left, ${EDGE}, transparent)` }}
      />

      {/* Clip window */}
      <div style={{ overflow: 'hidden', padding: '8px 0' }}>
        {/*
          marquee-track → @keyframes marquee-scroll defined in globals.css
          --marquee-duration CSS variable drives the speed
          :hover pauses via globals.css rule (no JS needed)
        */}
        <div
          className="marquee-track flex"
          style={
            {
              width: 'max-content',
              gap: '16px',
              '--marquee-duration': DURATION,
            } as React.CSSProperties
          }
        >
          {marqueeItems.map((c, i) => (
            <div
              key={i}
              className="flex-shrink-0 rounded-2xl border border-white/8 p-3 transition-all duration-300 cursor-default hover:border-accent/40 hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.04)',
                width: '160px',
                height: '100px',
              }}
            >
              {/* Full-colour logo on white well */}
              <div
                className="w-full h-full rounded-xl flex items-center justify-center overflow-hidden"
                style={{ background: '#ffffff', padding: '10px 14px' }}
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Footer link */}
    <div className="text-center mt-8">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:gap-3 transition-all duration-200 group"
      >
        View Client Implementations
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </section>
)
