/**
 * Formats a date and time to a readable string using the US locale.
 *
 * @param date - The date to format (defaults to current date)
 * @returns A formatted date and time string (e.g., "January 15, 2023 at 2:30 PM")
 *
 * @example
 * ```ts
 * formatDateTime(new Date('2023-01-15T14:30:00')) // "January 15, 2023 at 2:30 PM"
 * formatDateTime() // Current date and time formatted
 * ```
 */
export const formatDateTime = (date: Date = new Date()): string =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
