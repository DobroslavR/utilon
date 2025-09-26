/**
 * Checks if a number is even.
 *
 * @param value - The number to check
 * @returns `true` if the number is even, `false` otherwise
 *
 * @example
 * ```ts
 * isEven(2) // true
 * isEven(4) // true
 * isEven(1) // false
 * isEven(3) // false
 * ```
 */
export const isEven = (value: number): boolean => value % 2 === 0;
