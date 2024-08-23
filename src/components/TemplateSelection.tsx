import React, { useState } from 'react';
import Image from 'next/image';

const categories = ['Birthday', 'Holiday', 'Anniversary'];
const templates = {
  Birthday: [
    { id: 'b1', name: 'Birthday Blast', image: '/images/birthday-template-1.jpg' },
    { id: 'b2', name: 'Cake Delight', image: '/images/birthday-template-2.jpg' },
  ],
  Holiday: [
    { id: 'h1', name: 'Winter Wonderland', image: '/images/holiday-template-1.jpg' },
    { id: 'h2', name: 'Festive Cheer', image: '/images/holiday-template-2.jpg' },
  ],
  Anniversary: [
    { id: 'a1', name: 'Love Birds', image: '/images/anniversary-template-1.jpg' },
    { id: 'a2', name: 'Golden Hearts', image: '/images/anniversary-template-2.jpg' },
  ],
};

const TemplateSelection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Birthday');

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Choose a Template</h2>
      <div className="flex space-x-4 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full ${activeCategory === category ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {templates[activeCategory as keyof typeof templates].map((template) => (
          <div key={template.id} className="relative group overflow-hidden rounded-lg shadow-lg">
            <Image src={template.image} alt={template.name} width={200} height={300} className="w-full h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-center font-bold">{template.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelection;
