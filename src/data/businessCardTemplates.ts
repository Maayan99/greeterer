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
      <rect x="20" y="120" width="80" height="2" fill="#4b5563"/>
      <rect x="300" y="120" width="80" height="2" fill="#4b5563"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 80, y: 60, fontSize: 28, color: '#111827' },
      { id: 'title', type: 'text', content: '{title}', x: 80, y: 95, fontSize: 18, color: '#4b5563' },
      { id: 'phone', type: 'text', content: '{phone}', x: 50, y: 140, fontSize: 16, color: '#6b7280' },
      { id: 'email', type: 'text', content: '{email}', x: 50, y: 165, fontSize: 16, color: '#6b7280' },
      { id: 'website', type: 'text', content: '{website}', x: 200, y: 165, fontSize: 16, color: '#6b7280' }
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
      <rect x="60" y="20" width="2" height="110" fill="#ffffff"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 70, y: 50, fontSize: 32, color: '#ffffff' },
      { id: 'title', type: 'text', content: '{title}', x: 70, y: 90, fontSize: 20, color: '#bfdbfe' },
      { id: 'phone', type: 'text', content: '{phone}', x: 20, y: 170, fontSize: 16, color: '#1e40af' },
      { id: 'email', type: 'text', content: '{email}', x: 200, y: 170, fontSize: 16, color: '#1e40af' },
      { id: 'website', type: 'text', content: '{website}', x: 20, y: 190, fontSize: 16, color: '#1e40af' }
    ]
  },
  {
    id: 'elegant-gold',
    name: 'Elegant Gold',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <defs>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1f2937;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#111827;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#grad3)"/>
      <path d="M0,100 Q100,0 200,100 T400,100" fill="none" stroke="#d97706" stroke-width="2"/>
      <rect x="20" y="20" width="360" height="160" fill="none" stroke="#fbbf24" stroke-width="2" rx="10" ry="10"/>
      <circle cx="200" cy="100" r="50" fill="none" stroke="#fbbf24" stroke-width="1"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 40, y: 60, fontSize: 32, color: '#fbbf24' },
      { id: 'title', type: 'text', content: '{title}', x: 40, y: 100, fontSize: 20, color: '#d97706' },
      { id: 'phone', type: 'text', content: '{phone}', x: 40, y: 140, fontSize: 16, color: '#fcd34d' },
      { id: 'email', type: 'text', content: '{email}', x: 40, y: 165, fontSize: 16, color: '#fcd34d' },
      { id: 'website', type: 'text', content: '{website}', x: 200, y: 165, fontSize: 16, color: '#fcd34d' }
    ]
  },
  {
    id: 'tech-wave',
    name: 'Tech Wave',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <defs>
        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1e3a8a;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#grad4)"/>
      <path d="M0,100 Q100,50 200,100 T400,100" fill="none" stroke="#3b82f6" stroke-width="2"/>
      <path d="M0,120 Q100,70 200,120 T400,120" fill="none" stroke="#60a5fa" stroke-width="2"/>
      <circle cx="350" cy="50" r="30" fill="#2563eb" opacity="0.3"/>
      <circle cx="370" cy="70" r="20" fill="#3b82f6" opacity="0.3"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 30, y: 60, fontSize: 32, color: '#ffffff' },
      { id: 'title', type: 'text', content: '{title}', x: 30, y: 100, fontSize: 20, color: '#93c5fd' },
      { id: 'phone', type: 'text', content: '{phone}', x: 30, y: 140, fontSize: 16, color: '#60a5fa' },
      { id: 'email', type: 'text', content: '{email}', x: 30, y: 165, fontSize: 16, color: '#60a5fa' },
      { id: 'website', type: 'text', content: '{website}', x: 200, y: 165, fontSize: 16, color: '#60a5fa' }
    ]
  },
  {
    id: 'creative-splash',
    name: 'Creative Splash',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <defs>
        <radialGradient id="grad5" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#d97706;stop-opacity:1" />
        </radialGradient>
      </defs>
      <rect width="400" height="200" fill="#ffffff"/>
      <circle cx="200" cy="100" r="150" fill="url(#grad5)" opacity="0.3"/>
      <path d="M0,100 Q100,20 200,100 T400,100" fill="none" stroke="#059669" stroke-width="2"/>
      <path d="M0,120 Q100,40 200,120 T400,120" fill="none" stroke="#10b981" stroke-width="2"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 40, y: 60, fontSize: 32, color: '#d97706' },
      { id: 'title', type: 'text', content: '{title}', x: 40, y: 100, fontSize: 20, color: '#059669' },
      { id: 'phone', type: 'text', content: '{phone}', x: 40, y: 140, fontSize: 16, color: '#047857' },
      { id: 'email', type: 'text', content: '{email}', x: 40, y: 165, fontSize: 16, color: '#047857' },
      { id: 'website', type: 'text', content: '{website}', x: 200, y: 165, fontSize: 16, color: '#047857' }
    ]
  },
  {
    id: 'minimalist-chic',
    name: 'Minimalist Chic',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#f3f4f6"/>
      <line x1="20" y1="100" x2="380" y2="100" stroke="#9ca3af" stroke-width="1"/>
      <circle cx="200" cy="50" r="30" fill="#4b5563"/>
      <rect x="20" y="110" width="100" height="2" fill="#6b7280"/>
      <rect x="280" y="110" width="100" height="2" fill="#6b7280"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 20, y: 130, fontSize: 28, color: '#1f2937' },
      { id: 'title', type: 'text', content: '{title}', x: 20, y: 160, fontSize: 18, color: '#4b5563' },
      { id: 'phone', type: 'text', content: '{phone}', x: 280, y: 130, fontSize: 14, color: '#6b7280' },
      { id: 'email', type: 'text', content: '{email}', x: 280, y: 150, fontSize: 14, color: '#6b7280' },
      { id: 'website', type: 'text', content: '{website}', x: 280, y: 170, fontSize: 14, color: '#6b7280' }
    ]
  },
  {
    id: 'bold-contrast',
    name: 'Bold Contrast',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#000000"/>
      <rect x="20" y="20" width="360" height="160" fill="none" stroke="#ffffff" stroke-width="2" rx="10" ry="10"/>
      <circle cx="50" cy="50" r="20" fill="#ffffff"/>
      <path d="M0,100 Q100,50 200,100 T400,100" fill="none" stroke="#ffffff" stroke-width="1"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 80, y: 60, fontSize: 32, color: '#ffffff' },
      { id: 'title', type: 'text', content: '{title}', x: 80, y: 95, fontSize: 20, color: '#d1d5db' },
      { id: 'phone', type: 'text', content: '{phone}', x: 50, y: 140, fontSize: 16, color: '#9ca3af' },
      { id: 'email', type: 'text', content: '{email}', x: 50, y: 165, fontSize: 16, color: '#9ca3af' },
      { id: 'website', type: 'text', content: '{website}', x: 200, y: 165, fontSize: 16, color: '#9ca3af' }
    ]
  },
  {
    id: 'geometric-flair',
    name: 'Geometric Flair',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <defs>
        <linearGradient id="grad8" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f472b6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="#ffffff"/>
      <circle cx="350" cy="50" r="100" fill="url(#grad8)" opacity="0.3"/>
      <polygon points="0,0 100,0 0,100" fill="#f472b6" opacity="0.5"/>
      <polygon points="400,200 300,200 400,100" fill="#ec4899" opacity="0.5"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 40, y: 60, fontSize: 32, color: '#831843' },
      { id: 'title', type: 'text', content: '{title}', x: 40, y: 100, fontSize: 20, color: '#be185d' },
      { id: 'phone', type: 'text', content: '{phone}', x: 40, y: 140, fontSize: 16, color: '#9d174d' },
      { id: 'email', type: 'text', content: '{email}', x: 40, y: 165, fontSize: 16, color: '#9d174d' },
      { id: 'website', type: 'text', content: '{website}', x: 200, y: 165, fontSize: 16, color: '#9d174d' }
    ]
  }
];
