import { DAYS_PERIOD } from '@/app/providers/schedule';
import { formatDateToDayMonthWeekday } from '@/shared/lib';

export const getDatesRange = (startDate: Date): string[] => {
  return Array.from({ length: DAYS_PERIOD }, (_, i) => {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    return formatDateToDayMonthWeekday(currentDate);
  });
};
