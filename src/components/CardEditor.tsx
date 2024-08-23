import React from 'react';
import Draggable from 'react-draggable';
import { CardElement } from '../app/create/page';

interface CardEditorProps {
  elements: CardElement[];
  onUpdateElement: (element: CardElement) => void;
  onAddElement: (element: CardElement) => void;
}

const CardEditor: React.FC<CardEditorProps> = ({ elements, onUpdateElement, onAddElement }) => {
  const handleDragStop = (e: any, data: any, element: CardElement) => {
    onUpdateElement({ ...element, x: data.x, y: data.y });
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>, element: CardElement) => {
    onUpdateElement({ ...element, content: e.target.value });
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
      {elements.map((element) => (
        <Draggable
          key={element.id}
          defaultPosition={{ x: element.x, y: element.y }}
          onStop={(e, data) => handleDragStop(e, data, element)}
        >
          <div style={{ position: 'absolute', width: element.width, height: element.height }}>
            {element.type === 'text' && (
              <textarea
                value={element.content}
                onChange={(e) => handleTextChange(e, element)}
                style={{
                  width: '100%',
                  height: '100%',
                  fontSize: `${element.fontSize}px`,
                  color: element.color,
                  backgroundColor: element.backgroundColor || 'transparent',
                  resize: 'none',
                  border: 'none',
                  outline: 'none',
                }}
              />
            )}
            {/* Add handlers for other element types here */}
          </div>
        </Draggable>
      ))}
      <div className="absolute bottom-4 right-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
          onClick={handleAddText}
        >
          Add Text
        </button>
      </div>
    </div>
  );
};

export default CardEditor;
