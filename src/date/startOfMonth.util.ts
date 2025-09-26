/**
 * Gets the start of month for a given date (first day of month at 00:00:00.000).
 *
 * @param date - The date to get the start of month for
 * @returns A new Date object set to the first day of the month
 *
 * @example
 * ```ts
 * startOfMonth(new Date('2023-01-15')) // 2023-01-01T00:00:00.000
 * startOfMonth(new Date('2023-03-20')) // 2023-03-01T00:00:00.000
 * ```
 */
export const startOfMonth = (date: Date): Date => {
  const newDate = new Date(date);
  return new Date(newDate.getFullYear(), newDate.getMonth(), 1);
};
