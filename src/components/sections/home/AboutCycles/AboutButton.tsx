import { ChevronDown, ChevronUp } from "lucide-react";

type AboutButtonProps = {
  chevronOpen: boolean;
  onClick: () => void;
};

const AboutButton = ({ chevronOpen, onClick }: AboutButtonProps) => {
  return (
    <button
      className="w-full py-6 flex items-center justify-between cursor-pointer"
      onClick={onClick}
    >
      <span className="text-primary">SOBRE OS CICLOS DE SONO</span>
      {chevronOpen ? (
        <ChevronDown size={20} className="text-primary" />
      ) : (
        <ChevronUp size={20} className="text-primary" />
      )}
    </button>
  );
};
export default AboutButton;
