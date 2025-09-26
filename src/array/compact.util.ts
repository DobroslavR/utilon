/**
 * Removes falsy values from an array.
 *
 * @param arr - The array to compact
 * @returns A new array with all falsy values removed
 *
 * @example
 * ```ts
 * compact([0, 1, false, 2, '', 3, null, undefined]) // [1, 2, 3]
 * compact(['a', '', 'b', null, 'c']) // ['a', 'b', 'c']
 * ```
 */
export const compact = <T>(arr: readonly T[]): T[] =>
  arr.filter((item): item is NonNullable<T> => Boolean(item));
