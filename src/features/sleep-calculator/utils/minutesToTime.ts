import { MINUTES_PER_DAY, MINUTES_PER_HOUR } from "../constants";

export const minutesToTime = (timeInMinutes: number): string => {
  let normalizedMinutes = timeInMinutes % MINUTES_PER_DAY;

  if (normalizedMinutes < 0) {
    normalizedMinutes += MINUTES_PER_DAY;
  }

  const hours = Math.floor(normalizedMinutes / MINUTES_PER_HOUR);
  const minutes = normalizedMinutes % MINUTES_PER_HOUR;

  const hoursToString = hours.toString().padStart(2, "0");
  const minutesToString = minutes.toString().padStart(2, "0");

  const time = `${hoursToString}:${minutesToString}`;

  return time;
};
