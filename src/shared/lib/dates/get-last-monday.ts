export const getLastMonday = (): Date => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const lastMonday = new Date(today);

  if (dayOfWeek === 0) {
    // If today is Sunday, go back 6 days to get to last Monday
    lastMonday.setDate(today.getDate() - 6);
  } else {
    // Otherwise, subtract the number of days since last Monday
    lastMonday.setDate(today.getDate() - (dayOfWeek - 1));
  }

  // Reset hours, minutes, seconds, and milliseconds to 0 for consistency
  lastMonday.setHours(0, 0, 0, 0);

  return lastMonday;
};
