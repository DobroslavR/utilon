/**
 * Removes duplicate objects from an array based on a key function.
 *
 * @param arr - The array to process
 * @param keyFn - The function that returns the key for each element
 * @returns A new array with duplicates removed based on the key function
 *
 * @example
 * ```ts
 * const users = [
 *   { id: 1, name: 'John' },
 *   { id: 2, name: 'Jane' },
 *   { id: 1, name: 'Johnny' }
 * ];
 * uniqueBy(users, (user) => user.id) // [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
 * ```
 */
export const uniqueBy = <T, K>(arr: T[], keyFn: (item: T) => K): T[] => {
  const seen = new Set();
  return arr.filter((item) => {
    const key = keyFn(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
};
