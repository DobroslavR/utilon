/**
 * Removes elements from the beginning of the array until the predicate returns false.
 *
 * @param arr - The array to process
 * @param predicate - The function invoked per element
 * @returns A new array with elements dropped from the beginning
 *
 * @example
 * ```ts
 * dropWhile([1, 2, 3, 4, 5], (n) => n < 3) // [3, 4, 5]
 * dropWhile([1, 2, 3], (n) => n < 5) // []
 * ```
 */
export const dropWhile = <T>(
  arr: T[],
  predicate: (item: T) => boolean
): T[] => {
  const index = arr.findIndex((item) => !predicate(item));
  return index === -1 ? [] : arr.slice(index);
};
