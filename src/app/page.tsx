'use client'

import React from 'react';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import FeaturedTemplates from '@/components/FeaturedTemplates';
import VisualElement from '@/components/VisualElement';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <HeroSection />
      <VisualElement />
      <FeaturedTemplates />
      <div className="text-center mt-12 space-y-6">
        <Link href="/create">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out animate-pulse">
            Start Creating Now
          </button>
        </Link>
        <p className="text-xl text-gray-600">Choose a template above or start from scratch!</p>
      </div>
    </div>
  );
}