import Button from "@/components/ui/Button";
import { ModeType } from "../../types";

type ModeButtonProps = {
  mode: ModeType;
  onModeChange: (buttonMode: ModeType) => void;
};

const ModeButtons = ({ mode, onModeChange }: ModeButtonProps) => {
  return (
    <section className="w-full flex">
      <Button
        text="Quero acordar"
        isSelected={mode === "wakeUp"}
        className="py-2"
        onClick={() => onModeChange("wakeUp")}
      />
      <Button
        text="Vou dormir"
        isSelected={mode === "sleep"}
        className="px-4 py-2"
        onClick={() => onModeChange("sleep")}
      />
    </section>
  );
};

export default ModeButtons;
