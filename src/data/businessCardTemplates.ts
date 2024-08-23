import { CardTemplate } from '../types/cardTypes';

export const businessCardTemplates: CardTemplate[] = [
  {
    id: 'modern-minimal',
    name: 'Modern Minimal',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#ffffff"/>
      <rect x="20" y="20" width="360" height="160" fill="#f0f0f0" rx="10" ry="10"/>
      <circle cx="50" cy="50" r="20" fill="#333333"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 80, y: 40, fontSize: 24, color: '#333333' },
      { id: 'title', type: 'text', content: '{title}', x: 80, y: 70, fontSize: 16, color: '#666666' },
      { id: 'phone', type: 'text', content: '{phone}', x: 80, y: 100, fontSize: 14, color: '#999999' },
      { id: 'email', type: 'text', content: '{email}', x: 80, y: 120, fontSize: 14, color: '#999999' }
    ]
  },
  {
    id: 'corporate-blue',
    name: 'Corporate Blue',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#003366"/>
      <rect x="0" y="150" width="400" height="50" fill="#ffffff"/>
      <polygon points="0,0 400,0 400,50 0,100" fill="#004080"/>
      <circle cx="30" cy="30" r="20" fill="#ffffff"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 20, y: 80, fontSize: 24, color: '#ffffff' },
      { id: 'title', type: 'text', content: '{title}', x: 20, y: 110, fontSize: 16, color: '#ffffff' },
      { id: 'contact', type: 'text', content: '{phone} | {email}', x: 20, y: 170, fontSize: 14, color: '#003366' }
    ]
  },
  {
    id: 'gradient-burst',
    name: 'Gradient Burst',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
        </radialGradient>
      </defs>
      <rect width="400" height="200" fill="url(#grad1)"/>
      <rect x="20" y="20" width="360" height="160" fill="rgba(255,255,255,0.8)" rx="10" ry="10"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 40, y: 60, fontSize: 28, color: '#FF4500' },
      { id: 'title', type: 'text', content: '{title}', x: 40, y: 100, fontSize: 18, color: '#FF8C00' },
      { id: 'phone', type: 'text', content: '{phone}', x: 40, y: 140, fontSize: 14, color: '#FF0000' },
      { id: 'email', type: 'text', content: '{email}', x: 40, y: 160, fontSize: 14, color: '#FF0000' }
    ]
  },
  {
    id: 'geometric-elegance',
    name: 'Geometric Elegance',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#1a1a1a"/>
      <polygon points="0,0 400,0 200,200" fill="#gold"/>
      <rect x="20" y="20" width="360" height="160" fill="rgba(26,26,26,0.8)" rx="10" ry="10"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 40, y: 60, fontSize: 28, color: '#FFFFFF' },
      { id: 'title', type: 'text', content: '{title}', x: 40, y: 100, fontSize: 18, color: '#FFD700' },
      { id: 'phone', type: 'text', content: '{phone}', x: 40, y: 140, fontSize: 14, color: '#C0C0C0' },
      { id: 'email', type: 'text', content: '{email}', x: 40, y: 160, fontSize: 14, color: '#C0C0C0' }
    ]
  },
  {
    id: 'nature-inspired',
    name: 'Nature Inspired',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#E6F3EC"/>
      <path d="M0 100 Q200 0 400 100 T800 100" fill="#4CAF50" opacity="0.3"/>
      <path d="M0 150 Q200 50 400 150 T800 150" fill="#4CAF50" opacity="0.3"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 40, y: 60, fontSize: 28, color: '#2E7D32' },
      { id: 'title', type: 'text', content: '{title}', x: 40, y: 100, fontSize: 18, color: '#43A047' },
      { id: 'phone', type: 'text', content: '{phone}', x: 40, y: 140, fontSize: 14, color: '#1B5E20' },
      { id: 'email', type: 'text', content: '{email}', x: 40, y: 160, fontSize: 14, color: '#1B5E20' }
    ]
  },
  {
    id: 'tech-circuit',
    name: 'Tech Circuit',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#0D47A1"/>
      <path d="M10 10 H50 V50 H90 V90 H130 V130 H170 V170 H210 V210" stroke="#64B5F6" stroke-width="2" fill="none"/>
      <path d="M390 190 H350 V150 H310 V110 H270 V70 H230 V30" stroke="#64B5F6" stroke-width="2" fill="none"/>
      <circle cx="10" cy="10" r="5" fill="#64B5F6"/>
      <circle cx="390" cy="190" r="5" fill="#64B5F6"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 40, y: 60, fontSize: 28, color: '#FFFFFF' },
      { id: 'title', type: 'text', content: '{title}', x: 40, y: 100, fontSize: 18, color: '#64B5F6' },
      { id: 'phone', type: 'text', content: '{phone}', x: 40, y: 140, fontSize: 14, color: '#BBDEFB' },
      { id: 'email', type: 'text', content: '{email}', x: 40, y: 160, fontSize: 14, color: '#BBDEFB' }
    ]
  },
  {
    id: 'artistic-splash',
    name: 'Artistic Splash',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#FFFFFF"/>
      <circle cx="350" cy="50" r="100" fill="#FF4081" opacity="0.7"/>
      <circle cx="50" cy="150" r="100" fill="#3F51B5" opacity="0.7"/>
      <circle cx="200" cy="100" r="100" fill="#FFC107" opacity="0.7"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 40, y: 60, fontSize: 28, color: '#3F51B5' },
      { id: 'title', type: 'text', content: '{title}', x: 40, y: 100, fontSize: 18, color: '#FF4081' },
      { id: 'phone', type: 'text', content: '{phone}', x: 40, y: 140, fontSize: 14, color: '#FFC107' },
      { id: 'email', type: 'text', content: '{email}', x: 40, y: 160, fontSize: 14, color: '#FFC107' }
    ]
  },
  {
    id: 'minimalist-typography',
    name: 'Minimalist Typography',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#FFFFFF"/>
      <line x1="20" y1="100" x2="380" y2="100" stroke="#000000" stroke-width="1"/>
      <text x="20" y="95" font-family="Arial" font-size="70" fill="#000000">MINIMAL</text>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 20, y: 140, fontSize: 24, color: '#000000' },
      { id: 'title', type: 'text', content: '{title}', x: 20, y: 170, fontSize: 16, color: '#666666' },
      { id: 'phone', type: 'text', content: '{phone}', x: 300, y: 140, fontSize: 12, color: '#999999' },
      { id: 'email', type: 'text', content: '{email}', x: 300, y: 160, fontSize: 12, color: '#999999' }
    ]
  }
];
