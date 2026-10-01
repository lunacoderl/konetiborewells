import React from 'react';
import { Phone, MessageCircle, ArrowRight, Droplets } from 'lucide-react';

export default function FinalCtaSection() {
  return (
    <section
      className="final-cta-section"
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #F8FBFA 0%, #E2F5F8 35%, #087EA4 70%, #065B77 100%)',
        paddingTop: 'clamp(80px, 9vw, 120px)',
        paddingBottom: 'clamp(80px, 9vw, 120px)',
        overflow: 'hidden'
      }}
    >
      {/* Background Subtle Contour Wave Graphic */}
      <svg
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '240px',
          opacity: 0.15,
          pointerEvents: 'none'
        }}
        viewBox="0 0 1200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 120 C300 200, 600 60, 1200 140 L1200 240 L0 240 Z" fill="#FFFFFF" />
        <path d="M0 160 C400 80, 800 220, 1200 120" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="6 4" />
      </svg>

      <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid rgba(8, 126, 164, 0.25)',
              color: 'var(--color-primary-blue-dark)',
              fontSize: '0.84rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '24px',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)'
            }}
          >
            <Droplets size={15} color="var(--color-aqua)" />
            <span>COMMITTED TO RELIABLE WATER ACROSS VIZAG</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
              marginBottom: '20px',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
            }}
          >
            Your Next Borewell Starts With One Conversation.
          </h2>

          <p
            style={{
              color: '#E0F4F7',
              fontSize: 'clamp(1.08rem, 1.4vw, 1.25rem)',
              lineHeight: 1.65,
              maxWidth: '660px',
              margin: '0 auto 36px auto'
            }}
          >
            Speak with Koneti Borewells &amp; Motors today. Our experienced team will evaluate your location and guide you on depth, caliber, and casing solutions.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px'
            }}
          >
            <a
              href="#contact"
              className="btn btn-accent btn-lg"
              style={{
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.28)'
              }}
            >
              <span>Book a Free Quote</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="tel:09246622995"
              className="btn btn-ghost-white btn-lg"
            >
              <Phone size={18} />
              <span>Call 092466 22995</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
