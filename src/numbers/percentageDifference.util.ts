/**
 * Calculates the percentage difference between two values
 */
export const percentageDifference = (value1: number, value2: number): number =>
  ((value2 - value1) / value1) * 100;
