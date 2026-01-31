import { useEffect, useState } from "react";

interface Shape {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  type: 'circle' | 'ring' | 'dot';
}

interface FloatingShapesProps {
  count?: number;
  className?: string;
}

export function FloatingShapes({ count = 6, className = "" }: FloatingShapesProps) {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const newShapes: Shape[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 20,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      type: ['circle', 'ring', 'dot'][Math.floor(Math.random() * 3)] as Shape['type'],
    }));
    setShapes(newShapes);
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute rounded-full animate-float"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            animationDuration: `${shape.duration}s`,
            animationDelay: `${shape.delay}s`,
            background: shape.type === 'circle' 
              ? 'linear-gradient(135deg, hsl(38 92% 50% / 0.15), hsl(38 92% 50% / 0.05))'
              : 'transparent',
            border: shape.type === 'ring' 
              ? '2px solid hsl(38 92% 50% / 0.2)'
              : shape.type === 'dot' 
                ? '4px solid hsl(38 92% 50% / 0.3)'
                : 'none',
          }}
        />
      ))}
    </div>
  );
}
