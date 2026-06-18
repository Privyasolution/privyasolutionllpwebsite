import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Package, ScanLine, Factory, Cpu, Scale, FlaskConical,
  Cloud, BarChart3, Wifi, Smartphone, Monitor, Database,
  Code, ArrowUpDown, Shield, Server, Activity, Layers,
} from 'lucide-react'
import { viewportConfig } from '@/utils/animations'
import { SectionHeader } from '@/components/ui/SectionHeader'

// ── Layer data ────────────────────────────────────────────────────────
const cloudModules = [
  { id: 'analytics', icon: BarChart3,  name: 'Analytics & BI',   desc: 'Real-time dashboards',    color: '#F97316' },
  { id: 'cloud',     icon: Cloud,      name: 'Cloud / On-Prem',  desc: 'Flexible deployment',     color: '#3B82F6' },
  { id: 'mobile',    icon: Smartphone, name: 'Mobile Apps',      desc: 'Android & iOS field ops', color: '#6366F1' },
  { id: 'erp',       icon: Database,   name: 'Enterprise Connectors', desc: 'SAP, Tally & API bridge', color: '#14B8A6' },
]

const appModules = [
  { id: 'wms',         icon: Package,      name: 'WMS',          desc: 'Warehouse Management System',       color: '#2563EB' },
  { id: 'mes',         icon: Factory,      name: 'MES',          desc: 'Manufacturing Execution System',    color: '#10B981' },
  { id: 'barcode',     icon: ScanLine,     name: 'Barcode & QR', desc: 'Traceability & Batch Tracking',     color: '#06B6D4' },
  { id: 'pharma',      icon: FlaskConical, name: 'Pharma Scale', desc: 'GMP Weighing & Compliance',         color: '#8B5CF6' },
  { id: 'weighbridge', icon: Scale,        name: 'Weighbridge',  desc: 'RFID Vehicle Weighing',             color: '#F59E0B' },
  { id: 'custom',      icon: Code,         name: 'Customization', desc: 'Tailored Industrial Workflows',     color: '#F43F5E' },
]

const hardwareModules = [
  { id: 'iot',     icon: Wifi,     name: 'IoT Sensors',  desc: 'Machine & env. data',      color: '#EC4899' },
  { id: 'scada',   icon: Cpu,      name: 'SCADA / PLC',  desc: 'Industrial control',       color: '#14B8A6' },
  { id: 'rfid',    icon: Activity, name: 'RFID & Tags',  desc: 'Asset & fleet tracking',   color: '#EF4444' },
  { id: 'hmi',     icon: Monitor,  name: 'HMI Displays', desc: 'Shop-floor terminals',     color: '#A855F7' },
]

// ── Sub-components ────────────────────────────────────────────────────
interface ModuleDef {
  id: string
  icon: React.ElementType
  name: string
  desc: string
  color: string
}

const ModuleCard: React.FC<{ mod: ModuleDef; delay?: number }> = ({ mod, delay = 0 }) => {
  const [hov, setHov] = useState(false)
  const Icon = mod.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{ delay, duration: 0.4 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative flex flex-col items-center gap-2.5 p-4 rounded-2xl border cursor-default transition-all duration-300 text-center select-none"
      style={{
        background:   hov ? `${mod.color}14` : 'rgba(5,10,22,0.7)',
        borderColor:  hov ? `${mod.color}55` : 'rgba(255,255,255,0.07)',
        boxShadow:    hov ? `0 0 24px ${mod.color}22, 0 8px 24px rgba(0,0,0,0.4)` : '0 2px 8px rgba(0,0,0,0.3)',
        transform:    hov ? 'translateY(-3px)' : undefined,
      }}
    >
      {/* Coloured top stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${mod.color}, ${mod.color}55)`, opacity: hov ? 1 : 0.35 }}
      />
      {/* Icon */}
      <div
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
        style={{
          background: `linear-gradient(135deg, ${mod.color}CC, ${mod.color}77)`,
          boxShadow:  hov ? `0 0 16px ${mod.color}55` : `0 0 8px ${mod.color}30`,
          transform:  hov ? 'scale(1.1)' : undefined,
        }}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>
      {/* Label */}
      <div className="text-white text-xs font-semibold leading-tight font-tech">{mod.name}</div>
      {/* Desc */}
      <motion.div
        initial={false}
        animate={{ opacity: hov ? 1 : 0, height: hov ? 'auto' : 0 }}
        transition={{ duration: 0.18 }}
        className="text-text-muted text-[10px] leading-tight overflow-hidden"
      >
        {mod.desc}
      </motion.div>
    </motion.div>
  )
}

interface LayerBandProps {
  icon: React.ElementType
  label: string
  sublabel: string
  accentColor: string
  bgGradient: string
  borderColor: string
  modules: ModuleDef[]
  baseDelay?: number
}

const LayerBand: React.FC<LayerBandProps> = ({
  icon: Icon, label, sublabel, accentColor, bgGradient, borderColor, modules, baseDelay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={viewportConfig}
    transition={{ duration: 0.55, delay: baseDelay }}
    className={`rounded-2xl border ${borderColor} overflow-hidden`}
    style={{ background: bgGradient }}
  >
    {/* Layer header */}
    <div
      className="flex items-center gap-3 px-5 py-3 border-b"
      style={{ borderColor, background: `${accentColor}0D` }}
    >
      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: `${accentColor}28`, border: `1px solid ${accentColor}44` }}
      >
        <Icon className="w-3.5 h-3.5" style={{ color: accentColor }} />
      </div>
      <div className="min-w-0">
        <span
          className="text-xs font-bold tracking-widest uppercase font-tech"
          style={{ color: accentColor }}
        >
          {label}
        </span>
        <span className="text-text-muted text-[11px] ml-2 hidden sm:inline">— {sublabel}</span>
      </div>
    </div>

    {/* Modules grid */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-5">
      {modules.map((mod, i) => (
        <ModuleCard key={mod.id} mod={mod} delay={baseDelay + i * 0.05} />
      ))}
    </div>
  </motion.div>
)

interface ConnectorProps {
  label: string
  delay?: number
}

const FlowConnector: React.FC<ConnectorProps> = ({ label, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={viewportConfig}
    transition={{ delay }}
    className="flex flex-col items-center gap-1 py-2"
  >
    {/* Animated flow line */}
    <div className="relative w-px h-10" style={{ background: 'rgba(37,99,235,0.2)' }}>
      {/* Moving dot — downward */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
        style={{ background: '#2563EB', boxShadow: '0 0 6px #2563EB' }}
        animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
      />
      {/* Moving dot — upward */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
        style={{ background: '#06B6D4', boxShadow: '0 0 6px #06B6D4' }}
        animate={{ top: ['100%', '0%'], opacity: [0, 1, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'linear', delay: 0.7 }}
      />
    </div>
    {/* Label */}
    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/15">
      <ArrowUpDown className="w-2.5 h-2.5 text-secondary" />
      <span className="text-[10px] text-secondary font-medium font-tech tracking-wide">{label}</span>
    </div>
    <div className="relative w-px h-10" style={{ background: 'rgba(6,182,212,0.2)' }}>
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
        style={{ background: '#2563EB', boxShadow: '0 0 6px #2563EB' }}
        animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'linear', delay: 0.3 }}
      />
    </div>
  </motion.div>
)

// ── Main component ────────────────────────────────────────────────────
export const TechEcosystem: React.FC = () => (
  <section
    className="section-padding relative overflow-hidden"
    style={{ background: 'linear-gradient(180deg, #020617 0%, #06091A 40%, #080E1E 70%, #020617 100%)' }}
  >
    {/* Background textures */}
    <div className="absolute inset-0 grid-bg opacity-10" />
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
      style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)' }}
    />

    <div className="container-xl relative">
      <SectionHeader
        badge="Technology Ecosystem"
        title="Industrial Architecture,"
        titleHighlight="Fully Connected"
        subtitle="A layered technology platform where hardware devices, enterprise software, and cloud intelligence are unified through the Privya integration hub."
      />

      {/* ── Architecture Diagram ─────────────────────────────────── */}
      <div className="relative max-w-5xl mx-auto">

        {/* ── LAYER 1: Cloud & Intelligence ─────────── */}
        <LayerBand
          icon={Cloud}
          label="Cloud & Intelligence Layer"
          sublabel="Real-time analytics, remote dashboards, mobile operations & enterprise system integration"
          accentColor="#3B82F6"
          bgGradient="linear-gradient(135deg, rgba(30,58,138,0.25) 0%, rgba(7,89,133,0.15) 100%)"
          borderColor="border-blue-500/20"
          modules={cloudModules}
          baseDelay={0}
        />

        {/* Connector: API & Data Exchange */}
        <FlowConnector label="API & Data Exchange" delay={0.15} />

        {/* ── LAYER 2: Privya Platform (Hub) ─────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(37,99,235,0.28) 0%, rgba(6,182,212,0.18) 50%, rgba(37,99,235,0.20) 100%)',
            border: '1px solid rgba(6,182,212,0.35)',
            boxShadow: '0 0 60px rgba(37,99,235,0.15), 0 0 100px rgba(6,182,212,0.08), inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
        >
          {/* Subtle mesh overlay */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(6,182,212,0.04) 40px, rgba(6,182,212,0.04) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(6,182,212,0.04) 40px, rgba(6,182,212,0.04) 41px)',
            }}
          />

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 px-6 py-6 sm:px-10 sm:py-7">
            {/* Logo mark */}
            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 relative">
              {/* Pulsing glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.4), transparent 70%)' }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <img
                src="/favicon-lightmode.svg"
                alt="Privya Platform"
                className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 object-contain"
              />
            </div>

            {/* Text block */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
                <Layers className="w-4 h-4 text-accent" />
                <span className="text-accent text-xs font-bold tracking-widest uppercase font-tech">Core Integration Hub</span>
              </div>
              <h3 className="text-white font-extrabold text-xl sm:text-2xl mb-2 font-heading">
                Privya Integration Platform
              </h3>
              <p className="text-text-muted text-sm leading-relaxed max-w-lg">
                The unified middleware layer — handling APIs, data adapters, security protocols, and real-time event streaming that connects every hardware device to every software module and cloud service.
              </p>
            </div>

            {/* Capability chips */}
            <div className="flex-shrink-0 flex flex-wrap sm:flex-col gap-2 justify-center">
              {['React + Vite Frontend', 'FastAPI Backend', 'PostgreSQL Database', 'Multi-site Support'].map((cap) => (
                <div
                  key={cap}
                  className="px-3 py-1.5 rounded-lg text-[11px] font-semibold text-accent font-tech whitespace-nowrap"
                  style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.25)' }}
                >
                  {cap}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Connector: Software ↔ Hardware */}
        <FlowConnector label="Software ↔ Hardware Bridge" delay={0.3} />

        {/* ── LAYER 3: Application Software ─────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="rounded-2xl border border-blue-500/15 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(10,18,36,0.90) 100%)' }}
        >
          {/* Layer header */}
          <div
            className="flex items-center gap-3 px-5 py-3 border-b border-blue-500/15"
            style={{ background: 'rgba(37,99,235,0.08)' }}
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(37,99,235,0.20)', border: '1px solid rgba(37,99,235,0.35)' }}
            >
              <Server className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest uppercase font-tech text-blue-400">
                Enterprise Application Layer
              </span>
              <span className="text-text-muted text-[11px] ml-2 hidden sm:inline">— React + Vite · FastAPI · PostgreSQL · REST APIs · Industry-specific modules</span>
            </div>
          </div>

          {/* 6-module grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 p-4 sm:p-5">
            {appModules.map((mod, i) => (
              <ModuleCard key={mod.id} mod={mod} delay={0.35 + i * 0.05} />
            ))}
          </div>
        </motion.div>

        {/* Connector: Field Data */}
        <FlowConnector label="Field Data Collection" delay={0.5} />

        {/* ── LAYER 4: Hardware & IoT ─────────── */}
        <LayerBand
          icon={Cpu}
          label="Hardware & IoT Layer"
          sublabel="Weighing Devices · RFID Readers · PLCs · SCADA · IoT Sensors — the operational ground layer"
          accentColor="#10B981"
          bgGradient="linear-gradient(135deg, rgba(6,78,59,0.25) 0%, rgba(15,118,110,0.12) 100%)"
          borderColor="border-emerald-500/20"
          modules={hardwareModules}
          baseDelay={0.5}
        />
      </div>

      {/* ── Summary stats strip ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        transition={{ delay: 0.6 }}
        className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        {[
          { icon: Shield,   value: '50+',   label: 'Hardware Devices',      color: '#10B981' },
          { icon: Layers,   value: '30+',   label: 'Software Integrations', color: '#2563EB' },
          { icon: Cloud,    value: 'Dual',  label: 'Cloud & On-Premise',    color: '#06B6D4' },
          { icon: Activity, value: '7+',    label: 'Industries Covered',    color: '#F59E0B' },
        ].map(({ icon: Icon, value, label, color }) => (
          <div
            key={label}
            className="flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/6"
            style={{ background: 'rgba(11,18,32,0.7)' }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${color}18`, border: `1px solid ${color}30` }}
            >
              <Icon className="w-5 h-5" style={{ color }} />
            </div>
            <div>
              <div className="text-white font-bold text-xl font-tech" style={{ color }}>{value}</div>
              <div className="text-text-muted text-xs mt-0.5">{label}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
)
