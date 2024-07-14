import { TScheduleResponse } from '@/app/providers/schedule';
import { httpClient } from '@/shared/api';
import { formatDateToYYYYMMDD } from '@/shared/lib';

export const fetchSchedule = async (date: Date): Promise<TScheduleResponse> => {
  const formattedDate = formatDateToYYYYMMDD(date);

  const response = await httpClient.get(
    `/availability/GetWeeklySlots/${formattedDate}`,
  );

  return response.data;
};
