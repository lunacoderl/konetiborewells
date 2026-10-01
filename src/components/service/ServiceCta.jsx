import React, { useState } from 'react';
import { MessageCircle, Phone, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export default function ServiceCta({ service }) {
  const [plotArea, setPlotArea] = useState('');
  const [propertyScale, setPropertyScale] = useState('Domestic Home / Villa');

  const handleWhatsAppEnquiry = (e) => {
    e.preventDefault();
    const loc = plotArea.trim() ? plotArea.trim() : 'Visakhapatnam';
    const msg = `Hello Koneti Borewells & Motors,
I would like to enquire about:
• Service: ${service.title}
• Property Scale: ${propertyScale}
• Area in Vizag: ${loc}
Please advise on availability and estimated pricing.`;

    const encoded = `https://wa.me/919246622995?text=${encodeURIComponent(msg)}`;
    window.open(encoded, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="quote"
      className="site-section bg-cream"
      style={{
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(28px, 4.5vw, 48px)',
            border: '1.5px solid var(--color-border)',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px auto' }}>
            <div className="eyebrow-badge">
              <span>GET AN ESTIMATE</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
                fontWeight: 800,
                color: 'var(--color-dark-text)',
                lineHeight: 1.16,
                marginBottom: '14px'
              }}
            >
              Need {service.shortTitle} in Visakhapatnam?
            </h2>

            <p style={{ color: 'var(--color-muted-text)', fontSize: '1.05rem', lineHeight: 1.65 }}>
              Talk with Koneti Borewells &amp; Motors today. Connect directly on WhatsApp or call our 24/7 support line at <strong>092466 22995</strong>.
            </p>
          </div>

          {/* Quick Quote Interaction */}
          <form
            onSubmit={handleWhatsAppEnquiry}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
              alignItems: 'flex-end',
              marginBottom: '24px'
            }}
          >
            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  color: 'var(--color-dark-text)',
                  marginBottom: '6px'
                }}
              >
                Property Scale
              </label>
              <select
                value={propertyScale}
                onChange={(e) => setPropertyScale(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1.5px solid var(--color-border)',
                  fontSize: '0.92rem',
                  fontFamily: 'var(--font-body)',
                  color: 'var(--color-dark-text)',
                  backgroundColor: '#FFFFFF',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="Domestic Home / Villa">Domestic Home / Villa</option>
                <option value="Apartment / Multi-Unit">Apartment / Multi-Unit</option>
                <option value="Agricultural Farmland">Agricultural Farmland</option>
                <option value="Commercial / Project Site">Commercial / Project Site</option>
              </select>
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  color: 'var(--color-dark-text)',
                  marginBottom: '6px'
                }}
              >
                Your Colony / Location in Vizag
              </label>
              <input
                type="text"
                value={plotArea}
                onChange={(e) => setPlotArea(e.target.value)}
                placeholder="e.g. Madhurawada, Seethammadara"
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1.5px solid var(--color-border)',
                  fontSize: '0.92rem',
                  fontFamily: 'var(--font-body)',
                  color: 'var(--color-dark-text)',
                  backgroundColor: '#FFFFFF',
                  outline: 'none'
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-whatsapp"
              style={{
                padding: '13px 20px',
                fontSize: '0.96rem',
                justifyContent: 'center',
                boxShadow: '0 6px 18px rgba(37, 211, 102, 0.3)'
              }}
            >
              <MessageCircle size={18} />
              <span>Continue on WhatsApp</span>
            </button>
          </form>

          {/* Quick Direct Actions Footer */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              paddingTop: '20px',
              borderTop: '1px solid var(--color-border-light)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--color-muted-text)' }}>
              <ShieldCheck size={16} color="var(--color-primary-blue)" />
              <span>Available 24 Hours • Lalitha Colony, Seethammadara Base</span>
            </div>

            <a
              href="tel:09246622995"
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Phone size={15} color="var(--color-primary-blue)" />
              <span>Call Us: 092466 22995</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
