/**
 * Checks if a date is today.
 *
 * @param date - The date to check
 * @returns `true` if the date is today, `false` otherwise
 *
 * @example
 * ```ts
 * isToday(new Date()) // true
 * isToday(new Date('2023-01-01')) // false (unless today is Jan 1, 2023)
 * ```
 */
export const isToday = (date: Date): boolean => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};
