import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { generalFaqs } from '../../data/faqs';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="site-section bg-white"
      style={{
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'flex-start'
          }}
          className="faq-grid"
        >
          {/* Left Column: FAQ Overview & Direct Contact Support */}
          <div>
            <div className="eyebrow-badge">
              <HelpCircle size={14} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 800,
                color: 'var(--color-dark-text)',
                lineHeight: 1.18,
                marginBottom: '16px'
              }}
            >
              Clear Answers About Borewell Work.
            </h2>

            <p style={{ color: 'var(--color-muted-text)', fontSize: '1.04rem', lineHeight: 1.65, marginBottom: '28px' }}>
              Practical questions regarding drilling calibers, site preparation, motor selection, and costs across Visakhapatnam.
            </p>

            {/* Direct Support Callout */}
            <div
              style={{
                backgroundColor: 'var(--bg-page)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '24px'
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--color-dark-text)',
                  marginBottom: '8px'
                }}
              >
                Have a Specific Site Question?
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-muted-text)', lineHeight: 1.55, marginBottom: '18px' }}>
                Our senior drilling supervisor is available 24/7 to provide instant telephone guidance for your plot.
              </p>
              <a
                href="tel:09246622995"
                className="btn btn-primary btn-sm"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <Phone size={15} />
                <span>Call 092466 22995</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {generalFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: isOpen ? '1.5px solid var(--color-primary-blue)' : '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                    boxShadow: isOpen ? '0 4px 16px rgba(8, 126, 164, 0.08)' : 'none'
                  }}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    style={{
                      width: '100%',
                      padding: '18px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                    aria-expanded={isOpen}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.02rem',
                        fontWeight: 700,
                        color: isOpen ? 'var(--color-primary-blue-dark)' : 'var(--color-dark-text)',
                        lineHeight: 1.35
                      }}
                    >
                      {faq.question}
                    </span>

                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: isOpen ? 'var(--color-aqua-light)' : '#F0F6F7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease'
                      }}
                    >
                      <ChevronDown size={17} color={isOpen ? 'var(--color-primary-blue)' : 'var(--color-muted-text)'} />
                    </div>
                  </button>

                  {/* Accordion Body with Smooth CSS Transition */}
                  {isOpen && (
                    <div
                      style={{
                        padding: '0 20px 20px 20px',
                        fontSize: '0.94rem',
                        color: 'var(--color-muted-text)',
                        lineHeight: 1.65,
                        borderTop: '1px solid var(--color-border-light)'
                      }}
                    >
                      <p style={{ margin: '14px 0 0 0' }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
