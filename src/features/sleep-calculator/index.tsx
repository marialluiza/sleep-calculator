"use client";

import { useSleepCalculatorController } from "./hooks/useSleepCalculatorController";
import ModeButtons from "./components/ModeButtons";
import Results from "./components/Results";
import CalculatorForm from "./components/CalculatorForm";

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
      <ModeButtons mode={mode} onModeChange={handleModeChange} />

      <CalculatorForm
        text={text}
        time={time}
        onTimeChange={handleTimeChange}
        calculateResults={calculateResults}
      />

      <Results results={results} resultTitle={resultTitle} />
    </div>
  );
};

export default SleepCalculator;
