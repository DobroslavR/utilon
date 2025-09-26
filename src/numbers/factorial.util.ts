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
