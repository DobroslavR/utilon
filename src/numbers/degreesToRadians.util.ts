/**
 * Converts degrees to radians.
 *
 * @param degrees - The angle in degrees
 * @returns The angle in radians
 *
 * @example
 * ```ts
 * degreesToRadians(180) // π (3.14159...)
 * degreesToRadians(90) // π/2 (1.57079...)
 * degreesToRadians(0) // 0
 * ```
 */
export const degreesToRadians = (degrees: number): number =>
  (degrees * Math.PI) / 180;
