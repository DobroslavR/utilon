/**
 * Adds years to a date.
 *
 * @param date - The date to add years to
 * @param years - The number of years to add (can be negative)
 * @returns A new Date object with the years added
 *
 * @example
 * ```ts
 * addYears(new Date('2023-06-15'), 2) // 2025-06-15
 * addYears(new Date('2023-06-15'), -1) // 2022-06-15
 * ```
 */
export const addYears = (date: Date, years: number): Date => {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
};
