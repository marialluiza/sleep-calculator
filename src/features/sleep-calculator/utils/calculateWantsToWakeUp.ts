import {
  FIVE_SLEEP_CYCLES,
  FOUR_SLEEP_CYCLES,
  SIX_SLEEP_CYCLES,
} from "../constants";
import { minutesToTime } from "./minutesToTime";
import { timeToMinutes } from "./timeToMinutes";

export const calculateWantsToWakeUp = (time: string): string[] => {
  const minutes = timeToMinutes(time);

  const minimumCycles = minutes - FOUR_SLEEP_CYCLES;
  const goodCycles = minutes - FIVE_SLEEP_CYCLES;
  const idealCycles = minutes - SIX_SLEEP_CYCLES;

  const cycles = [minimumCycles, goodCycles, idealCycles];
  const convertedCycles = cycles.map((item) => minutesToTime(item));

  return convertedCycles;
};
