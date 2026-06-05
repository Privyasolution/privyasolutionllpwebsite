import React from 'react'
import { Hero } from '@/components/sections/Hero'
import { Industries } from '@/components/sections/Industries'
import { Solutions } from '@/components/sections/Solutions'
import { WhyChoose } from '@/components/sections/WhyChoose'
import { Journey } from '@/components/sections/Journey'
import { TechEcosystem } from '@/components/sections/TechEcosystem'
import { Metrics } from '@/components/sections/Metrics'
import { CTA } from '@/components/sections/CTA'
import { PageSEO } from '@/components/ui/PageSEO'

const Home: React.FC = () => (
  <main>
    <PageSEO
      title="Privya Solution LLP | Industrial Technology & Automation Solutions"
      description="Privya Solution LLP transforms manufacturing, pharmaceutical, warehousing and logistics businesses with WMS, MES, Pharma Weighing, Weighbridge, IoT, and custom software. Surat, Gujarat, India."
      keywords="warehouse management system, manufacturing execution system, pharma weighing, weighbridge management, barcode traceability, IoT automation, industrial software Surat Gujarat"
      canonical="/"
    />
    <Hero />
    <Industries />
    <Solutions />
    <WhyChoose />
    <Journey />
    <TechEcosystem />
    <Metrics />
    <CTA />
  </main>
)

export default Home
