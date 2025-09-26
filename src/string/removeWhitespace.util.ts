/**
 * Removes all whitespace from a string.
 *
 * @param str - The string to process
 * @returns The string with all whitespace removed
 *
 * @example
 * ```ts
 * removeWhitespace('hello world') // 'helloworld'
 * removeWhitespace(' a b c ') // 'abc'
 * removeWhitespace('no-spaces') // 'no-spaces'
 * ```
 */
export const removeWhitespace = (str: string): string => str.replace(/\s/g, "");
