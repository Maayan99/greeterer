import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import Element from '../app/create/page';

interface LivePreviewProps {
  elements: Element[];
  setElements: React.Dispatch<React.SetStateAction<Element[]>>;
}

const LivePreview: React.FC<LivePreviewProps> = ({ elements, setElements }) => {
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [zoom, setZoom] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (zoom) {
      const timer = setTimeout(() => setZoom(false), 300);
      return () => clearTimeout(timer);
    }
  }, [zoom]);

  const handleDrag = (id: string, e: any, data: { x: number; y: number }) => {
    setElements(prevElements =>
      prevElements.map(el => el.id === id ? { ...el, x: data.x, y: data.y } : el)
    );
  };

  const handleSelect = (id: string) => {
    setSelectedElement(id);
  };

  const handleTextChange = (id: string, newText: string) => {
    setElements(prevElements =>
      prevElements.map(el => el.id === id ? { ...el, content: newText } : el)
    );
  };

  const handleFontSizeChange = (id: string, newSize: number) => {
    setElements(prevElements =>
      prevElements.map(el => el.id === id ? { ...el, fontSize: newSize } : el)
    );
  };

  const handleColorChange = (id: string, newColor: string) => {
    setElements(prevElements =>
      prevElements.map(el => el.id === id ? { ...el, color: newColor } : el)
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Live Preview</h3>
      <div
        ref={previewRef}
        className={`relative w-full h-96 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden ${zoom ? 'scale-105' : ''} transition-transform duration-300`}
      >
        {elements.map((element) => (
          <Draggable
            key={element.id}
            position={{x: element.x, y: element.y}}
            onDrag={(e, data) => handleDrag(element.id, e, data)}
            bounds="parent"
          >
            <div
              className={`absolute cursor-move ${selectedElement === element.id ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => handleSelect(element.id)}
            >
              {element.type === 'text' && (
                <textarea
                  value={element.content}
                  onChange={(e) => handleTextChange(element.id, e.target.value)}
                  style={{ fontSize: `${element.fontSize}px`, color: element.color }}
                  className="bg-transparent resize-none outline-none"
                />
              )}
              {element.type === 'sticker' && (
                <div dangerouslySetInnerHTML={{ __html: element.content }} />
              )}
            </div>
          </Draggable>
        ))}
      </div>
      {selectedElement && (
        <div className="mt-4">
          <input
            type="range"
            min="8"
            max="72"
            value={elements.find(el => el.id === selectedElement)?.fontSize || 16}
            onChange={(e) => handleFontSizeChange(selectedElement, Number(e.target.value))}
            className="w-full"
          />
          <input
            type="color"
            value={elements.find(el => el.id === selectedElement)?.color || '#000000'}
            onChange={(e) => handleColorChange(selectedElement, e.target.value)}
            className="mt-2"
          />
        </div>
      )}
    </div>
  );
};

export default LivePreview;