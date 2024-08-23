import React, { useState } from 'react';
import TemplateSelection from '@/components/TemplateSelection';
import CardEditor from '@/components/CardEditor';
import SaveSendOptions from '@/components/SaveSendOptions';

export interface CardElement {
  id: string;
  type: 'text' | 'image' | 'shape';
  content: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fontSize?: number;
  color?: string;
  backgroundColor?: string;
}

export interface CardTemplate {
  id: string;
  name: string;
  elements: CardElement[];
}

export default function CardCreationPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<CardTemplate | null>(null);
  const [cardElements, setCardElements] = useState<CardElement[]>([]);

  const handleTemplateSelection = (template: CardTemplate) => {
    setSelectedTemplate(template);
    setCardElements(template.elements);
  };

  const handleElementUpdate = (updatedElement: CardElement) => {
    setCardElements(prevElements =>
      prevElements.map(el => el.id === updatedElement.id ? updatedElement : el)
    );
  };

  const handleAddElement = (newElement: CardElement) => {
    setCardElements(prevElements => [...prevElements, newElement]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">Create Your Card</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <TemplateSelection onSelectTemplate={handleTemplateSelection} />
        </div>
        <div className="lg:w-3/4">
          <CardEditor
            elements={cardElements}
            onUpdateElement={handleElementUpdate}
            onAddElement={handleAddElement}
          />
          <SaveSendOptions />
        </div>
      </div>
    </div>
  );
}
