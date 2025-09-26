/**
 * Formats a date to a readable string using the US locale.
 *
 * @param date - The date to format (defaults to current date)
 * @returns A formatted date string (e.g., "January 15, 2023")
 *
 * @example
 * ```ts
 * formatDate(new Date('2023-01-15')) // "January 15, 2023"
 * formatDate() // Current date formatted
 * ```
 */
export const formatDate = (date: Date = new Date()): string =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
