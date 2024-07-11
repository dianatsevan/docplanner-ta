export const formatDateToDayMonthWeekday = (dateString: Date | string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    weekday: 'short',
  };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};
