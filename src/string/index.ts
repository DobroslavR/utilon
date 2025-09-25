const regex = /\s+/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Capitalizes the first letter of a string
 */
export const capitalize = (str: string): string => {
  if (!str) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Trims whitespace and converts string to title case
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

/**
 * Checks if a string is a valid email
 */
export const isEmail = (str: string): boolean => emailRegex.test(str);

/**
 * Truncates a string to a specified length and adds ellipsis
 */
export const truncate = (str: string, length: number): string => {
  if (str.length <= length) {
    return str;
  }
  return `${str.slice(0, length).trim()}...`;
};

/**
 * Removes all whitespace from a string
 */
export const removeWhitespace = (str: string): string => str.replace(/\s/g, "");

/**
 * Reverses a string
 */
export const reverse = (str: string): string =>
  str.split("").reverse().join("");
