import React, { useState } from 'react';
import DrawingTool from './DrawingTool';
import StickerLibrary from './StickerLibrary';

const CustomizationSidebar: React.FC = () => {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const tools = [
    { id: 'text', name: 'Add Text', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ) },
    { id: 'sticker', name: 'Add Sticker', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ) },
    { id: 'draw', name: 'Draw', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ) },
  ];

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
            {tool.icon}
            <span className="ml-2">{tool.name}</span>
          </button>
        ))}
      </div>
      {activeTool === 'draw' && <DrawingTool />}
      {activeTool === 'sticker' && <StickerLibrary />}
    </div>
  );
};

export default CustomizationSidebar;
