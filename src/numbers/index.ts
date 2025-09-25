/**
 * Clamps a number between min and max values
 */
export const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

/**
 * Rounds a number to a specified number of decimal places
 */
export const round = (value: number, decimals = 0): number => {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
};

/**
 * Formats a number with thousands separators
 */
export const formatNumber = (value: number): string =>
  new Intl.NumberFormat().format(value);

/**
 * Checks if a number is even
 */
export const isEven = (value: number): boolean => value % 2 === 0;

/**
 * Checks if a number is odd
 */
export const isOdd = (value: number): boolean => !isEven(value);

/**
 * Generates a random integer between min and max (inclusive)
 */
export const randomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Generates a random float between min and max
 */
export const randomFloat = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

/**
 * Converts degrees to radians
 */
export const degreesToRadians = (degrees: number): number =>
  (degrees * Math.PI) / 180;

/**
 * Converts radians to degrees
 */
export const radiansToDegrees = (radians: number): number =>
  (radians * 180) / Math.PI;

/**
 * Calculates the percentage of a value relative to a total
 */
export const percentage = (value: number, total: number): number =>
  (value / total) * 100;

/**
 * Calculates the percentage difference between two values
 */
export const percentageDifference = (value1: number, value2: number): number =>
  ((value2 - value1) / value1) * 100;

/**
 * Checks if a number is within a range
 */
export const inRange = (value: number, min: number, max: number): boolean =>
  value >= min && value <= max;

/**
 * Maps a number from one range to another
 */
export const mapRange = (
  value: number,
  {
    fromMin,
    fromMax,
    toMin,
    toMax,
  }: { fromMin: number; fromMax: number; toMin: number; toMax: number }
): number =>
  toMin + ((value - fromMin) * (toMax - toMin)) / (fromMax - fromMin);

/**
 * Formats bytes to human readable format
 */
export const formatBytes = (bytes: number): string => {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) {
    return "0 Bytes";
  }
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${Math.round((bytes / 1024 ** i) * 100) / 100} ${sizes[i]}`;
};

/**
 * Calculates the factorial of a number
 */
export const factorial = (n: number): number => {
  if (n < 0) {
    return Number.NaN;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};
