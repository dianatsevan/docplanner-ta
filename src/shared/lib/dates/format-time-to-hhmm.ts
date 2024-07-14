export const formatTimeToHHmm = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
  };
  const date = new Date(dateString);

  return date.toLocaleTimeString(undefined, options);
};
