import React from 'react';
import { Wrench, Mountain, ShieldCheck, PhoneCall, Gauge, Anchor, Wind, Droplet, Clock, Target, Truck, Layers, FileText } from 'lucide-react';

export default function ServiceHighlights({ highlights }) {
  if (!highlights || highlights.length === 0) return null;

  const getHighlightIcon = (iconName) => {
    switch (iconName) {
      case 'Wrench': return Wrench;
      case 'Mountain': return Mountain;
      case 'ShieldCheck': return ShieldCheck;
      case 'PhoneCall': return PhoneCall;
      case 'Gauge': return Gauge;
      case 'Anchor': return Anchor;
      case 'Wind': return Wind;
      case 'Droplet': return Droplet;
      case 'Clock': return Clock;
      case 'Target': return Target;
      case 'Truck': return Truck;
      case 'Layers': return Layers;
      case 'FileText': return FileText;
      default: return ShieldCheck;
    }
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
        <div style={{ maxWidth: '720px', marginBottom: '40px' }}>
          <div className="eyebrow-badge">
            <span>ENGINEERING ADVANTAGES</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)',
              fontWeight: 800,
              color: 'var(--color-dark-text)',
              lineHeight: 1.2,
              marginBottom: '12px'
            }}
          >
            Core Capabilities &amp; Standards.
          </h2>

          <p style={{ color: 'var(--color-muted-text)', fontSize: '1.02rem', margin: 0 }}>
            Precision engineering protocols followed by our crew to ensure long-term well integrity and optimal water yield.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}
        >
          {highlights.map((item) => {
            const Icon = getHighlightIcon(item.icon);
            return (
              <div
                key={item.number}
                className="card-surface"
                style={{
                  padding: '28px 24px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: 'var(--color-primary-blue)',
                        backgroundColor: 'var(--color-aqua-light)',
                        padding: '2px 10px',
                        borderRadius: 'var(--radius-xs)'
                      }}
                    >
                      {item.number}
                    </span>

                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: 'var(--bg-cream)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-earth-dark)'
                      }}
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.18rem',
                      fontWeight: 700,
                      color: 'var(--color-dark-text)',
                      marginBottom: '10px',
                      lineHeight: 1.3
                    }}
                  >
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--color-muted-text)', lineHeight: 1.6, margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
