/**
 * Counts the number of elements that pass a predicate
 */
export const count = <T>(
  arr: T[],
  predicate: (item: T, index: number, array: T[]) => boolean
): number =>
  arr.reduce(
    (acc, item, index, array) =>
      predicate(item, index, array) ? acc + 1 : acc,
    0
  );
