/**
 * Removes falsy values from an array
 */
export const compact = <T>(
  arr: (T | null | undefined | false | 0 | "")[]
): T[] => arr.filter(Boolean) as T[];
