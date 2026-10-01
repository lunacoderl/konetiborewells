import React, { useEffect } from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Koneti Borewells & Motors';
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Privacy Policy', path: '/privacy-policy' }
  ];

  return (
    <main
      className="main-content"
      style={{
        paddingTop: 'calc(var(--navbar-height) + 24px)',
        paddingBottom: '80px',
        backgroundColor: 'var(--bg-page)'
      }}
    >
      <div className="site-container-narrow">
        <Breadcrumbs items={breadcrumbs} />

        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(28px, 4.5vw, 48px)',
            border: '1.5px solid var(--color-border)',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          <div className="eyebrow-badge">
            <span>LEGAL &amp; TRANSPARENCY</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.8vw, 2.8rem)',
              fontWeight: 800,
              color: 'var(--color-dark-text)',
              marginBottom: '20px'
            }}
          >
            Privacy Policy
          </h1>

          <p style={{ color: 'var(--color-muted-text)', fontSize: '0.94rem', marginBottom: '24px' }}>
            Effective Date: January 1, 2026 • Koneti Borewells &amp; Motors, Visakhapatnam
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--color-muted-text)', fontSize: '1rem', lineHeight: 1.7 }}>
            <p>
              At <strong>Koneti Borewells &amp; Motors</strong> (located in Lalitha Colony, Seethammadara, Visakhapatnam), we respect your privacy. This Privacy Policy outlines our transparent approach to customer inquiries, quotations, and telephone interactions.
            </p>

            <h3 style={{ color: 'var(--color-dark-text)', fontFamily: 'var(--font-heading)', marginTop: '10px' }}>
              1. Information We Collect
            </h3>
            <p>
              When you contact us by telephone (092466 22995) or interact with our WhatsApp quote configurator, you may voluntarily share your name, telephone number, plot location or colony in Visakhapatnam, and borehole service requirements. We collect only what is necessary to formulate an operational estimate and dispatch site inspection teams.
            </p>

            <h3 style={{ color: 'var(--color-dark-text)', fontFamily: 'var(--font-heading)', marginTop: '10px' }}>
              2. Use of Information
            </h3>
            <p>
              We use your contact details solely for:
            </p>
            <ul style={{ paddingLeft: '24px' }}>
              <li>Responding to your borewell drilling, motor, or cleaning inquiry.</li>
              <li>Scheduling on-site rig visits or hydrogeological assessments.</li>
              <li>Providing estimated costs, casing measurements, and operational updates.</li>
            </ul>

            <h3 style={{ color: 'var(--color-dark-text)', fontFamily: 'var(--font-heading)', marginTop: '10px' }}>
              3. Zero Data Sharing or Marketing Resale
            </h3>
            <p>
              We do not sell, rent, or lease your personal information to third-party telemarketers or advertisers. All customer communications are handled directly by Koneti Borewells &amp; Motors.
            </p>

            <h3 style={{ color: 'var(--color-dark-text)', fontFamily: 'var(--font-heading)', marginTop: '10px' }}>
              4. Contact for Inquiries
            </h3>
            <p>
              If you have any questions regarding our customer communication or privacy practices, you may reach us at:
            </p>
            <p>
              <strong>Koneti Borewells &amp; Motors</strong><br />
              Lalitha Colony, Seethammadara, Visakhapatnam, Andhra Pradesh 530013<br />
              Telephone: 092466 22995 (Available 24 Hours)
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
