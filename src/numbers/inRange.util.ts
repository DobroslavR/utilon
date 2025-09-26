/**
 * Checks if a number is within a range (inclusive).
 *
 * @param value - The number to check
 * @param min - The minimum value (inclusive)
 * @param max - The maximum value (inclusive)
 * @returns `true` if value is between min and max inclusive, `false` otherwise
 *
 * @example
 * ```ts
 * inRange(5, 1, 10) // true
 * inRange(1, 1, 10) // true
 * inRange(10, 1, 10) // true
 * inRange(0, 1, 10) // false
 * ```
 */
export const inRange = (value: number, min: number, max: number): boolean =>
  value >= min && value <= max;
