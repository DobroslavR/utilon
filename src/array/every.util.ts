/**
 * Checks if all elements in the array pass a predicate
 */
export const every = <T>(
  arr: T[],
  predicate: (item: T, index: number, array: T[]) => boolean
): boolean => arr.every(predicate);
