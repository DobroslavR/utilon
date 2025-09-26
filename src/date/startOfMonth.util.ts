/**
 * Gets the start of month for a given date
 */
export const startOfMonth = (date: Date): Date => {
  const newDate = new Date(date);
  return new Date(newDate.getFullYear(), newDate.getMonth(), 1);
};
