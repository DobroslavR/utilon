/**
 * Calculates the factorial of a number.
 *
 * @param n - The number to calculate factorial for
 * @returns The factorial of n, or NaN if n is negative
 *
 * @example
 * ```ts
 * factorial(5) // 120
 * factorial(0) // 1
 * factorial(3) // 6
 * factorial(-1) // NaN
 * ```
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
