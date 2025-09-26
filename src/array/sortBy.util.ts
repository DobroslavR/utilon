/**
 * Sorts an array by a key function in ascending order.
 *
 * @param arr - The array to sort
 * @param keyFn - The function that returns the sort key for each element
 * @returns A new sorted array
 *
 * @example
 * ```ts
 * sortBy([3, 1, 4, 1, 5], (n) => n) // [1, 1, 3, 4, 5]
 * sortBy(['apple', 'Banana', 'cherry'], (s) => s.toLowerCase()) // ['apple', 'Banana', 'cherry']
 * ```
 */
export const sortBy = <T, K>(arr: T[], keyFn: (item: T) => K): T[] =>
  [...arr].sort((a, b) => {
    const aKey = keyFn(a);
    const bKey = keyFn(b);
    if (aKey < bKey) {
      return -1;
    }
    if (aKey > bKey) {
      return 1;
    }
    return 0;
  });
