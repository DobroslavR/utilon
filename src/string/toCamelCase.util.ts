/**
 * Converts a string to camelCase.
 *
 * @param str - The string to convert
 * @returns The string in camelCase format
 *
 * @example
 * ```ts
 * toCamelCase('hello world') // 'helloWorld'
 * toCamelCase('foo-bar-baz') // 'fooBarBaz'
 * toCamelCase('FOO_BAR_BAZ') // 'fooBarBaz'
 * ```
 */
export const toCamelCase = (str: string): string => {
  if (!str) {
    return str;
  }
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, "");
};
