import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  // Generates Schema.org BreadcrumbList JSON-LD
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.label,
      'item': item.path ? `https://www.konetiborewellsvizag.com${item.path}` : undefined
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <nav aria-label="Breadcrumb" style={{ marginBottom: '20px' }}>
        <ol
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '8px',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            fontSize: '0.86rem',
            fontFamily: 'var(--font-heading)'
          }}
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li
                key={item.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: isLast ? 'var(--color-primary-blue-dark)' : 'var(--color-muted-text)',
                  fontWeight: isLast ? 700 : 500
                }}
              >
                {index === 0 ? (
                  <Link
                    to={item.path}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: 'inherit',
                      textDecoration: 'none'
                    }}
                  >
                    <Home size={14} style={{ color: 'var(--color-primary-blue)' }} />
                    <span>{item.label}</span>
                  </Link>
                ) : item.path && !isLast ? (
                  <Link to={item.path} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
                )}

                {!isLast && (
                  <ChevronRight size={13} style={{ color: 'var(--color-border-dark)' }} />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
