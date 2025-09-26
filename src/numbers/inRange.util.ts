/**
 * Checks if a number is within a range
 */
export const inRange = (value: number, min: number, max: number): boolean =>
  value >= min && value <= max;
