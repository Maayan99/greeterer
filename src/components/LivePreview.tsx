import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import { CardElement } from '../types/cardTypes';
import { FaTrash, FaWhatsapp } from 'react-icons/fa';
import html2canvas from 'html2canvas';

interface LivePreviewProps {
  elements: CardElement[];
  setElements: React.Dispatch<React.SetStateAction<CardElement[]>>;
}

const LivePreview: React.FC<LivePreviewProps> = ({ elements, setElements }) => {
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [zoom, setZoom] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const trashcanRef = useRef<HTMLDivElement>(null);

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

  const handleDragStop = (id: string, e: any, data: { x: number; y: number }) => {
    if (isOverTrashcan(data)) {
      setElements(prevElements => prevElements.filter(el => el.id !== id));
    } else {
      handleDrag(id, e, data);
    }
  };

  const isOverTrashcan = (data: { x: number; y: number }) => {
    if (trashcanRef.current) {
      const trashcanRect = trashcanRef.current.getBoundingClientRect();
      return (
        data.x > trashcanRect.left &&
        data.x < trashcanRect.right &&
        data.y > trashcanRect.top &&
        data.y < trashcanRect.bottom
      );
    }
    return false;
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

  const downloadImage = async () => {
    if (previewRef.current) {
      const canvas = await html2canvas(previewRef.current);
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'business-card.png';
      link.click();
    }
  };

  const shareViaWhatsApp = async () => {
    if (previewRef.current) {
      const canvas = await html2canvas(previewRef.current);
      const image = canvas.toDataURL('image/png');
      const message = encodeURIComponent('Check out my new business card!');
      window.open(`https://wa.me/?text=${message}&attachment=${image}`, '_blank');
    }
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
            position={{ x: element.x, y: element.y }}
            onDrag={(e, data) => handleDrag(element.id, e, data)}
            onStop={(e, data) => handleDragStop(element.id, e, data)}
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
              {element.type === 'svg' && (
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
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={downloadImage}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
        >
          Save Design
        </button>
        <button
          onClick={shareViaWhatsApp}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200 flex items-center"
        >
          <FaWhatsapp className="mr-2" /> Share via WhatsApp
        </button>
        <div
          ref={trashcanRef}
          className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center cursor-pointer"
        >
          <FaTrash className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default LivePreview;
