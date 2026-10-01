import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/#about' },
    { label: 'Services', path: '/#services' },
    { label: 'Process', path: '/#process' },
    { label: 'Gallery', path: '/#gallery' },
    { label: 'Areas', path: '/#areas' },
    { label: 'Reviews', path: '/#reviews' },
    { label: 'FAQ', path: '/#faq' }
  ];

  // When on homepage and not scrolled: transparent dark overlay with crisp white text
  const isTransparentHero = isHome && !scrolled;

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          height: 'var(--navbar-height)',
          transition: 'all 0.28s ease',
          backgroundColor: scrolled
            ? 'rgba(255, 255, 255, 0.96)'
            : isTransparentHero
            ? 'rgba(14, 25, 30, 0.55)'
            : 'rgba(248, 251, 250, 0.92)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          boxShadow: scrolled
            ? '0 4px 20px rgba(17, 30, 36, 0.08)'
            : 'none',
          borderBottom: scrolled
            ? '1px solid var(--color-border)'
            : isTransparentHero
            ? '1px solid rgba(255, 255, 255, 0.12)'
            : '1px solid transparent'
        }}
      >
        <div
          className="site-container"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          {/* Brand Logo & 24/7 Status Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none'
              }}
              title="Koneti Borewells & Motors - Home"
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <img
                  src="/logo.png"
                  alt="Koneti Borewells Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.24rem',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    color: isTransparentHero ? '#FFFFFF' : 'var(--color-dark-text)',
                    lineHeight: 1.1,
                    display: 'block',
                    transition: 'color 0.25s ease'
                  }}
                >
                  KONETI
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: isTransparentHero ? '#12B8C4' : 'var(--color-primary-blue)',
                    display: 'block'
                  }}
                >
                  Borewells &amp; Motors
                </span>
              </div>
            </Link>

            {/* Status Indicator: Available 24/7 */}
            <div
              className="status-indicator"
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: isTransparentHero ? 'rgba(16, 185, 129, 0.18)' : '#E6FBF7',
                borderColor: isTransparentHero ? 'rgba(16, 185, 129, 0.45)' : '#B8EFE4',
                color: isTransparentHero ? '#34D399' : '#058A72'
              }}
            >
              <span className="status-dot"></span>
              <span>Available 24/7</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '24px'
            }}
            className="desktop-nav-menu"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.path}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  color: isTransparentHero ? '#E2EFF2' : 'var(--color-dark-text)',
                  textDecoration: 'none',
                  padding: '6px 4px',
                  position: 'relative',
                  transition: 'color 0.2s ease'
                }}
                className={isTransparentHero ? 'nav-link-hero' : 'nav-link-hover'}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action */}
          <div style={{ display: 'none', alignItems: 'center', gap: '12px' }} className="desktop-nav-actions">
            <a
              href="tel:09246622995"
              className={isTransparentHero ? 'btn btn-ghost-white btn-sm' : 'btn btn-secondary btn-sm'}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem' }}
              title="Call Koneti Borewells & Motors"
            >
              <Phone size={15} color={isTransparentHero ? '#12B8C4' : 'var(--color-primary-blue)'} />
              <span>092466 22995</span>
            </a>

            <a
              href="#contact"
              className={isTransparentHero ? 'btn btn-accent btn-sm' : 'btn btn-primary btn-sm'}
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <span>Book a Quote</span>
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '8px',
              border: isTransparentHero ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid var(--color-border)',
              backgroundColor: isTransparentHero ? 'rgba(255, 255, 255, 0.15)' : '#FFFFFF',
              color: isTransparentHero ? '#FFFFFF' : 'var(--color-dark-text)',
              cursor: 'pointer',
              backdropFilter: isTransparentHero ? 'blur(8px)' : 'none'
            }}
            className="mobile-hamburger-btn"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Slide Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 998,
            backgroundColor: 'rgba(11, 20, 24, 0.65)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            justifyContent: 'flex-end'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              width: '84%',
              maxWidth: '340px',
              height: '100%',
              backgroundColor: '#FFFFFF',
              boxShadow: '-8px 0 32px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              padding: '24px 20px',
              paddingTop: 'calc(var(--navbar-height) + 16px)',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '1px solid var(--color-border)',
                marginBottom: '16px'
              }}
            >
              <div className="status-indicator">
                <span className="status-dot"></span>
                <span>Active in Visakhapatnam</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--color-muted-text)',
                  padding: '4px'
                }}
              >
                <X size={20} />
              </button>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--color-dark-text)',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'var(--bg-page)'
                  }}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={16} color="var(--color-primary-blue)" />
                </a>
              ))}
            </nav>

            <div style={{ marginTop: 'auto', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href="tel:09246622995"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Phone size={17} />
                <span>Call 092466 22995</span>
              </a>

              <a
                href="https://wa.me/919246622995?text=Hello%20Koneti%20Borewells%20%26%20Motors%2C%20I%20would%20like%20to%20enquire%20about%20borewell%20services%20in%20Visakhapatnam."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <MessageCircle size={17} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Responsive media style override */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav-menu { display: flex !important; }
          .desktop-nav-actions { display: flex !important; }
          .mobile-hamburger-btn { display: none !important; }
        }
        .nav-link-hover:hover {
          color: var(--color-primary-blue) !important;
        }
        .nav-link-hero:hover {
          color: #12B8C4 !important;
        }
      `}</style>
    </>
  );
}
