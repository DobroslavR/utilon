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
