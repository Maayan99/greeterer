import React from 'react';
import { FaFont, FaImage, FaSticker, FaPaintBrush } from 'react-icons/fa';

const tools = [
  { id: 'text', name: 'Add Text', icon: FaFont },
  { id: 'image', name: 'Add Image', icon: FaImage },
  { id: 'sticker', name: 'Add Sticker', icon: FaSticker },
  { id: 'draw', name: 'Draw', icon: FaPaintBrush },
];

const CustomizationSidebar: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Customization Tools</h3>
      <div className="space-y-4">
        {tools.map((tool) => (
          <button
            key={tool.id}
            className="flex items-center w-full p-2 rounded-md hover:bg-purple-100 transition-colors duration-200 group"
            title={tool.name}
          >
            <tool.icon className="text-2xl text-purple-600 mr-3 group-hover:animate-bounce" />
            <span>{tool.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomizationSidebar;
