/**
 * Removes elements from the end of the array until the predicate returns false.
 *
 * @param arr - The array to process
 * @param predicate - The function invoked per element
 * @returns A new array with elements dropped from the end
 *
 * @example
 * ```ts
 * dropRightWhile([1, 2, 3, 4, 5], (n) => n > 3) // [1, 2, 3]
 * dropRightWhile([1, 2, 3], (n) => n > 5) // [1, 2, 3]
 * ```
 */
export const dropRightWhile = <T>(
  arr: readonly T[],
  predicate: (item: T) => boolean
): T[] => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!predicate(arr[i])) {
      return arr.slice(0, i + 1);
    }
  }
  return [];
};
