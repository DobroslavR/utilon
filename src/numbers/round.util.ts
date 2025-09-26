/**
 * Rounds a number to a specified number of decimal places.
 *
 * @param value - The number to round
 * @param decimals - The number of decimal places to round to (default: 0)
 * @returns The rounded number
 *
 * @example
 * ```ts
 * round(3.14159, 2) // 3.14
 * round(3.14159, 0) // 3
 * round(3.14159) // 3
 * round(1.5) // 2
 * ```
 */
export const round = (value: number, decimals = 0): number => {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
};
