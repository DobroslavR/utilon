/**
 * Checks if a date is in the past
 */
export const isPast = (date: Date): boolean => date.getTime() < Date.now();
