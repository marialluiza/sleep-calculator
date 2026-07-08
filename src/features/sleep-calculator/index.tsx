"use client";

import Button from "@/components/ui/Button";
import { useSleepCalculatorController } from "./hooks/useSleepCalculatorController";

const SleepCalculator = () => {
  const {
    mode,
    handleModeChange,
    text,
    time,
    handleTimeChange,
    calculateResults,
    resultTitle,
    results,
  } = useSleepCalculatorController();

  return (
    <main className="w-full flex flex-col p-6 gap-8 bg-card border-[1.5px] border-border font-mono">
      <div className="w-full flex">
        <Button
          text="Quero acordar"
          isSelected={mode === "wakeUp"}
          className="py-2"
          onClick={() => handleModeChange("wakeUp")}
        />
        <Button
          text="Vou dormir"
          isSelected={mode === "sleep"}
          className="px-4 py-2"
          onClick={() => handleModeChange("sleep")}
        />
      </div>

      <div className="w-full flex flex-col gap-3">
        <p className="text-muted-foreground text-sm">{text}</p>
        <input
          type="time"
          value={time}
          onChange={handleTimeChange}
          className="bg-input-background px-4 py-4 text-2xl border-[1.5px] border-border focus:outline-none focus:border-primary transition-colors"
          style={{ colorScheme: "dark" }}
        />

        <Button
          text="CALCULAR JANELAS"
          className="py-4 mt-8 bg-primary text-primary-foreground hover:brightness-95"
          onClick={() => calculateResults()}
        />

        <p className="text-muted-foreground text-sm">{resultTitle}</p>
        {results.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </main>
  );
};

export default SleepCalculator;
