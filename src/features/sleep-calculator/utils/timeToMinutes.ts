export const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":");

  const convertedHours = Number(hours);
  const convertedMinutes = Number(minutes);

  const convertedTime = convertedHours * 60 + convertedMinutes;

  return convertedTime;
};
