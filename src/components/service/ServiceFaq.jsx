import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function ServiceFaq({ faqs, serviceTitle }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="site-section bg-white"
      style={{
        borderBottom: '1px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div className="site-container">
        <div style={{ maxWidth: '780px', marginBottom: '36px' }}>
          <div className="eyebrow-badge">
            <HelpCircle size={14} />
            <span>SERVICE-SPECIFIC FAQS</span>
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
            Questions Regarding {serviceTitle}.
          </h2>

          <p style={{ color: 'var(--color-muted-text)', fontSize: '1.02rem', margin: 0 }}>
            Answers tailored to this specific service category for property owners in Visakhapatnam.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ maxWidth: '880px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
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
    </section>
  );
}
