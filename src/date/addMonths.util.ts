/**
 * Adds months to a date.
 *
 * @param date - The date to add months to
 * @param months - The number of months to add (can be negative)
 * @returns A new Date object with the months added
 *
 * @example
 * ```ts
 * addMonths(new Date('2023-01-15'), 2) // 2023-03-15
 * addMonths(new Date('2023-01-15'), -1) // 2022-12-15
 * ```
 */
export const addMonths = (date: Date, months: number): Date => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
};
