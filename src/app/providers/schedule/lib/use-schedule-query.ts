import { useInfiniteQuery } from '@tanstack/react-query';

import {
  DAYS_PERIOD,
  TScheduleQueryResult,
  fetchSchedule,
  getDatesRange,
  groupSchedule,
} from '@/app/providers/schedule';
import { getLastMonday, getNextDate } from '@/shared/lib';

const FIVE_MINUTES = 1000 * 60 * 5;

type QueryParam = {
  pageParam: Date;
};

export const useScheduleQuery = () => {
  return useInfiniteQuery({
    getNextPageParam: (lastPage) => lastPage.nextPageParam,
    initialPageParam: getLastMonday(),
    queryFn: async ({
      pageParam: startDate,
    }: QueryParam): Promise<TScheduleQueryResult> => {
      const response = await fetchSchedule(startDate);

      const groupedSchedule = groupSchedule(response);

      const datesRange = getDatesRange(startDate);

      return new Promise((res) => {
        res({
          datesRange,
          nextPageParam: getNextDate(startDate, DAYS_PERIOD),
          schedule: groupedSchedule,
        });
      });
    },
    queryKey: ['schedule'],
    staleTime: FIVE_MINUTES,
  });
};
