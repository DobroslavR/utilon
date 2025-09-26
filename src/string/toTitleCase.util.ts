const regex = /\s+/;

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
