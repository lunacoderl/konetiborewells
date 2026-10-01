import React from 'react';
import { Phone, ArrowRight, Star, Clock, CheckCircle2, MapPin, Shield } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-page)',
        paddingTop: 'calc(var(--navbar-height) + 36px)',
        paddingBottom: '36px',
        overflow: 'hidden',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      {/* Background Subtle Contour Wave SVG */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 85% 20%, rgba(18, 184, 196, 0.08) 0%, transparent 60%),
                            radial-gradient(circle at 10% 80%, rgba(201, 133, 69, 0.05) 0%, transparent 50%)`,
          pointerEvents: 'none'
        }}
      />

      <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Main Hero Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '40px',
            minHeight: 'calc(80vh - var(--navbar-height))'
          }}
          className="hero-grid-layout"
        >
          {/* Left Hero Column: Copy & Actions */}
          <div style={{ maxWidth: '620px' }}>
            {/* Small Eyebrow Badge */}
            <div className="eyebrow-badge">
              <span className="status-dot"></span>
              <span>BOREWELL DRILLING • WATER SOLUTIONS • VIZAG</span>
            </div>

            {/* Primary Semantic H1 */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.4rem, 4.6vw, 3.8rem)',
                fontWeight: 800,
                color: 'var(--color-dark-text)',
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                marginBottom: '14px'
              }}
            >
              Borewell Drilling Services in Visakhapatnam
            </h1>

            {/* Secondary Creative Heading / Brand Statement */}
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.25rem, 2.2vw, 1.7rem)',
                fontWeight: 600,
                color: 'var(--color-primary-blue)',
                lineHeight: 1.3,
                marginBottom: '18px'
              }}
            >
              Reliable Water Starts Beneath the Surface.
            </div>

            {/* Supporting Description */}
            <p
              style={{
                fontSize: 'clamp(1.02rem, 1.2vw, 1.15rem)',
                color: 'var(--color-muted-text)',
                lineHeight: 1.68,
                marginBottom: '32px'
              }}
            >
              Professional 4½" and 6½" borewell drilling and motor solutions for homes, farms, commercial properties, and project sites across Visakhapatnam. Grounded engineering with prompt 24/7 on-site support.
            </p>

            {/* CTA Buttons Row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '36px'
              }}
            >
              <a
                href="#contact"
                className="btn btn-primary btn-lg"
                style={{
                  boxShadow: '0 6px 22px rgba(8, 126, 164, 0.35)'
                }}
              >
                <span>Book a Free Quote</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="tel:09246622995"
                className="btn btn-secondary btn-lg"
                style={{
                  border: '1.5px solid var(--color-border)'
                }}
              >
                <Phone size={18} color="var(--color-primary-blue)" />
                <span>Call 092466 22995</span>
              </a>
            </div>

            {/* Trust Row: 4.8 ★ Google Rating | 37+ Reviews | 24/7 Availability */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '20px',
                paddingTop: '20px',
                borderTop: '1px solid var(--color-border-light)'
              }}
            >
              {/* Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3px',
                    backgroundColor: '#FEF8EA',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    border: '1px solid #F8DE9F'
                  }}
                >
                  <Star size={16} fill="#F4B942" color="#F4B942" />
                  <span style={{ fontWeight: 800, color: '#976508', fontSize: '0.92rem' }}>
                    4.8
                  </span>
                </div>
                <div style={{ fontSize: '0.86rem', color: 'var(--color-muted-text)', lineHeight: 1.2 }}>
                  <strong style={{ color: 'var(--color-dark-text)', display: 'block' }}>37+ Google Reviews</strong>
                  <span>Verified Feedback</span>
                </div>
              </div>

              {/* Vertical divider */}
              <div style={{ width: '1px', height: '28px', backgroundColor: 'var(--color-border)' }} />

              {/* 24/7 Availability */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-aqua-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(18, 184, 196, 0.3)'
                  }}
                >
                  <Clock size={16} color="var(--color-primary-blue-dark)" />
                </div>
                <div style={{ fontSize: '0.86rem', color: 'var(--color-muted-text)', lineHeight: 1.2 }}>
                  <strong style={{ color: 'var(--color-dark-text)', display: 'block' }}>24/7 Availability</strong>
                  <span>Emergency Siting & Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Visual Rig Composition (Uncropped & Full Width) */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Visual Frame - NEVER CROPPED */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                borderRadius: 'var(--radius-lg)',
                overflow: 'visible',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 20px 50px rgba(17, 30, 36, 0.12)',
                border: '1px solid var(--color-border)',
                padding: '10px'
              }}
            >
              {/* Main Full-Width Machinery Image */}
              <div
                style={{
                  borderRadius: 'calc(var(--radius-lg) - 6px)',
                  overflow: 'hidden',
                  backgroundColor: '#EBF4F6'
                }}
              >
                <img
                  src="/hero-bg.png"
                  alt="Borewell drilling equipment at a site in Visakhapatnam"
                  className="full-width-image"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: 'calc(var(--radius-lg) - 6px)'
                  }}
                  fetchPriority="high"
                />
              </div>

              {/* Floating Engineering Card: Top-Left */}
              <div
                style={{
                  position: 'absolute',
                  top: '-18px',
                  left: '-14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px 18px',
                  boxShadow: '0 12px 30px rgba(17, 30, 36, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  zIndex: 4
                }}
                className="floating-hero-card"
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--color-primary-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF'
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-aqua)',
                      display: 'block'
                    }}
                  >
                    ON-SITE SERVICE
                  </span>
                  <strong style={{ fontSize: '0.92rem', color: 'var(--color-dark-text)', display: 'block' }}>
                    Drilling • Motors • Support
                  </strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-muted-text)' }}>
                    Visakhapatnam & Rural
                  </span>
                </div>
              </div>

              {/* Floating Circular Badge: Bottom-Right 24/7 AVAILABLE */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-22px',
                  right: '-12px',
                  backgroundColor: 'var(--color-dark-text)',
                  color: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px 20px',
                  boxShadow: '0 14px 36px rgba(0, 0, 0, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  border: '1px solid #334A56',
                  zIndex: 4
                }}
                className="floating-hero-badge"
              >
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#12B8C4',
                    boxShadow: '0 0 10px #12B8C4'
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.95rem',
                      fontWeight: 800,
                      letterSpacing: '0.04em',
                      color: '#FFFFFF'
                    }}
                  >
                    24/7 ACTIVE
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#9BB1B9' }}>
                    Seethammadara Base
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hero Strip: Domestic | Agricultural | Commercial | Industrial */}
        <div
          style={{
            marginTop: '50px',
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '16px 24px',
            boxShadow: 'var(--shadow-subtle)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            alignItems: 'center',
            gap: '16px',
            textAlign: 'center'
          }}
          className="hero-bottom-strip"
        >
          {[
            { label: 'Domestic Water', desc: '4½" Homes & Villas', icon: 'Home' },
            { label: 'Agricultural Yield', desc: '6½" Farmlands & Groves', icon: 'Wheat' },
            { label: 'Commercial Supply', desc: 'Multi-Unit & Hospitals', icon: 'Building2' },
            { label: 'Industrial Projects', desc: 'Construction & Mix Sites', icon: 'Factory' }
          ].map((item, idx) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                borderRight: idx < 3 ? '1px solid var(--color-border)' : 'none',
                padding: '4px 10px'
              }}
              className="bottom-strip-item"
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  color: 'var(--color-dark-text)'
                }}
              >
                {item.label}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-primary-blue)', fontWeight: 600 }}>
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .floating-hero-card {
            top: -12px !important;
            left: 0 !important;
            padding: 8px 12px !important;
          }
          .floating-hero-badge {
            bottom: -16px !important;
            right: 0 !important;
            padding: 10px 14px !important;
          }
          .bottom-strip-item {
            border-right: none !important;
            border-bottom: 1px solid var(--color-border);
            padding-bottom: 8px;
          }
          .bottom-strip-item:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  );
}
