/**
 * Reverses a string.
 *
 * @param str - The string to reverse
 * @returns The reversed string
 *
 * @example
 * ```ts
 * reverse('hello') // 'olleh'
 * reverse('12345') // '54321'
 * reverse('') // ''
 * ```
 */
export const reverse = (str: string): string =>
  str.split("").reverse().join("");
