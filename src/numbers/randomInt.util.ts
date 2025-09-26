/**
 * Generates a random integer between min and max (inclusive)
 */
export const randomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;
