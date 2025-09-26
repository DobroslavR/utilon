/**
 * Gets the start of week for a given date (Sunday as first day).
 *
 * @param date - The date to get the start of week for
 * @returns A new Date object set to Sunday of the current week
 *
 * @example
 * ```ts
 * // Assuming Friday 2023-01-20
 * startOfWeek(new Date('2023-01-20')) // 2023-01-15 (Sunday)
 * ```
 */
export const startOfWeek = (date: Date): Date => {
  const newDate = new Date(date);
  const day = newDate.getDay();
  const diff = newDate.getDate() - day;
  return new Date(newDate.setDate(diff));
};
