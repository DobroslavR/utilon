/**
 * Finds the intersection of multiple arrays
 */
export const intersection = <T>(...arrays: T[][]): T[] => {
  if (arrays.length === 0) {
    return [];
  }
  if (arrays.length === 1) {
    return arrays[0];
  }

  const [first, ...rest] = arrays;
  return first.filter((item) => rest.every((arr) => arr.includes(item)));
};
