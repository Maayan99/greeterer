import React from 'react';
import { CardTemplate } from '../app/create/page';

interface TemplateSelectionProps {
  onSelectTemplate: (template: CardTemplate) => void;
}

const templates: CardTemplate[] = [
  {
    id: 'template1',
    name: 'Business Card',
    elements: [
      { id: 'name', type: 'text', content: 'Your Name', x: 10, y: 10, width: 200, height: 30, fontSize: 18, color: '#000000' },
      { id: 'title', type: 'text', content: 'Your Title', x: 10, y: 50, width: 200, height: 20, fontSize: 14, color: '#666666' },
      { id: 'phone', type: 'text', content: 'Phone: (123) 456-7890', x: 10, y: 80, width: 200, height: 20, fontSize: 12, color: '#333333' },
      { id: 'email', type: 'text', content: 'email@example.com', x: 10, y: 110, width: 200, height: 20, fontSize: 12, color: '#333333' },
    ],
  },
  // Add more templates here
];

const TemplateSelection: React.FC<TemplateSelectionProps> = ({ onSelectTemplate }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Choose a Template</h2>
      <div className="grid grid-cols-2 gap-4">
        {templates.map((template) => (
          <button
            key={template.id}
            className="p-4 border rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => onSelectTemplate(template)}
          >
            <h3 className="font-bold">{template.name}</h3>
            {/* Add a preview of the template here */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelection;
