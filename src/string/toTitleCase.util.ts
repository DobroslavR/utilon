const regex = /\s+/;

/**
 * Trims whitespace and converts string to title case.
 *
 * @param str - The string to convert
 * @returns The string in title case format
 *
 * @example
 * ```ts
 * toTitleCase('hello world') // 'Hello World'
 * toTitleCase('foo bar baz') // 'Foo Bar Baz'
 * toTitleCase('  extra   spaces  ') // 'Extra Spaces'
 * ```
 */
export const toTitleCase = (str: string): string => {
  if (!str) {
    return str;
  }
  return str
    .trim()
    .split(regex)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
