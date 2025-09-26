import { flatten } from "./flatten.util";
import { unique } from "./unique.util";

/**
 * Creates an array with unique values from multiple arrays
 */
export const union = <T>(...arrays: T[][]): T[] => unique(flatten(arrays));
