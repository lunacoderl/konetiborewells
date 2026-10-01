import React, { useState } from 'react';
import { Camera, Maximize2 } from 'lucide-react';
import Lightbox from '../common/Lightbox';

export default function ServiceGallery({ gallery, serviceTitle }) {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  if (!gallery || gallery.length === 0) return null;

  const handlePrev = () => {
    setActiveLightboxIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
  };

  const handleNext = () => {
    setActiveLightboxIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      className="site-section bg-light"
      style={{
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        <div style={{ maxWidth: '720px', marginBottom: '36px' }}>
          <div className="eyebrow-badge">
            <Camera size={14} />
            <span>FIELD VISUALS • SERVICE GALLERY</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
              fontWeight: 800,
              color: 'var(--color-dark-text)',
              lineHeight: 1.2,
              marginBottom: '10px'
            }}
          >
            Field Photography for {serviceTitle}.
          </h2>

          <p style={{ color: 'var(--color-muted-text)', fontSize: '1.02rem', margin: 0 }}>
            Actual site execution and equipment involved in this service category across Visakhapatnam.
          </p>
        </div>

        {/* Gallery Grid with Uncropped Visuals */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}
        >
          {gallery.map((img, index) => (
            <div
              key={index}
              onClick={() => setActiveLightboxIndex(index)}
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-subtle)',
                cursor: 'pointer',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease'
              }}
              className="service-gallery-card"
            >
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#F0F6F7',
                  width: '100%',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  style={{
                    width: '100%',
                    height: '240px',
                    objectFit: 'contain', // Never crop!
                    display: 'block'
                  }}
                  loading="lazy"
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(23, 36, 43, 0.75)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Maximize2 size={15} />
                </div>
              </div>

              <div style={{ padding: '14px 18px' }}>
                <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--color-dark-text)', fontWeight: 600 }}>
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeLightboxIndex !== null && (
        <Lightbox
          item={{
            src: gallery[activeLightboxIndex].url,
            title: gallery[activeLightboxIndex].caption,
            alt: gallery[activeLightboxIndex].alt,
            description: `${serviceTitle} site execution in Visakhapatnam`
          }}
          onClose={() => setActiveLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      <style>{`
        .service-gallery-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(17, 30, 36, 0.1) !important;
          border-color: rgba(18, 184, 196, 0.35) !important;
        }
      `}</style>
    </section>
  );
}
