/**
 * Calculates the percentage difference between two values.
 *
 * @param value1 - The first value (baseline)
 * @param value2 - The second value
 * @returns The percentage difference ((value2 - value1) / value1 * 100)
 * @throws Will throw an error if the baseline (`value1`) is zero because the
 * calculation is undefined.
 *
 * @example
 * ```ts
 * percentageDifference(100, 125) // 25 (25% increase)
 * percentageDifference(100, 75) // -25 (25% decrease)
 * percentageDifference(50, 50) // 0 (no change)
 * ```
 */
export const percentageDifference = (value1: number, value2: number): number => {
  if (value1 === 0) {
    throw new Error("Cannot calculate percentage difference with a zero baseline");
  }

  return ((value2 - value1) / value1) * 100;
};
