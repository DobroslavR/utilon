/**
 * Creates a frequency map of array elements
 */
export const frequency = <T>(arr: T[]): Map<T, number> => {
  const freq = new Map<T, number>();
  for (const item of arr) {
    freq.set(item, (freq.get(item) || 0) + 1);
  }
  return freq;
};
