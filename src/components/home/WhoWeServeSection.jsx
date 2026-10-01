import React from 'react';
import { Home, Wheat, Building, Hammer, ArrowRight } from 'lucide-react';

export default function WhoWeServeSection() {
  const sectors = [
    {
      id: 'home',
      title: 'HOME & RESIDENTIAL',
      subtitle: 'Domestic Water Independence',
      description: 'Compact 4½" borewells and silent submersible motors for villas, individual homes, and gated communities.',
      badge: 'Domestic',
      image: '/borewell-sideview.png',
      icon: Home
    },
    {
      id: 'farm',
      title: 'FARM & AGRICULTURAL',
      subtitle: 'Irrigation & Farming Yield',
      description: 'High-volume 6½" borewells for farmlands, coconut groves, and drip irrigation setups in Anandapuram, Bheemili, and rural Vizag.',
      badge: 'Agricultural',
      image: '/gallery/5a746f4f-166d-4cab-9a4d-0d20b06ea7f1.jpg',
      icon: Wheat
    },
    {
      id: 'business',
      title: 'BUSINESS & COMMERCIAL',
      subtitle: 'Continuous Enterprise Supply',
      description: 'Heavy discharge borewells and dual-pump assemblies for hotels, schools, hospitals, and commercial layouts.',
      badge: 'Commercial',
      image: '/gallery/358effc0-0075-4b02-bc59-d2d0306749e2.jpg',
      icon: Building
    },
    {
      id: 'project',
      title: 'CONSTRUCTION & SITES',
      subtitle: 'Project Site Water Support',
      description: 'Immediate water supply for civil construction works, mixing plants, and industrial properties in Gajuwaka and industrial zones.',
      badge: 'Industrial',
      image: '/gallery/d1da12ff-e9f1-40b1-bbe8-2a01b75e3b1d.jpg',
      icon: Hammer
    }
  ];

  return (
    <section
      className="site-section bg-white"
      style={{
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        {/* Section Heading */}
        <div style={{ maxWidth: '760px', marginBottom: '44px' }}>
          <div className="eyebrow-badge earth">
            <span>SECTOR FOCUS • APPLICATION PROFILES</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
              fontWeight: 800,
              color: 'var(--color-dark-text)',
              lineHeight: 1.18,
              marginBottom: '12px'
            }}
          >
            Engineered for Every Property Scale.
          </h2>

          <p style={{ color: 'var(--color-muted-text)', fontSize: '1.04rem', lineHeight: 1.65 }}>
            Whether you are establishing a family home, cultivating farmlands, or developing a multi-story commercial complex, we have dedicated rig calibers for your scale.
          </p>
        </div>

        {/* 4 Large Visual Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
          className="who-we-serve-grid"
        >
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.id}
                className="card-surface"
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Visual Image Header - Full Width */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    backgroundColor: '#EBF4F6',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={sector.image}
                    alt={sector.title}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'contain', // Keep uncropped visual clarity!
                      display: 'block',
                      backgroundColor: '#F5FAFA',
                      padding: '8px'
                    }}
                    loading="lazy"
                  />

                  {/* Badge */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(23, 36, 43, 0.85)',
                      color: '#FFFFFF',
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '4px',
                      letterSpacing: '0.04em',
                      backdropFilter: 'blur(4px)'
                    }}
                  >
                    {sector.badge}
                  </span>
                </div>

                {/* Card Content */}
                <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <Icon size={18} color="var(--color-primary-blue)" />
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: 'var(--color-dark-text)'
                      }}
                    >
                      {sector.title}
                    </h3>
                  </div>

                  <span
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--color-earth-accent)',
                      marginBottom: '10px',
                      display: 'block'
                    }}
                  >
                    {sector.subtitle}
                  </span>

                  <p style={{ fontSize: '0.9rem', color: 'var(--color-muted-text)', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                    {sector.description}
                  </p>

                  <a
                    href="#contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: 'var(--color-primary-blue)',
                      textDecoration: 'none',
                      paddingTop: '12px',
                      borderTop: '1px solid var(--color-border-light)'
                    }}
                  >
                    <span>Enquire for {sector.badge}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
