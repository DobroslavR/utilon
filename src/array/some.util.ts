/**
 * Checks if at least one element in the array passes a predicate function.
 *
 * @param arr - The array to test
 * @param predicate - The function to test each element
 * @returns `true` if at least one element passes the predicate, otherwise `false`
 *
 * @example
 * ```ts
 * some([1, 2, 3, 4], (n) => n > 3) // true
 * some([1, 2, 3], (n) => n > 5) // false
 * ```
 */
export const some = <T>(
  arr: readonly T[],
  predicate: (item: T, index: number, array: readonly T[]) => boolean
): boolean => arr.some(predicate);
