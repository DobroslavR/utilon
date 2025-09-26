/**
 * Partitions an array into two arrays based on a predicate function.
 *
 * @param arr - The array to partition
 * @param predicate - The function to test each element
 * @returns A tuple containing two arrays: elements that pass the predicate and elements that don't
 *
 * @example
 * ```ts
 * partition([1, 2, 3, 4, 5], (n) => n % 2 === 0) // [[2, 4], [1, 3, 5]]
 * partition(['a', 'b', 'c'], (s) => s > 'a') // [['b', 'c'], ['a']]
 * ```
 */
export const partition = <T>(
  arr: T[],
  predicate: (item: T) => boolean
): [T[], T[]] => {
  const pass: T[] = [];
  const fail: T[] = [];
  for (const item of arr) {
    if (predicate(item)) {
      pass.push(item);
    } else {
      fail.push(item);
    }
  }
  return [pass, fail];
};
