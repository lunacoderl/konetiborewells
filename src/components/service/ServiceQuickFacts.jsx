import React from 'react';
import { Disc, Layers, Building, MapPin, Clock, ShieldCheck, Cpu, Zap, Sliders, Wrench, Wind, AlertCircle, Maximize2, Compass, Map, Navigation, CheckCircle } from 'lucide-react';

export default function ServiceQuickFacts({ facts }) {
  if (!facts || facts.length === 0) return null;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Disc': return Disc;
      case 'Layers': return Layers;
      case 'Building': return Building;
      case 'MapPin': return MapPin;
      case 'Clock': return Clock;
      case 'ShieldCheck': return ShieldCheck;
      case 'Cpu': return Cpu;
      case 'Zap': return Zap;
      case 'Sliders': return Sliders;
      case 'Wrench': return Wrench;
      case 'Wind': return Wind;
      case 'AlertCircle': return AlertCircle;
      case 'Maximize2': return Maximize2;
      case 'Compass': return Compass;
      case 'Map': return Map;
      case 'Navigation': return Navigation;
      default: return CheckCircle;
    }
  };

  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--color-border)',
        padding: '30px 0'
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '20px',
            alignItems: 'center'
          }}
        >
          {facts.map((fact, index) => {
            const Icon = getIcon(fact.icon);
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 14px',
                  backgroundColor: 'var(--bg-page)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-primary-blue-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary-blue)',
                    flexShrink: 0
                  }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--color-muted-text)',
                      display: 'block'
                    }}
                  >
                    {fact.label}
                  </span>
                  <strong
                    style={{
                      fontSize: '0.94rem',
                      color: 'var(--color-dark-text)',
                      lineHeight: 1.25,
                      display: 'block'
                    }}
                  >
                    {fact.value}
                  </strong>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
