const regex = /\s+/;

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
