/**
 * Groups array items by a key function
 */
export const groupBy = <T>(
  arr: T[],
  keyFn: (item: T) => string
): Record<string, T[]> =>
  arr.reduce(
    (groups, item) => {
      const key = keyFn(item);
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(item);
      return groups;
    },
    {} as Record<string, T[]>
  );
