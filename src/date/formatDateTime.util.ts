/**
 * Formats a date and time to a readable string
 */
export const formatDateTime = (date: Date = new Date()): string =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
