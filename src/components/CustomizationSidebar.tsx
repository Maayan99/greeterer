import React from 'react';

const tools = [
  { id: 'text', name: 'Add Text' },
  { id: 'image', name: 'Add Image' },
  { id: 'sticker', name: 'Add Sticker' },
  { id: 'draw', name: 'Draw' },
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
            <span>{tool.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomizationSidebar;