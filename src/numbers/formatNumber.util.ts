/**
 * Formats a number with thousands separators
 */
export const formatNumber = (value: number): string =>
  new Intl.NumberFormat().format(value);
