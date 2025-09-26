/**
 * Gets the start of week for a given date (Sunday as first day)
 */
export const startOfWeek = (date: Date): Date => {
  const newDate = new Date(date);
  const day = newDate.getDay();
  const diff = newDate.getDate() - day;
  return new Date(newDate.setDate(diff));
};
