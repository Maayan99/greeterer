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
  // Add more templates here...
];
