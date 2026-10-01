import React, { useState } from 'react';
import { Camera, MapPin, Maximize2 } from 'lucide-react';
import { galleryItems, galleryCategories } from '../../data/gallery';
import Lightbox from '../common/Lightbox';

export default function FieldGallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const handlePrev = () => {
    setActiveLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    setActiveLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="gallery"
      className="site-section bg-light"
      style={{
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        {/* Section Heading & Category Filter Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: '36px'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <div className="eyebrow-badge">
              <Camera size={14} />
              <span>ON-SITE OPERATIONS • FIELD CAPTURES</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 800,
                color: 'var(--color-dark-text)',
                lineHeight: 1.18,
                marginBottom: '10px'
              }}
            >
              Work That Happens on the Ground.
            </h2>

            <p style={{ color: 'var(--color-muted-text)', fontSize: '1.02rem', margin: 0 }}>
              Genuine field photography from borewell drilling sites, machinery operations, casing work, and water strikes across Visakhapatnam.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px'
            }}
          >
            {galleryCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: isSelected ? '1px solid var(--color-primary-blue)' : '1px solid var(--color-border)',
                    backgroundColor: isSelected ? 'var(--color-primary-blue)' : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : 'var(--color-dark-text)',
                    boxShadow: isSelected ? '0 4px 14px rgba(8, 126, 164, 0.25)' : 'none'
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry / Responsive Column Grid with Natural Aspect Ratios (NO CROPPING) */}
        <div
          style={{
            columns: '3 320px',
            columnGap: '20px'
          }}
          className="gallery-masonry"
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              style={{
                breakInside: 'avoid',
                marginBottom: '20px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-subtle)',
                cursor: 'pointer',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                position: 'relative'
              }}
              className="gallery-card-item"
            >
              {/* Uncropped Image Display */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#F0F6F7',
                  width: '100%',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'contain' // Never crop machinery!
                  }}
                  loading="lazy"
                />

                {/* Hover overlay hint */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(23, 36, 43, 0.75)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(4px)'
                  }}
                  className="gallery-zoom-hint"
                >
                  <Maximize2 size={16} />
                </div>
              </div>

              {/* Card Caption Info */}
              <div style={{ padding: '14px 18px' }}>
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--color-primary-blue)',
                    letterSpacing: '0.06em',
                    display: 'block',
                    marginBottom: '4px'
                  }}
                >
                  {item.categoryLabel}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--color-dark-text)',
                    lineHeight: 1.3,
                    marginBottom: '6px'
                  }}
                >
                  {item.title}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', color: 'var(--color-muted-text)' }}>
                  <MapPin size={12} color="var(--color-earth-accent)" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <Lightbox
          item={filteredItems[activeLightboxIndex]}
          onClose={() => setActiveLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      <style>{`
        .gallery-card-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(17, 30, 36, 0.12) !important;
          border-color: rgba(18, 184, 196, 0.4) !important;
        }
      `}</style>
    </section>
  );
}
