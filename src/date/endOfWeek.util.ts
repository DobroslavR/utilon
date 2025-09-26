/**
 * Gets the end of week for a given date (Saturday as last day).
 *
 * @param date - The date to get the end of week for
 * @returns A new Date object set to Saturday of the current week
 *
 * @example
 * ```ts
 * // Assuming Monday 2023-01-16
 * endOfWeek(new Date('2023-01-16')) // 2023-01-21 (Saturday)
 * ```
 */
export const endOfWeek = (date: Date): Date => {
  const newDate = new Date(date);
  const day = newDate.getDay();
  const diff = newDate.getDate() + (6 - day);
  return new Date(newDate.setDate(diff));
};
