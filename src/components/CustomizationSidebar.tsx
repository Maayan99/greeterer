import React, { useState } from 'react';
import { FaFont, FaImage, FaSmile, FaPaintBrush } from 'react-icons/fa';
import DrawingTool from './DrawingTool';
import StickerLibrary from './StickerLibrary';

const tools = [
  { id: 'text', name: 'Add Text', icon: FaFont },
  { id: 'image', name: 'Add Image', icon: FaImage },
  { id: 'sticker', name: 'Add Sticker', icon: FaSmile },
  { id: 'draw', name: 'Draw', icon: FaPaintBrush },
];

const CustomizationSidebar: React.FC = () => {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Customization Tools</h3>
      <div className="space-y-4">
        {tools.map((tool) => (
          <button
            key={tool.id}
            className={`flex items-center w-full p-2 rounded-md transition-colors duration-200 ${activeTool === tool.id ? 'bg-purple-100' : 'hover:bg-purple-100'}`}
            onClick={() => setActiveTool(tool.id)}
            title={tool.name}
          >
            <tool.icon className="mr-2" />
            <span>{tool.name}</span>
          </button>
        ))}
      </div>
      {activeTool === 'draw' && <DrawingTool />}
      {activeTool === 'sticker' && <StickerLibrary />}
    </div>
  );
};

export default CustomizationSidebar;
