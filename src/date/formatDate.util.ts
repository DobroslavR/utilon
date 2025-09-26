/**
 * Formats a date to a readable string
 */
export const formatDate = (date: Date = new Date()): string =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
