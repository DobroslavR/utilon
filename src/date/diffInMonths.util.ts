/**
 * Calculates the difference in months between two dates.
 *
 * @param date1 - The first date
 * @param date2 - The second date
 * @returns The difference in months (can be negative)
 *
 * @example
 * ```ts
 * diffInMonths(new Date('2023-01-01'), new Date('2023-04-01')) // 3
 * diffInMonths(new Date('2023-04-01'), new Date('2023-01-01')) // -3
 * ```
 */
export const diffInMonths = (date1: Date, date2: Date): number =>
  (date2.getFullYear() - date1.getFullYear()) * 12 +
  (date2.getMonth() - date1.getMonth());
