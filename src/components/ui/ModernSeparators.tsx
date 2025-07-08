interface SeparatorProps {
  variant?: 'wave' | 'curve' | 'zigzag' | 'dots' | 'floral';
  color?: string;
  height?: string;
  flip?: boolean;
}

const ModernSeparators = ({ 
  variant = 'wave', 
  color = "#1b2a46",
  height = "60px",
  flip = false
}: SeparatorProps) => {
  const separators = {
    wave: (
      <path d="M0,0 C480,120 960,0 1440,120 L1440,120 L0,120 Z" fill={color} />
    ),
    curve: (
      <path d="M0,0 C360,80 720,40 1440,80 L1440,120 L0,120 Z" fill={color} />
    ),
    zigzag: (
      <path d="M0,60 L240,20 L480,60 L720,20 L960,60 L1200,20 L1440,60 L1440,120 L0,120 Z" fill={color} />
    ),
    dots: (
      <>
        <rect width="1440" height="120" fill={color} />
        <circle cx="120" cy="30" r="8" fill="transparent" stroke="#d4af37" strokeWidth="2" />
        <circle cx="360" cy="60" r="6" fill="transparent" stroke="#d4af37" strokeWidth="2" />
        <circle cx="600" cy="40" r="8" fill="transparent" stroke="#d4af37" strokeWidth="2" />
        <circle cx="840" cy="70" r="6" fill="transparent" stroke="#d4af37" strokeWidth="2" />
        <circle cx="1080" cy="35" r="8" fill="transparent" stroke="#d4af37" strokeWidth="2" />
        <circle cx="1320" cy="65" r="6" fill="transparent" stroke="#d4af37" strokeWidth="2" />
      </>
    ),
    floral: (
      <>
        <rect width="1440" height="120" fill={color} />
        <path d="M200,60 Q220,40 240,60 Q260,80 240,100 Q220,120 200,100 Q180,80 200,60" fill="#d4af37" opacity="0.6" />
        <path d="M600,60 Q620,40 640,60 Q660,80 640,100 Q620,120 600,100 Q580,80 600,60" fill="#d4af37" opacity="0.6" />
        <path d="M1000,60 Q1020,40 1040,60 Q1060,80 1040,100 Q1020,120 1000,100 Q980,80 1000,60" fill="#d4af37" opacity="0.6" />
        <path d="M1200,60 Q1220,40 1240,60 Q1260,80 1240,100 Q1220,120 1200,100 Q1180,80 1200,60" fill="#d4af37" opacity="0.6" />
      </>
    )
  };

  return (
    <svg
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "block",
        width: "100%",
        height: height,
        transform: flip ? "rotate(180deg)" : undefined,
      }}
      preserveAspectRatio="none"
    >
      {separators[variant]}
    </svg>
  );
};

export default ModernSeparators; 