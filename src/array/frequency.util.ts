/**
 * Creates a frequency map of array elements.
 *
 * @param arr - The array to analyze
 * @returns A Map where keys are unique elements and values are their frequencies
 *
 * @example
 * ```ts
 * frequency([1, 2, 2, 3, 3, 3]) // Map { 1 => 1, 2 => 2, 3 => 3 }
 * frequency(['a', 'b', 'a']) // Map { 'a' => 2, 'b' => 1 }
 * ```
 */
export const frequency = <T>(arr: readonly T[]): Map<T, number> => {
  const freq = new Map<T, number>();
  for (const item of arr) {
    freq.set(item, (freq.get(item) || 0) + 1);
  }
  return freq;
};
