import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function ServiceProcess({ processSteps }) {
  if (!processSteps || processSteps.length === 0) return null;

  return (
    <section
      className="site-section bg-light"
      style={{
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        <div style={{ maxWidth: '720px', marginBottom: '44px' }}>
          <div className="eyebrow-badge">
            <span>STEP-BY-STEP EXECUTION</span>
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
            How This Service Is Carried Out.
          </h2>

          <p style={{ color: 'var(--color-muted-text)', fontSize: '1.02rem', margin: 0 }}>
            Our structured field protocol ensuring safe operations, proper casing placement, and verified water yield.
          </p>
        </div>

        {/* Process Steps Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px'
          }}
          className="service-process-grid"
        >
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="card-surface"
              style={{
                padding: '24px 20px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: 'var(--color-primary-blue)',
                    backgroundColor: 'var(--color-aqua-light)',
                    padding: '3px 10px',
                    borderRadius: 'var(--radius-xs)',
                    marginBottom: '16px'
                  }}
                >
                  {step.step}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.08rem',
                    fontWeight: 700,
                    color: 'var(--color-dark-text)',
                    lineHeight: 1.3,
                    marginBottom: '10px'
                  }}
                >
                  {step.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--color-muted-text)', lineHeight: 1.55, marginBottom: '14px' }}>
                  {step.description}
                </p>
              </div>

              {step.detail && (
                <div
                  style={{
                    padding: '8px 10px',
                    backgroundColor: 'var(--bg-page)',
                    borderRadius: 'var(--radius-xs)',
                    fontSize: '0.78rem',
                    color: 'var(--color-dark-text)',
                    borderLeft: '2px solid var(--color-primary-blue)',
                    lineHeight: 1.45
                  }}
                >
                  {step.detail}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
