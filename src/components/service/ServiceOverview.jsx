import React from 'react';
import { CheckCircle2, Shield } from 'lucide-react';

export default function ServiceOverview({ overview, sideImage }) {
  if (!overview) return null;

  return (
    <section
      className="site-section bg-white"
      style={{
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}
          className="service-overview-grid"
        >
          {/* Left Column: Deep Editorial Narrative */}
          <div>
            <div className="eyebrow-badge earth">
              <span>TECHNICAL OVERVIEW</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
                fontWeight: 800,
                color: 'var(--color-dark-text)',
                lineHeight: 1.2,
                marginBottom: '18px'
              }}
            >
              {overview.h2}
            </h2>

            {overview.lead && (
              <div
                style={{
                  fontSize: '1.15rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  color: 'var(--color-primary-blue-dark)',
                  lineHeight: 1.5,
                  marginBottom: '20px'
                }}
              >
                {overview.lead}
              </div>
            )}

            {overview.paragraphs.map((para, idx) => (
              <p key={idx} style={{ marginBottom: '16px', fontSize: '1.02rem', lineHeight: 1.7 }}>
                {para}
              </p>
            ))}
          </div>

          {/* Right Column: Uncropped Supporting Rig / Equipment Image */}
          {sideImage && (
            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                backgroundColor: '#F5FAFA',
                border: '1.5px solid var(--color-border)',
                boxShadow: 'var(--shadow-subtle)',
                padding: '8px'
              }}
            >
              <img
                src={sideImage}
                alt="Borewell machinery and equipment operational in Visakhapatnam"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 'calc(var(--radius-lg) - 6px)',
                  display: 'block',
                  objectFit: 'contain' // Never crop!
                }}
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
