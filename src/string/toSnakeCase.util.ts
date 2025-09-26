/**
 * Converts a string to snake_case
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
