/**
 * Gets the end of month for a given date (last day of month at 23:59:59.999).
 *
 * @param date - The date to get the end of month for
 * @returns A new Date object set to the end of the month
 *
 * @example
 * ```ts
 * endOfMonth(new Date('2023-01-15')) // 2023-01-31T23:59:59.999
 * endOfMonth(new Date('2023-02-15')) // 2023-02-28T23:59:59.999 (non-leap year)
 * ```
 */
export const endOfMonth = (date: Date): Date => {
  const newDate = new Date(date);
  return new Date(
    newDate.getFullYear(),
    newDate.getMonth() + 1,
    0,
    23,
    59,
    59,
    999
  );
};
