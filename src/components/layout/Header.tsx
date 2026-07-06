import { Moon } from "lucide-react";

const HeaderComponent = () => {
  return (
    <div className="w-full flex justify-between p-8  items-center">
      <div className="w-full flex gap-4  items-center">
        <Moon size={18} className="text-primary" strokeWidth={1.5} />
        <h1>CiCLOS DO SONO</h1>
      </div>

      <div className="w-full flex justify-end ">
        <p>90 min/ ciclo</p>
      </div>

      <div className="divide-y-4 divide-yellow-600" />
    </div>
  );
};

export default HeaderComponent;
