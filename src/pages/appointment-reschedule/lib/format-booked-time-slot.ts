import { formatDateToDayMonthWeekday, formatTimeToHHmm } from '@/shared/lib';

export const formatBookedTimeSlot = (timeSlot: string) => {
  const day = formatDateToDayMonthWeekday(timeSlot);
  const time = formatTimeToHHmm(timeSlot);

  return { day, time };
};
