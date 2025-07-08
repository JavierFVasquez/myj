import goldBranch from "@/assets/gold-ornament.png";

interface GoldBranchSeparatorProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const GoldBranchSeparator = ({ 
  size = 120, 
  className = "",
  style = {}
}: GoldBranchSeparatorProps) => (
  <div className={`flex justify-center my-8 ${className}`}>
    <img
      src={goldBranch}
      alt="Gold botanical separator"
      style={{
        width: size,
        maxWidth: "60vw",
        filter: "drop-shadow(0 2px 8px #d4af3740)",
        ...style,
      }}
    />
  </div>
);

export default GoldBranchSeparator; 