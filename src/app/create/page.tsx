'use client'

import React, { useState } from 'react';
import TemplateSelection from '@/components/TemplateSelection';
import CardEditor from '@/components/CardEditor';
import SaveSendOptions from '@/components/SaveSendOptions';
import { CardElement, CardTemplate } from '@/types/cardTypes';

export default function CardCreationPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<CardTemplate | null>(null);
  const [cardElements, setCardElements] = useState<CardElement[]>([]);

  const handleTemplateSelection = (template: CardTemplate) => {
    setSelectedTemplate(template);
    // Initialize card elements based on the template fields
    const initialElements: CardElement[] = template.fields.map((field, index) => ({
      id: `${field}-${Date.now()}`,
      type: 'text',
      content: `{${field}}`,
      x: 10,
      y: 10 + index * 30,
      width: 200,
      height: 30,
      fontSize: 14,
      color: '#000000',
    }));
    setCardElements(initialElements);
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
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">Create Your Business Card</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <TemplateSelection onSelectTemplate={handleTemplateSelection} />
        </div>
        <div className="lg:w-3/4">
          <CardEditor
            selectedTemplate={selectedTemplate}
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
