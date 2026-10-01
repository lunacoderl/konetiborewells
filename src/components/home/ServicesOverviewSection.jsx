import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Disc, Cpu, Wind, Compass, ShieldCheck } from 'lucide-react';
import { services } from '../../data/services';

export default function ServicesOverviewSection() {
  const featuredService = services.find((s) => s.featured) || services[0];
  const companionServices = services.filter((s) => s.slug !== featuredService.slug);

  const getServiceIcon = (slug) => {
    switch (slug) {
      case 'borewell-drilling': return Disc;
      case 'pump-motor-solutions': return Cpu;
      case 'borewell-cleaning-maintenance': return Wind;
      case 'groundwater-survey': return Compass;
      default: return ShieldCheck;
    }
  };

  return (
    <section
      id="services"
      className="site-section bg-light"
      style={{
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        {/* Section Heading */}
        <div style={{ maxWidth: '780px', marginBottom: '44px' }}>
          <div className="eyebrow-badge">
            <span>WHAT WE DO • CONFIRMED SERVICES</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.6vw, 2.85rem)',
              fontWeight: 800,
              color: 'var(--color-dark-text)',
              lineHeight: 1.15,
              marginBottom: '14px'
            }}
          >
            From Groundbreaking to Groundwater.
          </h2>

          <p style={{ fontSize: '1.08rem', color: 'var(--color-muted-text)', lineHeight: 1.65 }}>
            Practical drilling and water-related engineering solutions designed around your site requirements across Visakhapatnam.
          </p>
        </div>

        {/* Asymmetric Layout: Large Featured Horizontal Card (01) */}
        <div style={{ marginBottom: '32px' }}>
          <div
            className="card-surface"
            style={{
              padding: 'clamp(20px, 3.5vw, 36px)',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: '#FFFFFF',
              border: '1.5px solid var(--color-border)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              alignItems: 'center'
            }}
          >
            {/* Left Content of Featured Card */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: 'var(--color-primary-blue)',
                    backgroundColor: 'var(--color-aqua-light)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-xs)'
                  }}
                >
                  01
                </span>
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted-text)'
                  }}
                >
                  {featuredService.category}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                  fontWeight: 800,
                  color: 'var(--color-dark-text)',
                  lineHeight: 1.2,
                  marginBottom: '14px'
                }}
              >
                {featuredService.title}
              </h3>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'var(--bg-cream)',
                  border: '1px solid var(--color-border-earth)',
                  padding: '5px 12px',
                  borderRadius: '6px',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  color: 'var(--color-earth-dark)',
                  marginBottom: '18px'
                }}
              >
                <span>4½" &amp; 6½" Caliber Rigs</span>
                <span>•</span>
                <span>Residential, Farm &amp; Commercial</span>
              </div>

              <p style={{ color: 'var(--color-muted-text)', fontSize: '1rem', lineHeight: 1.65, marginBottom: '24px' }}>
                {featuredService.tagline} High-pressure pneumatic DTH hammer drilling engineered to penetrate coastal overburden and hard crystalline granite across Visakhapatnam.
              </p>

              <Link
                to={`/services/${featuredService.slug}`}
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>Explore Borewell Drilling</span>
                <ArrowRight size={17} />
              </Link>
            </div>

            {/* Right Large Uncropped Image of Featured Card */}
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                backgroundColor: '#E8F5F8',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px'
              }}
            >
              <img
                src={featuredService.featuredImage || featuredService.thumbnail}
                alt={featuredService.title}
                className="full-width-image"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 'calc(var(--radius-md) - 6px)',
                  objectFit: 'contain'
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Companion Services Grid (02, 03, 04) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}
          className="services-grid"
        >
          {companionServices.map((service, index) => {
            const Icon = getServiceIcon(service.slug);
            const serviceIndex = String(index + 2).padStart(2, '0');

            return (
              <div
                key={service.slug}
                className="card-surface"
                style={{
                  padding: '24px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border)'
                }}
              >
                <div>
                  {/* Card Header: Number & Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1rem',
                        fontWeight: 800,
                        color: 'var(--color-primary-blue)'
                      }}
                    >
                      {serviceIndex}
                    </span>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        backgroundColor: 'var(--color-aqua-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-primary-blue-dark)'
                      }}
                    >
                      <Icon size={19} />
                    </div>
                  </div>

                  {/* Uncropped Thumbnail Image Container */}
                  <div
                    style={{
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      backgroundColor: '#F5FAFA',
                      border: '1px solid var(--color-border-light)',
                      marginBottom: '18px',
                      padding: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <img
                      src={service.thumbnail}
                      alt={service.title}
                      style={{
                        width: '100%',
                        maxHeight: '220px',
                        height: 'auto',
                        objectFit: 'contain', // Never crop!
                        display: 'block'
                      }}
                      loading="lazy"
                    />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--color-dark-text)',
                      lineHeight: 1.3,
                      marginBottom: '10px'
                    }}
                  >
                    {service.shortTitle}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--color-muted-text)', lineHeight: 1.55, marginBottom: '20px' }}>
                    {service.tagline}
                  </p>
                </div>

                <Link
                  to={`/services/${service.slug}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.94rem',
                    fontWeight: 700,
                    color: 'var(--color-primary-blue)',
                    textDecoration: 'none',
                    paddingTop: '12px',
                    borderTop: '1px solid var(--color-border-light)'
                  }}
                  className="explore-service-link"
                >
                  <span>Explore Service</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .explore-service-link:hover {
          color: var(--color-primary-blue-dark) !important;
          transform: translateX(3px);
        }
      `}</style>
    </section>
  );
}
