/**
 * Converts a string to snake_case.
 *
 * @param str - The string to convert
 * @returns The string in snake_case format
 *
 * @example
 * ```ts
 * toSnakeCase('helloWorld') // 'hello_world'
 * toSnakeCase('foo bar baz') // 'foo_bar_baz'
 * toSnakeCase('foo-bar-baz') // 'foo_bar_baz'
 * ```
 */
export const toSnakeCase = (str: string): string => {
  if (!str) {
    return str;
  }
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[\s-]+/g, "_")
    .toLowerCase();
};
