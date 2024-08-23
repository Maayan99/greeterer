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