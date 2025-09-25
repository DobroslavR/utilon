/**
 * Formats a date to a readable string
 */
export const formatDate = (date: Date = new Date()): string =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

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

/**
 * Gets the start of day for a given date
 */
export const startOfDay = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};

/**
 * Gets the end of day for a given date
 */
export const endOfDay = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setHours(23, 59, 59, 999);
  return newDate;
};

/**
 * Gets the start of week for a given date (Sunday as first day)
 */
export const startOfWeek = (date: Date): Date => {
  const newDate = new Date(date);
  const day = newDate.getDay();
  const diff = newDate.getDate() - day;
  return new Date(newDate.setDate(diff));
};

/**
 * Gets the end of week for a given date (Saturday as last day)
 */
export const endOfWeek = (date: Date): Date => {
  const newDate = new Date(date);
  const day = newDate.getDay();
  const diff = newDate.getDate() + (6 - day);
  return new Date(newDate.setDate(diff));
};

/**
 * Gets the start of month for a given date
 */
export const startOfMonth = (date: Date): Date => {
  const newDate = new Date(date);
  return new Date(newDate.getFullYear(), newDate.getMonth(), 1);
};

/**
 * Gets the end of month for a given date
 */
export const endOfMonth = (date: Date): Date => {
  const newDate = new Date(date);
  return new Date(
    newDate.getFullYear(),
    newDate.getMonth() + 1,
    0,
    23,
    59,
    59,
    999
  );
};

/**
 * Adds days to a date
 */
export const addDays = (date: Date, days: number): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

/**
 * Adds months to a date
 */
export const addMonths = (date: Date, months: number): Date => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
};

/**
 * Adds years to a date
 */
export const addYears = (date: Date, years: number): Date => {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
};

/**
 * Calculates the difference in days between two dates
 */
export const diffInDays = (date1: Date, date2: Date): number => {
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

/**
 * Calculates the difference in months between two dates
 */
export const diffInMonths = (date1: Date, date2: Date): number =>
  (date2.getFullYear() - date1.getFullYear()) * 12 +
  (date2.getMonth() - date1.getMonth());

/**
 * Checks if a date is today
 */
export const isToday = (date: Date): boolean => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

/**
 * Checks if a date is yesterday
 */
export const isYesterday = (date: Date): boolean => {
  const yesterday = addDays(new Date(), -1);
  return (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  );
};

/**
 * Checks if a date is tomorrow
 */
export const isTomorrow = (date: Date): boolean => {
  const tomorrow = addDays(new Date(), 1);
  return (
    date.getDate() === tomorrow.getDate() &&
    date.getMonth() === tomorrow.getMonth() &&
    date.getFullYear() === tomorrow.getFullYear()
  );
};

/**
 * Checks if a date is in the past
 */
export const isPast = (date: Date): boolean => date.getTime() < Date.now();

/**
 * Checks if a date is in the future
 */
export const isFuture = (date: Date): boolean => date.getTime() > Date.now();

/**
 * Gets the relative time string (e.g., "2 hours ago", "in 3 days")
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
