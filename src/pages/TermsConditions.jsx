import React, { useEffect } from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';

export default function TermsConditions() {
  useEffect(() => {
    document.title = 'Terms & Conditions | Koneti Borewells & Motors';
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Terms & Conditions', path: '/terms-and-conditions' }
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
          <div className="eyebrow-badge earth">
            <span>OPERATIONAL TERMS</span>
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
            Terms &amp; Conditions
          </h1>

          <p style={{ color: 'var(--color-muted-text)', fontSize: '0.94rem', marginBottom: '24px' }}>
            Effective Date: January 1, 2026 • Koneti Borewells &amp; Motors, Visakhapatnam
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--color-muted-text)', fontSize: '1rem', lineHeight: 1.7 }}>
            <p>
              Welcome to the website of <strong>Koneti Borewells &amp; Motors</strong>. By exploring this website or requesting our drilling and water pump services, you acknowledge the standard operational guidelines outlined below.
            </p>

            <h3 style={{ color: 'var(--color-dark-text)', fontFamily: 'var(--font-heading)', marginTop: '10px' }}>
              1. Site Access &amp; Rig Mobilization
            </h3>
            <p>
              Borewell drilling operations require heavy pneumatic truck-mounted machinery. Property owners are responsible for ensuring adequate gate access width, overhead electrical clearance, and confirming that the designated drilling point is clear of underground sewer, water, or electric lines.
            </p>

            <h3 style={{ color: 'var(--color-dark-text)', fontFamily: 'var(--font-heading)', marginTop: '10px' }}>
              2. Geological Realities &amp; Water Yield
            </h3>
            <p>
              While our crew utilizes extensive drilling experience and modern pneumatic DTH equipment across Visakhapatnam, subterranean water availability is a natural hydrogeological condition. Drilling depth, water strike points, and final yield depend upon subterranean rock fractures and water table levels.
            </p>

            <h3 style={{ color: 'var(--color-dark-text)', fontFamily: 'var(--font-heading)', marginTop: '10px' }}>
              3. Casing &amp; Equipment Specifications
            </h3>
            <p>
              Casing pipes are installed through loose topsoil overburden until firm solid bedrock is encountered. Measurement of casing depth and drilled footage is verified openly on site in the presence of the property owner or representative.
            </p>

            <h3 style={{ color: 'var(--color-dark-text)', fontFamily: 'var(--font-heading)', marginTop: '10px' }}>
              4. Contact Information
            </h3>
            <p>
              For any operational clarifications or service agreements, contact:
            </p>
            <p>
              <strong>Koneti Borewells &amp; Motors</strong><br />
              Lalitha Colony, Seethammadara, Visakhapatnam, AP 530013<br />
              Telephone: 092466 22995 (Available 24 Hours)
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
