'use client'

import React from 'react';
import SavedDesignsGallery from '@/components/SavedDesignsGallery';
import AccountSettings from '@/components/AccountSettings';

export default function UserProfilePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">Your Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SavedDesignsGallery />
        <AccountSettings />
      </div>
    </div>
  );
}
