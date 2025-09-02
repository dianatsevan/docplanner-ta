export const getNextDate = (date: Date, daysPeriod: number): Date => {
  const nextDate = new Date(date);
  return new Date(nextDate.setDate(nextDate.getDate() + daysPeriod));
};
