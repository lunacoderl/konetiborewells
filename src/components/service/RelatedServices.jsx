import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../../data/services';

export default function RelatedServices({ currentSlug, relatedSlugs }) {
  const relatedList = services.filter((s) => s.slug !== currentSlug && (relatedSlugs ? relatedSlugs.includes(s.slug) : true)).slice(0, 3);

  if (relatedList.length === 0) return null;

  return (
    <section
      className="site-section bg-light"
      style={{
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        <div style={{ maxWidth: '680px', marginBottom: '36px' }}>
          <div className="eyebrow-badge">
            <span>RELATED SOLUTIONS</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
              fontWeight: 800,
              color: 'var(--color-dark-text)',
              lineHeight: 1.2,
              marginBottom: '10px'
            }}
          >
            You May Also Need.
          </h2>

          <p style={{ color: 'var(--color-muted-text)', fontSize: '1rem', margin: 0 }}>
            Complementary borewell and groundwater services often paired with this requirement.
          </p>
        </div>

        {/* 3 Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {relatedList.map((service) => (
            <div
              key={service.slug}
              className="card-surface"
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Thumbnail Image - Uncropped */}
                <div
                  style={{
                    backgroundColor: '#F5FAFA',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    padding: '8px',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src={service.thumbnail}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '160px',
                      objectFit: 'contain', // Never crop!
                      display: 'block'
                    }}
                    loading="lazy"
                  />
                </div>

                <span
                  style={{
                    fontSize: '0.74rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--color-primary-blue)',
                    display: 'block',
                    marginBottom: '6px'
                  }}
                >
                  {service.category}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--color-dark-text)',
                    lineHeight: 1.3,
                    marginBottom: '8px'
                  }}
                >
                  {service.shortTitle}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--color-muted-text)', lineHeight: 1.55, marginBottom: '18px' }}>
                  {service.tagline}
                </p>
              </div>

              <Link
                to={`/services/${service.slug}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: 'var(--color-primary-blue)',
                  textDecoration: 'none',
                  paddingTop: '12px',
                  borderTop: '1px solid var(--color-border-light)'
                }}
              >
                <span>Explore {service.shortTitle}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
