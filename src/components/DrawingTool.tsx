import React, { useState, useRef, useEffect } from 'react';
import { SketchPicker } from 'react-color';

interface DrawingToolProps {
  onAddElement: (type: string, content: string) => void;
}

const DrawingTool: React.FC<DrawingToolProps> = ({ onAddElement }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);
  const [paths, setPaths] = useState<Array<{ path: Array<[number, number]>; color: string; size: number }>>([]);
  const [currentPath, setCurrentPath] = useState<Array<[number, number]>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (context) {
      context.lineCap = 'round';
      context.lineJoin = 'round';
      redrawCanvas(context);
    }
  }, [paths]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    setCurrentPath([[offsetX, offsetY]]);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    setCurrentPath(prevPath => [...prevPath, [offsetX, offsetY]]);

    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (context) {
      context.strokeStyle = color;
      context.lineWidth = brushSize;
      context.lineTo(offsetX, offsetY);
      context.stroke();
      context.beginPath();
      context.moveTo(offsetX, offsetY);
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    setPaths(prevPaths => [...prevPaths, { path: currentPath, color, size: brushSize }]);
    setCurrentPath([]);
  };

  const redrawCanvas = (context: CanvasRenderingContext2D) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    paths.forEach(({ path, color, size }) => {
      context.beginPath();
      context.strokeStyle = color;
      context.lineWidth = size;
      path.forEach(([x, y], i) => {
        if (i === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
      });
      context.stroke();
    });
  };

  const handleColorChange = (color: any) => {
    setColor(color.hex);
  };

  const handleAddDrawing = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const svgString = `
        <svg width="${canvas.width}" height="${canvas.height}" xmlns="http://www.w3.org/2000/svg">
          ${paths.map(({ path, color, size }) => `
            <path d="${path.map((point, i) => `${i === 0 ? 'M' : 'L'} ${point[0]} ${point[1]}`).join(' ')}" 
                  stroke="${color}" 
                  stroke-width="${size}" 
                  fill="none" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"/>
          `).join('')}
        </svg>
      `;
      onAddElement('sticker', svgString);
    }
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
          onChangeComplete={handleColorChange}
        />
      </div>
      <button
        onClick={handleAddDrawing}
        className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors duration-200"
      >
        Add Drawing to Card
      </button>
    </div>
  );
};

export default DrawingTool;
