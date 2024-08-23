import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { businessCardTemplates } from '../data/businessCardTemplates';

const FeaturedTemplates: React.FC = () => {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">Featured Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {businessCardTemplates.slice(0, 3).map((template) => (
          <div key={template.id} className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="aspect-w-16 aspect-h-9">
              <div dangerouslySetInnerHTML={{ __html: template.svg }} className="w-full h-full" />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link href={`/create?template=${template.id}`}>
                <button className="bg-white text-purple-800 font-bold py-2 px-4 rounded-full hover:bg-purple-100 transition-colors duration-200">
                  Customize Now
                </button>
              </Link>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-xl font-bold text-purple-800">{template.name}</h3>
              <p className="text-sm text-gray-600">Click to start customizing</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTemplates;