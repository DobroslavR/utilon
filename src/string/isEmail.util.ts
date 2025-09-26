const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Checks if a string is a valid email
 */
export const isEmail = (str: string): boolean => emailRegex.test(str);
