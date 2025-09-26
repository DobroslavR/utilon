/**
 * Flattens a nested array to a single level.
 *
 * @param arr - The nested array to flatten
 * @param depth - The depth to flatten (default: Infinity for full flattening)
 * @returns A new flattened array
 *
 * @example
 * ```ts
 * flatten([[1, 2], [3, 4]]) // [1, 2, 3, 4]
 * flatten([['a', 'b'], ['c']]) // ['a', 'b', 'c']
 * flatten([1, [2, [3, [4]]]], 1) // [1, 2, [3, [4]]]
 * ```
 */
export const flatten = <T>(
  arr: readonly (readonly T[])[],
  depth = Number.POSITIVE_INFINITY
): T[] => arr.flat(depth) as T[];
