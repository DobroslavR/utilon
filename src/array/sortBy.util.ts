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
export const sortBy = <T, K>(arr: readonly T[], keyFn: (item: T) => K): T[] => {
  const compareKeys = (a: T, b: T): number => {
    const aKey = keyFn(a);
    const bKey = keyFn(b);

    // Handle null/undefined values
    if (aKey == null) {
      return bKey == null ? 0 : 1;
    }
    if (bKey == null) {
      return -1;
    }

    // Convert to strings for consistent comparison
    const aVal = String(aKey);
    const bVal = String(bKey);

    if (aVal < bVal) {
      return -1;
    }
    if (aVal > bVal) {
      return 1;
    }
    return 0;
  };

  return [...arr].sort(compareKeys);
};
