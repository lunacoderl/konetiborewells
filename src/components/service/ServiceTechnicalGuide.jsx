import React from 'react';
import { BookOpen, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function ServiceTechnicalGuide({ guide }) {
  if (!guide || !guide.items || guide.items.length === 0) return null;

  return (
    <section
      className="site-section bg-white"
      style={{
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
          <div className="eyebrow-badge">
            <BookOpen size={14} />
            <span>FIELD KNOWLEDGE • TECHNICAL ADVISORY</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
              fontWeight: 800,
              color: 'var(--color-dark-text)',
              lineHeight: 1.2,
              marginBottom: '10px'
            }}
          >
            {guide.title}
          </h2>

          <p style={{ color: 'var(--color-muted-text)', fontSize: '1.04rem', margin: 0 }}>
            {guide.subtitle}
          </p>
        </div>

        {/* 2-Column Advisory Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {guide.items.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--bg-page)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                border: '1px solid var(--color-border)',
                borderLeft: '4px solid var(--color-primary-blue)'
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.12rem',
                  fontWeight: 700,
                  color: 'var(--color-dark-text)',
                  marginBottom: '10px'
                }}
              >
                {item.heading}
              </h3>

              <p style={{ fontSize: '0.92rem', color: 'var(--color-muted-text)', lineHeight: 1.65, margin: 0 }}>
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
