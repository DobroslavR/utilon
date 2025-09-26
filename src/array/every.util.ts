/**
 * Checks if all elements in the array pass a predicate function.
 *
 * @param arr - The array to test
 * @param predicate - The function to test each element
 * @returns `true` if all elements pass the predicate, otherwise `false`
 *
 * @example
 * ```ts
 * every([2, 4, 6], (n) => n % 2 === 0) // true
 * every([2, 3, 6], (n) => n % 2 === 0) // false
 * ```
 */
export const every = <T>(
  arr: T[],
  predicate: (item: T, index: number, array: T[]) => boolean
): boolean => arr.every(predicate);
