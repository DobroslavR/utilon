const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Checks if a string is a valid email address using a basic regex pattern.
 *
 * @param str - The string to validate
 * @returns `true` if the string is a valid email format, `false` otherwise
 *
 * @example
 * ```ts
 * isEmail('user@example.com') // true
 * isEmail('invalid-email') // false
 * isEmail('user@.com') // false
 * ```
 */
export const isEmail = (str: string): boolean => emailRegex.test(str);
