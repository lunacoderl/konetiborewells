import React from 'react';
import { Phone, ArrowRight, Star, Clock, MapPin, ShieldCheck, Compass, Droplet } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        minHeight: '100svh', // Modern mobile full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 'calc(var(--navbar-height) + 24px)',
        paddingBottom: '24px',
        overflow: 'hidden',
        borderBottom: '1px solid #23353E'
      }}
    >
      {/* 
        ======================================================================
        FULLSCREEN BACKGROUND IMAGE LAYER (DESKTOP & MOBILE)
        ======================================================================
      */}
      <div
        className="hero-bg-layer"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          overflow: 'hidden'
        }}
      >
        <img
          src="/hero-bg.png"
          alt="Borewell drilling rig machine operating at a work site in Visakhapatnam"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block'
          }}
          fetchPriority="high"
        />

        {/* Dual Gradient Overlays for High-Contrast Text Legibility */}
        <div
          className="hero-gradient-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(14, 25, 30, 0.95) 0%, rgba(14, 25, 30, 0.88) 46%, rgba(14, 25, 30, 0.58) 78%, rgba(8, 126, 164, 0.42) 100%)'
          }}
        />

        {/* Secondary subtle radial glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 80% 25%, rgba(18, 184, 196, 0.16) 0%, transparent 60%)',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* 
        ======================================================================
        HERO CONTENT CONTAINER (ELEVATED Z-INDEX)
        ======================================================================
      */}
      <div
        className="site-container"
        style={{
          position: 'relative',
          zIndex: 2,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: '20px',
          paddingBottom: '24px'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '40px'
          }}
          className="hero-inner-grid"
        >
          {/* Left Column: Heading, Statement, Description & CTAs */}
          <div style={{ maxWidth: '640px' }}>
            {/* Eyebrow Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(18, 184, 196, 0.18)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(18, 184, 196, 0.45)',
                color: '#12B8C4',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}
            >
              <span className="status-dot"></span>
              <span>BOREWELL DRILLING • WATER SOLUTIONS • VIZAG</span>
            </div>

            {/* Semantic H1 */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.4rem, 4.8vw, 3.85rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                marginBottom: '14px',
                textShadow: '0 2px 14px rgba(0, 0, 0, 0.4)'
              }}
            >
              Borewell Drilling Services in Visakhapatnam
            </h1>

            {/* Secondary Creative Heading / Brand Statement */}
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.3rem, 2.3vw, 1.75rem)',
                fontWeight: 700,
                color: '#12B8C4',
                lineHeight: 1.3,
                marginBottom: '18px',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
              }}
            >
              Reliable Water Starts Beneath the Surface.
            </div>

            {/* Supporting Copy */}
            <p
              style={{
                fontSize: 'clamp(1.02rem, 1.25vw, 1.16rem)',
                color: '#D4E4E8',
                lineHeight: 1.68,
                marginBottom: '32px',
                textShadow: '0 1px 6px rgba(0, 0, 0, 0.3)'
              }}
            >
              Professional 4½" and 6½" borewell drilling and motor solutions for homes, farms, commercial properties, and project sites across Visakhapatnam. Grounded engineering with prompt 24/7 on-site support.
            </p>

            {/* Dual CTAs */}
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
                className="btn btn-accent btn-lg"
                style={{
                  boxShadow: '0 8px 24px rgba(244, 185, 66, 0.35)'
                }}
              >
                <span>Book a Free Quote</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="tel:09246622995"
                className="btn btn-ghost-white btn-lg"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.16)',
                  backdropFilter: 'blur(10px)',
                  border: '1.5px solid rgba(255, 255, 255, 0.35)'
                }}
              >
                <Phone size={18} color="#12B8C4" />
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
                borderTop: '1px solid rgba(255, 255, 255, 0.18)'
              }}
            >
              {/* Google Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    backgroundColor: 'rgba(244, 185, 66, 0.2)',
                    border: '1px solid rgba(244, 185, 66, 0.5)',
                    padding: '4px 10px',
                    borderRadius: '6px'
                  }}
                >
                  <Star size={16} fill="#F4B942" color="#F4B942" />
                  <span style={{ fontWeight: 800, color: '#F4B942', fontSize: '0.94rem' }}>
                    4.8
                  </span>
                </div>
                <div style={{ fontSize: '0.86rem', color: '#D4E4E8', lineHeight: 1.25 }}>
                  <strong style={{ color: '#FFFFFF', display: 'block' }}>37+ Google Reviews</strong>
                  <span>Verified Client Feedback</span>
                </div>
              </div>

              {/* Vertical divider */}
              <div style={{ width: '1px', height: '28px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />

              {/* 24/7 Availability */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(18, 184, 196, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(18, 184, 196, 0.5)'
                  }}
                >
                  <Clock size={17} color="#12B8C4" />
                </div>
                <div style={{ fontSize: '0.86rem', color: '#D4E4E8', lineHeight: 1.25 }}>
                  <strong style={{ color: '#FFFFFF', display: 'block' }}>24/7 Available</strong>
                  <span>Emergency Siting &amp; Rig Dispatch</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Engineering Feature Card & Badges */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              maxWidth: '460px',
              marginLeft: 'auto',
              width: '100%'
            }}
            className="hero-right-cards"
          >
            {/* Feature Highlights Card */}
            <div
              style={{
                backgroundColor: 'rgba(23, 36, 43, 0.85)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                boxShadow: '0 20px 48px rgba(0, 0, 0, 0.35)',
                color: '#FFFFFF'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#12B8C4'
                  }}
                >
                  FIELD SPECIFICATIONS
                </span>
                <div className="status-indicator" style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)', borderColor: 'rgba(16, 185, 129, 0.5)', color: '#34D399' }}>
                  <span className="status-dot"></span>
                  <span>Active Now</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ShieldCheck size={18} color="#12B8C4" />
                  <span style={{ fontSize: '0.94rem', color: '#E1E9EC' }}>
                    <strong>4½" &amp; 6½" Caliber</strong> Pneumatic Rigs
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Compass size={18} color="#F4B942" />
                  <span style={{ fontSize: '0.94rem', color: '#E1E9EC' }}>
                    <strong>Granite Bedrock</strong> DTH Hammer Technology
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Droplet size={18} color="#12B8C4" />
                  <span style={{ fontSize: '0.94rem', color: '#E1E9EC' }}>
                    <strong>Casing Seating</strong> &amp; Silt Prevention
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin size={18} color="#F4B942" />
                  <span style={{ fontSize: '0.94rem', color: '#E1E9EC' }}>
                    <strong>Seethammadara Base</strong> • Citywide Dispatch
                  </span>
                </div>
              </div>
            </div>

            {/* On-Site Floating Badge */}
            <div
              style={{
                backgroundColor: 'rgba(8, 126, 164, 0.88)',
                backdropFilter: 'blur(12px)',
                borderRadius: 'var(--radius-md)',
                padding: '16px 20px',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                boxShadow: '0 12px 32px rgba(8, 126, 164, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                color: '#FFFFFF'
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <MapPin size={22} color="#FFFFFF" />
              </div>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#E0F7FA',
                    display: 'block'
                  }}
                >
                  RAPID SITE RESPONSE
                </span>
                <strong style={{ fontSize: '0.96rem', display: 'block', color: '#FFFFFF' }}>
                  Drilling • Motors • Emergency Flushing
                </strong>
                <span style={{ fontSize: '0.8rem', color: '#E0F7FA' }}>
                  Visakhapatnam &amp; Regional Belts
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        ======================================================================
        BOTTOM HERO STRIP (GLASSMORPHIC OVERLAY)
        ======================================================================
      */}
      <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            backgroundColor: 'rgba(17, 30, 36, 0.78)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            borderRadius: 'var(--radius-md)',
            padding: '16px 24px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            alignItems: 'center',
            gap: '16px',
            textAlign: 'center'
          }}
          className="hero-bottom-strip"
        >
          {[
            { label: 'Domestic Water', desc: '4½" Homes & Villas' },
            { label: 'Agricultural Yield', desc: '6½" Farmlands & Groves' },
            { label: 'Commercial Supply', desc: 'Multi-Unit & Hospitals' },
            { label: 'Industrial Projects', desc: 'Construction & Mix Sites' }
          ].map((item, idx) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                borderRight: idx < 3 ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
                padding: '4px 10px'
              }}
              className="bottom-strip-item"
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                {item.label}
              </span>
              <span style={{ fontSize: '0.82rem', color: '#12B8C4', fontWeight: 600 }}>
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-gradient-overlay {
            background: linear-gradient(180deg, rgba(14, 25, 30, 0.96) 0%, rgba(14, 25, 30, 0.88) 55%, rgba(14, 25, 30, 0.82) 100%) !important;
          }
          .hero-right-cards {
            display: none !important;
          }
          .bottom-strip-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
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
