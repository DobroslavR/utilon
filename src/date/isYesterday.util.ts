import { addDays } from "./addDays.util";

/**
 * Checks if a date is yesterday.
 *
 * @param date - The date to check
 * @returns `true` if the date is yesterday, `false` otherwise
 *
 * @example
 * ```ts
 * // If today is 2023-01-15, then:
 * isYesterday(new Date('2023-01-14')) // true
 * isYesterday(new Date('2023-01-15')) // false
 * ```
 */
export const isYesterday = (date: Date): boolean => {
  const yesterday = addDays(new Date(), -1);
  return (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  );
};
