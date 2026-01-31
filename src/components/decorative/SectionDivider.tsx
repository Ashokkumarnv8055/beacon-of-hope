import { Sparkles } from "lucide-react";

interface SectionDividerProps {
  className?: string;
  showIcon?: boolean;
}

export function SectionDivider({ className = "", showIcon = true }: SectionDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-4 py-4 ${className}`} aria-hidden="true">
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-secondary/50 to-secondary" />
      {showIcon && (
        <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-secondary" />
        </div>
      )}
      <div className="h-px w-16 bg-gradient-to-l from-transparent via-secondary/50 to-secondary" />
    </div>
  );
}
