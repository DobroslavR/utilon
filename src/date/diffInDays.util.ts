/**
 * Calculates the difference in days between two dates.
 *
 * @param date1 - The first date
 * @param date2 - The second date
 * @returns The absolute difference in days (always positive)
 *
 * @example
 * ```ts
 * diffInDays(new Date('2023-01-01'), new Date('2023-01-05')) // 4
 * diffInDays(new Date('2023-01-05'), new Date('2023-01-01')) // 4
 * ```
 */
export const diffInDays = (date1: Date, date2: Date): number => {
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};
