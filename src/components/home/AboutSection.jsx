import React from 'react';
import { ArrowRight, Star, Clock, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="site-section bg-cream"
      style={{
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '50px',
            alignItems: 'center'
          }}
          className="about-grid"
        >
          {/* Left Column: Asymmetric Editorial Image Collage (70% + 30% Stack) */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'stretch',
              width: '100%'
            }}
            className="about-collage-container"
          >
            {/* 70% Dominant Uncropped Field Machine Image */}
            <div
              style={{
                flex: '7',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                boxShadow: 'var(--shadow-card)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px'
              }}
            >
              <img
                src="/borewell-sideview.png"
                alt="Borewell drilling machinery side view operating in Visakhapatnam"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: 'calc(var(--radius-md) - 6px)',
                  objectFit: 'contain'
                }}
                loading="lazy"
              />
            </div>

            {/* 30% Stacked Images: Pipe Casing Detail + Water Emerging */}
            <div
              style={{
                flex: '3',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                justifyContent: 'space-between'
              }}
              className="about-stacked-col"
            >
              {/* Image 1: Casing pipework */}
              <div
                style={{
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  boxShadow: 'var(--shadow-subtle)',
                  border: '1px solid var(--color-border)',
                  padding: '4px'
                }}
              >
                <img
                  src="/services/casingpipework.png"
                  alt="Heavy casing pipe installation detail"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: 'calc(var(--radius-sm) - 4px)',
                    objectFit: 'contain'
                  }}
                  loading="lazy"
                />
              </div>

              {/* Image 2: Fresh water discharge */}
              <div
                style={{
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  boxShadow: 'var(--shadow-subtle)',
                  border: '1px solid var(--color-border)',
                  padding: '4px'
                }}
              >
                <img
                  src="/gallery/d59404eb-9100-4510-8f7e-8594d7c16b96.jpg"
                  alt="Clear water strike emerging from completed borehole"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: 'calc(var(--radius-sm) - 4px)',
                    objectFit: 'contain'
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Editorial Narrative */}
          <div>
            <div className="eyebrow-badge earth">
              <span>ABOUT KONETI</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.5vw, 2.7rem)',
                fontWeight: 800,
                color: 'var(--color-dark-text)',
                lineHeight: 1.18,
                marginBottom: '20px'
              }}
            >
              Built Around the Ground Beneath Vizag.
            </h2>

            <p style={{ marginBottom: '16px', fontSize: '1.04rem', lineHeight: 1.7 }}>
              Located in <strong>Lalitha Colony, Seethammadara</strong>, Koneti Borewells & Motors provides dedicated borewell drilling, motor installation, and groundwater solutions across Greater Visakhapatnam. We recognize that drilling in Vizag is not a one-size-fits-all exercise—the city transitions from coastal sands along Beach Road to dense crystalline rock in elevated residential colonies.
            </p>

            <p style={{ marginBottom: '16px', fontSize: '1.04rem', lineHeight: 1.7 }}>
              Our work is anchored on practical site understanding, dependable pneumatic machinery, and transparent customer communication. We don’t make exaggerated geological promises; instead, we deploy robust 4½" and 6½" caliber rigs, seat casing pipes securely, and assist property owners with motor sizing tailored to their depth and yield.
            </p>

            <p style={{ marginBottom: '28px', fontSize: '1.04rem', lineHeight: 1.7 }}>
              From domestic villas requiring independent water security to agricultural acreage in Anandapuram and commercial projects in Gajuwaka, our crew remains on-call 24 hours a day to support your water requirements.
            </p>

            {/* Mini Metric Area: 24/7 Availability | 37+ Reviews | 4.8★ Rating */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                padding: '18px 20px',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-subtle)',
                marginBottom: '24px'
              }}
              className="about-metrics-grid"
            >
              <div style={{ textAlign: 'center' }}>
                <strong
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: 'var(--color-primary-blue-dark)'
                  }}
                >
                  24/7
                </strong>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-muted-text)', fontWeight: 600 }}>
                  Service Availability
                </span>
              </div>

              <div style={{ textAlign: 'center', borderLeft: '1px solid var(--color-border)', borderRight: '1px solid var(--color-border)' }}>
                <strong
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: 'var(--color-dark-text)'
                  }}
                >
                  37+
                </strong>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-muted-text)', fontWeight: 600 }}>
                  Google Reviews
                </span>
              </div>

              <div style={{ textAlign: 'center' }}>
                <strong
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: '#C98545'
                  }}
                >
                  4.8 ★
                </strong>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-muted-text)', fontWeight: 600 }}>
                  Customer Rating
                </span>
              </div>
            </div>

            {/* Discover Our Approach Link */}
            <div>
              <a
                href="#process"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--color-primary-blue)',
                  textDecoration: 'none'
                }}
                className="about-approach-link"
              >
                <span>Discover Our Drilling Approach</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-approach-link:hover {
          color: var(--color-primary-blue-dark) !important;
          text-decoration: underline;
        }
        @media (max-width: 640px) {
          .about-collage-container {
            flex-direction: column !important;
          }
          .about-stacked-col {
            flex-direction: row !important;
          }
        }
      `}</style>
    </section>
  );
}
