import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServiceApplications({ applications }) {
  if (!applications || applications.length === 0) return null;

  return (
    <section
      className="site-section bg-white"
      style={{
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        <div style={{ maxWidth: '740px', marginBottom: '40px' }}>
          <div className="eyebrow-badge earth">
            <span>TARGET APPLICATIONS</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
              fontWeight: 800,
              color: 'var(--color-dark-text)',
              lineHeight: 1.2,
              marginBottom: '12px'
            }}
          >
            Who This Solution Is Designed For.
          </h2>

          <p style={{ color: 'var(--color-muted-text)', fontSize: '1.02rem', margin: 0 }}>
            Customized deployment parameters matching your daily volume demand and physical site constraints.
          </p>
        </div>

        {/* Applications Grid with Uncropped Visuals */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {applications.map((app, idx) => (
            <div
              key={idx}
              className="card-surface"
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Uncropped Image Header */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#F5FAFA',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img
                  src={app.image}
                  alt={app.title}
                  style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'contain', // Never crop!
                    display: 'block'
                  }}
                  loading="lazy"
                />

                <span
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(23, 36, 43, 0.85)',
                    color: '#FFFFFF',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    padding: '3px 8px',
                    borderRadius: '4px',
                    letterSpacing: '0.04em'
                  }}
                >
                  {app.tag}
                </span>
              </div>

              {/* Text Body */}
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--color-dark-text)',
                      marginBottom: '8px'
                    }}
                  >
                    {app.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--color-muted-text)', lineHeight: 1.6, margin: 0 }}>
                    {app.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
