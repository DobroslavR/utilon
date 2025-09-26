import { addDays } from "./addDays.util";

/**
 * Checks if a date is yesterday
 */
export const isYesterday = (date: Date): boolean => {
  const yesterday = addDays(new Date(), -1);
  return (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  );
};
