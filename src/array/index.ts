/**
 * Removes duplicate values from an array
 */
export const unique = <T>(arr: T[]): T[] => [...new Set(arr)];

/**
 * Removes duplicate objects from an array based on a key
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

/**
 * Chunks an array into smaller arrays of a specified size
 */
export const chunk = <T>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

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

/**
 * Shuffles an array randomly
 */
export const shuffle = <T>(arr: T[]): T[] => {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

/**
 * Creates an array of numbers from start to end (inclusive)
 */
export const range = (start: number, end: number): number[] => {
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

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

/**
 * Flattens an array of arrays to a single level
 */
export const flatten = <T>(arr: T[][]): T[] => arr.flat();

/**
 * Creates an array with unique values from multiple arrays
 */
export const union = <T>(...arrays: T[][]): T[] => unique(flatten(arrays));

/**
 * Sorts an array by a key function
 */
export const sortBy = <T, K>(arr: T[], keyFn: (item: T) => K): T[] =>
  [...arr].sort((a, b) => {
    const aKey = keyFn(a);
    const bKey = keyFn(b);
    if (aKey < bKey) {
      return -1;
    }
    if (aKey > bKey) {
      return 1;
    }
    return 0;
  });

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

/**
 * Removes falsy values from an array
 */
export const compact = <T>(
  arr: (T | null | undefined | false | 0 | "")[]
): T[] => arr.filter(Boolean) as T[];

/**
 * Checks if all elements in the array pass a predicate
 */
export const every = <T>(
  arr: T[],
  predicate: (item: T, index: number, array: T[]) => boolean
): boolean => arr.every(predicate);

/**
 * Checks if at least one element in the array passes a predicate
 */
export const some = <T>(
  arr: T[],
  predicate: (item: T, index: number, array: T[]) => boolean
): boolean => arr.some(predicate);

/**
 * Counts the number of elements that pass a predicate
 */
export const count = <T>(
  arr: T[],
  predicate: (item: T, index: number, array: T[]) => boolean
): number =>
  arr.reduce(
    (acc, item, index, array) =>
      predicate(item, index, array) ? acc + 1 : acc,
    0
  );

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

/**
 * Partitions an array into two arrays based on a predicate
 */
export const partition = <T>(
  arr: T[],
  predicate: (item: T) => boolean
): [T[], T[]] => {
  const pass: T[] = [];
  const fail: T[] = [];
  for (const item of arr) {
    if (predicate(item)) {
      pass.push(item);
    } else {
      fail.push(item);
    }
  }
  return [pass, fail];
};

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
