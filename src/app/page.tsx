import React from 'react';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import FeaturedTemplates from '@/components/FeaturedTemplates';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <HeroSection />
      <FeaturedTemplates />
      <div className="text-center mt-12">
        <Link href="/create">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out animate-pulse">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
