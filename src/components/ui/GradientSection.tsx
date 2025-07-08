import { ReactNode } from 'react';

interface GradientSectionProps {
  children: ReactNode;
  variant?: 'navy' | 'white';
  className?: string;
  withTopGradient?: boolean;
  withBottomGradient?: boolean;
}

const GradientSection = ({ 
  children, 
  variant = 'navy',
  className = "",
  withTopGradient = false,
  withBottomGradient = false
}: GradientSectionProps) => {
  const baseClasses = "py-16 relative";
  
  const gradientClasses = {
    navy: "bg-navy text-white",
    white: "bg-white text-navy"
  };

  const topGradient = withTopGradient ? 
    (variant === 'navy' ? "bg-gradient-to-b from-[#d4af3720] to-transparent" : "bg-gradient-to-b from-[#d4af3710] to-transparent") : "";
  
  const bottomGradient = withBottomGradient ? 
    (variant === 'navy' ? "bg-gradient-to-t from-[#d4af3710] to-transparent" : "bg-gradient-to-t from-[#d4af3720] to-transparent") : "";

  return (
    <section className={`${baseClasses} ${gradientClasses[variant]} ${topGradient} ${bottomGradient} ${className}`}>
      {children}
    </section>
  );
};

export default GradientSection; 