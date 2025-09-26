/**
 * Generates a random float between min and max (inclusive of min, exclusive of max).
 *
 * @param min - The minimum value (inclusive)
 * @param max - The maximum value (exclusive)
 * @returns A random float between min and max
 *
 * @example
 * ```ts
 * randomFloat(0, 1) // Random float between 0 and 1 (e.g., 0.123456)
 * randomFloat(10, 20) // Random float between 10 and 20 (e.g., 15.789)
 * ```
 */
export const randomFloat = (min: number, max: number): number =>
  Math.random() * (max - min) + min;
