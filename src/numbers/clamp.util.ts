/**
 * Clamps a number between min and max values.
 *
 * @param value - The number to clamp
 * @param min - The minimum value
 * @param max - The maximum value
 * @returns The clamped value, which will be between min and max inclusive
 *
 * @example
 * ```ts
 * clamp(5, 0, 10) // 5
 * clamp(-5, 0, 10) // 0
 * clamp(15, 0, 10) // 10
 * ```
 */
export const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);
