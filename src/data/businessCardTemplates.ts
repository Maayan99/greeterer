import { CardTemplate } from '../types/cardTypes';


export const businessCardTemplates: CardTemplate[] = [
  {
    id: 'modern-minimal',
    name: 'Modern Minimal',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#ffffff"/>
      <rect x="20" y="20" width="360" height="160" fill="#f0f0f0" rx="10" ry="10"/>
      <circle cx="50" cy="50" r="20" fill="#333333"/>
      <rect x="80" y="40" width="100" height="2" fill="#333333"/>
      <rect x="80" y="50" width="80" height="2" fill="#333333"/>
      <rect x="80" y="60" width="120" height="2" fill="#333333"/>
      <text x="40" y="100" font-family="Arial" font-size="24" fill="#333333">{name}</text>
      <text x="40" y="130" font-family="Arial" font-size="16" fill="#666666">{title}</text>
      <text x="40" y="160" font-family="Arial" font-size="14" fill="#999999">{phone}</text>
      <text x="40" y="180" font-family="Arial" font-size="14" fill="#999999">{email}</text>
      <line x1="20" y1="140" x2="380" y2="140" stroke="#e0e0e0" stroke-width="1"/>
      <rect x="300" y="150" width="80" height="30" fill="#333333" rx="5" ry="5"/>
      <text x="340" y="170" font-family="Arial" font-size="12" fill="#ffffff" text-anchor="middle">WEBSITE</text>
    </svg>`,
    fields: ['name', 'title', 'phone', 'email']
  },
  {
    id: 'corporate-blue',
    name: 'Corporate Blue',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#003366"/>
      <rect x="0" y="150" width="400" height="50" fill="#ffffff"/>
      <polygon points="0,0 400,0 400,50 0,100" fill="#004080"/>
      <circle cx="30" cy="30" r="20" fill="#ffffff"/>
      <text x="60" y="35" font-family="Arial" font-size="16" fill="#ffffff">LOGO</text>
      <line x1="20" y1="70" x2="380" y2="70" stroke="#ffffff" stroke-width="1"/>
      <text x="20" y="100" font-family="Arial" font-size="24" font-weight="bold" fill="#ffffff">{name}</text>
      <text x="20" y="130" font-family="Arial" font-size="16" fill="#ffffff">{title}</text>
      <text x="20" y="180" font-family="Arial" font-size="14" fill="#003366">{phone} | {email}</text>
      <rect x="300" y="160" width="80" height="30" fill="#003366" rx="5" ry="5"/>
      <text x="340" y="180" font-family="Arial" font-size="12" fill="#ffffff" text-anchor="middle">WEBSITE</text>
    </svg>`,
    fields: ['name', 'title', 'phone', 'email']
  },
  {
    id: 'tech-circuit',
    name: 'Tech Circuit',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#000000"/>
      <circle cx="200" cy="100" r="90" fill="none" stroke="#33ff33" stroke-width="2"/>
      <circle cx="200" cy="100" r="60" fill="none" stroke="#33ff33" stroke-width="2"/>
      <circle cx="200" cy="100" r="30" fill="none" stroke="#33ff33" stroke-width="2"/>
      <line x1="110" y1="100" x2="290" y2="100" stroke="#33ff33" stroke-width="2"/>
      <line x1="200" y1="10" x2="200" y2="190" stroke="#33ff33" stroke-width="2"/>
      <rect x="20" y="20" width="360" height="160" fill="none" stroke="#33ff33" stroke-width="2" rx="10" ry="10"/>
      <text x="40" y="50" font-family="Courier New" font-size="24" fill="#33ff33">{name}</text>
      <text x="40" y="80" font-family="Courier New" font-size="16" fill="#33ff33">{title}</text>
      <text x="40" y="170" font-family="Courier New" font-size="14" fill="#33ff33">{phone}</text>
      <text x="40" y="190" font-family="Courier New" font-size="14" fill="#33ff33">{email}</text>
    </svg>`,
    fields: ['name', 'title', 'phone', 'email']
  },
  {
    id: 'minimalist-mono',
    name: 'Minimalist Mono',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#ffffff"/>
      <line x1="20" y1="20" x2="380" y2="20" stroke="#000000" stroke-width="2"/>
      <line x1="20" y1="180" x2="380" y2="180" stroke="#000000" stroke-width="2"/>
      <line x1="20" y1="20" x2="20" y2="180" stroke="#000000" stroke-width="2"/>
      <line x1="380" y1="20" x2="380" y2="180" stroke="#000000" stroke-width="2"/>
      <text x="40" y="60" font-family="Helvetica" font-size="24" fill="#000000">{name}</text>
      <text x="40" y="90" font-family="Helvetica" font-size="16" fill="#000000">{title}</text>
      <text x="40" y="150" font-family="Helvetica" font-size="14" fill="#000000">{phone}</text>
      <text x="40" y="170" font-family="Helvetica" font-size="14" fill="#000000">{email}</text>
      <circle cx="350" cy="50" r="20" fill="#000000"/>
    </svg>`,
    fields: ['name', 'title', 'phone', 'email']
  },
  {
    id: 'geometric-patterns',
    name: 'Geometric Patterns',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#f0f0f0"/>
      <path d="M0 0 L50 0 L0 50 Z" fill="#ff6b6b"/>
      <path d="M400 0 L350 0 L400 50 Z" fill="#4ecdc4"/>
      <path d="M0 200 L50 200 L0 150 Z" fill="#45b7d1"/>
      <path d="M400 200 L350 200 L400 150 Z" fill="#f7d794"/>
      <circle cx="200" cy="100" r="80" fill="none" stroke="#ff6b6b" stroke-width="2"/>
      <rect x="120" y="20" width="160" height="160" fill="none" stroke="#4ecdc4" stroke-width="2"/>
      <polygon points="200,20 280,100 200,180 120,100" fill="none" stroke="#45b7d1" stroke-width="2"/>
      <text x="50" y="80" font-family="Arial" font-size="24" fill="#333333">{name}</text>
      <text x="50" y="110" font-family="Arial" font-size="16" fill="#666666">{title}</text>
      <text x="50" y="150" font-family="Arial" font-size="14" fill="#999999">{phone}</text>
      <text x="50" y="170" font-family="Arial" font-size="14" fill="#999999">{email}</text>
    </svg>`,
    fields: ['name', 'title', 'phone', 'email']
  }
];
