interface WavePatternProps {
  className?: string;
  variant?: 'top' | 'bottom';
  color?: string;
}

export function WavePattern({ 
  className = "", 
  variant = 'bottom',
  color = 'hsl(var(--background))'
}: WavePatternProps) {
  const isTop = variant === 'top';
  
  return (
    <div 
      className={`absolute left-0 right-0 overflow-hidden pointer-events-none ${
        isTop ? 'top-0 rotate-180' : 'bottom-0'
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
