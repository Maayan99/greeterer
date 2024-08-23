import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { CardElement, CardTemplate } from '../types/cardTypes';
import { SketchPicker } from 'react-color';

interface CardEditorProps {
  selectedTemplate: CardTemplate | null;
  elements: CardElement[];
  onUpdateElement: (element: CardElement) => void;
  onAddElement: (element: CardElement) => void;
}

const CardEditor: React.FC<CardEditorProps> = ({ selectedTemplate, elements, onUpdateElement, onAddElement }) => {
  const [selectedElementId, setSelectedElementId] = useState<string | null>(null);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleDragStop = (e: any, data: any, element: CardElement) => {
    onUpdateElement({ ...element, x: data.x, y: data.y });
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>, element: CardElement) => {
    onUpdateElement({ ...element, content: e.target.value });
  };

  const handleColorChange = (color: any) => {
    if (selectedElementId) {
      const element = elements.find(el => el.id === selectedElementId);
      if (element) {
        onUpdateElement({ ...element, color: color.hex });
      }
    }
  };

  const handleAddText = () => {
    const newElement: CardElement = {
      id: `text-${Date.now()}`,
      type: 'text',
      content: 'New Text',
      x: 10,
      y: 10,
      width: 100,
      height: 30,
      fontSize: 14,
      color: '#000000',
    };
    onAddElement(newElement);
  };

  return (
    <div className="relative w-full h-[600px] border-2 border-gray-300 rounded-lg overflow-hidden">
      {selectedTemplate && (
        <div dangerouslySetInnerHTML={{ __html: selectedTemplate.svg }} className="absolute inset-0" />
      )}
      {elements.map((element) => (
        <Draggable
          key={element.id}
          defaultPosition={{ x: element.x, y: element.y }}
          onStop={(e, data) => handleDragStop(e, data, element)}
        >
          <div 
            style={{ 
              position: 'absolute', 
              width: element.width, 
              height: element.height,
              border: selectedElementId === element.id ? '2px solid blue' : 'none'
            }}
            onClick={() => setSelectedElementId(element.id)}
          >
            {element.type === 'text' && (
              <textarea
                value={element.content}
                onChange={(e) => handleTextChange(e, element)}
                style={{
                  width: '100%',
                  height: '100%',
                  fontSize: `${element.fontSize}px`,
                  fontFamily: element.fontFamily,
                  color: element.color,
                  backgroundColor: 'transparent',
                  resize: 'none',
                  border: 'none',
                  outline: 'none',
                }}
              />
            )}
          </div>
        </Draggable>
      ))}
      <div className="absolute bottom-4 right-4 space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
          onClick={handleAddText}
        >
          Add Text
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200"
          onClick={() => setShowColorPicker(!showColorPicker)}
        >
          Change Color
        </button>
      </div>
      {showColorPicker && (
        <div className="absolute bottom-16 right-4">
          <SketchPicker
            color={elements.find(el => el.id === selectedElementId)?.color || '#000000'}
            onChangeComplete={handleColorChange}
          />
        </div>
      )}
    </div>
  );
};

export default CardEditor;
