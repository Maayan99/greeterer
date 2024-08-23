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
      <circle cx="200" cy="100" r="80" fill="rgba(255,255,255,0.2)"/>
      <rect x="50" y="80" width="300" height="2" fill="#ffffff"/>
      <text x="20" y="50" font-family="Arial" font-size="24" fill="#ffffff">{name}</text>
      <text x="20" y="80" font-family="Arial" font-size="16" fill="#ffffff">{title}</text>
      <text x="20" y="170" font-family="Arial" font-size="14" fill="#ffffff">{phone}</text>
      <text x="20" y="190" font-family="Arial" font-size="14" fill="#ffffff">{email}</text>
      <polygon points="350,0 400,0 400,50" fill="rgba(255,255,255,0.5)"/>
      <polygon points="0,150 50,200 0,200" fill="rgba(255,255,255,0.5)"/>
      <circle cx="380" cy="180" r="15" fill="#ffffff"/>
      <rect x="20" y="110" width="50" height="50" fill="rgba(255,255,255,0.3)" transform="rotate(45 45 135)"/>
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
      <polygon points="350,0 400,0 400,50" fill="#ffffff" fill-opacity="0.1"/>
      <polygon points="0,100 50,150 0,150" fill="#ffffff" fill-opacity="0.1"/>
    </svg>`,
    fields: ['name', 'title', 'phone', 'email']
  },
  {
    id: 'nature-inspired',
    name: 'Nature Inspired',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#e6f3e6"/>
      <path d="M0 100 Q 100 50, 200 100 T 400 100" fill="#99cc99" opacity="0.5"/>
      <circle cx="350" cy="50" r="100" fill="#99cc99"/>
      <path d="M 10 100 Q 90 80 170 100" stroke="#336633" fill="transparent" stroke-width="2"/>
      <path d="M 230 100 Q 310 120 390 100" stroke="#336633" fill="transparent" stroke-width="2"/>
      <circle cx="30" cy="30" r="20" fill="#336633"/>
      <text x="60" y="35" font-family="Georgia" font-size="16" fill="#336633">ECO</text>
      <text x="30" y="80" font-family="Georgia" font-size="24" fill="#336633">{name}</text>
      <text x="30" y="110" font-family="Georgia" font-size="16" fill="#336633">{title}</text>
      <text x="30" y="170" font-family="Georgia" font-size="14" fill="#336633">{phone}</text>
      <text x="30" y="190" font-family="Georgia" font-size="14" fill="#336633">{email}</text>
      <rect x="300" y="160" width="80" height="30" fill="#336633" rx="5" ry="5"/>
      <text x="340" y="180" font-family="Georgia" font-size="12" fill="#ffffff" text-anchor="middle">WEBSITE</text>
      <path d="M380 30 Q 390 40, 380 50 T 380 70" stroke="#336633" fill="transparent"/>
      <path d="M360 30 Q 370 40, 360 50 T 360 70" stroke="#336633" fill="transparent"/>
      <path d="M340 30 Q 350 40, 340 50 T 340 70" stroke="#336633" fill="transparent"/>
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
      <circle cx="30" cy="30" r="10" fill="#33ff33"/>
      <circle cx="370" cy="30" r="10" fill="#33ff33"/>
      <circle cx="30" cy="170" r="10" fill="#33ff33"/>
      <circle cx="370" cy="170" r="10" fill="#33ff33"/>
      <path d="M 50 120 Q 100 70, 150 120" stroke="#33ff33" fill="transparent"/>
      <path d="M 250 120 Q 300 70, 350 120" stroke="#33ff33" fill="transparent"/>
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
      <path d="M 20 20 Q 40 40, 60 20 T 100 20" stroke="#8b4513" fill="transparent" stroke-width="3"/>
      <path d="M 300 180 Q 320 160, 340 180 T 380 180" stroke="#8b4513" fill="transparent" stroke-width="3"/>
      <circle cx="30" cy="30" r="20" fill="#8b4513"/>
      <text x="60" y="35" font-family="Brush Script MT" font-size="16" fill="#8b4513">ARTISTRY</text>
      <text x="50" y="80" font-family="Brush Script MT" font-size="30" fill="#8b4513">{name}</text>
      <text x="50" y="110" font-family="Brush Script MT" font-size="20" fill="#8b4513">{title}</text>
      <text x="50" y="140" font-family="Brush Script MT" font-size="16" fill="#8b4513">{phone}</text>
      <text x="50" y="160" font-family="Brush Script MT" font-size="16" fill="#8b4513">{email}</text>
      <rect x="300" y="130" width="80" height="30" fill="#8b4513" rx="5" ry="5"/>
      <text x="340" y="150" font-family="Brush Script MT" font-size="12" fill="#f5e6d3" text-anchor="middle">PORTFOLIO</text>
      <path d="M380 30 C 390 40, 370 50, 380 60" stroke="#8b4513" fill="transparent"/>
      <path d="M360 30 C 370 40, 350 50, 360 60" stroke="#8b4513" fill="transparent"/>
      <path d="M340 30 C 350 40, 330 50, 340 60" stroke="#8b4513" fill="transparent"/>
    </svg>`,
    fields: ['name', 'title', 'phone', 'email']
  },
  {
    id: 'vintage-elegance',
    name: 'Vintage Elegance',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#f9f1e6"/>
      <rect x="10" y="10" width="380" height="180" fill="none" stroke="#c9a66b" stroke-width="2"/>
      <rect x="20" y="20" width="360" height="160" fill="none" stroke="#c9a66b" stroke-width="1"/>
      <path d="M50 50 L 350 50 L 350 150 L 50 150 Z" fill="none" stroke="#c9a66b" stroke-width="1"/>
      <circle cx="30" cy="30" r="15" fill="#c9a66b"/>
      <text x="55" y="35" font-family="Old English Text MT" font-size="16" fill="#3d2b1f">ESTABLISHED 1920</text>
      <text x="70" y="90" font-family="Old English Text MT" font-size="24" fill="#3d2b1f">{name}</text>
      <text x="70" y="120" font-family="Old English Text MT" font-size="16" fill="#3d2b1f">{title}</text>
      <text x="70" y="150" font-family="Old English Text MT" font-size="14" fill="#3d2b1f">{phone} | {email}</text>
      <path d="M 20 180 Q 200 160, 380 180" stroke="#c9a66b" fill="transparent"/>
      <path d="M 20 20 Q 200 40, 380 20" stroke="#c9a66b" fill="transparent"/>
      <rect x="300" y="160" width="80" height="30" fill="#c9a66b" rx="5" ry="5"/>
      <text x="340" y="180" font-family="Old English Text MT" font-size="12" fill="#f9f1e6" text-anchor="middle">WEBSITE</text>
      <path d="M30 60 L 50 80 L 30 100" fill="none" stroke="#c9a66b" stroke-width="1"/>
      <path d="M370 60 L 350 80 L 370 100" fill="none" stroke="#c9a66b" stroke-width="1"/>
    </svg>`,
    fields: ['name', 'title', 'phone', 'email']
  },
  {
    id: 'bold-contrast',
    name: 'Bold Contrast',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="200" height="200" fill="#ffffff"/>
      <rect x="200" width="200" height="200" fill="#000000"/>
      <circle cx="100" cy="100" r="80" fill="#000000"/>
      <circle cx="300" cy="100" r="80" fill="#ffffff"/>
      <text x="40" y="80" font-family="Impact" font-size="24" fill="#ffffff">{name}</text>
      <text x="40" y="110" font-family="Impact" font-size="16" fill="#ffffff">{title}</text>
      <text x="220" y="80" font-family="Impact" font-size="24" fill="#000000">{phone}</text>
      <text x="220" y="110" font-family="Impact" font-size="16" fill="#000000">{email}</text>
      <rect x="10" y="160" width="80" height="30" fill="#000000" rx="5" ry="5"/>
      <text x="50" y="180" font-family="Impact" font-size="12" fill="#ffffff" text-anchor="middle">WEBSITE</text>
      <rect x="310" y="160" width="80" height="30" fill="#ffffff" rx="5" ry="5"/>
      <text x="350" y="180" font-family="Impact" font-size="12" fill="#000000" text-anchor="middle">PORTFOLIO</text>
      <line x1="200" y1="0" x2="200" y2="200" stroke="#808080" stroke-width="4"/>
      <polygon points="180,10 200,0 220,10" fill="#808080"/>
      <polygon points="180,190 200,200 220,190" fill="#808080"/>
    </svg>`,
    fields: ['name', 'title', 'phone', 'email']
  },
  {
    id: 'neon-nights',
    name: 'Neon Nights',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <rect width="400" height="200" fill="#1a1a1a"/>
      <path d="M0 100 Q 200 50, 400 100" stroke="#ff00ff" fill="transparent" stroke-width="2"/>
      <path d="M0 110 Q 200 160, 400 110" stroke="#00ffff" fill="transparent" stroke-width="2"/>
      <circle cx="200" cy="100" r="80" fill="none" stroke="#ffff00" stroke-width="2"/>
      <text x="50" y="80" font-family="Arial" font-size="24" fill="#ff00ff">{name}</text>
      <text x="50" y="110" font-family="Arial" font-size="16" fill="#00ffff">{title}</text>
      <text x="50" y="140" font-family="Arial" font-size="14" fill="#ffff00">{phone}</text>
      <text x="50" y="160" font-family="Arial" font-size="14" fill="#ffff00">{email}</text>
      <rect x="300" y="150" width="80" height="30" fill="#ff00ff" rx="15" ry="15"/>
      <text x="340" y="170" font-family="Arial" font-size="12" fill="#1a1a1a" text-anchor="middle">WEBSITE</text>
      <polygon points="20,20 40,20 30,40" fill="#ff00ff"/>
      <polygon points="360,20 380,20 370,40" fill="#00ffff"/>
      <polygon points="20,180 40,180 30,160" fill="#00ffff"/>
      <polygon points="360,180 380,180 370,160" fill="#ff00ff"/>
      <path d="M300 50 Q 350 25, 350 50 T 400 50" stroke="#ffff00" fill="transparent" stroke-width="2"/>
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
      <rect x="300" y="140" width="80" height="1" fill="#000000"/>
      <rect x="300" y="150" width="80" height="1" fill="#000000"/>
      <rect x="300" y="160" width="80" height="1" fill="#000000"/>
      <rect x="200" y="40" width="1" height="120" fill="#000000"/>
      <rect x="220" y="40" width="1" height="120" fill="#000000"/>
      <rect x="240" y="40" width="1" height="120" fill="#000000"/>
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
      <rect x="300" y="150" width="80" height="30" fill="#ff6b6b" rx="15" ry="15"/>
      <text x="340" y="170" font-family="Arial" font-size="12" fill="#ffffff" text-anchor="middle">WEBSITE</text>
      <circle cx="320" cy="40" r="15" fill="#4ecdc4"/>
      <circle cx="350" cy="40" r="15" fill="#45b7d1"/>
      <circle cx="380" cy="40" r="15" fill="#f7d794"/>
    </svg>`,
    fields: ['name', 'title', 'phone', 'email']
  },
  {
    id: 'watercolor-wash',
    name: 'Watercolor Wash',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
      <defs>
        <filter id="watercolor" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise"/>
          <feColorMatrix in="noise" type="saturate" values="0" result="desaturatedNoise"/>
          <feComponentTransfer in="desaturatedNoise" result="theNoise">
            <feFuncA type="table" tableValues="0 0 0.3 0"/>
          </feComponentTransfer>
          <feGaussianBlur in="theNoise" stdDeviation="5" result="blurredNoise"/>
          <feComposite operator="in" in="blurredNoise" in2="SourceGraphic" result="maskedNoise"/>
        </filter>
      </defs>
      <rect width="400" height="200" fill="#ffffff"/>
      <rect width="400" height="200" fill="#91a5ef" filter="url(#watercolor)"/>
      <rect x="20" y="20" width="360" height="160" fill="none" stroke="#ffffff" stroke-width="2" rx="10" ry="10"/>
      <text x="40" y="70" font-family="Brush Script MT" font-size="28" fill="#ffffff">{name}</text>
      <text x="40" y="100" font-family="Brush Script MT" font-size="18" fill="#ffffff">{title}</text>
      <text x="40" y="150" font-family="Brush Script MT" font-size="16" fill="#ffffff">{phone}</text>
      <text x="40" y="170" font-family="Brush Script MT" font-size="16" fill="#ffffff">{email}</text>
      <circle cx="350" cy="50" r="30" fill="none" stroke="#ffffff" stroke-width="2"/>
      <path d="M335 50 L365 50 M350 35 L350 65" stroke="#ffffff" stroke-width="2"/>
      <rect x="300" y="140" width="80" height="30" fill="#ffffff" rx="15" ry="15"/>
      <text x="340" y="160" font-family="Brush Script MT" font-size="14" fill="#91a5ef" text-anchor="middle">WEBSITE</text>
      <path d="M20 100 Q 100 50, 200 100 T 380 100" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.5"/>
    </svg>`,
    fields: ['name', 'title', 'phone', 'email']
  }
];
