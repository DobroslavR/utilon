/**
 * Finds the intersection of multiple arrays.
 *
 * @param arrays - Arrays to find intersection of
 * @returns An array containing elements present in all input arrays
 *
 * @example
 * ```ts
 * intersection([1, 2, 3], [2, 3, 4]) // [2, 3]
 * intersection([1, 2, 3], [2, 3], [3, 4]) // [3]
 * ```
 */
export const intersection = <T>(...arrays: readonly T[][]): T[] => {
  if (arrays.length === 0) {
    return [];
  }
  if (arrays.length === 1) {
    return arrays[0];
  }

  const [first, ...rest] = arrays;
  return first.filter((item) => rest.every((arr) => arr.includes(item)));
};
