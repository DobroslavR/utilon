/**
 * Finds the difference between arrays (items in first array but not in others).
 *
 * @param arrays - Arrays to compare (first array is the base)
 * @returns An array containing elements from the first array that are not present in any of the other arrays
 *
 * @example
 * ```ts
 * difference([1, 2, 3], [2, 3, 4]) // [1]
 * difference([1, 2, 3], [2, 3], [3, 4]) // [1]
 * ```
 */
export const difference = <T>(...arrays: T[][]): T[] => {
  if (arrays.length === 0) {
    return [];
  }
  if (arrays.length === 1) {
    return arrays[0];
  }

  const [first, ...rest] = arrays;
  return first.filter((item) => !rest.some((arr) => arr.includes(item)));
};
