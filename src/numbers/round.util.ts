/**
 * Rounds a number to a specified number of decimal places
 */
export const round = (value: number, decimals = 0): number => {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
};
