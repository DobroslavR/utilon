/**
 * Shuffles an array randomly using the Fisher-Yates algorithm.
 *
 * @param arr - The array to shuffle
 * @returns A new shuffled array
 *
 * @example
 * ```ts
 * shuffle([1, 2, 3, 4, 5]) // [3, 1, 5, 2, 4] (random order)
 * shuffle(['a', 'b', 'c']) // ['b', 'c', 'a'] (random order)
 * ```
 */
export const shuffle = <T>(arr: readonly T[]): T[] => {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};
