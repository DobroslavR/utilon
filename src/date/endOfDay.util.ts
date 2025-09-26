/**
 * Gets the end of day for a given date (23:59:59.999).
 *
 * @param date - The date to get the end of day for
 * @returns A new Date object set to the end of the day
 *
 * @example
 * ```ts
 * endOfDay(new Date('2023-01-15T10:30:00')) // 2023-01-15T23:59:59.999
 * ```
 */
export const endOfDay = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setHours(23, 59, 59, 999);
  return newDate;
};
