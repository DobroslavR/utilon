/**
 * Converts radians to degrees.
 *
 * @param radians - The angle in radians
 * @returns The angle in degrees
 *
 * @example
 * ```ts
 * radiansToDegrees(Math.PI) // 180
 * radiansToDegrees(Math.PI / 2) // 90
 * radiansToDegrees(0) // 0
 * ```
 */
export const radiansToDegrees = (radians: number): number =>
  (radians * 180) / Math.PI;
