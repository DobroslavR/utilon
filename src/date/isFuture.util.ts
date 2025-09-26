/**
 * Checks if a date is in the future
 */
export const isFuture = (date: Date): boolean => date.getTime() > Date.now();
