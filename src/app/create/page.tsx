'use client'

import React, { useState } from 'react';
import TemplateSelection from '@/components/TemplateSelection';
import CustomizationSidebar from '@/components/CustomizationSidebar';
import LivePreview from '@/components/LivePreview';
import SaveSendOptions from '@/components/SaveSendOptions';

interface Element {
  id: string;
  type: string;
  content: string;
  x: number;
  y: number;
  fontSize: number;
  color: string;
}

export default function CardCreationPage() {
  const [elements, setElements] = useState<Element[]>([]);

  const handleAddElement = (type: string, content: string) => {
    const newElement: Element = {
      id: Date.now().toString(),
      type,
      content,
      x: 0,
      y: 0,
      fontSize: 16,
      color: '#000000'
    };
    setElements([...elements, newElement]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">Create Your Card</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <TemplateSelection />
          <CustomizationSidebar onAddElement={handleAddElement} />
        </div>
        <div className="lg:w-3/4">
          <LivePreview elements={elements} setElements={setElements} />
          <SaveSendOptions />
        </div>
      </div>
    </div>
  );
}