import React from 'react';
import { CardElement, CardTemplate } from '../types/cardTypes';
import LivePreview from './LivePreview';

interface CardEditorProps {
  selectedTemplate: CardTemplate | null;
  elements: CardElement[];
  onUpdateElement: (updatedElement: CardElement) => void;
  onAddElement: (newElement: CardElement) => void;
}

const CardEditor: React.FC<CardEditorProps> = ({ 
  selectedTemplate, 
  elements, 
  onUpdateElement, 
  onAddElement 
}) => {
  return (
    <div>
      {selectedTemplate && (
        <div 
          className="mb-4 w-full h-48 bg-gray-100 rounded-lg overflow-hidden"
          dangerouslySetInnerHTML={{ __html: selectedTemplate.svg }}
        />
      )}
      <LivePreview 
        elements={elements} 
        setElements={(newElements: React.SetStateAction<CardElement[]>) => {
          if (typeof newElements === 'function') {
            const updatedElements = newElements(elements);
            updatedElements.forEach(element => onUpdateElement(element));
          } else {
            newElements.forEach(element => onUpdateElement(element));
          }
        }} 
      />
      {/* Add more customization tools here */}
    </div>
  );
};

export default CardEditor;