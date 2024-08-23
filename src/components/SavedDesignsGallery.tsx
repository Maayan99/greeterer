import React from 'react';
import Image from 'next/image';

const savedDesigns = [
  { id: 'd1', name: 'Birthday Card', image: '/images/saved-design-1.jpg' },
  { id: 'd2', name: 'Anniversary Card', image: '/images/saved-design-2.jpg' },
  { id: 'd3', name: 'Thank You Card', image: '/images/saved-design-3.jpg' },
];

const SavedDesignsGallery: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Saved Designs</h2>
      <div className="grid grid-cols-2 gap-4">
        {savedDesigns.map((design) => (
          <div
            key={design.id}
            className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
          >
            <Image
              src={design.image}
              alt={design.name}
              width={200}
              height={300}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-center">
                <h3 className="text-lg font-bold mb-2">{design.name}</h3>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-full mr-2 hover:bg-purple-700 transition-colors duration-200">
                  View
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-200">
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedDesignsGallery;
