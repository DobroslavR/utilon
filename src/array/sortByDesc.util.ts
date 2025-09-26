/**
 * Sorts an array in descending order by a key function
 */
export const sortByDesc = <T, K>(arr: T[], keyFn: (item: T) => K): T[] =>
  [...arr].sort((a, b) => {
    const aKey = keyFn(a);
    const bKey = keyFn(b);
    if (aKey > bKey) {
      return -1;
    }
    if (aKey < bKey) {
      return 1;
    }
    return 0;
  });
