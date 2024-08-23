import { CardTemplate } from '../types/cardTypes';

export const businessCardTemplates: CardTemplate[] = [
  {
    id: 'modern-minimal',
    name: 'Modern Minimal',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#f3f4f6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#grad1)"/>
      <rect x="20" y="20" width="360" height="160" fill="#ffffff" rx="10" ry="10"/>
      <circle cx="50" cy="50" r="20" fill="#4b5563"/>
      <line x1="20" y1="100" x2="380" y2="100" stroke="#9ca3af" stroke-width="0.5"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 80, y: 55, fontSize: 24, color: '#111827' },
      { id: 'title', type: 'text', content: '{title}', x: 80, y: 85, fontSize: 16, color: '#4b5563' },
      { id: 'phone', type: 'text', content: '{phone}', x: 50, y: 130, fontSize: 14, color: '#6b7280' },
      { id: 'email', type: 'text', content: '{email}', x: 50, y: 150, fontSize: 14, color: '#6b7280' },
      { id: 'website', type: 'text', content: '{website}', x: 50, y: 170, fontSize: 14, color: '#6b7280' }
    ]
  },
  {
    id: 'corporate-blue',
    name: 'Corporate Blue',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1e40af;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#grad2)"/>
      <rect x="0" y="150" width="400" height="50" fill="#ffffff"/>
      <path d="M0,0 L400,0 L350,50 L0,100 Z" fill="#60a5fa" opacity="0.3"/>
      <circle cx="30" cy="30" r="20" fill="#ffffff"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 20, y: 80, fontSize: 24, color: '#ffffff' },
      { id: 'title', type: 'text', content: '{title}', x: 20, y: 110, fontSize: 16, color: '#bfdbfe' },
      { id: 'phone', type: 'text', content: '{phone}', x: 20, y: 170, fontSize: 14, color: '#1e40af' },
      { id: 'email', type: 'text', content: '{email}', x: 200, y: 170, fontSize: 14, color: '#1e40af' },
      { id: 'website', type: 'text', content: '{website}', x: 20, y: 190, fontSize: 14, color: '#1e40af' }
    ]
  },
  {
    id: 'gradient-burst',
    name: 'Gradient Burst',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <defs>
        <radialGradient id="grad3" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#d97706;stop-opacity:1" />
        </radialGradient>
      </defs>
      <rect width="400" height="200" fill="url(#grad3)"/>
      <rect x="20" y="20" width="360" height="160" fill="rgba(255,255,255,0.9)" rx="10" ry="10"/>
      <circle cx="200" cy="100" r="60" fill="#fbbf24" opacity="0.3"/>
      <circle cx="200" cy="100" r="40" fill="#f59e0b" opacity="0.3"/>
      <circle cx="200" cy="100" r="20" fill="#d97706" opacity="0.3"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 40, y: 60, fontSize: 28, color: '#b45309' },
      { id: 'title', type: 'text', content: '{title}', x: 40, y: 95, fontSize: 18, color: '#d97706' },
      { id: 'phone', type: 'text', content: '{phone}', x: 40, y: 140, fontSize: 14, color: '#92400e' },
      { id: 'email', type: 'text', content: '{email}', x: 40, y: 160, fontSize: 14, color: '#92400e' },
      { id: 'website', type: 'text', content: '{website}', x: 200, y: 160, fontSize: 14, color: '#92400e' }
    ]
  },
  {
    id: 'geometric-elegance',
    name: 'Geometric Elegance',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#1f2937"/>
      <polygon points="0,0 400,0 200,200" fill="#4b5563" opacity="0.6"/>
      <polygon points="0,200 400,200 200,0" fill="#9ca3af" opacity="0.3"/>
      <rect x="20" y="20" width="360" height="160" fill="rgba(31,41,55,0.8)" rx="10" ry="10"/>
      <line x1="20" y1="100" x2="380" y2="100" stroke="#d1d5db" stroke-width="0.5"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 40, y: 60, fontSize: 28, color: '#f9fafb' },
      { id: 'title', type: 'text', content: '{title}', x: 40, y: 95, fontSize: 18, color: '#d1d5db' },
      { id: 'phone', type: 'text', content: '{phone}', x: 40, y: 140, fontSize: 14, color: '#9ca3af' },
      { id: 'email', type: 'text', content: '{email}', x: 40, y: 160, fontSize: 14, color: '#9ca3af' },
      { id: 'website', type: 'text', content: '{website}', x: 200, y: 160, fontSize: 14, color: '#9ca3af' }
    ]
  },
  {
    id: 'nature-inspired',
    name: 'Nature Inspired',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#d1fae5"/>
      <path d="M0 100 Q100 50 200 100 T400 100" fill="#34d399" opacity="0.3"/>
      <path d="M0 150 Q100 100 200 150 T400 150" fill="#34d399" opacity="0.3"/>
      <rect x="20" y="20" width="360" height="160" fill="rgba(209,250,229,0.8)" rx="10" ry="10"/>
      <circle cx="350" cy="50" r="30" fill="#10b981" opacity="0.2"/>
      <circle cx="370" cy="70" r="20" fill="#059669" opacity="0.2"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 40, y: 60, fontSize: 28, color: '#047857' },
      { id: 'title', type: 'text', content: '{title}', x: 40, y: 95, fontSize: 18, color: '#059669' },
      { id: 'phone', type: 'text', content: '{phone}', x: 40, y: 140, fontSize: 14, color: '#065f46' },
      { id: 'email', type: 'text', content: '{email}', x: 40, y: 160, fontSize: 14, color: '#065f46' },
      { id: 'website', type: 'text', content: '{website}', x: 200, y: 160, fontSize: 14, color: '#065f46' }
    ]
  },
  {
    id: 'tech-circuit',
    name: 'Tech Circuit',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#0f172a"/>
      <circle cx="200" cy="100" r="90" fill="none" stroke="#1e40af" stroke-width="1"/>
      <circle cx="200" cy="100" r="60" fill="none" stroke="#1d4ed8" stroke-width="1"/>
      <circle cx="200" cy="100" r="30" fill="none" stroke="#3b82f6" stroke-width="1"/>
      <path d="M10 10 H50 V50 H90 V90 H130 V130 H170 V170 H210 V210" stroke="#60a5fa" stroke-width="2" fill="none"/>
      <path d="M390 190 H350 V150 H310 V110 H270 V70 H230 V30" stroke="#60a5fa" stroke-width="2" fill="none"/>
      <circle cx="10" cy="10" r="5" fill="#60a5fa"/>
      <circle cx="390" cy="190" r="5" fill="#60a5fa"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 20, y: 60, fontSize: 28, color: '#f9fafb' },
      { id: 'title', type: 'text', content: '{title}', x: 20, y: 95, fontSize: 18, color: '#60a5fa' },
      { id: 'phone', type: 'text', content: '{phone}', x: 20, y: 140, fontSize: 14, color: '#93c5fd' },
      { id: 'email', type: 'text', content: '{email}', x: 20, y: 160, fontSize: 14, color: '#93c5fd' },
      { id: 'website', type: 'text', content: '{website}', x: 200, y: 160, fontSize: 14, color: '#93c5fd' }
    ]
  },
  {
    id: 'artistic-splash',
    name: 'Artistic Splash',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#ffffff"/>
      <circle cx="350" cy="50" r="100" fill="#f472b6" opacity="0.5"/>
      <circle cx="50" cy="150" r="100" fill="#818cf8" opacity="0.5"/>
      <circle cx="200" cy="100" r="100" fill="#fbbf24" opacity="0.5"/>
      <rect x="20" y="20" width="360" height="160" fill="rgba(255,255,255,0.8)" rx="10" ry="10"/>
      <path d="M20 100 Q100 50 200 100 T380 100" fill="none" stroke="#4b5563" stroke-width="1"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 40, y: 60, fontSize: 28, color: '#4b5563' },
      { id: 'title', type: 'text', content: '{title}', x: 40, y: 95, fontSize: 18, color: '#6b7280' },
      { id: 'phone', type: 'text', content: '{phone}', x: 40, y: 140, fontSize: 14, color: '#9ca3af' },
      { id: 'email', type: 'text', content: '{email}', x: 40, y: 160, fontSize: 14, color: '#9ca3af' },
      { id: 'website', type: 'text', content: '{website}', x: 200, y: 160, fontSize: 14, color: '#9ca3af' }
    ]
  },
  {
    id: 'minimalist-typography',
    name: 'Minimalist Typography',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#f3f4f6"/>
      <line x1="20" y1="100" x2="380" y2="100" stroke="#9ca3af" stroke-width="1"/>
      <text x="20" y="90" font-family="Arial" font-size="70" font-weight="bold" fill="#1f2937">MINIMAL</text>
      <rect x="20" y="120" width="100" height="2" fill="#4b5563"/>
      <rect x="280" y="120" width="100" height="2" fill="#4b5563"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 20, y: 140, fontSize: 24, color: '#1f2937' },
      { id: 'title', type: 'text', content: '{title}', x: 20, y: 165, fontSize: 16, color: '#4b5563' },
      { id: 'phone', type: 'text', content: '{phone}', x: 280, y: 140, fontSize: 12, color: '#6b7280' },
      { id: 'email', type: 'text', content: '{email}', x: 280, y: 155, fontSize: 12, color: '#6b7280' },
      { id: 'website', type: 'text', content: '{website}', x: 280, y: 170, fontSize: 12, color: '#6b7280' }
    ]
  }
];
