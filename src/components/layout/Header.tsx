import { Moon } from "lucide-react";

const HeaderComponent = () => {
  return (
    <header className="font-mono">
      <div className="w-full flex p-6 tracking-wider text-muted-foreground">
        <div className="w-full flex gap-3 items-center">
          <Moon size={18} className="text-primary" strokeWidth={1.5} />
          <h1>CICLOS DO SONO</h1>
        </div>

        <div className="w-full flex justify-end items-center text-xs">
          <p>90 min/ ciclo</p>
        </div>
      </div>

      <div className="w-full h-px bg-border" />
    </header>
  );
};

export default HeaderComponent;
