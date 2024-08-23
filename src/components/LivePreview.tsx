import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import { CardElement } from '../types/cardTypes';
import { FaTrash, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import html2canvas from 'html2canvas';

interface LivePreviewProps {
  elements: CardElement[];
  setElements: React.Dispatch<React.SetStateAction<CardElement[]>>;
  selectedTemplate: { svg: string } | null;
}

const LivePreview: React.FC<LivePreviewProps> = ({ elements, setElements, selectedTemplate }) => {
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
    if (trashcanRef.current && previewRef.current) {
      const trashcanRect = trashcanRef.current.getBoundingClientRect();
      const previewRect = previewRef.current.getBoundingClientRect();
      const relativeX = data.x + previewRect.left;
      const relativeY = data.y + previewRect.top;
      return (
        relativeX > trashcanRect.left &&
        relativeX < trashcanRect.right &&
        relativeY > trashcanRect.top &&
        relativeY < trashcanRect.bottom
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

  const generateImage = async (): Promise<string> => {
    if (previewRef.current) {
      const canvas = await html2canvas(previewRef.current);
      return canvas.toDataURL('image/png');
    }
    return '';
  };

  const shareViaWhatsApp = async () => {
    const image = await generateImage();
    const websiteLink = 'https://your-website-url.com';
    const message = encodeURIComponent(`Check out my new business card! ${websiteLink}`);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${message}`;
    
    // Note: WhatsApp doesn't support direct image sharing via URL. 
    // We'll open a new window with the message and link instead.
    window.open(whatsappUrl, '_blank');
  };

  const shareViaTwitter = async () => {
    const image = await generateImage();
    const websiteLink = 'https://your-website-url.com';
    const message = encodeURIComponent(`Check out my new business card! ${websiteLink}`);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${message}`;
    
    // Open a new window with the tweet intent
    window.open(twitterUrl, '_blank');
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md relative">
      <h3 className="text-xl font-bold mb-4">Live Preview</h3>
      <div
        ref={previewRef}
        className={`relative w-full h-96 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden ${zoom ? 'scale-105' : ''} transition-transform duration-300`}
        style={{ backgroundColor: '#f0f0f0' }}
      >
        {selectedTemplate && (
          <div
            className="absolute inset-0"
            dangerouslySetInnerHTML={{ __html: selectedTemplate.svg }}
          />
        )}
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
                <div 
                  dangerouslySetInnerHTML={{ __html: element.content }} 
                  style={{ width: '100%', height: '100%' }}
                />
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
          onClick={shareViaWhatsApp}
          className="flex px-6 py-3 bg-green-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <FaWhatsapp className="mr-2" /> Share via WhatsApp
        </button>
        <button
          onClick={shareViaTwitter}
          className="flex px-6 py-3 bg-blue-400 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <FaTwitter className="mr-2" /> Share via Twitter
        </button>
        <div
          ref={trashcanRef}
          className="absolute bottom-4 right-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center cursor-pointer"
        >
          <FaTrash className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default LivePreview;