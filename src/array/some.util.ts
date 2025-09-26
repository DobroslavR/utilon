/**
 * Checks if at least one element in the array passes a predicate
 */
export const some = <T>(
  arr: T[],
  predicate: (item: T, index: number, array: T[]) => boolean
): boolean => arr.some(predicate);
