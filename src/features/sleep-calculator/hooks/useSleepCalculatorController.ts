import { useState } from "react";
import { calculateWantsToWakeUp } from "../utils/calculateWantsToWakeUp";
import { calculateWantsToSleepHours } from "../utils/calculateWantsToSleep";
import { CalculateCyclesResult } from "../types";

type ModeType = "wakeUp" | "sleep";

export const useSleepCalculatorController = () => {
  const [time, setTime] = useState<string>("00:00");
  const [mode, setMode] = useState<ModeType>("wakeUp");
  const [results, setResults] = useState<CalculateCyclesResult[]>([]);

  const text = mode === "wakeUp" ? "QUERO ACORDAR ÀS" : "VOU DORMIR ÀS";
  const resultTitle =
    mode === "wakeUp" ? "Durma por volta das:" : "Acorde por volta das:";

  const handleModeChange = (buttonMode: ModeType) => {
    if (buttonMode === "sleep") {
      setTime("00:00");
      setMode("sleep");
    } else {
      setTime("06:00");
      setMode("wakeUp");
    }
    setResults([]);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const calculateResults = () => {
    if (mode === "wakeUp") {
      const wakeUpAt = calculateWantsToWakeUp(time);
      setResults(wakeUpAt);
    } else {
      const sleetAt = calculateWantsToSleepHours(time);
      setResults(sleetAt);
    }
  };

  return {
    mode,
    handleModeChange,
    text,
    time,
    handleTimeChange,
    calculateResults,
    resultTitle,
    results,
  };
};
