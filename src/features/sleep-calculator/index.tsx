"use client";

import Button from "@/components/ui/Button";
import { useSleepCalculatorController } from "./hooks/useSleepCalculatorController";
import ResultCard from "./components/ResultCard";

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
    <div className="w-full flex flex-col p-6 gap-8 bg-card border-[1.5px] border-border font-mono">
      <section className="w-full flex">
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
      </section>

      <section className="w-full flex flex-col gap-3">
        <p className="text-muted-foreground text-sm">{text}</p>
        <input
          type="time"
          value={time}
          onChange={handleTimeChange}
          className="bg-input-background px-3 py-3 text-2xl border-[1.5px] border-border focus:outline-none focus:border-primary transition-colors"
          style={{ colorScheme: "dark" }}
        />

        <Button
          text="CALCULAR JANELAS"
          className="py-3 mt-8 bg-primary text-primary-foreground hover:brightness-95"
          onClick={() => calculateResults()}
        />

        <section className="flex flex-col gap-3">
          {results.length > 0 && (
            <h2 className="text-muted-foreground text-sm">{resultTitle}</h2>
          )}

          {results.map((result) => (
            <ResultCard key={result.id} result={result} />
          ))}
        </section>
      </section>
    </div>
  );
};

export default SleepCalculator;
