/**
 * Checks if a date is in the past.
 *
 * @param date - The date to check
 * @returns `true` if the date is in the past, `false` otherwise
 *
 * @example
 * ```ts
 * isPast(new Date('2020-01-01')) // true
 * isPast(new Date('2025-01-01')) // false (if current date is before 2025)
 * ```
 */
export const isPast = (date: Date): boolean => date.getTime() < Date.now();
