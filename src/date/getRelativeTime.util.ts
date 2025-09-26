/**
 * Gets the relative time string (e.g., "2 hours ago", "in 3 days").
 *
 * @param date - The date to compare against the current time
 * @returns A relative time string using the International RelativeTimeFormat API
 *
 * @example
 * ```ts
 * // Assuming current time is 2023-01-15T12:00:00
 * getRelativeTime(new Date('2023-01-15T10:00:00')) // "2 hours ago"
 * getRelativeTime(new Date('2023-01-18T12:00:00')) // "in 3 days"
 * ```
 */
export const getRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffInMs = date.getTime() - now.getTime();
  const diffInSeconds = Math.floor(Math.abs(diffInMs) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const daysDiff = Math.floor(diffInHours / 24);

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (diffInSeconds < 60) {
    return rtf.format(diffInMs < 0 ? -diffInSeconds : diffInSeconds, "second");
  }
  if (diffInMinutes < 60) {
    return rtf.format(diffInMs < 0 ? -diffInMinutes : diffInMinutes, "minute");
  }
  if (diffInHours < 24) {
    return rtf.format(diffInMs < 0 ? -diffInHours : diffInHours, "hour");
  }
  return rtf.format(diffInMs < 0 ? -daysDiff : daysDiff, "day");
};
