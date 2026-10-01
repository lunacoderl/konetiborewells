import React from 'react';
import { Star, Quote, MapPin, CheckCircle } from 'lucide-react';
import { featuredTestimonial } from '../../data/reviews';

export default function TestimonialsSection() {
  return (
    <section
      className="site-section bg-cream"
      style={{
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        {/* Section Heading */}
        <div style={{ maxWidth: '720px', marginBottom: '40px' }}>
          <div className="eyebrow-badge">
            <span>CLIENT REPUTATION • REVIEWS</span>
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
            Trusted by Vizag Property Owners.
          </h2>

          <p style={{ color: 'var(--color-muted-text)', fontSize: '1.02rem', margin: 0 }}>
            Hear from local residents, builders, and farmers who relied on Koneti Borewells & Motors for their groundwater projects.
          </p>
        </div>

        {/* Large Featured Testimonial Card with Side Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            alignItems: 'stretch'
          }}
        >
          {/* Main Large Featured Testimonial */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(28px, 4vw, 44px)',
              border: '1.5px solid var(--color-border)',
              boxShadow: 'var(--shadow-card)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gridColumn: 'span 1'
            }}
          >
            {/* Top Row: Big Quote Mark & 5 Stars */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--color-primary-blue-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary-blue)'
                  }}
                >
                  <Quote size={24} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#F4B942" color="#F4B942" />
                  ))}
                </div>
              </div>

              {/* Big Featured Quote */}
              <blockquote
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.2rem, 2vw, 1.45rem)',
                  fontWeight: 600,
                  color: 'var(--color-dark-text)',
                  lineHeight: 1.5,
                  margin: '0 0 28px 0'
                }}
              >
                “{featuredTestimonial.quote}”
              </blockquote>
            </div>

            {/* Author Attribution */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                paddingTop: '20px',
                borderTop: '1px solid var(--color-border-light)'
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-primary-blue)',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                BS
              </div>

              <div>
                <strong
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    color: 'var(--color-dark-text)',
                    display: 'block'
                  }}
                >
                  {featuredTestimonial.author}
                </strong>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--color-muted-text)' }}>
                  <MapPin size={13} color="var(--color-primary-blue)" />
                  <span>{featuredTestimonial.location}</span>
                  <span>•</span>
                  <span style={{ color: '#058A72', fontWeight: 600 }}>Verified Customer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Stacked Testimonials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flex: 1
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '12px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#F4B942" color="#F4B942" />
                  ))}
                </div>
                <p style={{ fontSize: '0.94rem', color: 'var(--color-dark-text)', lineHeight: 1.6, margin: '0 0 16px 0' }}>
                  “Affordable price and best service. Done borewell work without any issues in Madhurawada. Operators were skilled with the machine.”
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.84rem' }}>
                <strong style={{ color: 'var(--color-dark-text)' }}>Kotla Madhu</strong>
                <span style={{ color: 'var(--color-muted-text)' }}>Visakhapatnam</span>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flex: 1
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '12px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#F4B942" color="#F4B942" />
                  ))}
                </div>
                <p style={{ fontSize: '0.94rem', color: 'var(--color-dark-text)', lineHeight: 1.6, margin: '0 0 16px 0' }}>
                  “Superb service delivery and experienced drilling operators. Finished casing pipe lowering and motor fitting on schedule.”
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.84rem' }}>
                <strong style={{ color: 'var(--color-dark-text)' }}>Abhiram Korupalli</strong>
                <span style={{ color: 'var(--color-muted-text)' }}>Visakhapatnam</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
