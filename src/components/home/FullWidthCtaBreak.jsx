import React from 'react';
import { ArrowRight, MessageCircle, Phone, Droplet } from 'lucide-react';

export default function FullWidthCtaBreak() {
  return (
    <section
      className="site-section bg-vibrant-aqua"
      style={{
        paddingTop: 'clamp(70px, 8vw, 100px)',
        paddingBottom: 'clamp(70px, 8vw, 100px)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Abstract Water Ripples / Contour Lines */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          opacity: 0.12,
          pointerEvents: 'none'
        }}
        viewBox="0 0 1200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-100 200 C300 120, 600 300, 1300 160" stroke="#FFFFFF" strokeWidth="2.5" />
        <path d="M-100 260 C320 180, 620 360, 1300 220" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="8 6" />
        <path d="M-100 320 C340 240, 640 420, 1300 280" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="850" cy="200" r="120" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="850" cy="200" r="180" stroke="#FFFFFF" strokeWidth="1" />
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
              backgroundColor: 'rgba(255, 255, 255, 0.16)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.28)',
              color: '#FFFFFF',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}
          >
            <Droplet size={14} color="#F4B942" />
            <span>GROUNDWATER SOLUTIONS ACROSS VIZAG</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 4.4vw, 3.4rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              marginBottom: '18px'
            }}
          >
            Looking for Water Below the Surface?
          </h2>

          <p
            style={{
              color: '#E0F4F7',
              fontSize: 'clamp(1.05rem, 1.3vw, 1.22rem)',
              lineHeight: 1.65,
              maxWidth: '680px',
              margin: '0 auto 36px auto'
            }}
          >
            Tell us about your property location in Visakhapatnam and estimated water requirement. Our drilling technicians are available 24/7 for prompt on-site advice.
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
                boxShadow: '0 8px 26px rgba(0, 0, 0, 0.25)'
              }}
            >
              <span>Book a Free Quote</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="https://wa.me/919246622995?text=Hello%20Koneti%20Borewells%20%26%20Motors%2C%20I%20would%20like%20to%20enquire%20about%20borewell%20drilling%20services%20in%20Visakhapatnam."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              style={{
                boxShadow: '0 8px 26px rgba(37, 211, 102, 0.35)'
              }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
