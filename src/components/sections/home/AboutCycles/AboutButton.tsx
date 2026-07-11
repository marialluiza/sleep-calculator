import { ChevronDown, ChevronUp } from "lucide-react";

type AboutButtonProps = {
  chevronOpen: boolean;
  onClick: () => void;
};

const AboutButton = ({ chevronOpen, onClick }: AboutButtonProps) => {
  return (
    <button
      className="w-full py-6 flex items-center justify-between cursor-pointer font-mono"
      onClick={onClick}
    >
      <span
        className="text-primary text-xs tracking-widest"
        style={{ letterSpacing: "0.2em" }}
      >
        SOBRE OS CICLOS DE SONO
      </span>

      {chevronOpen ? (
        <ChevronUp size={20} className="text-primary" />
      ) : (
        <ChevronDown size={20} className="text-primary" />
      )}
    </button>
  );
};
export default AboutButton;
