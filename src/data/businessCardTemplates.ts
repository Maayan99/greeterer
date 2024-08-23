import { CardTemplate } from '../types/cardTypes';

export const businessCardTemplates: CardTemplate[] = [
  {
    id: 'modern-minimal',
    name: 'Modern Minimal',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#ffffff"/>
      <rect x="20" y="20" width="360" height="160" fill="#f0f0f0" rx="10" ry="10"/>
      <text x="40" y="70" font-family="Arial" font-size="24" fill="#333333">{name}</text>
      <text x="40" y="100" font-family="Arial" font-size="16" fill="#666666">{title}</text>
      <text x="40" y="130" font-family="Arial" font-size="14" fill="#999999">{phone}</text>
      <text x="40" y="150" font-family="Arial" font-size="14" fill="#999999">{email}</text>
    </svg>`,
    fields: ['name', 'title', 'phone', 'email']
  },
  {
    id: 'geometric-splash',
    name: 'Geometric Splash',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#grad1)"/>
      <polygon points="0,0 400,0 400,100 0,50" fill="rgba(255,255,255,0.3)"/>
      <text x="20" y="80" font-family="Arial" font-size="24" fill="#ffffff">{name}</text>
      <text x="20" y="110" font-family="Arial" font-size="16" fill="#ffffff">{title}</text>
      <text x="20" y="140" font-family="Arial" font-size="14" fill="#ffffff">{phone}</text>
      <text x="20" y="160" font-family="Arial" font-size="14" fill="#ffffff">{email}</text>
    </svg>`,
    fields: ['name', 'title', 'phone', 'email']
  },
  {
    id: 'corporate-blue',
    name: 'Corporate Blue',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#003366"/>
      <rect x="0" y="150" width="400" height="50" fill="#ffffff"/>
      <text x="20" y="80" font-family="Arial" font-size="24" font-weight="bold" fill="#ffffff">{name}</text>
      <text x="20" y="110" font-family="Arial" font-size="16" fill="#ffffff">{title}</text>
      <text x="20" y="180" font-family="Arial" font-size="14" fill="#003366">{phone} | {email}</text>
    </svg>`,
    fields: ['name', 'title', 'phone', 'email']
  },
  {
    id: 'nature-inspired',
    name: 'Nature Inspired',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#e6f3e6"/>
      <circle cx="350" cy="50" r="100" fill="#99cc99"/>
      <text x="30" y="80" font-family="Georgia" font-size="24" fill="#336633">{name}</text>
      <text x="30" y="110" font-family="Georgia" font-size="16" fill="#336633">{title}</text>
      <text x="30" y="140" font-family="Georgia" font-size="14" fill="#336633">{phone}</text>
      <text x="30" y="160" font-family="Georgia" font-size="14" fill="#336633">{email}</text>
    </svg>`,
    fields: ['name', 'title', 'phone', 'email']
  },
  {
    id: 'tech-circuit',
    name: 'Tech Circuit',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#000000"/>
      <line x1="0" y1="100" x2="400" y2="100" stroke="#33ff33" stroke-width="2"/>
      <circle cx="200" cy="100" r="50" fill="none" stroke="#33ff33" stroke-width="2"/>
      <text x="20" y="50" font-family="Courier New" font-size="24" fill="#33ff33">{name}</text>
      <text x="20" y="80" font-family="Courier New" font-size="16" fill="#33ff33">{title}</text>
      <text x="20" y="170" font-family="Courier New" font-size="14" fill="#33ff33">{phone}</text>
      <text x="20" y="190" font-family="Courier New" font-size="14" fill="#33ff33">{email}</text>
    </svg>`,
    fields: ['name', 'title', 'phone', 'email']
  },
  {
    id: 'artistic-brush',
    name: 'Artistic Brush',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#f5e6d3"/>
      <path d="M0 100 Q 200 50, 400 100" fill="none" stroke="#8b4513" stroke-width="5"/>
      <path d="M0 120 Q 200 170, 400 120" fill="none" stroke="#8b4513" stroke-width="5"/>
      <text x="50" y="80" font-family="Brush Script MT" font-size="30" fill="#8b4513">{name}</text>
      <text x="50" y="110" font-family="Brush Script MT" font-size="20" fill="#8b4513">{title}</text>
      <text x="50" y="140" font-family="Brush Script MT" font-size="16" fill="#8b4513">{phone}</text>
      <text x="50" y="160" font-family="Brush Script MT" font-size="16" fill="#8b4513">{email}</text>
    </svg>`,
    fields: ['name', 'title', 'phone', 'email']
  },
  {
    id: 'vintage-elegance',
    name: 'Vintage Elegance',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#f9f1e6"/>
      <rect x="10" y="10" width="380" height="180" fill="none" stroke="#c9a66b" stroke-width="2"/>
      <path d="M50 50 L 350 50 L 350 150 L 50 150 Z" fill="none" stroke="#c9a66b" stroke-width="1"/>
      <text x="70" y="90" font-family="Old English Text MT" font-size="24" fill="#3d2b1f">{name}</text>
      <text x="70" y="120" font-family="Old English Text MT" font-size="16" fill="#3d2b1f">{title}</text>
      <text x="70" y="150" font-family="Old English Text MT" font-size="14" fill="#3d2b1f">{phone} | {email}</text>
    </svg>`,
    fields: ['name', 'title', 'phone', 'email']
  },
  {
    id: 'bold-contrast',
    name: 'Bold Contrast',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="200" height="200" fill="#ffffff"/>
      <rect x="200" width="200" height="200" fill="#000000"/>
      <text x="20" y="80" font-family="Impact" font-size="24" fill="#000000">{name}</text>
      <text x="20" y="110" font-family="Impact" font-size="16" fill="#000000">{title}</text>
      <text x="220" y="80" font-family="Impact" font-size="24" fill="#ffffff">{phone}</text>
      <text x="220" y="110" font-family="Impact" font-size="16" fill="#ffffff">{email}</text>
    </svg>`,
    fields: ['name', 'title', 'phone', 'email']
  }
];
