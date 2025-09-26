/**
 * Generates a random float between min and max
 */
export const randomFloat = (min: number, max: number): number =>
  Math.random() * (max - min) + min;
