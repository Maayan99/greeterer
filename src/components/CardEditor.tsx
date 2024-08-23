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
        setElements={(newElements: CardElement[]) => {
          newElements.forEach(element => onUpdateElement(element));
        }} 
      />
      {/* Add more customization tools here */}
    </div>
  );
};

export default CardEditor;