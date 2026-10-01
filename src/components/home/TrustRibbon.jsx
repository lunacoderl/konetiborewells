import React from 'react';
import { Droplet, Compass, Zap, Shield, CheckCircle } from 'lucide-react';

export default function TrustRibbon() {
  const items = [
    { text: 'BOREWELL DRILLING', icon: Compass },
    { text: 'WATER PUMP MOTORS', icon: Zap },
    { text: '4½" & 6½" CALIBER RIGS', icon: Shield },
    { text: 'VIZAG CITYWIDE SERVICE', icon: CheckCircle },
    { text: '24/7 AVAILABILITY', icon: Droplet },
    { text: 'SEETHAMMADARA BASE', icon: Compass },
    { text: 'HYDROGEOLOGICAL SITING', icon: Shield },
    { text: 'BOREWELL FLUSHING', icon: Droplet }
  ];

  // Duplicate items for continuous smooth ticker
  const tickerItems = [...items, ...items, ...items];

  return (
    <div
      className="trust-strip-container"
      style={{
        height: '90px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden'
      }}
    >
      <div className="trust-strip-track">
        {tickerItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="trust-strip-item">
              <Icon size={16} color="var(--color-aqua)" strokeWidth={2.4} />
              <span>{item.text}</span>
              <span className="trust-strip-separator">/</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
