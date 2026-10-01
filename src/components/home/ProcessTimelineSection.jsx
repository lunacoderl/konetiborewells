import React from 'react';
import { PhoneCall, MapPin, Wrench, ShieldCheck, CheckCircle } from 'lucide-react';

export default function ProcessTimelineSection() {
  const steps = [
    {
      step: '01',
      title: 'Talk to Us',
      subtitle: 'Initial Requirement Call',
      description: 'Discuss your plot location, property type, and daily water needs. On-call 24/7 at 092466 22995.',
      icon: PhoneCall
    },
    {
      step: '02',
      title: 'Site Assessment',
      subtitle: 'Access & Siting Inspection',
      description: 'Verifying rig vehicle access path, overhead electrical wires, and subterranean boundary clearances.',
      icon: MapPin
    },
    {
      step: '03',
      title: 'Drilling Operations',
      subtitle: 'DTH Pneumatic Rig',
      description: 'Continuous drilling through soil overburden and hard granite bedrock down to target water fissures.',
      icon: Wrench
    },
    {
      step: '04',
      title: 'Casing & Motor Setup',
      subtitle: 'Pipe Insertion & Wiring',
      description: 'Rigid casing pipe lowered to secure wellhead, followed by calibrated submersible pump lowering.',
      icon: ShieldCheck
    },
    {
      step: '05',
      title: 'Testing & Handover',
      subtitle: 'Clear Water Flow Verification',
      description: 'Air flushing until water runs clear, followed by motor discharge flow check and electrical handover.',
      icon: CheckCircle
    }
  ];

  return (
    <section
      id="process"
      className="site-section bg-white"
      style={{
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        {/* Section Heading */}
        <div style={{ maxWidth: '760px', marginBottom: '50px' }}>
          <div className="eyebrow-badge">
            <span>HOW WE WORK • 5-STEP EXECUTION</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
              fontWeight: 800,
              color: 'var(--color-dark-text)',
              lineHeight: 1.18,
              marginBottom: '14px'
            }}
          >
            A Clear Process From Site to Solution.
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--color-muted-text)', lineHeight: 1.65 }}>
            Structured field execution ensuring transparent casing measurements, safe rig positioning, and dependable groundwater flow.
          </p>
        </div>

        {/* Desktop Horizontal Connected Timeline */}
        <div
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '20px'
          }}
          className="desktop-timeline-grid"
        >
          {/* Connecting Line Behind Nodes */}
          <div
            style={{
              position: 'absolute',
              top: '32px',
              left: '40px',
              right: '40px',
              height: '3px',
              backgroundColor: 'var(--color-border)',
              zIndex: 1
            }}
            className="timeline-track-line"
          >
            <div
              style={{
                height: '100%',
                width: '100%',
                background: 'linear-gradient(90deg, #087EA4 0%, #12B8C4 50%, #F4B942 100%)'
              }}
            />
          </div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start'
                }}
                className="timeline-step-item"
              >
                {/* Numbered Node Circle */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    border: '3px solid var(--color-primary-blue)',
                    boxShadow: '0 6px 18px rgba(8, 126, 164, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    position: 'relative'
                  }}
                >
                  <Icon size={24} color="var(--color-primary-blue)" />
                  <span
                    style={{
                      position: 'absolute',
                      top: '-6px',
                      right: '-6px',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-dark-text)',
                      color: '#FFFFFF',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {step.step}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.18rem',
                    fontWeight: 700,
                    color: 'var(--color-dark-text)',
                    marginBottom: '4px'
                  }}
                >
                  {step.title}
                </h3>

                <span
                  style={{
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    color: 'var(--color-primary-blue)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginBottom: '10px',
                    display: 'block'
                  }}
                >
                  {step.subtitle}
                </span>

                <p style={{ fontSize: '0.88rem', color: 'var(--color-muted-text)', lineHeight: 1.55 }}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-timeline-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 28px !important;
          }
          .timeline-track-line {
            display: none !important;
          }
          .timeline-step-item {
            flex-direction: row !important;
            align-items: flex-start !important;
            gap: 18px !important;
            background-color: var(--bg-page);
            padding: 16px;
            border-radius: var(--radius-md);
            border: 1px solid var(--color-border);
          }
          .timeline-step-item > div:first-child {
            flex-shrink: 0;
            margin-bottom: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
