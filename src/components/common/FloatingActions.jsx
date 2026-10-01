import React from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import RisingWaterScrollTop from './RisingWaterScrollTop';
import { getServiceBySlug } from '../../data/services';

export default function FloatingActions() {
  const location = useLocation();

  // Determine service context for pre-filled WhatsApp message
  let defaultWhatsAppText = 'Hello Koneti Borewells & Motors, I would like to enquire about borewell services in Visakhapatnam.';
  if (location.pathname.startsWith('/services/')) {
    const slug = location.pathname.split('/')[2];
    const service = getServiceBySlug(slug);
    if (service?.ctaContext) {
      defaultWhatsAppText = service.ctaContext;
    }
  }

  const encodedWhatsAppUrl = `https://wa.me/919246622995?text=${encodeURIComponent(defaultWhatsAppText)}`;

  const handleBookQuoteClick = (e) => {
    // If on homepage, smooth scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      e.preventDefault();
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to homepage contact anchor or open WhatsApp
      window.location.href = '/#contact';
    }
  };

  return (
    <>
      {/* Desktop Right-Side Floating Action Rail */}
      <aside
        className="desktop-floating-rail"
        aria-label="Quick contact actions"
        style={{
          position: 'fixed',
          right: '24px',
          bottom: '36px',
          zIndex: 990,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          alignItems: 'flex-end'
        }}
      >
        {/* 1. Direct Call Button */}
        <div className="floating-item-wrapper">
          <span className="floating-tooltip">Call 092466 22995</span>
          <a
            href="tel:09246622995"
            className="floating-btn call-btn"
            aria-label="Call Koneti Borewells directly"
            title="Call Us (24/7 Available)"
          >
            <Phone size={20} />
          </a>
        </div>

        {/* 2. WhatsApp Button */}
        <div className="floating-item-wrapper">
          <span className="floating-tooltip">Chat on WhatsApp</span>
          <a
            href={encodedWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-btn whatsapp-btn"
            aria-label="Chat with Koneti Borewells on WhatsApp"
            title="WhatsApp Us"
          >
            <MessageCircle size={20} />
          </a>
        </div>

        {/* 3. Book a Quote Button */}
        <div className="floating-item-wrapper">
          <span className="floating-tooltip">Book a Free Quote</span>
          <a
            href="#contact"
            onClick={handleBookQuoteClick}
            className="floating-btn quote-btn"
            aria-label="Request a borewell drilling quote"
            title="Book a Free Quote"
          >
            <FileText size={20} />
          </a>
        </div>

        {/* 4. Rising-Water Scroll to Top Indicator */}
        <RisingWaterScrollTop />
      </aside>

      {/* Mobile Sticky Bottom Action Bar */}
      <nav
        className="mobile-bottom-bar"
        aria-label="Mobile quick actions"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 990,
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid var(--color-border)',
          boxShadow: '0 -4px 20px rgba(17, 30, 36, 0.08)',
          padding: '10px 14px',
          display: 'none',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <a
          href="tel:09246622995"
          className="btn btn-secondary btn-sm mobile-action-btn"
          style={{ flex: 1, padding: '10px 6px', fontSize: '0.86rem' }}
        >
          <Phone size={16} color="var(--color-primary-blue)" />
          <span>Call 24/7</span>
        </a>

        <a
          href={encodedWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp btn-sm mobile-action-btn"
          style={{ flex: 1.1, padding: '10px 6px', fontSize: '0.86rem' }}
        >
          <MessageCircle size={16} />
          <span>WhatsApp</span>
        </a>

        <a
          href="#contact"
          onClick={handleBookQuoteClick}
          className="btn btn-primary btn-sm mobile-action-btn"
          style={{ flex: 1.2, padding: '10px 6px', fontSize: '0.86rem' }}
        >
          <FileText size={16} />
          <span>Get Quote</span>
        </a>
      </nav>

      {/* Styles for Floating Actions */}
      <style>{`
        .floating-item-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .floating-tooltip {
          position: absolute;
          right: 60px;
          background-color: #17242B;
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;
          padding: 6px 12px;
          border-radius: 6px;
          opacity: 0;
          pointer-events: none;
          transform: translateX(10px);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
        }

        .floating-item-wrapper:hover .floating-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        .floating-btn {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          box-shadow: 0 8px 24px rgba(17, 30, 36, 0.16);
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
          text-decoration: none;
        }

        .floating-btn:hover {
          transform: translateY(-4px) scale(1.06);
        }

        .call-btn {
          background: linear-gradient(135deg, #087EA4 0%, #065B77 100%);
        }

        .whatsapp-btn {
          background: linear-gradient(135deg, #25D366 0%, #1EBE5D 100%);
        }

        .quote-btn {
          background: linear-gradient(135deg, #F4B942 0%, #E2A62C 100%);
          color: #17242B !important;
        }

        @media (max-width: 768px) {
          .desktop-floating-rail {
            display: none !important;
          }
          .mobile-bottom-bar {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
