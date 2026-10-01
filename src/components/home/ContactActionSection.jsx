import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, ArrowRight, ShieldCheck, CheckCircle2, Navigation } from 'lucide-react';

export default function ContactActionSection() {
  const [requirement, setRequirement] = useState('4½" Borewell Drilling (Domestic)');
  const [propertyType, setPropertyType] = useState('Individual Home / Villa');
  const [locality, setLocality] = useState('');

  const requirementsList = [
    '4½" Borewell Drilling (Domestic)',
    '6½" Borewell Drilling (Agricultural / Commercial)',
    'Water Pump & Motor Supply / Fitting',
    'Borewell Cleaning & High-Pressure Flushing',
    'Groundwater Siting & Geological Survey'
  ];

  const propertyTypes = [
    'Individual Home / Villa',
    'Apartment / Residential Complex',
    'Agricultural Farmland / Orchard',
    'Commercial Establishment / Hotel',
    'Construction / Industrial Site'
  ];

  const handleWhatsAppQuote = (e) => {
    e.preventDefault();
    const locText = locality.trim() ? locality.trim() : 'Visakhapatnam';
    const message = `Hello Koneti Borewells & Motors, I would like to request a quote.
• Requirement: ${requirement}
• Property Type: ${propertyType}
• Location in Vizag: ${locText}
Please share estimated costs and availability.`;

    const encoded = `https://wa.me/919246622995?text=${encodeURIComponent(message)}`;
    window.open(encoded, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact"
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '44px',
            alignItems: 'stretch'
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Call, 24/7 Hours, Verified Address */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div className="eyebrow-badge earth">
                <span>DIRECT ENGAGEMENT • INSTANT RESPONSE</span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.1rem, 3.8vw, 3rem)',
                  fontWeight: 800,
                  color: 'var(--color-dark-text)',
                  lineHeight: 1.15,
                  marginBottom: '16px'
                }}
              >
                Let’s Talk About Your Water Requirement.
              </h2>

              <p style={{ color: 'var(--color-muted-text)', fontSize: '1.05rem', lineHeight: 1.68, marginBottom: '32px' }}>
                We don’t use generic contact forms or delayed automated emails. Talk directly with our senior borewell operators or configure an instant WhatsApp quote below.
              </p>

              {/* Verified Contact Details Blocks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                {/* 1. Primary Phone */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '16px 20px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-subtle)'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--color-primary-blue-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary-blue)',
                      flexShrink: 0
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-muted-text)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      CALL DIRECTLY (24/7 ACTIVE)
                    </span>
                    <a
                      href="tel:09246622995"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.4rem',
                        fontWeight: 800,
                        color: 'var(--color-primary-blue-dark)',
                        textDecoration: 'none',
                        lineHeight: 1.2
                      }}
                    >
                      092466 22995
                    </a>
                  </div>
                </div>

                {/* 2. Availability */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '16px 20px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-subtle)'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--color-aqua-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary-blue-dark)',
                      flexShrink: 0
                    }}
                  >
                    <Clock size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-muted-text)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      OPERATING HOURS
                    </span>
                    <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--color-dark-text)', lineHeight: 1.2 }}>
                      Open 24 Hours / 7 Days a Week
                    </strong>
                    <span style={{ fontSize: '0.82rem', color: 'var(--color-muted-text)' }}>
                      Available for emergency motor retrieval and urgent site drilling.
                    </span>
                  </div>
                </div>

                {/* 3. Physical Location in Seethammadara */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '16px 20px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-subtle)'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--color-earth-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-earth-dark)',
                      flexShrink: 0
                    }}
                  >
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.76rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-muted-text)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      CENTRAL OFFICE &amp; WORKSHOP
                    </span>
                    <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--color-dark-text)', lineHeight: 1.3 }}>
                      Lalitha Colony, Seethammadara, Visakhapatnam
                    </strong>
                    <span style={{ fontSize: '0.82rem', color: 'var(--color-muted-text)' }}>
                      Near Bullayya College &amp; Dr. V.S. Krishna Govt College area, AP 530013.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Koneti+Borewells+and+Motors+Lalitha+Colony+Visakhapatnam"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <Navigation size={15} color="var(--color-primary-blue)" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Interactive Quote Configurator */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(24px, 4vw, 36px)',
              border: '1.5px solid var(--color-border)',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-primary-blue)'
                  }}
                >
                  INTERACTIVE QUOTE BUILDER
                </span>
                <span
                  style={{
                    fontSize: '0.74rem',
                    color: '#058A72',
                    backgroundColor: '#E6FBF7',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontWeight: 700
                  }}
                >
                  Zero Spam • Direct Chat
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: 'var(--color-dark-text)',
                  marginBottom: '8px'
                }}
              >
                Configure Your Requirement
              </h3>

              <p style={{ fontSize: '0.88rem', color: 'var(--color-muted-text)', marginBottom: '24px' }}>
                Select your parameters below to generate a pre-formatted WhatsApp enquiry directly to our team.
              </p>

              <form onSubmit={handleWhatsAppQuote} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {/* 1. Requirement Dropdown */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: 'var(--color-dark-text)',
                      marginBottom: '6px'
                    }}
                  >
                    1. Select Service Requirement
                  </label>
                  <select
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--color-border)',
                      fontSize: '0.94rem',
                      fontFamily: 'var(--font-body)',
                      color: 'var(--color-dark-text)',
                      backgroundColor: '#FFFFFF',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {requirementsList.map((req) => (
                      <option key={req} value={req}>{req}</option>
                    ))}
                  </select>
                </div>

                {/* 2. Property Type Dropdown */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: 'var(--color-dark-text)',
                      marginBottom: '6px'
                    }}
                  >
                    2. Select Property Type
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--color-border)',
                      fontSize: '0.94rem',
                      fontFamily: 'var(--font-body)',
                      color: 'var(--color-dark-text)',
                      backgroundColor: '#FFFFFF',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {propertyTypes.map((prop) => (
                      <option key={prop} value={prop}>{prop}</option>
                    ))}
                  </select>
                </div>

                {/* 3. Locality in Vizag Input */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: 'var(--color-dark-text)',
                      marginBottom: '6px'
                    }}
                  >
                    3. Your Area / Colony in Visakhapatnam
                  </label>
                  <input
                    type="text"
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    placeholder="e.g. Madhurawada, Seethammadara, Gajuwaka"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--color-border)',
                      fontSize: '0.94rem',
                      fontFamily: 'var(--font-body)',
                      color: 'var(--color-dark-text)',
                      backgroundColor: '#FFFFFF',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Submit Action: Opens WhatsApp */}
                <button
                  type="submit"
                  className="btn btn-whatsapp btn-lg"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    marginTop: '8px',
                    fontSize: '1.02rem',
                    boxShadow: '0 6px 20px rgba(37, 211, 102, 0.35)'
                  }}
                >
                  <MessageCircle size={20} />
                  <span>Continue on WhatsApp →</span>
                </button>
              </form>
            </div>

            {/* Bottom Notice */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '20px', fontSize: '0.8rem', color: 'var(--color-muted-text)' }}>
              <ShieldCheck size={16} color="var(--color-primary-blue)" />
              <span>Direct WhatsApp connection to 092466 22995. No spam, no bot calls.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
