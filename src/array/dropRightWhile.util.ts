/**
 * Removes elements from the end of the array until the predicate returns false
 */
export const dropRightWhile = <T>(
  arr: T[],
  predicate: (item: T) => boolean
): T[] => {
  const reversedIndex = [...arr]
    .reverse()
    .findIndex((item) => !predicate(item));
  const index = reversedIndex === -1 ? 0 : arr.length - reversedIndex;
  return arr.slice(0, index);
};
