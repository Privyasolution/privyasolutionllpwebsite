import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { useLenis } from '@/hooks/useLenis'

const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const Solutions = lazy(() => import('@/pages/Solutions'))
const Industries = lazy(() => import('@/pages/Industries'))
const Projects = lazy(() => import('@/pages/Projects'))
const Contact = lazy(() => import('@/pages/Contact'))
const WMS = lazy(() => import('@/pages/solutions/WMS'))
const Barcode = lazy(() => import('@/pages/solutions/Barcode'))
const PharmaWeighing = lazy(() => import('@/pages/solutions/PharmaWeighing'))
const Weighbridge = lazy(() => import('@/pages/solutions/Weighbridge'))
const MES = lazy(() => import('@/pages/solutions/MES'))
const IoT = lazy(() => import('@/pages/solutions/IoT'))
const CustomSoftware = lazy(() => import('@/pages/solutions/CustomSoftware'))
const WebDevelopment = lazy(() => import('@/pages/solutions/WebDevelopment'))
const AMC = lazy(() => import('@/pages/solutions/AMC'))

const PageLoader: React.FC = () => (
  <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: '#020617' }}>
    {/* Ambient radial glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(37,99,235,0.12), transparent)' }}
    />

    <div className="relative flex flex-col items-center gap-8">
      {/* Favicon icon with orbital rings */}
      <div className="relative flex items-center justify-center w-36 h-36">
        {/* Outer orbit ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ border: '1px solid rgba(37,99,235,0.25)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        />
        {/* Inner orbit ring */}
        <motion.div
          className="absolute w-24 h-24 rounded-full"
          style={{ border: '1px solid rgba(6,182,212,0.30)' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
        />
        {/* Glow halo */}
        <motion.div
          className="absolute w-16 h-16 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.35), transparent 70%)' }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Actual favicon — breathe + gentle rock */}
        <motion.img
          src="/favicon-darkmode.svg"
          alt="Privya Solution LLP"
          className="relative z-10 w-14 h-14 object-contain"
          animate={{
            scale: [1, 1.08, 1, 1.04, 1],
            rotate: [0, 3, 0, -3, 0],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Brand name */}
      <div className="text-center">
        <div
          className="font-bold text-xl tracking-tight text-white"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          Privya Solution <span style={{ color: '#06B6D4' }}>LLP</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {[0, 0.22, 0.44].map((delay) => (
            <motion.div
              key={delay}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#06B6D4' }}
              animate={{ scale: [0.5, 1.4, 0.5], opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.3, delay, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
)

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const AppContent: React.FC = () => {
  useLenis()

  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <Suspense fallback={<PageLoader />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/wms" element={<WMS />} />
          <Route path="/solutions/barcode" element={<Barcode />} />
          <Route path="/solutions/pharma-weighing" element={<PharmaWeighing />} />
          <Route path="/solutions/weighbridge" element={<Weighbridge />} />
          <Route path="/solutions/mes" element={<MES />} />
          <Route path="/solutions/iot" element={<IoT />} />
          <Route path="/solutions/custom-software" element={<CustomSoftware />} />
          <Route path="/solutions/web-development" element={<WebDevelopment />} />
          <Route path="/solutions/amc" element={<AMC />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
