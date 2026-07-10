import {
  SLEEP_CYCLE_HOURS,
  SLEEP_CYCLE_MINUTES,
  SLEEP_OPTIONS,
} from "../constants";
import { CalculateCyclesResult } from "../types";
import { minutesToTime } from "./minutesToTime";
import { timeToMinutes } from "./timeToMinutes";

export const calculateWantsToSleepHours = (
  time: string,
): CalculateCyclesResult[] => {
  const minutes = timeToMinutes(time);

  const results = SLEEP_OPTIONS.map((option, index) => {
    const totalMinutes = minutes + option.cycles * SLEEP_CYCLE_MINUTES;

    return {
      id: index + 1,
      recommendedTime: minutesToTime(totalMinutes),
      amountCycles: option.cycles,
      totalHours: option.cycles * SLEEP_CYCLE_HOURS,
      typeCycle: option.label,
      bgColor: option.bgColor,
      textColor: option.textColor,
    };
  });

  return results;
};
