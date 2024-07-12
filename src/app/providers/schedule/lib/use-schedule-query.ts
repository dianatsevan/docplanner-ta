import { useInfiniteQuery } from '@tanstack/react-query';

import {
  DAYS_PERIOD,
  TScheduleQueryResult,
  fetchSchedule,
  getDatesRange,
  groupSchedule,
} from '@/app/providers/schedule';
import { getLastMonday, getNextDate, queryClient } from '@/shared/lib';

const FIVE_MINUTES = 1000 * 60 * 5;

type QueryParam = {
  pageParam: Date;
};

const queryFn = async ({
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
};

export const useScheduleQuery = () => {
  return useInfiniteQuery({
    getNextPageParam: (lastPage) => lastPage.nextPageParam,
    initialPageParam: getLastMonday(),
    queryFn,
    queryKey: ['schedule'],
    staleTime: FIVE_MINUTES,
  });
};

queryClient.prefetchInfiniteQuery({
  getNextPageParam: (lastPage) => lastPage.nextPageParam,
  initialPageParam: getLastMonday(),
  pages: 2,
  queryFn,
  queryKey: ['schedule'],
});
