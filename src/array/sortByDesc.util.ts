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
export const sortByDesc = <T, K>(
  arr: readonly T[],
  keyFn: (item: T) => K
): T[] => {
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

    if (aVal > bVal) {
      return -1;
    }
    if (aVal < bVal) {
      return 1;
    }
    return 0;
  };

  return [...arr].sort(compareKeys);
};
