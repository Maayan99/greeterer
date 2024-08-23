import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const LivePreview: React.FC = () => {
  const [elements, setElements] = useState<Array<{ id: string; type: string; content: string }>>([]);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    if (zoom) {
      const timer = setTimeout(() => setZoom(false), 300);
      return () => clearTimeout(timer);
    }
  }, [zoom]);

  const addElement = (type: string, content: string) => {
    const newElement = { id: Date.now().toString(), type, content };
    setElements([...elements, newElement]);
    setZoom(true);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Live Preview</h3>
      <div className={`relative w-full h-96 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden ${zoom ? 'scale-105' : ''} transition-transform duration-300`}>
        <Image src="/images/blank-card.jpg" alt="Blank Card" layout="fill" objectFit="cover" />
        {elements.map((element) => (
          <div key={element.id} className="absolute p-2 bg-white rounded shadow">
            {element.type === 'text' && <p>{element.content}</p>}
            {element.type === 'image' && <Image src={element.content} alt="Added image" width={100} height={100} />}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <button onClick={() => addElement('text', 'Sample Text')} className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
          Add Sample Text
        </button>
        <button onClick={() => addElement('image', '/images/sample-sticker.png')} className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
          Add Sample Image
        </button>
      </div>
    </div>
  );
};

export default LivePreview;
