import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Phone, ArrowRight } from 'lucide-react';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | Koneti Borewells & Motors';
  }, []);

  return (
    <main
      className="main-content"
      style={{
        paddingTop: 'calc(var(--navbar-height) + 60px)',
        paddingBottom: '90px',
        backgroundColor: 'var(--bg-page)',
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="site-container-narrow" style={{ textAlign: 'center' }}>
        <div
          style={{
            width: '74px',
            height: '74px',
            borderRadius: '20px',
            backgroundColor: 'var(--color-primary-blue-light)',
            color: 'var(--color-primary-blue)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px'
          }}
        >
          <Compass size={38} />
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: 'var(--color-dark-text)',
            marginBottom: '14px'
          }}
        >
          Service or Page Not Found
        </h1>

        <p
          style={{
            color: 'var(--color-muted-text)',
            fontSize: '1.08rem',
            lineHeight: 1.65,
            maxWidth: '560px',
            margin: '0 auto 32px auto'
          }}
        >
          The page or borewell service you are looking for may have moved or is unavailable. You can return to our homepage or explore our confirmed service catalog.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary btn-lg">
            <Home size={18} />
            <span>Back to Homepage</span>
          </Link>

          <a href="tel:09246622995" className="btn btn-secondary btn-lg">
            <Phone size={18} color="var(--color-primary-blue)" />
            <span>Call 092466 22995</span>
          </a>
        </div>
      </div>
    </main>
  );
}
