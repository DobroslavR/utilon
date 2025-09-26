/**
 * Gets the start of day for a given date (00:00:00.000).
 *
 * @param date - The date to get the start of day for
 * @returns A new Date object set to the start of the day
 *
 * @example
 * ```ts
 * startOfDay(new Date('2023-01-15T10:30:45')) // 2023-01-15T00:00:00.000
 * ```
 */
export const startOfDay = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};
