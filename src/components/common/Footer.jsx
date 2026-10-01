import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { services } from '../../data/services';
import { serviceAreas } from '../../data/areas';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#111E24',
        color: '#E1E9EC',
        borderTop: '1px solid #23353E',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle top strata line */}
      <div
        style={{
          height: '4px',
          background: 'linear-gradient(90deg, #087EA4 0%, #12B8C4 50%, #F4B942 100%)',
          width: '100%'
        }}
      />

      <div className="site-container" style={{ paddingTop: '70px', paddingBottom: '40px' }}>
        {/* Top Section: Brand Statement & Contact Highlights */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            paddingBottom: '50px',
            borderBottom: '1px solid #23353E'
          }}
        >
          {/* Column 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  padding: '2px',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                }}
              >
                <img
                  src="/logo.png"
                  alt="Koneti Borewells & Motors Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    color: '#FFFFFF',
                    display: 'block',
                    lineHeight: 1.1
                  }}
                >
                  KONETI
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#12B8C4',
                    display: 'block'
                  }}
                >
                  Borewells & Motors
                </span>
              </div>
            </div>

            <p style={{ color: '#9BB1B9', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Professional borewell drilling and water pump motor solutions for residential homes, farms, commercial establishments, and project sites across Visakhapatnam.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="status-indicator" style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#34D399' }}>
                <span className="status-dot"></span>
                <span>Open 24/7 in Visakhapatnam</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#9BB1B9' }}>
                4.8 ★ Google Rating
              </div>
            </div>
          </div>

          {/* Column 2: Confirmed Services */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '20px'
              }}
            >
              Confirmed Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    style={{
                      color: '#9BB1B9',
                      fontSize: '0.92rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                    className="footer-link"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight size={13} style={{ opacity: 0.7 }} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Localities in Vizag */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '20px'
              }}
            >
              Visakhapatnam Coverage
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {serviceAreas.slice(0, 8).map((area) => (
                <a
                  key={area.name}
                  href="/#areas"
                  style={{
                    fontSize: '0.82rem',
                    color: '#9BB1B9',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid #283C45',
                    borderRadius: '6px',
                    padding: '5px 10px',
                    textDecoration: 'none'
                  }}
                  className="footer-area-tag"
                >
                  {area.name}
                </a>
              ))}
            </div>
            <p style={{ color: '#7E96A0', fontSize: '0.82rem', marginTop: '14px' }}>
              Headquartered at Lalitha Colony, Seethammadara. Deploying rigs citywide.
            </p>
          </div>

          {/* Column 4: Contact Action */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '20px'
              }}
            >
              Contact & Siting
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a
                href="tel:09246622995"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: '#087EA4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Phone size={17} color="#FFFFFF" />
                </div>
                <span>092466 22995</span>
              </a>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#9BB1B9', fontSize: '0.88rem' }}>
                <Clock size={16} style={{ color: '#12B8C4', flexShrink: 0, marginTop: '3px' }} />
                <span>Open 24 Hours / 7 Days for Emergency & Site Work</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#9BB1B9', fontSize: '0.88rem' }}>
                <MapPin size={16} style={{ color: '#F4B942', flexShrink: 0, marginTop: '3px' }} />
                <span>Lalitha Colony, Seethammadara, Visakhapatnam, Andhra Pradesh 530013</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            paddingTop: '28px',
            fontSize: '0.86rem',
            color: '#718892'
          }}
        >
          <div>
            © 2026 Koneti Borewells & Motors. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link to="/privacy-policy" style={{ color: '#9BB1B9', textDecoration: 'none' }} className="footer-link">
              Privacy Policy
            </Link>
            <span style={{ color: '#3A4F58' }}>•</span>
            <Link to="/terms-and-conditions" style={{ color: '#9BB1B9', textDecoration: 'none' }} className="footer-link">
              Terms & Conditions
            </Link>
            <span style={{ color: '#3A4F58' }}>•</span>
            <span style={{ color: '#9BB1B9' }}>Visakhapatnam, AP</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: #12B8C4 !important;
        }
        .footer-area-tag:hover {
          background-color: rgba(18, 184, 196, 0.2) !important;
          color: #FFFFFF !important;
          border-color: #12B8C4 !important;
        }
      `}</style>
    </footer>
  );
}
