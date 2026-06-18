import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
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
// Need management confirmation before permanent removal
// const CustomSoftware = lazy(() => import('@/pages/solutions/CustomSoftware'))
// const WebDevelopment = lazy(() => import('@/pages/solutions/WebDevelopment'))
const AMC = lazy(() => import('@/pages/solutions/AMC'))
const IPQCVerification = lazy(() => import('@/pages/projects/IPQCVerification'))
const AutoWeightCapture = lazy(() => import('@/pages/projects/AutoWeightCapture'))
const SmartParcelVerification = lazy(() => import('@/pages/projects/SmartParcelVerification'))
const VehicleWeighbridge = lazy(() => import('@/pages/projects/VehicleWeighbridge'))
const NotFound = lazy(() => import('@/pages/NotFound'))

// Pure-CSS loader — no framer-motion, paint-ready in one frame
const PageLoader: React.FC = () => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8" style={{ background: '#020617' }}>
    <div className="relative w-32 h-32 flex items-center justify-center">
      <div
        className="absolute inset-0 rounded-full animate-pulse-slow"
        style={{ border: '1px solid rgba(6,182,212,0.22)' }}
      />
      <div
        className="absolute inset-4 rounded-full"
        style={{ border: '1px solid rgba(37,99,235,0.28)' }}
      />
      <img src="/favicon-darkmode.svg" alt="" className="relative z-10 w-14 h-14 select-none" draggable={false} />
    </div>
    <div className="flex flex-col items-center gap-3">
      <p className="text-base font-bold tracking-tight">
        <span className="text-white">Privya Solution </span>
        <span style={{ color: '#06B6D4' }}>LLP</span>
      </p>
      <div className="flex items-center gap-1.5">
        {([0, 150, 300] as const).map((ms) => (
          <span
            key={ms}
            className="block w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: '#06B6D4', animationDelay: `${ms}ms` }}
          />
        ))}
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
          {/* Need management confirmation before permanent removal */}
          {/* <Route path="/solutions/custom-software" element={<CustomSoftware />} /> */}
          {/* <Route path="/solutions/web-development" element={<WebDevelopment />} /> */}
          <Route path="/solutions/amc" element={<AMC />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/ipqc-verification" element={<IPQCVerification />} />
          <Route path="/projects/auto-weight-capture" element={<AutoWeightCapture />} />
          <Route path="/projects/smart-parcel-verification" element={<SmartParcelVerification />} />
          <Route path="/projects/vehicle-weighbridge" element={<VehicleWeighbridge />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
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
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#0B1220',
            color: '#e2e8f0',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            fontSize: '14px',
          },
          success: { iconTheme: { primary: '#22c55e', secondary: '#0B1220' } },
          error: { iconTheme: { primary: '#ef4444', secondary: '#0B1220' } },
        }}
      />
    </BrowserRouter>
  )
}

export default App
