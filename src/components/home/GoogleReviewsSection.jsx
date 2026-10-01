import React from 'react';
import { Star, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { googleReviewsSummary, verifiedGoogleReviews } from '../../data/reviews';

export default function GoogleReviewsSection() {
  return (
    <section
      id="reviews"
      className="site-section bg-white"
      style={{
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        {/* Section Heading & Central Google Score Card */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '28px',
            marginBottom: '44px'
          }}
        >
          <div>
            <div className="eyebrow-badge">
              <span className="status-dot"></span>
              <span>VERIFIED GOOGLE BUSINESS PROFILE</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 800,
                color: 'var(--color-dark-text)',
                lineHeight: 1.18,
                marginBottom: '10px'
              }}
            >
              What Customers Say on Google.
            </h2>

            <p style={{ color: 'var(--color-muted-text)', fontSize: '1.02rem', margin: 0 }}>
              Genuine public ratings and verified feedback from property owners across Visakhapatnam.
            </p>
          </div>

          {/* Central Google Score Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              backgroundColor: '#FFFFFF',
              border: '2px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '16px 24px',
              boxShadow: 'var(--shadow-subtle)'
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 800,
                color: 'var(--color-dark-text)',
                lineHeight: 1
              }}
            >
              {googleReviewsSummary.score}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#F4B942" color="#F4B942" />
                ))}
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--color-muted-text)', fontWeight: 600 }}>
                Based on <strong style={{ color: 'var(--color-dark-text)' }}>{googleReviewsSummary.totalReviews} Google Reviews</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Review Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '36px'
          }}
          className="google-reviews-grid"
        >
          {verifiedGoogleReviews.map((review) => (
            <div
              key={review.id}
              className="card-surface"
              style={{
                padding: '24px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-page)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* 5-Star Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#F4B942" color="#F4B942" />
                    ))}
                  </div>

                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#058A72',
                      backgroundColor: '#E6FBF7',
                      padding: '3px 8px',
                      borderRadius: '4px'
                    }}
                  >
                    Google Review
                  </span>
                </div>

                {/* Highlight Quote */}
                <strong
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    color: 'var(--color-dark-text)',
                    display: 'block',
                    marginBottom: '8px'
                  }}
                >
                  “{review.highlight}”
                </strong>

                {/* Full Review Text */}
                <p style={{ fontSize: '0.9rem', color: 'var(--color-muted-text)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {review.text}
                </p>
              </div>

              {/* Author & Verification */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  paddingTop: '12px',
                  borderTop: '1px solid var(--color-border-light)'
                }}
              >
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-aqua-light)',
                    color: 'var(--color-primary-blue-dark)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {review.author.charAt(0)}
                </div>

                <div>
                  <strong style={{ fontSize: '0.88rem', color: 'var(--color-dark-text)', display: 'block' }}>
                    {review.author}
                  </strong>
                  <span style={{ fontSize: '0.76rem', color: 'var(--color-muted-text)' }}>
                    Visakhapatnam, AP
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View on Google CTA */}
        <div style={{ textAlign: 'center' }}>
          <a
            href={googleReviewsSummary.googleProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>View All Google Reviews on Google Maps</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
