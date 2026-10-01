import React, { useState } from 'react';
import { MapPin, Navigation, Compass, CheckCircle } from 'lucide-react';
import { baseHub, serviceAreas } from '../../data/areas';

export default function ServiceAreasSection() {
  const [selectedArea, setSelectedArea] = useState(serviceAreas[0]);

  return (
    <section
      id="areas"
      className="site-section bg-light"
      style={{
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        {/* Section Heading */}
        <div style={{ maxWidth: '780px', marginBottom: '44px' }}>
          <div className="eyebrow-badge">
            <Compass size={14} />
            <span>GEOGRAPHIC COVERAGE • VISAKHAPATNAM</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 800,
              color: 'var(--color-dark-text)',
              lineHeight: 1.16,
              marginBottom: '14px'
            }}
          >
            Serving Visakhapatnam &amp; Surrounding Areas.
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--color-muted-text)', lineHeight: 1.65 }}>
            Headquartered at <strong>Lalitha Colony, Seethammadara</strong> (near Bullayya College), our truck-mounted rigs deploy across residential neighborhoods, IT corridors, industrial estates, and agricultural belts throughout Visakhapatnam.
          </p>
        </div>

        {/* Visual Map Hub & Interactive Area Details */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'center'
          }}
          className="areas-grid"
        >
          {/* Left: Stylized Vizag Coastal Map SVG with Radiating Hub */}
          <div
            style={{
              position: 'relative',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1.5px solid var(--color-border)',
              padding: 'clamp(16px, 3vw, 28px)',
              boxShadow: 'var(--shadow-subtle)',
              overflow: 'hidden'
            }}
          >
            <svg
              viewBox="0 0 520 440"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Coastal Bay of Bengal curve */}
              <path
                d="M320 0 C350 80, 420 180, 440 260 C460 340, 520 400, 520 440 L520 0 Z"
                fill="#E3F7F9"
                opacity="0.8"
              />
              <path
                d="M320 0 C350 80, 420 180, 440 260 C460 340, 520 400, 520 440"
                stroke="#12B8C4"
                strokeWidth="2.5"
                strokeDasharray="6 3"
              />
              <text x="430" y="80" fontFamily="Outfit" fontSize="11" fontWeight="700" fill="#087EA4" letterSpacing="0.08em">
                BAY OF BENGAL
              </text>

              {/* Highway / Road Corridors */}
              <path d="M40 380 Q220 280 440 60" stroke="#E1EBEB" strokeWidth="6" strokeLinecap="round" />
              <path d="M60 400 Q260 220 380 40" stroke="#CBDCDC" strokeWidth="2.5" strokeDasharray="5 3" />

              {/* Radiating Hub Connection Lines from Seethammadara (260, 220) */}
              <g stroke="#087EA4" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6">
                <line x1="260" y1="220" x2="340" y2="120" /> {/* Madhurawada */}
                <line x1="260" y1="220" x2="310" y2="210" /> {/* MVP Colony */}
                <line x1="260" y1="220" x2="140" y2="330" /> {/* Gajuwaka */}
                <line x1="260" y1="220" x2="390" y2="150" /> {/* Rushikonda */}
                <line x1="260" y1="220" x2="280" y2="50" />  {/* Anandapuram */}
                <line x1="260" y1="220" x2="410" y2="70" />  {/* Bheemili */}
                <line x1="260" y1="220" x2="160" y2="240" /> {/* Dwaraka Nagar */}
                <line x1="260" y1="220" x2="110" y2="170" /> {/* Pendurthi */}
              </g>

              {/* Area Nodes */}
              {/* 1. Madhurawada */}
              <circle cx="340" cy="120" r="7" fill="#087EA4" />
              <text x="352" y="124" fontFamily="Outfit" fontSize="11" fontWeight="700" fill="#17242B">Madhurawada</text>

              {/* 2. MVP Colony */}
              <circle cx="310" cy="210" r="7" fill="#087EA4" />
              <text x="322" y="214" fontFamily="Outfit" fontSize="11" fontWeight="700" fill="#17242B">MVP Colony</text>

              {/* 3. Gajuwaka */}
              <circle cx="140" cy="330" r="7" fill="#087EA4" />
              <text x="65" y="334" fontFamily="Outfit" fontSize="11" fontWeight="700" fill="#17242B">Gajuwaka</text>

              {/* 4. Rushikonda */}
              <circle cx="390" cy="150" r="7" fill="#087EA4" />
              <text x="402" y="154" fontFamily="Outfit" fontSize="11" fontWeight="700" fill="#17242B">Rushikonda</text>

              {/* 5. Anandapuram */}
              <circle cx="280" cy="50" r="7" fill="#087EA4" />
              <text x="292" y="54" fontFamily="Outfit" fontSize="11" fontWeight="700" fill="#17242B">Anandapuram</text>

              {/* 6. Bheemili */}
              <circle cx="410" cy="70" r="6" fill="#087EA4" />
              <text x="422" y="74" fontFamily="Outfit" fontSize="10.5" fontWeight="600" fill="#17242B">Bheemili</text>

              {/* 7. Dwaraka Nagar */}
              <circle cx="160" cy="240" r="6" fill="#087EA4" />
              <text x="80" y="244" fontFamily="Outfit" fontSize="10.5" fontWeight="600" fill="#17242B">Dwaraka Nagar</text>

              {/* 8. Pendurthi */}
              <circle cx="110" cy="170" r="6" fill="#087EA4" />
              <text x="45" y="174" fontFamily="Outfit" fontSize="10.5" fontWeight="600" fill="#17242B">Pendurthi</text>

              {/* Central Hub: KONETI (Seethammadara) with Pulse Ring */}
              <g transform="translate(260, 220)">
                <circle cx="0" cy="0" r="24" fill="#087EA4" opacity="0.18" />
                <circle cx="0" cy="0" r="15" fill="#087EA4" />
                <circle cx="0" cy="0" r="6" fill="#F4B942" />
                <rect x="-65" y="-36" width="130" height="24" rx="5" fill="#17242B" />
                <text x="0" y="-20" fontFamily="Outfit" fontSize="11" fontWeight="800" fill="#FFFFFF" textAnchor="middle">
                  KONETI HQ (Seethammadara)
                </text>
              </g>
            </svg>
          </div>

          {/* Right: Area Selector Pills & Dynamic Details */}
          <div>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                border: '1.5px solid var(--color-border)',
                boxShadow: 'var(--shadow-subtle)',
                marginBottom: '24px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--color-primary-blue-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary-blue)'
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: 'var(--color-dark-text)',
                      margin: 0
                    }}
                  >
                    {selectedArea.name}
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-primary-blue)', fontWeight: 700 }}>
                    {selectedArea.type} • Approx {selectedArea.distance} from HQ
                  </span>
                </div>
              </div>

              <p style={{ color: 'var(--color-muted-text)', fontSize: '0.94rem', lineHeight: 1.6, margin: '0 0 16px 0' }}>
                {selectedArea.description}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#058A72', fontWeight: 600 }}>
                <CheckCircle size={15} />
                <span>Active rig teams and pump technicians available for site visit</span>
              </div>
            </div>

            {/* Area Pills Grid */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {serviceAreas.map((area) => {
                const isSelected = selectedArea.name === area.name;
                return (
                  <button
                    key={area.name}
                    onClick={() => setSelectedArea(area)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 'var(--radius-sm)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      border: isSelected ? '1.5px solid var(--color-primary-blue)' : '1px solid var(--color-border)',
                      backgroundColor: isSelected ? 'var(--color-primary-blue)' : '#FFFFFF',
                      color: isSelected ? '#FFFFFF' : 'var(--color-dark-text)',
                      boxShadow: isSelected ? '0 4px 14px rgba(8, 126, 164, 0.25)' : 'none'
                    }}
                  >
                    {area.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
