import { Moon } from "lucide-react";
import Divider from "../ui/Divider";

const HeaderComponent = () => {
  return (
    <header className="font-mono">
      <div className="w-full flex px-30 py-6 tracking-wider text-muted-foreground">
        <div className="w-full flex gap-3 items-center">
          <Moon size={18} className="text-primary" strokeWidth={1.5} />
          <span>CICLOS DO SONO</span>
        </div>

        <div className="w-full flex justify-end items-center text-xs">
          <p>90 min/ ciclo</p>
        </div>
      </div>

      <Divider />
    </header>
  );
};

export default HeaderComponent;
