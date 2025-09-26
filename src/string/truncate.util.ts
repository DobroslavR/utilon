/**
 * Truncates a string to a specified length and adds ellipsis.
 *
 * @param str - The string to truncate
 * @param length - The maximum length of the truncated string
 * @returns The truncated string with ellipsis if needed
 *
 * @example
 * ```ts
 * truncate('Hello World', 8) // 'Hello...'
 * truncate('Short', 10) // 'Short'
 * truncate('This is a long sentence', 15) // 'This is a long...'
 * ```
 */
export const truncate = (str: string, length: number): string => {
  if (str.length <= length) {
    return str;
  }
  return `${str.slice(0, length).trim()}...`;
};
