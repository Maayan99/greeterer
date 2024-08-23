import React from 'react';

const SaveSendOptions: React.FC = () => {
  return (
    <div className="mt-8 flex justify-between items-center">
      <button className="px-6 py-3 bg-purple-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out animate-pulse">
        Save Design
      </button>
      <button className="px-6 py-3 bg-green-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
        Send Card
      </button>
    </div>
  );
};

export default SaveSendOptions;
