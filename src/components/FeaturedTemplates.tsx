import React from 'react';
import Image from 'next/image';

const templates = [
  { id: 1, name: 'Birthday Blast', image: '/images/birthday-template.jpg' },
  { id: 2, name: 'Holiday Cheer', image: '/images/holiday-template.jpg' },
  { id: 3, name: 'Anniversary Love', image: '/images/anniversary-template.jpg' },
];

const FeaturedTemplates: React.FC = () => {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">Featured Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {templates.map((template) => (
          <div key={template.id} className="relative group overflow-hidden rounded-lg shadow-lg">
            <Image src={template.image} alt={template.name} width={400} height={600} className="w-full h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-2">{template.name}</h3>
                <p className="text-sm">Click to customize</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 mix-blend-overlay opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTemplates;
