import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Volume2, VolumeX, Maximize2, Video } from 'lucide-react';

export default function Lightbox({ item, onClose, onPrev, onNext }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const isVideo =
    item?.type === 'video' ||
    (typeof item?.src === 'string' && item.src.endsWith('.mp4')) ||
    (typeof item?.url === 'string' && item.url.endsWith('.mp4'));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  // When changing item, attempt to play video
  useEffect(() => {
    if (isVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay with audio may be blocked by browser policy; user can click unmute or controls
        });
      }
    }
  }, [item, isVideo]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  if (!item) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(8, 16, 20, 0.96)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
    >
      {/* Top Bar with Title, Video Actions, and Close Button */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#FFFFFF',
          zIndex: 20,
          background: 'linear-gradient(to bottom, rgba(8, 16, 20, 0.9) 0%, rgba(8, 16, 20, 0) 100%)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ maxWidth: '70%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span
              style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: isVideo ? '#FFD166' : '#12B8C4',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              {isVideo ? <Video size={13} /> : null}
              {item.categoryLabel || (isVideo ? 'Live Site Video Reel' : 'Field Operation')}
            </span>
            {isVideo && (
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  backgroundColor: 'rgba(239, 71, 111, 0.25)',
                  color: '#FF6B6B',
                  border: '1px solid rgba(239, 71, 111, 0.5)',
                  padding: '2px 7px',
                  borderRadius: '12px',
                  letterSpacing: '0.04em'
                }}
              >
                FULL CONTROLS ACTIVE
              </span>
            )}
          </div>
          <h4
            style={{
              color: '#FFFFFF',
              margin: 0,
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {item.title}
          </h4>
        </div>

        {/* Action Controls & Close */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {isVideo && (
            <>
              <button
                type="button"
                onClick={toggleMute}
                title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                style={{
                  height: '40px',
                  padding: '0 14px',
                  borderRadius: '20px',
                  backgroundColor: isMuted ? 'rgba(239, 71, 111, 0.2)' : 'rgba(18, 184, 196, 0.25)',
                  border: isMuted ? '1px solid rgba(239, 71, 111, 0.5)' : '1px solid rgba(18, 184, 196, 0.5)',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease'
                }}
              >
                {isMuted ? <VolumeX size={17} color="#FF6B6B" /> : <Volume2 size={17} color="#12B8C4" />}
                <span className="hide-on-mobile">{isMuted ? 'Unmute' : 'Audio On'}</span>
              </button>

              <button
                type="button"
                onClick={toggleFullscreen}
                title="Fullscreen Video"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.2s ease'
                }}
                aria-label="Fullscreen Video"
              >
                <Maximize2 size={18} />
              </button>
            </>
          )}

          <button
            type="button"
            onClick={onClose}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#FFFFFF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s ease'
            }}
            aria-label="Close Lightbox"
          >
            <X size={22} />
          </button>
        </div>
      </div>

      {/* Main Media Container (Never cropped) */}
      <div
        style={{
          position: 'relative',
          maxWidth: '94vw',
          maxHeight: '78vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {isVideo ? (
          <div
            style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#000000',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(18, 184, 196, 0.3)'
            }}
          >
            <video
              ref={videoRef}
              src={item.src || item.url}
              controls={true}
              autoPlay={true}
              playsInline={true}
              preload="auto"
              style={{
                maxWidth: '92vw',
                maxHeight: '76vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                backgroundColor: '#000000'
              }}
              onVolumeChange={(e) => {
                setIsMuted(e.target.muted);
              }}
            />
          </div>
        ) : (
          <img
            src={item.src || item.url}
            alt={item.alt || item.title}
            style={{
              maxWidth: '92vw',
              maxHeight: '76vh',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain', // CRITICAL: NEVER CROP
              borderRadius: '8px',
              boxShadow: '0 16px 48px rgba(0, 0, 0, 0.5)'
            }}
          />
        )}

        {/* Previous Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          style={{
            position: 'absolute',
            left: '-24px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'rgba(17, 30, 36, 0.88)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: '#FFFFFF',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
            zIndex: 10
          }}
          aria-label="Previous Media"
        >
          <ChevronLeft size={26} />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          style={{
            position: 'absolute',
            right: '-24px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'rgba(17, 30, 36, 0.88)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: '#FFFFFF',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
            zIndex: 10
          }}
          aria-label="Next Media"
        >
          <ChevronRight size={26} />
        </button>
      </div>

      {/* Caption & Location Details Below */}
      {(item.description || item.location || item.caption) && (
        <div
          style={{
            marginTop: '16px',
            textAlign: 'center',
            color: '#B2C6CD',
            maxWidth: '680px',
            fontSize: '0.92rem'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <p style={{ color: '#E1E9EC', margin: '0 0 4px 0', lineHeight: 1.4 }}>
            {item.description || item.caption}
          </p>
          {item.location && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '0.84rem',
                color: '#12B8C4',
                fontWeight: 600
              }}
            >
              <MapPin size={14} />
              {item.location}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
