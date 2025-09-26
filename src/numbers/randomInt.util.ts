/**
 * Generates a random integer between min and max (inclusive).
 *
 * @param min - The minimum value (inclusive)
 * @param max - The maximum value (inclusive)
 * @returns A random integer between min and max inclusive
 *
 * @example
 * ```ts
 * randomInt(1, 6) // Random integer between 1 and 6 (e.g., 3)
 * randomInt(10, 15) // Random integer between 10 and 15 (e.g., 12)
 * ```
 */
export const randomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;
