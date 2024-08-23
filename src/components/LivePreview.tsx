import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';

interface Element {
  id: string;
  type: string;
  content: string;
  x: number;
  y: number;
  fontSize?: number;
  color?: string;
}

const LivePreview: React.FC = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [zoom, setZoom] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (zoom) {
      const timer = setTimeout(() => setZoom(false), 300);
      return () => clearTimeout(timer);
    }
  }, [zoom]);

  const addElement = (type: string, content: string) => {
    const newElement: Element = {
      id: Date.now().toString(),
      type,
      content,
      x: 0,
      y: 0,
      fontSize: 16,
      color: '#000000'
    };
    setElements([...elements, newElement]);
    setZoom(true);
  };

  const updateElement = (id: string, updates: Partial<Element>) => {
    setElements(elements.map(el => el.id === id ? { ...el, ...updates } : el));
  };

  const handleDrag = (id: string, e: any, data: { x: number; y: number }) => {
    updateElement(id, { x: data.x, y: data.y });
  };

  const handleSelect = (id: string) => {
    setSelectedElement(id);
  };

  const handleTextChange = (id: string, newText: string) => {
    updateElement(id, { content: newText });
  };

  const handleFontSizeChange = (id: string, newSize: number) => {
    updateElement(id, { fontSize: newSize });
  };

  const handleColorChange = (id: string, newColor: string) => {
    updateElement(id, { color: newColor });
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
      <div className="mt-4 flex justify-center space-x-4">
        <button onClick={() => addElement('text', 'Sample Text')} className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
          Add Text
        </button>
        <button onClick={() => addElement('sticker', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0-14c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>')} className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
          Add Sticker
        </button>
      </div>
    </div>
  );
};

export default LivePreview;
