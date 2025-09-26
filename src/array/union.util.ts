import { flatten } from "./flatten.util";
import { unique } from "./unique.util";

/**
 * Creates an array with unique values from multiple arrays.
 *
 * @param arrays - Arrays to combine
 * @returns A new array with unique values from all input arrays
 *
 * @example
 * ```ts
 * union([1, 2], [2, 3], [3, 4]) // [1, 2, 3, 4]
 * union(['a', 'b'], ['b', 'c']) // ['a', 'b', 'c']
 * ```
 */
export const union = <T>(...arrays: T[][]): T[] => unique(flatten(arrays));
