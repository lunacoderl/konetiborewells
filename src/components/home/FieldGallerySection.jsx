import React, { useState } from 'react';
import { Camera, MapPin, Maximize2, Video, Play, Volume2, Sparkles, Activity, ShieldCheck } from 'lucide-react';
import { galleryItems, galleryCategories, siteVideos } from '../../data/gallery';
import Lightbox from '../common/Lightbox';

export default function FieldGallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  const [currentModalList, setCurrentModalList] = useState(galleryItems);

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (list, index) => {
    setCurrentModalList(list);
    setActiveLightboxIndex(index);
  };

  const handlePrev = () => {
    setActiveLightboxIndex((prev) => (prev > 0 ? prev - 1 : currentModalList.length - 1));
  };

  const handleNext = () => {
    setActiveLightboxIndex((prev) => (prev < currentModalList.length - 1 ? prev + 1 : 0));
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
        {/* Section Heading */}
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
          <div style={{ maxWidth: '680px' }}>
            <div className="eyebrow-badge">
              <Camera size={14} />
              <span>LIVE OPERATIONS • FIELD CAPTURES & REELS</span>
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
              Genuine field video recordings and photography from live borewell drilling, heavy rig operations, casing installations, and subterranean water strikes across Visakhapatnam.
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
                  type="button"
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

        {/* UNIQUE SPOTLIGHT: LIVE FIELD VIDEO REELS SHOWCASE */}
        {(selectedCategory === 'all' || selectedCategory === 'videos') && (
          <div
            className="video-showcase-spotlight"
            style={{
              marginBottom: '48px',
              backgroundColor: '#0A1820',
              borderRadius: '20px',
              padding: 'clamp(20px, 3vw, 36px)',
              border: '1px solid rgba(18, 184, 196, 0.35)',
              boxShadow: '0 20px 50px rgba(8, 16, 20, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background water wave glow */}
            <div
              style={{
                position: 'absolute',
                top: '-80px',
                right: '-80px',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(18, 184, 196, 0.15) 0%, rgba(8, 126, 164, 0) 70%)',
                pointerEvents: 'none'
              }}
            />

            {/* Spotlight Header Banner */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                marginBottom: '28px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                paddingBottom: '20px'
              }}
            >
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span className="live-pulsing-dot" />
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: '#12B8C4',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase'
                    }}
                  >
                    LIVE FIELD VIDEO REELS • ON-SITE CAPTURES
                  </span>
                </div>
                <h3
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.3rem, 2.2vw, 1.75rem)',
                    fontWeight: 800,
                    margin: 0
                  }}
                >
                  Subterranean Power: Rig Drilling & Water Strike in Motion
                </h3>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#A0B8C2',
                  fontSize: '0.85rem'
                }}
              >
                <span
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Volume2 size={14} color="#12B8C4" />
                  <span>Silent Autoplay (Click for Full Controls & Audio)</span>
                </span>
              </div>
            </div>

            {/* Twin Video Reels Display Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px'
              }}
            >
              {siteVideos.map((video, vIndex) => (
                <div
                  key={video.id}
                  className="spotlight-video-card"
                  onClick={() => openLightbox(siteVideos, vIndex)}
                  style={{
                    backgroundColor: '#11222C',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid rgba(18, 184, 196, 0.25)',
                    boxShadow: '0 12px 36px rgba(0, 0, 0, 0.35)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative'
                  }}
                >
                  {/* Video Player Display Container (Uncropped Natural Aspect Ratio) */}
                  <div
                    style={{
                      position: 'relative',
                      backgroundColor: '#050D11',
                      width: '100%',
                      minHeight: '380px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Autoplay Silent Video */}
                    <video
                      src={video.src}
                      autoPlay={true}
                      muted={true}
                      loop={true}
                      playsInline={true}
                      preload="auto"
                      style={{
                        width: '100%',
                        maxHeight: '440px',
                        objectFit: 'contain',
                        display: 'block'
                      }}
                    />

                    {/* Top Overlay Badges */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        right: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        pointerEvents: 'none',
                        zIndex: 2
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: 'rgba(239, 71, 111, 0.85)',
                          color: '#FFFFFF',
                          fontFamily: 'var(--font-heading)',
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          padding: '4px 10px',
                          borderRadius: '20px',
                          letterSpacing: '0.06em',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                          backdropFilter: 'blur(4px)'
                        }}
                      >
                        <span className="live-dot-white" />
                        {video.badge || 'LIVE REEL'}
                      </span>

                      <span
                        style={{
                          backgroundColor: 'rgba(10, 24, 32, 0.75)',
                          color: '#E0F2F1',
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          padding: '4px 10px',
                          borderRadius: '20px',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(4px)'
                        }}
                      >
                        0:15 HD REEL
                      </span>
                    </div>

                    {/* Center Hover Play Cue */}
                    <div className="video-hover-cue">
                      <div
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(18, 184, 196, 0.9)',
                          color: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 8px 24px rgba(18, 184, 196, 0.5)',
                          transform: 'scale(1)',
                          transition: 'transform 0.2s ease'
                        }}
                      >
                        <Play size={24} fill="#FFFFFF" style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Details & Action Buttons */}
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#12B8C4', marginBottom: '6px', fontWeight: 700 }}>
                      <MapPin size={13} />
                      <span>{video.location}</span>
                    </div>

                    <h4
                      style={{
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        lineHeight: 1.3,
                        margin: '0 0 8px 0'
                      }}
                    >
                      {video.title}
                    </h4>

                    <p
                      style={{
                        color: '#9CB3BC',
                        fontSize: '0.88rem',
                        lineHeight: 1.5,
                        margin: '0 0 16px 0',
                        flex: 1
                      }}
                    >
                      {video.description}
                    </p>

                    {/* Action Buttons Row */}
                    <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openLightbox(siteVideos, vIndex);
                        }}
                        style={{
                          flex: 1,
                          backgroundColor: 'var(--color-primary-blue)',
                          color: '#FFFFFF',
                          border: 'none',
                          borderRadius: '10px',
                          padding: '11px 16px',
                          fontFamily: 'var(--font-heading)',
                          fontSize: '0.86rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          transition: 'all 0.2s ease',
                          boxShadow: '0 4px 14px rgba(8, 126, 164, 0.35)'
                        }}
                        className="btn-action-primary"
                      >
                        <Maximize2 size={15} />
                        <span>Full View & Sound Controls</span>
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openLightbox(siteVideos, vIndex);
                        }}
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '10px',
                          backgroundColor: 'rgba(255, 255, 255, 0.08)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#12B8C4',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s ease'
                        }}
                        aria-label="Expand Reel"
                        title="Expand Reel"
                      >
                        <Play size={16} fill="#12B8C4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Masonry / Responsive Column Grid with Natural Aspect Ratios (NO CROPPING) */}
        <div
          style={{
            columns: '3 320px',
            columnGap: '20px'
          }}
          className="gallery-masonry"
        >
          {filteredItems.map((item, index) => {
            const isVideo = item.type === 'video';

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(filteredItems, index)}
                style={{
                  breakInside: 'avoid',
                  marginBottom: '20px',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  border: isVideo ? '2px solid rgba(18, 184, 196, 0.6)' : '1px solid var(--color-border)',
                  boxShadow: isVideo ? '0 10px 28px rgba(8, 126, 164, 0.15)' : 'var(--shadow-subtle)',
                  cursor: 'pointer',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  position: 'relative'
                }}
                className="gallery-card-item"
              >
                {/* Media Container: Never crop machinery or footage! */}
                <div
                  style={{
                    position: 'relative',
                    backgroundColor: isVideo ? '#081217' : '#F0F6F7',
                    width: '100%',
                    overflow: 'hidden'
                  }}
                >
                  {isVideo ? (
                    <video
                      src={item.src}
                      autoPlay={true}
                      muted={true}
                      loop={true}
                      playsInline={true}
                      preload="metadata"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        objectFit: 'contain'
                      }}
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        objectFit: 'contain'
                      }}
                      loading="lazy"
                    />
                  )}

                  {/* Video indicator or Zoom hint */}
                  {isVideo ? (
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: 'rgba(8, 126, 164, 0.88)',
                        color: '#FFFFFF',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        backdropFilter: 'blur(4px)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                      }}
                    >
                      <Video size={13} />
                      <span>SITE REEL</span>
                    </div>
                  ) : null}

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
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: isVideo ? 'var(--color-primary-blue)' : 'var(--color-primary-blue)',
                        letterSpacing: '0.06em'
                      }}
                    >
                      {item.categoryLabel}
                    </span>

                    {isVideo && (
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          color: '#087EA4',
                          backgroundColor: 'rgba(8, 126, 164, 0.1)',
                          padding: '2px 8px',
                          borderRadius: '10px'
                        }}
                      >
                        Autoplay Preview
                      </span>
                    )}
                  </div>

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

                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', color: 'var(--color-muted-text)', marginBottom: isVideo ? '12px' : 0 }}>
                    <MapPin size={12} color="var(--color-earth-accent)" />
                    <span>{item.location}</span>
                  </div>

                  {/* For Video Cards in Masonry, show a dedicated interactive Action Button */}
                  {isVideo && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openLightbox(filteredItems, index);
                      }}
                      style={{
                        width: '100%',
                        backgroundColor: '#F0F9FB',
                        border: '1px solid rgba(8, 126, 164, 0.3)',
                        borderRadius: '8px',
                        padding: '8px 12px',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: 'var(--color-primary-blue)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        transition: 'all 0.2s ease'
                      }}
                      className="masonry-video-btn"
                    >
                      <Maximize2 size={13} />
                      <span>Full View & Sound Controls</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal with Full Native & Interactive Controls */}
      {activeLightboxIndex !== null && (
        <Lightbox
          item={currentModalList[activeLightboxIndex]}
          onClose={() => setActiveLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      <style>{`
        .live-pulsing-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #EF476F;
          display: inline-block;
          box-shadow: 0 0 0 rgba(239, 71, 111, 0.6);
          animation: livePulse 1.8s infinite;
        }

        .live-dot-white {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #FFFFFF;
          display: inline-block;
          animation: livePulse 1.5s infinite;
        }

        @keyframes livePulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(239, 71, 111, 0.7);
          }
          70% {
            transform: scale(1.1);
            box-shadow: 0 0 0 8px rgba(239, 71, 111, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(239, 71, 111, 0);
          }
        }

        .spotlight-video-card:hover {
          transform: translateY(-6px);
          border-color: rgba(18, 184, 196, 0.65) !important;
          box-shadow: 0 20px 48px rgba(18, 184, 196, 0.25) !important;
        }

        .spotlight-video-card:hover .video-hover-cue {
          opacity: 1;
          transform: scale(1);
        }

        .video-hover-cue {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justifyContent: center;
          background: rgba(8, 16, 20, 0.35);
          opacity: 0;
          transition: all 0.25s ease;
          pointer-events: none;
        }

        .btn-action-primary:hover {
          background-color: var(--color-hover-blue) !important;
          transform: translateY(-1px);
        }

        .gallery-card-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(17, 30, 36, 0.12) !important;
          border-color: rgba(18, 184, 196, 0.5) !important;
        }

        .masonry-video-btn:hover {
          background-color: var(--color-primary-blue) !important;
          color: #FFFFFF !important;
        }

        @media (max-width: 640px) {
          .hide-on-mobile {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
