/**
 * Creates an array of numbers from start to end (inclusive).
 *
 * @param start - The start number
 * @param end - The end number
 * @returns An array of numbers from start to end inclusive
 *
 * @example
 * ```ts
 * range(1, 5) // [1, 2, 3, 4, 5]
 * range(0, 3) // [0, 1, 2, 3]
 * ```
 */
export const range = (start: number, end: number): number[] => {
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};
