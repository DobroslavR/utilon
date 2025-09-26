/**
 * Removes elements from the beginning of the array until the predicate returns false
 */
export const dropWhile = <T>(
  arr: T[],
  predicate: (item: T) => boolean
): T[] => {
  const index = arr.findIndex((item) => !predicate(item));
  return index === -1 ? [] : arr.slice(index);
};
