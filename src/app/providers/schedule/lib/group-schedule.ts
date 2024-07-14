import {
  TGroupedSchedule,
  TScheduleResponse,
  TTimeSlot,
} from '@/app/providers/schedule';
import { formatDateToDayMonthWeekday } from '@/shared/lib';

export const groupSchedule = (
  scheduleResponse: TScheduleResponse,
  shouldSkipPast: boolean,
) => {
  return scheduleResponse.reduce((acc, item) => {
    if (shouldSkipPast && new Date(item.Start) < new Date()) {
      return acc;
    }

    const slot: TTimeSlot = {
      end: item.End,
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
