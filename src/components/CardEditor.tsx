import React, { useState, useEffect } from 'react';
import { CardElement, CardTemplate } from '../types/cardTypes';
import LivePreview from './LivePreview';

interface CardEditorProps {
  selectedTemplate: CardTemplate | null;
}

const CardEditor: React.FC<CardEditorProps> = ({ selectedTemplate }) => {
  const [elements, setElements] = useState<CardElement[]>([]);

  useEffect(() => {
    if (selectedTemplate) {
      const templateElements = selectedTemplate.fields.map(field => ({
        ...field,
        id: `${field.id}-${Date.now()}`
      }));
      setElements(templateElements);
    }
  }, [selectedTemplate]);

  return (
    <div>
      <LivePreview elements={elements} setElements={setElements} />
    </div>
  );
};

export default CardEditor;