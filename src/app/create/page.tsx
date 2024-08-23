'use client'

import React from 'react';
import TemplateSelection from '@/components/TemplateSelection';
import CustomizationSidebar from '@/components/CustomizationSidebar';
import LivePreview from '@/components/LivePreview';
import SaveSendOptions from '@/components/SaveSendOptions';

export default function CardCreationPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">Create Your Card</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <TemplateSelection />
          <CustomizationSidebar />
        </div>
        <div className="lg:w-3/4">
          <LivePreview />
          <SaveSendOptions />
        </div>
      </div>
    </div>
  );
}
