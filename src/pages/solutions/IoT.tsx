import React from 'react'
import { Cpu, Plug, Radio, Monitor, Brain, AlertTriangle, Zap, Gamepad2, Database, Cloud } from 'lucide-react'
import { ServicePage } from '@/components/layout/ServicePage'

const IoT: React.FC = () => (
  <ServicePage
    icon={Cpu}
    gradient="from-sky-600 to-blue-500"
    glow="rgba(2,132,199,0.3)"
    badge="Industrial Automation"
    title="IoT & Industrial Automation"
    subtitle="Connecting machines, sensors, and systems for intelligent operations"
    description="Privya Solution's IoT platform connects your industrial assets — machines, sensors, and controllers — to cloud-based analytics enabling predictive maintenance, real-time monitoring, and intelligent automation."
    benefits={[
      'Real-time machine health monitoring preventing unplanned downtime',
      'Predictive maintenance reducing maintenance costs by up to 30%',
      'Automated alerts for critical parameters: temperature, pressure, vibration',
      'Remote monitoring and control from anywhere via web or mobile',
      'Energy consumption monitoring and optimization per machine/line',
      'Seamless integration with SCADA, PLC, MES, and enterprise systems',
      'Custom automation workflows using rule-based and AI-driven logic',
      'Scalable architecture from single machine to entire plant network',
    ]}
    features={[
      { title: 'Machine Connectivity', description: 'Connect any machine via OPC-UA, Modbus, MQTT, RS232, or custom protocols — brand-agnostic integration.', icon: Plug },
      { title: 'Sensor Integration', description: 'Temperature, pressure, vibration, flow, level, humidity, and custom sensor integration with edge computing.', icon: Radio },
      { title: 'Real-time Dashboard', description: 'Live operational dashboards with customizable KPIs, Gantt charts, and geo-mapped facility views.', icon: Monitor },
      { title: 'Predictive Maintenance', description: 'ML-based anomaly detection identifying machine degradation patterns before failure occurs.', icon: Brain },
      { title: 'Alert Management', description: 'Multi-level alerts via SMS, email, and mobile push for critical machine parameters and threshold breaches.', icon: AlertTriangle },
      { title: 'Energy Monitoring', description: 'Per-machine energy consumption tracking with efficiency benchmarking and carbon footprint reporting.', icon: Zap },
      { title: 'Remote Control', description: 'Authorized remote commands for machine start/stop, setpoint changes, and recipe downloads.', icon: Gamepad2 },
      { title: 'Data Historian', description: 'Long-term industrial time-series data storage with high-speed trend analysis and anomaly detection.', icon: Database },
      { title: 'Cloud & Edge', description: 'Hybrid architecture with edge processing for latency-critical operations and cloud analytics for insights.', icon: Cloud },
    ]}
    useCases={[
      { industry: 'Manufacturing', useCase: 'Production line OEE monitoring', outcome: 'Reduced unplanned downtime by 35% in first quarter' },
      { industry: 'Utilities', useCase: 'Water and electricity consumption monitoring', outcome: 'Identified and eliminated ₹15L annual energy waste' },
      { industry: 'Cold Chain', useCase: 'Temperature and humidity monitoring', outcome: 'Eliminated cold chain violations with real-time alerts' },
      { industry: 'Pharma', useCase: 'Clean room environmental monitoring', outcome: 'Automated environmental compliance recording and alerts' },
      { industry: 'Chemicals', useCase: 'Process parameter monitoring and alarms', outcome: 'Prevented 3 major process incidents in 6 months' },
      { industry: 'Logistics', useCase: 'Vehicle and asset tracking', outcome: 'Reduced idle time by 40% through real-time GPS+IoT insights' },
    ]}
    technologies={[
      'OPC-UA', 'Modbus TCP/RTU', 'MQTT', 'BACnet', 'EtherNet/IP',
      'RS232 / RS485', 'Siemens PLC', 'Allen Bradley', 'Schneider PLC',
      'Raspberry Pi Edge', 'Azure IoT Hub', 'AWS IoT', 'InfluxDB',
      'Grafana', 'Machine Learning', 'Python Analytics', 'Mobile App',
    ]}
    workflow={[
      { step: 1, title: 'Asset Connectivity', description: 'Industrial assets connected via appropriate protocol — OPC-UA for modern PLCs, Modbus for legacy, MQTT for IoT sensors.' },
      { step: 2, title: 'Edge Processing', description: 'Edge gateway handles local data aggregation, protocol conversion, and real-time alerts — works even offline.' },
      { step: 3, title: 'Data Transmission', description: 'Processed data streamed securely to cloud platform or on-premise server with encryption and authentication.' },
      { step: 4, title: 'Real-time Analytics', description: 'Live dashboards display machine KPIs, process trends, and OEE metrics with sub-second data refresh rates.' },
      { step: 5, title: 'Predictive Intelligence', description: 'ML models analyze historical patterns to predict failures, optimize schedules, and recommend maintenance actions.' },
      { step: 6, title: 'Alerts & Actions', description: 'Automated alerts sent to operators and managers. Maintenance tickets auto-created in enterprise/CMMS system on anomaly detection.' },
    ]}
  />
)

export default IoT
