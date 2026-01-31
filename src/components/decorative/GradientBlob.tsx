interface GradientBlobProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'w-32 h-32',
  md: 'w-48 h-48',
  lg: 'w-72 h-72',
  xl: 'w-96 h-96',
};

const variantClasses = {
  primary: 'from-primary/20 via-primary/10 to-transparent',
  secondary: 'from-secondary/30 via-secondary/15 to-transparent',
  accent: 'from-accent/25 via-accent/10 to-transparent',
};

export function GradientBlob({ 
  className = "", 
  variant = 'secondary',
  size = 'lg' 
}: GradientBlobProps) {
  return (
    <div 
      className={`absolute rounded-full bg-gradient-radial ${sizeClasses[size]} ${variantClasses[variant]} blur-3xl pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
