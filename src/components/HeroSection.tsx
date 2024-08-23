import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        const scrollY = window.scrollY;
        Array.from(cards).forEach((card, index) => {
          const rotation = (scrollY / 10 + index * 30) % 360;
          (card as HTMLElement).style.transform = `rotateY(${rotation}deg)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <h1 className="text-5xl font-bold text-center text-purple-800 z-10 mb-8">
        Create Your Perfect Greeting Card
      </h1>
      <div ref={cardsRef} className="absolute w-full h-full">
        {['birthday', 'holiday', 'anniversary', 'thank-you', 'congratulations'].map((type, index) => (
          <div key={type} className="absolute transition-transform duration-500 ease-in-out" style={{
            top: `${20 + index * 10}%`,
            left: `${10 + index * 20}%`,
            transform: `rotateY(${index * 30}deg)`
          }}>
            <Image src={`/images/${type}-card.jpg`} alt={`${type} card`} width={200} height={300} className="rounded-lg shadow-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
