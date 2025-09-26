/**
 * Groups array items by a key function.
 *
 * @param arr - The array to group
 * @param keyFn - The function that returns the key for each item
 * @returns An object where keys are group names and values are arrays of items
 *
 * @example
 * ```ts
 * groupBy(['apple', 'banana', 'cherry'], (fruit) => fruit.length)
 * // { '5': ['apple'], '6': ['banana', 'cherry'] }
 *
 * groupBy([1, 2, 3, 4], (n) => n % 2 === 0 ? 'even' : 'odd')
 * // { 'odd': [1, 3], 'even': [2, 4] }
 * ```
 */
export const groupBy = <T>(
  arr: readonly T[],
  keyFn: (item: T) => string
): Record<string, T[]> =>
  arr.reduce(
    (groups, item) => {
      const key = keyFn(item);
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(item);
      return groups;
    },
    {} as Record<string, T[]>
  );
