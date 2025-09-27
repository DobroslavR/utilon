/**
 * Calculates the percentage of a value relative to a total.
 *
 * @param value - The value to calculate percentage for
 * @param total - The total value
 * @returns The percentage (0-100)
 * @throws {Error} If the total is zero, because percentages cannot be derived from a zero total.
 *
 * @example
 * ```ts
 * percentage(25, 100) // 25
 * percentage(1, 4) // 25
 * percentage(50, 200) // 25
 * ```
 */
export const percentage = (value: number, total: number): number => {
  if (total === 0) {
    throw new Error("Cannot calculate percentage: total must not be zero.");
  }

  return (value / total) * 100;
};
