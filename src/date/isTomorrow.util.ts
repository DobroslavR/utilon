import { addDays } from "./addDays.util";

/**
 * Checks if a date is tomorrow
 */
export const isTomorrow = (date: Date): boolean => {
  const tomorrow = addDays(new Date(), 1);
  return (
    date.getDate() === tomorrow.getDate() &&
    date.getMonth() === tomorrow.getMonth() &&
    date.getFullYear() === tomorrow.getFullYear()
  );
};
