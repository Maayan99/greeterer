import React from 'react';
import CardTemplate from '../types/cardTypes';
import { businessCardTemplates } from '../data/businessCardTemplates';

interface TemplateSelectionProps {
  onSelectTemplate: (template: CardTemplate) => void;
}

const TemplateSelection: React.FC<TemplateSelectionProps> = ({ onSelectTemplate }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {businessCardTemplates.map((template) => (
        <button
          key={template.id}
          className="p-4 border rounded-lg hover:bg-gray-100 transition-colors duration-200"
          onClick={() => onSelectTemplate(template)}
        >
          <h3 className="font-bold mb-2">{template.name}</h3>
          <div className="w-full aspect-video bg-white">
            <div dangerouslySetInnerHTML={{ __html: template.svg }} />
          </div>
        </button>
      ))}
    </div>
  );
};

export default TemplateSelection;
