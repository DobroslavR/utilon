/**
 * Gets the end of week for a given date (Saturday as last day)
 */
export const endOfWeek = (date: Date): Date => {
  const newDate = new Date(date);
  const day = newDate.getDay();
  const diff = newDate.getDate() + (6 - day);
  return new Date(newDate.setDate(diff));
};
