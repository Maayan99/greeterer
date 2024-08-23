import React from 'react';
import Image from 'next/image';
import Draggable from 'react-draggable';

const stickers = [
  { id: 's1', src: '/images/sticker1.png' },
  { id: 's2', src: '/images/sticker2.png' },
  { id: 's3', src: '/images/sticker3.png' },
];

const StickerLibrary: React.FC = () => {
  return (
    <div className="mt-4">
      <h4 className="text-lg font-semibold mb-2">Stickers</h4>
      <div className="grid grid-cols-3 gap-2">
        {stickers.map((sticker) => (
          <Draggable key={sticker.id}>
            <div className="cursor-move transform transition-transform duration-200 hover:scale-110">
              <Image
                src={sticker.src}
                alt={`Sticker ${sticker.id}`}
                width={50}
                height={50}
                className="rounded-md"
              />
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default StickerLibrary;
