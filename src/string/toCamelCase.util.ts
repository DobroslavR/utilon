/**
 * Converts a string to camelCase
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
