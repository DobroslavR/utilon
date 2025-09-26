import { addDays } from "./addDays.util";

/**
 * Checks if a date is tomorrow.
 *
 * @param date - The date to check
 * @returns `true` if the date is tomorrow, `false` otherwise
 *
 * @example
 * ```ts
 * // If today is 2023-01-15, then:
 * isTomorrow(new Date('2023-01-16')) // true
 * isTomorrow(new Date('2023-01-15')) // false
 * ```
 */
export const isTomorrow = (date: Date): boolean => {
  const tomorrow = addDays(new Date(), 1);
  return (
    date.getDate() === tomorrow.getDate() &&
    date.getMonth() === tomorrow.getMonth() &&
    date.getFullYear() === tomorrow.getFullYear()
  );
};
