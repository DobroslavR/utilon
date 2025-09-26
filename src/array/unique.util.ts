/**
 * Removes duplicate values from an array
 */
export const unique = <T>(arr: T[]): T[] => [...new Set(arr)];
