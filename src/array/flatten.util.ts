/**
 * Flattens an array of arrays to a single level.
 *
 * @param arr - The array of arrays to flatten
 * @returns A new flattened array
 *
 * @example
 * ```ts
 * flatten([[1, 2], [3, 4]]) // [1, 2, 3, 4]
 * flatten([['a', 'b'], ['c']]) // ['a', 'b', 'c']
 * ```
 */
export const flatten = <T>(arr: T[][]): T[] => arr.flat();
