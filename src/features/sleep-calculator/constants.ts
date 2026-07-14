export const MINUTES_PER_HOUR = 60;
export const HOURS_PER_DAY = 24;
export const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

export const SLEEP_CYCLE_MINUTES = 90;
export const SLEEP_CYCLE_HOURS = 1.5;
export const FALL_ASLEEP_MINUTES = 10;

export const SLEEP_OPTIONS = [
  {
    cycles: 4,
    label: "Mínimo",
    bgColor: "bg-rose-400",
    textColor: "text-rose-400",
  },
  {
    cycles: 5,
    label: "Bom",
    bgColor: "bg-amber-300",
    textColor: "text-amber-300",
  },
  {
    cycles: 6,
    label: "Ideal",
    bgColor: "bg-emerald-400",
    textColor: "text-emerald-400",
  },
];
