/**
 * Calculates the difference in months between two dates
 */
export const diffInMonths = (date1: Date, date2: Date): number =>
  (date2.getFullYear() - date1.getFullYear()) * 12 +
  (date2.getMonth() - date1.getMonth());
