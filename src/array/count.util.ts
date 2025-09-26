/**
 * Counts the number of elements that pass a predicate function.
 *
 * @param arr - The array to count elements in
 * @param predicate - The function to test each element
 * @returns The number of elements that pass the predicate test
 *
 * @example
 * ```ts
 * count([1, 2, 3, 4, 5], (n) => n > 3) // 2
 * count(['a', 'b', 'c'], (s) => s === 'a') // 1
 * ```
 */
export const count = <T>(
  arr: T[],
  predicate: (item: T, index: number, array: T[]) => boolean
): number =>
  arr.reduce(
    (acc, item, index, array) =>
      predicate(item, index, array) ? acc + 1 : acc,
    0
  );
