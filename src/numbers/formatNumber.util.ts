/**
 * Formats a number with thousands separators using the default locale.
 *
 * @param value - The number to format
 * @returns A formatted string with thousands separators
 *
 * @example
 * ```ts
 * formatNumber(1234) // "1,234" (in US locale)
 * formatNumber(1234567) // "1,234,567"
 * ```
 */
export const formatNumber = (value: number): string =>
  new Intl.NumberFormat().format(value);
