import React from 'react';
import { ArrowRight, Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import Breadcrumbs from '../common/Breadcrumbs';

export default function ServiceHero({ service }) {
  const { hero, title, category, slug } = service;

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/#services' },
    { label: title, path: `/services/${slug}` }
  ];

  return (
    <section
      className="service-hero-section"
      style={{
        backgroundColor: 'var(--bg-page)',
        paddingTop: 'calc(var(--navbar-height) + 24px)',
        paddingBottom: '50px',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={breadcrumbs} />

        {/* Split Hero Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}
          className="service-hero-grid"
        >
          {/* Left Column: Technical Service Title & Meta */}
          <div style={{ maxWidth: '620px' }}>
            <div className="eyebrow-badge">
              <span>{hero.eyebrow}</span>
            </div>

            {/* Dedicated Service H1 */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
                fontWeight: 800,
                color: 'var(--color-dark-text)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '14px'
              }}
            >
              {hero.h1}
            </h1>

            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--color-primary-blue)',
                lineHeight: 1.35,
                marginBottom: '18px'
              }}
            >
              {hero.statement}
            </div>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-muted-text)', lineHeight: 1.68, marginBottom: '32px' }}>
              {hero.description}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
              <a
                href="#quote"
                className="btn btn-primary btn-lg"
                style={{
                  boxShadow: '0 6px 20px rgba(8, 126, 164, 0.3)'
                }}
              >
                <span>Book a Service Quote</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="tel:09246622995"
                className="btn btn-secondary btn-lg"
                style={{ border: '1.5px solid var(--color-border)' }}
              >
                <Phone size={17} color="var(--color-primary-blue)" />
                <span>Call 092466 22995</span>
              </a>
            </div>
          </div>

          {/* Right Column: High Impact Field Image - UNRECROPPED */}
          <div
            style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              backgroundColor: '#FFFFFF',
              boxShadow: 'var(--shadow-card)',
              border: '1.5px solid var(--color-border)',
              padding: '8px',
              position: 'relative'
            }}
          >
            <div
              style={{
                borderRadius: 'calc(var(--radius-lg) - 6px)',
                overflow: 'hidden',
                backgroundColor: '#F0F6F7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src={hero.image}
                alt={hero.alt}
                className="full-width-image"
                style={{
                  width: '100%',
                  maxHeight: '440px',
                  height: 'auto',
                  objectFit: 'contain', // Never crop!
                  display: 'block'
                }}
                fetchPriority="high"
              />
            </div>

            {/* Badge overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                backgroundColor: 'rgba(23, 36, 43, 0.92)',
                color: '#FFFFFF',
                borderRadius: '8px',
                padding: '8px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                backdropFilter: 'blur(6px)',
                boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
              }}
            >
              <ShieldCheck size={16} color="#12B8C4" />
              <span>{hero.badgeText}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
