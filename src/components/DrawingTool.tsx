import React, { useState, useRef, useEffect } from 'react';
import { SketchPicker } from 'react-color';

const DrawingTool: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (context) {
      context.lineCap = 'round';
      context.lineJoin = 'round';
    }
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (context) {
      context.beginPath();
      context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      setIsDrawing(true);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (context) {
      context.lineWidth = brushSize;
      context.strokeStyle = color;
      context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      context.stroke();

      // Animate the brush stroke
      const particle = document.createElement('div');
      particle.style.width = `${brushSize}px`;
      particle.style.height = `${brushSize}px`;
      particle.style.backgroundColor = color;
      particle.style.position = 'absolute';
      particle.style.left = `${e.nativeEvent.offsetX}px`;
      particle.style.top = `${e.nativeEvent.offsetY}px`;
      particle.style.borderRadius = '50%';
      particle.style.opacity = '0.5';
      particle.style.transition = 'all 0.5s ease-out';
      canvas?.parentNode?.appendChild(particle);

      setTimeout(() => {
        particle.style.transform = `translate(${(Math.random() - 0.5) * 20}px, ${(Math.random() - 0.5) * 20}px)`;
        particle.style.opacity = '0';
      }, 50);

      setTimeout(() => {
        particle.remove();
      }, 550);
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <div className="mt-4">
      <canvas
        ref={canvasRef}
        width={300}
        height={200}
        className="border border-gray-300 rounded"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
      />
      <div className="mt-2">
        <label className="block text-sm font-medium text-gray-700">Brush Size</label>
        <input
          type="range"
          min="1"
          max="20"
          value={brushSize}
          onChange={(e) => setBrushSize(parseInt(e.target.value))}
          className="w-full"
        />
      </div>
      <div className="mt-2">
        <label className="block text-sm font-medium text-gray-700">Color</label>
        <SketchPicker
          color={color}
          onChangeComplete={(color) => setColor(color.hex)}
        />
      </div>
    </div>
  );
};

export default DrawingTool;
