/**
 * Converts a string to kebab-case.
 *
 * @param str - The string to convert
 * @returns The string in kebab-case format
 *
 * @example
 * ```ts
 * toKebabCase('helloWorld') // 'hello-world'
 * toKebabCase('foo bar baz') // 'foo-bar-baz'
 * toKebabCase('FOO_BAR_BAZ') // 'foo-bar-baz'
 * ```
 */
export const toKebabCase = (str: string): string => {
  if (!str) {
    return str;
  }
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
};
