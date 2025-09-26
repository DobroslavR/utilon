/**
 * Calculates the percentage of a value relative to a total.
 *
 * @param value - The value to calculate percentage for
 * @param total - The total value
 * @returns The percentage (0-100)
 *
 * @example
 * ```ts
 * percentage(25, 100) // 25
 * percentage(1, 4) // 25
 * percentage(50, 200) // 25
 * ```
 */
export const percentage = (value: number, total: number): number =>
  (value / total) * 100;
