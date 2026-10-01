import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function RisingWaterScrollTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
        setScrollProgress(currentProgress);
        setVisible(window.scrollY > 300);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  // Calculate water height in pixels inside a 48px tall cylinder
  const waterHeight = Math.round(scrollProgress * 42); // 0 to 42px
  const percentage = Math.round(scrollProgress * 100);

  return (
    <button
      onClick={scrollToTop}
      title={`Scroll to Top (${percentage}% scrolled)`}
      aria-label="Scroll to top of page"
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '14px',
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--color-border)',
        boxShadow: '0 8px 24px rgba(8, 126, 164, 0.18)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: 0
      }}
      className="rising-water-btn"
    >
      {/* Rising Water Level Fill */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: `${waterHeight}px`,
          backgroundColor: '#12B8C4',
          opacity: 0.85,
          transition: 'height 0.15s ease-out',
          zIndex: 1
        }}
      >
        {/* Subtle ripple wave on top of water */}
        <div
          style={{
            position: 'absolute',
            top: '-3px',
            left: 0,
            right: 0,
            height: '4px',
            backgroundColor: '#087EA4',
            opacity: 0.9
          }}
        />
      </div>

      {/* Foreground Arrow Icon & Depth Label */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: scrollProgress > 0.5 ? '#FFFFFF' : 'var(--color-primary-blue-dark)',
          transition: 'color 0.2s ease'
        }}
      >
        <ArrowUp size={18} strokeWidth={2.6} />
        <span
          style={{
            fontSize: '0.62rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            letterSpacing: '0.02em',
            marginTop: '-1px'
          }}
        >
          {percentage}%
        </span>
      </div>

      <style>{`
        .rising-water-btn:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 12px 28px rgba(8, 126, 164, 0.28) !important;
        }
      `}</style>
    </button>
  );
}
