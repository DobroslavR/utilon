import { isEven } from "./isEven.util";

/**
 * Checks if a number is odd
 */
export const isOdd = (value: number): boolean => !isEven(value);
