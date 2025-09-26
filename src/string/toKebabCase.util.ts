/**
 * Converts a string to kebab-case
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
