/**
 * Calculates the percentage difference between two values.
 *
 * @param value1 - The first value (baseline)
 * @param value2 - The second value
 * @returns The percentage difference ((value2 - value1) / value1 * 100)
 *
 * @example
 * ```ts
 * percentageDifference(100, 125) // 25 (25% increase)
 * percentageDifference(100, 75) // -25 (25% decrease)
 * percentageDifference(50, 50) // 0 (no change)
 * ```
 */
export const percentageDifference = (value1: number, value2: number): number =>
  ((value2 - value1) / value1) * 100;
