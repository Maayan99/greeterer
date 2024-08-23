import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import { CardElement } from '../types/cardTypes';
import { FaTrash } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import { SketchPicker } from 'react-color';

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
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [currentColor, setCurrentColor] = useState('#000000');
  const [svgElements, setSvgElements] = useState<Element[]>([]);

  useEffect(() => {
    if (selectedTemplate) {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(selectedTemplate.svg, 'image/svg+xml');
      setSvgElements(Array.from(svgDoc.documentElement.children));
    }
  }, [selectedTemplate]);

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
    const element = elements.find(el => el.id === id);
    if (element) {
      setCurrentColor(element.color || '#000000');
    }
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

  const handleColorChange = (color: any) => {
    setCurrentColor(color.hex);
    if (selectedElement) {
      setElements(prevElements =>
        prevElements.map(el => el.id === selectedElement ? { ...el, color: color.hex } : el)
      );
    }
  };

  const handleSvgElementChange = (id: string, newContent: string) => {
    setElements(prevElements =>
      prevElements.map(el => el.id === id ? { ...el, content: newContent } : el)
    );
  };

  const handleSvgElementColorChange = (index: number, color: string) => {
    const newSvgElements = [...svgElements];
    const element = newSvgElements[index] as SVGElement;
    element.setAttribute('fill', color);
    setSvgElements(newSvgElements);
  };

  const handleSvgElementSizeChange = (index: number, scale: number) => {
    const newSvgElements = [...svgElements];
    const element = newSvgElements[index] as SVGElement;
    const currentTransform = element.getAttribute('transform') || '';
    element.setAttribute('transform', `${currentTransform} scale(${scale})`);
    setSvgElements(newSvgElements);
  };

  const handleSvgElementDelete = (index: number) => {
    const newSvgElements = [...svgElements];
    newSvgElements.splice(index, 1);
    setSvgElements(newSvgElements);
  };

  const handleGradientChange = (id: string, gradient: { type: 'linear' | 'radial'; colors: string[]; stops: number[] }) => {
    setElements(prevElements =>
      prevElements.map(el => el.id === id ? { ...el, gradient } : el)
    );
  };

  const generateImage = async (): Promise<string> => {
    if (previewRef.current) {
      const canvas = await html2canvas(previewRef.current);
      return canvas.toDataURL('image/png');
    }
    return '';
  };

  const handleDownload = async () => {
    const image = await generateImage();
    const link = document.createElement('a');
    link.href = image;
    link.download = 'business-card.png';
    link.click();
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
            dangerouslySetInnerHTML={{
              __html: svgElements.map(el => el.outerHTML).join('')
            }}
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
                  style={{
                    fontSize: `${element.fontSize}px`,
                    color: element.color,
                    background: element.gradient
                      ? `${element.gradient.type}-gradient(${element.gradient.colors.map((color, index) => `${color} ${element.gradient!.stops[index]}%`).join(', ')})`
                      : 'transparent'
                  }}
                  className="bg-transparent resize-none outline-none"
                />
              )}
              {element.type === 'svg' && (
                <div 
                  dangerouslySetInnerHTML={{ __html: element.content }} 
                  style={{ width: '100%', height: '100%' }}
                  contentEditable
                  onBlur={(e) => handleSvgElementChange(element.id, e.currentTarget.innerHTML)}
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
          <button
            onClick={() => setShowColorPicker(!showColorPicker)}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            {showColorPicker ? 'Close Color Picker' : 'Open Color Picker'}
          </button>
          {showColorPicker && (
            <SketchPicker
              color={currentColor}
              onChangeComplete={handleColorChange}
            />
          )}
          <button
            onClick={() => handleGradientChange(selectedElement, {
              type: 'linear',
              colors: ['#ff0000', '#0000ff'],
              stops: [0, 100]
            })}
            className="mt-2 bg-purple-500 text-white px-4 py-2 rounded ml-2"
          >
            Add Gradient
          </button>
        </div>
      )}
      <div className="mt-4">
        <h4 className="font-bold mb-2">SVG Elements:</h4>
        {svgElements.map((element, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="color"
              value={element.getAttribute('fill') || '#000000'}
              onChange={(e) => handleSvgElementColorChange(index, e.target.value)}
              className="mr-2"
            />
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.1"
              defaultValue="1"
              onChange={(e) => handleSvgElementSizeChange(index, parseFloat(e.target.value))}
              className="mr-2"
            />
            <button
              onClick={() => handleSvgElementDelete(index)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div
        ref={trashcanRef}
        className="absolute bottom-4 right-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center cursor-pointer"
      >
        <FaTrash className="text-white" />
      </div>
      <button
        onClick={handleDownload}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Download Card
      </button>
    </div>
  );
};

export default LivePreview;