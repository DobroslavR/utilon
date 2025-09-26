/**
 * Checks if a date is in the future.
 *
 * @param date - The date to check
 * @returns `true` if the date is in the future, `false` otherwise
 *
 * @example
 * ```ts
 * isFuture(new Date('2025-01-01')) // true (if current date is before 2025)
 * isFuture(new Date('2020-01-01')) // false
 * ```
 */
export const isFuture = (date: Date): boolean => date.getTime() > Date.now();
