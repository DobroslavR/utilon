/**
 * Adds days to a date.
 *
 * @param date - The date to add days to
 * @param days - The number of days to add (can be negative)
 * @returns A new Date object with the days added
 *
 * @example
 * ```ts
 * addDays(new Date('2023-01-01'), 5) // 2023-01-06
 * addDays(new Date('2023-01-01'), -3) // 2022-12-29
 * ```
 */
export const addDays = (date: Date, days: number): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};
