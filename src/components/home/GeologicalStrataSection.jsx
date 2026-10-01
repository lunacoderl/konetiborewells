import React, { useState } from 'react';
import { Layers, Droplet, ArrowDown, Shield, CheckCircle, Info } from 'lucide-react';

export default function GeologicalStrataSection() {
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    { id: 1, label: 'SITE', title: '01. Site Feasibility & Alignment', desc: 'Assessing plot access, surface slope, septic distance, and overhead electrical lines before leveling the rig.' },
    { id: 2, label: 'DRILL', title: '02. Pneumatic DTH Drilling', desc: 'Heavy pneumatic hammer penetrating loose soil overburden and hard crystalline granite bedrock.' },
    { id: 3, label: 'CASING', title: '03. Casing Pipe Seating', desc: 'Rigid PVC or Mild Steel casing lowered and seated firmly into solid rock to prevent collapse and surface contamination.' },
    { id: 4, label: 'PUMP', title: '04. Motor & Cable Lowering', desc: 'Lowering calibrated submersible pump with high-tensile column pipes, safety wire, and waterproof power cables.' },
    { id: 5, label: 'WATER', title: '05. High-Yield Water Flow', desc: 'Clean groundwater extracted from subterranean aquifer fractures and pumped directly to overhead storage.' }
  ];

  return (
    <section
      id="geology"
      className="site-section bg-white"
      style={{
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        {/* Section Heading */}
        <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
          <div className="eyebrow-badge">
            <Layers size={14} />
            <span>GEOLOGICAL ENGINEERING • SUB-SURFACE JOURNEY</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
              fontWeight: 800,
              color: 'var(--color-dark-text)',
              lineHeight: 1.2,
              marginBottom: '14px'
            }}
          >
            From Ground Surface to Subterranean Water.
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--color-muted-text)' }}>
            Why borewell drilling must be done right: A cross-sectional view of the underground strata beneath Visakhapatnam, illustrating proper casing depth and aquifer protection.
          </p>
        </div>

        {/* Geological Cross-Section Visual & Stage Stepper Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'center',
            backgroundColor: 'var(--bg-page)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(20px, 3.5vw, 36px)',
            boxShadow: 'var(--shadow-subtle)'
          }}
          className="strata-grid"
        >
          {/* Left: Custom Geological Strata SVG Diagram */}
          <div
            style={{
              position: 'relative',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              padding: '16px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-subtle)'
            }}
          >
            <svg
              viewBox="0 0 540 500"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Layer 1: Ground Surface (0m / 0ft) */}
              <rect x="20" y="20" width="500" height="50" rx="6" fill="#F4ECE1" stroke="#D8C8B5" strokeWidth="1.5" />
              <text x="35" y="48" fontFamily="Outfit" fontSize="13" fontWeight="700" fill="#6B4D2B">
                GROUND SURFACE (0 FT) — Residential / Farm Property
              </text>

              {/* Surface Drilling Rig Graphic Silhouette */}
              <g transform="translate(230, 24)">
                <rect x="15" y="-14" width="30" height="14" rx="2" fill="#087EA4" />
                <polygon points="30,-22 25,-14 35,-14" fill="#F4B942" />
                <line x1="30" y1="-14" x2="30" y2="440" stroke="#087EA4" strokeWidth="4" strokeDasharray={activeStage >= 2 ? "none" : "4 2"} />
              </g>

              {/* Layer 2: Soil Overburden & Weathered Strata (0 - 40 FT) */}
              <rect x="20" y="75" width="500" height="95" rx="6" fill="#E8DDD1" stroke="#CBB9A5" strokeWidth="1.5" />
              {/* Geological Soil Pattern lines */}
              <path d="M35 100 Q150 110 230 100 T430 105" stroke="#BAA590" strokeWidth="1.5" strokeDasharray="5 3" />
              <path d="M40 135 Q180 145 280 135 T500 140" stroke="#BAA590" strokeWidth="1.5" strokeDasharray="6 4" />
              <text x="35" y="105" fontFamily="Outfit" fontSize="12" fontWeight="700" fill="#5A4328">
                OVERBURDEN &amp; LOOSE SOIL (0 - 40 FT)
              </text>
              <text x="35" y="125" fontFamily="Plus Jakarta Sans" fontSize="10.5" fill="#7A6044">
                Must be sealed with heavy PVC / Mild Steel casing pipe
              </text>

              {/* Layer 3: Hard Crystalline Granite Rock (40 - 240 FT) */}
              <rect x="20" y="175" width="500" height="150" rx="6" fill="#D7E1E3" stroke="#B4C6CA" strokeWidth="1.5" />
              {/* Hard rock crack/fracture lines */}
              <path d="M50 210 L120 225 L160 215 L220 235" stroke="#90A7AD" strokeWidth="1.5" />
              <path d="M300 240 L370 230 L430 250 L490 235" stroke="#90A7AD" strokeWidth="1.5" />
              <path d="M80 270 L150 285 L220 275" stroke="#90A7AD" strokeWidth="1.5" />
              <path d="M320 290 L400 305 L470 285" stroke="#90A7AD" strokeWidth="1.5" />
              <text x="35" y="205" fontFamily="Outfit" fontSize="12" fontWeight="700" fill="#244047">
                HARD GRANITE BEDROCK (40 - 240 FT)
              </text>
              <text x="35" y="225" fontFamily="Plus Jakarta Sans" fontSize="10.5" fill="#4B666D">
                Eastern Ghats hard formation requiring heavy pneumatic DTH hammer
              </text>

              {/* Layer 4: Deep Water-Bearing Formation & Aquifer (240 - 450+ FT) */}
              <rect x="20" y="330" width="500" height="145" rx="6" fill="#D7F3F6" stroke="#9ADFE6" strokeWidth="1.5" />
              {/* Water wave patterns */}
              <path d="M30 365 Q80 355 130 365 T230 365 T330 365 T430 365 T510 365" stroke="#12B8C4" strokeWidth="2" strokeDasharray="6 3" />
              <path d="M30 405 Q80 395 130 405 T230 405 T330 405 T430 405 T510 405" stroke="#087EA4" strokeWidth="2" />
              <path d="M30 445 Q80 435 130 445 T230 445 T330 445 T430 445 T510 445" stroke="#12B8C4" strokeWidth="1.5" strokeDasharray="4 2" />
              <text x="35" y="360" fontFamily="Outfit" fontSize="12" fontWeight="800" fill="#065B77">
                CONFINED WATER AQUIFER (240 - 450+ FT)
              </text>
              <text x="35" y="380" fontFamily="Plus Jakarta Sans" fontSize="10.5" fill="#0C758A">
                Underground fissures bearing clean natural groundwater
              </text>

              {/* Center Borehole Casing & Rising Water Column */}
              <g transform="translate(260, 20)">
                {/* Outer casing */}
                <rect x="-8" y="0" width="16" height="155" fill="#FFFFFF" stroke="#087EA4" strokeWidth="2" />
                {/* Lower open borehole in rock */}
                <rect x="-6" y="155" width="12" height="280" fill="#E8F9FA" stroke="#12B8C4" strokeWidth="1.5" />
                {/* Submersible Motor at depth */}
                <rect x="-5" y="360" width="10" height="50" rx="2" fill="#065B77" />
                {/* Rising Water Stream */}
                <line x1="0" y1="360" x2="0" y2="0" stroke="#12B8C4" strokeWidth="3" strokeDasharray="4 2" />
                {/* Water Droplet */}
                <circle cx="0" cy="180" r="3.5" fill="#087EA4" />
                <circle cx="0" cy="100" r="3" fill="#12B8C4" />
                <circle cx="0" cy="40" r="3" fill="#087EA4" />
              </g>
            </svg>
          </div>

          {/* Right: Interactive 5-Stage Stepper & Technical Explanations */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              {stages.map((stage) => {
                const isActive = activeStage === stage.id;
                return (
                  <div
                    key={stage.id}
                    onClick={() => setActiveStage(stage.id)}
                    style={{
                      padding: '14px 18px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                      border: isActive ? '2px solid var(--color-primary-blue)' : '1px solid var(--color-border)',
                      boxShadow: isActive ? '0 8px 24px rgba(8, 126, 164, 0.12)' : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    className="stage-item-card"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <strong
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '0.98rem',
                          color: isActive ? 'var(--color-primary-blue-dark)' : 'var(--color-dark-text)'
                        }}
                      >
                        {stage.title}
                      </strong>
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 800,
                          padding: '3px 8px',
                          borderRadius: '4px',
                          backgroundColor: isActive ? 'var(--color-aqua-light)' : '#EBF0F2',
                          color: isActive ? 'var(--color-primary-blue-dark)' : 'var(--color-muted-text)'
                        }}
                      >
                        {stage.label}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.88rem', margin: 0, color: 'var(--color-muted-text)', lineHeight: 1.5 }}>
                      {stage.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Semantic Crawlable SEO Text Box */}
            <div
              style={{
                padding: '16px 20px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(8, 126, 164, 0.06)',
                border: '1px solid rgba(8, 126, 164, 0.15)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}
            >
              <Info size={18} color="var(--color-primary-blue)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <div style={{ fontSize: '0.86rem', color: 'var(--color-dark-text)', lineHeight: 1.6 }}>
                <strong>Engineering Fact:</strong> Borewell drilling involves site-specific planning, drilling through soil and rock formations, and selecting suitable equipment for the application. Proper casing pipe placement prevents loose upper soil from collapsing into the borehole, keeping groundwater clean.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .stage-item-card:hover {
          border-color: var(--color-aqua) !important;
          background-color: #FFFFFF !important;
        }
      `}</style>
    </section>
  );
}
