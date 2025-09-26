/**
 * Truncates a string to a specified length and adds ellipsis
 */
export const truncate = (str: string, length: number): string => {
  if (str.length <= length) {
    return str;
  }
  return `${str.slice(0, length).trim()}...`;
};
