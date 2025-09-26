/**
 * Finds the difference between arrays (items in first array but not in others)
 */
export const difference = <T>(...arrays: T[][]): T[] => {
  if (arrays.length === 0) {
    return [];
  }
  if (arrays.length === 1) {
    return arrays[0];
  }

  const [first, ...rest] = arrays;
  return first.filter((item) => !rest.some((arr) => arr.includes(item)));
};
