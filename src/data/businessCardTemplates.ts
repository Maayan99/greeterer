import { CardTemplate } from '../types/cardTypes';

export const businessCardTemplates: CardTemplate[] = [
  {
    id: 'dynamic-curve',
    name: 'Dynamic Curve',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#f0f0f0;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#ff6b6b;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#ff8e8e;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#grad1)" rx="10" ry="10"/>
      <path d="M0,100 Q200,180 400,100 T800,100" fill="url(#grad2)"/>
      <path d="M0,100 Q200,180 400,100 T800,100" fill="#2c3e50" opacity="0.8" transform="translate(0, 20)"/>
      <circle cx="50" cy="50" r="30" fill="#2c3e50"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 100, y: 40, fontSize: 24, color: '#2c3e50' },
      { id: 'title', type: 'text', content: '{title}', x: 100, y: 70, fontSize: 16, color: '#34495e' },
      { id: 'phone', type: 'text', content: '{phone}', x: 100, y: 130, fontSize: 14, color: '#ffffff' },
      { id: 'email', type: 'text', content: '{email}', x: 100, y: 150, fontSize: 14, color: '#ffffff' },
      { id: 'website', type: 'text', content: '{website}', x: 100, y: 170, fontSize: 14, color: '#ffffff' }
    ]
  },
  {
    id: 'elegant-waves',
    name: 'Elegant Waves',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <defs>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#dfe6e9;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#b2bec3;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#grad3)" rx="10" ry="10"/>
      <path d="M0,100 Q100,50 200,100 T400,100" fill="#2d3436" opacity="0.1"/>
      <path d="M0,150 Q100,100 200,150 T400,150" fill="#2d3436" opacity="0.1"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 40, y: 50, fontSize: 28, color: '#2d3436' },
      { id: 'title', type: 'text', content: '{title}', x: 40, y: 85, fontSize: 18, color: '#636e72' },
      { id: 'phone', type: 'text', content: '{phone}', x: 40, y: 130, fontSize: 16, color: '#2d3436' },
      { id: 'email', type: 'text', content: '{email}', x: 40, y: 155, fontSize: 16, color: '#2d3436' },
      { id: 'website', type: 'text', content: '{website}', x: 40, y: 180, fontSize: 16, color: '#2d3436' }
    ]
  },
  {
    id: 'geometric-flair',
    name: 'Geometric Flair',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <defs>
        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#f0f0f0;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#grad4)" rx="10" ry="10"/>
      <polygon points="0,0 200,0 0,200" fill="#ff7675" opacity="0.8"/>
      <polygon points="400,0 400,200 200,200" fill="#74b9ff" opacity="0.8"/>
      <circle cx="200" cy="100" r="60" fill="#ffffff" opacity="0.2"/>
    </svg>`,
    fields: [
      { id: 'name', type: 'text', content: '{name}', x: 220, y: 50, fontSize: 24, color: '#2d3436' },
      { id: 'title', type: 'text', content: '{title}', x: 220, y: 80, fontSize: 16, color: '#636e72' },
      { id: 'phone', type: 'text', content: '{phone}', x: 220, y: 120, fontSize: 14, color: '#2d3436' },
      { id: 'email', type: 'text', content: '{email}', x: 220, y: 140, fontSize: 14, color: '#2d3436' },
      { id: 'website', type: 'text', content: '{website}', x: 220, y: 160, fontSize: 14, color: '#2d3436' }
    ]
  },
  // Keep the remaining templates (Corporate Blue, Elegant Gold, Tech Wave, Creative Splash) as they are
  // You can slightly improve them if needed
];
