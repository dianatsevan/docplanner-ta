export const getNextDate = (date: Date, daysPeriod: number): Date => {
  return new Date(date.setDate(date.getDate() + daysPeriod));
};
