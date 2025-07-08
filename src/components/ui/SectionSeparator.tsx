import separador1 from '@/assets/separador-1.png';
import separador2 from '@/assets/separador-2.png';
import separador3 from '@/assets/separador-3.png';
import separador4 from '@/assets/separador-4.png';

const assets = [separador1, separador2, separador3, separador4];

interface SectionSeparatorProps {
  number: 1 | 2 | 3 | 4;
  position?: 'left' | 'right';
  fromColor?: 'navy' | 'white';
  toColor?: 'navy' | 'white';
  type?: 'gradient' | 'svg';
  className?: string;
}

const SectionSeparator = ({
  number,
  position = 'left',
  fromColor = 'navy',
  toColor = 'white',
  type = 'svg',
  className = '',
}: SectionSeparatorProps) => {
  const img = assets[number - 1];
  
  // Exact section colors - no transparency or variations
  const fromBg = fromColor === 'navy' ? '#1b2a46' : '#ffffff';
  const toBg = toColor === 'navy' ? '#1b2a46' : '#ffffff';
  
  if (type === 'gradient') {
    // Pure gradient transition - no decorative elements
    return (
      <div
        className={`w-full h-32 ${className}`}
        style={{
          background: `linear-gradient(to bottom, ${fromBg} 0%, ${fromBg} 30%, ${toBg} 70%, ${toBg} 100%)`,
          border: 'none',
          outline: 'none',
          marginBottom: toColor === 'white' ? '-1px' : '0px',
          marginTop: fromColor === 'white' ? '-1px' : '0px',
        }}
      />
    );
  }
  
  // Pure SVG wave separator - solid colors, no gradients
  return (
    <div 
      className={`relative w-full h-40 overflow-hidden ${className}`}
      style={{
        backgroundColor: fromBg,
        border: 'none',
        outline: 'none',
        marginBottom: toColor === 'white' ? '-1px' : '0px',
        marginTop: fromColor === 'white' ? '-1px' : '0px',
      }}
    >
      {/* SVG wave with solid color - no gradients */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
        style={{
          border: 'none',
          outline: 'none',
        }}
      >
        <path
          d="M0,50 C300,15 600,85 900,50 C1050,25 1150,75 1200,50 L1200,160 L0,160 Z"
          fill={toBg}
          style={{
            border: 'none',
            outline: 'none',
            marginBottom: toColor === 'white' ? '-1px' : '0px',
        marginTop: fromColor === 'white' ? '-1px' : '0px',
          }}
        />
      </svg>
      
      {/* Decorative image */}
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 z-10 ${
          position === 'left' ? 'left-12' : 'right-12'
        }`}
        style={{
          border: 'none',
          outline: 'none',
          marginBottom: toColor === 'white' ? '-1px' : '0px',
        marginTop: fromColor === 'white' ? '-1px' : '0px',
        }}
      >
        <img
          src={img}
          alt={`Separador decorativo ${number}`}
          className="pointer-events-none select-none"
          style={{
            width: '180px',
            height: 'auto',
            opacity: 0.95,
            filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.2))',
            border: 'none',
            outline: 'none',
            borderStyle: 'none',
          }}
          draggable={false}
        />
      </div>
    </div>
  );
};

export default SectionSeparator; 