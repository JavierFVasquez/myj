interface SectionWaveProps {
  flip?: boolean;
  color?: string;
  height?: string;
}

const SectionWave = ({ 
  flip = false, 
  color = "#1b2a46",
  height = "60px"
}: SectionWaveProps) => (
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
    <path
      d="M0,0 C480,120 960,0 1440,120 L1440,120 L0,120 Z"
      fill={color}
    />
  </svg>
);

export default SectionWave; 