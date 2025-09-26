import { isEven } from "./isEven.util";

/**
 * Checks if a number is odd.
 *
 * @param value - The number to check
 * @returns `true` if the number is odd, `false` otherwise
 *
 * @example
 * ```ts
 * isOdd(1) // true
 * isOdd(3) // true
 * isOdd(2) // false
 * isOdd(4) // false
 * ```
 */
export const isOdd = (value: number): boolean => !isEven(value);
