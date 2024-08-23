import React from 'react';
import Draggable from 'react-draggable';

const stickers = [
  { id: 's1', svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0-14c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg> },
  { id: 's2', svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M21.143 9.667c-.733-1.392-1.914-3.05-3.617-4.753C14.549 1.936 12.417.5 10.5.5 8.581.5 6.45 1.936 3.47 4.915 1.768 6.618.587 8.275-.147 9.667c-.234.445-.234.933 0 1.378.734 1.392 1.915 3.049 3.617 4.753 2.977 2.978 5.11 4.413 7.03 4.413 1.92 0 4.054-1.435 7.03-4.413 1.703-1.704 2.884-3.361 3.617-4.753.234-.445.234-.933 0-1.378z"/></svg> },
  { id: 's3', svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> },
];

const StickerLibrary: React.FC = () => {
  return (
    <div className="mt-4">
      <h4 className="text-lg font-semibold mb-2">Stickers</h4>
      <div className="grid grid-cols-3 gap-2">
        {stickers.map((sticker) => (
          <Draggable key={sticker.id}>
            <div className="cursor-move transform transition-transform duration-200 hover:scale-110">
              {sticker.svg}
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default StickerLibrary;
