/**
 * Sorts an array in descending order by a key function.
 *
 * @param arr - The array to sort
 * @param keyFn - The function that returns the sort key for each element
 * @returns A new sorted array in descending order
 *
 * @example
 * ```ts
 * sortByDesc([3, 1, 4, 1, 5], (n) => n) // [5, 4, 3, 1, 1]
 * sortByDesc(['apple', 'Banana', 'cherry'], (s) => s.toLowerCase()) // ['cherry', 'Banana', 'apple']
 * ```
 */
export const sortByDesc = <T, K>(arr: T[], keyFn: (item: T) => K): T[] =>
  [...arr].sort((a, b) => {
    const aKey = keyFn(a);
    const bKey = keyFn(b);
    if (aKey > bKey) {
      return -1;
    }
    if (aKey < bKey) {
      return 1;
    }
    return 0;
  });
