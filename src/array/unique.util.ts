/**
 * Removes duplicate values from an array.
 *
 * @param arr - The array to process
 * @returns A new array with duplicate values removed
 *
 * @example
 * ```ts
 * unique([1, 2, 2, 3, 3, 3]) // [1, 2, 3]
 * unique(['a', 'b', 'a', 'c']) // ['a', 'b', 'c']
 * ```
 */
export const unique = <T>(arr: T[]): T[] => [...new Set(arr)];
