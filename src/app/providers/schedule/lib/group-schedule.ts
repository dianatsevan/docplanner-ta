import {
  TGroupedSchedule,
  TScheduleResponse,
  TTimeSlot,
} from '@/app/providers/schedule';
import { formatDateToDayMonthWeekday } from '@/shared/lib';

export const groupSchedule = (scheduleResponse: TScheduleResponse) => {
  return scheduleResponse.reduce((acc, item) => {
    const slot: TTimeSlot = {
      isTaken: item.Taken,
      start: item.Start,
    };
    const date = formatDateToDayMonthWeekday(slot.start);

    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date].push(slot);

    return acc;
  }, {} as TGroupedSchedule);
};
