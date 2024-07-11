import { ReactNode, useCallback, useMemo } from 'react';

import { useScheduleQuery } from './lib';
import { scheduleContext } from './model';
import { TScheduleQueryResult } from './types';

type Props = {
  children: ReactNode;
};

export const ScheduleProvider = ({ children }: Props) => {
  const { data, fetchNextPage, isFetching, isLoading } = useScheduleQuery();

  const getNextSchedule = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  const getPrevSchedule = () => {};

  const hasPrevSchedule = false;

  const values = useMemo(
    () => ({
      getNextSchedule,
      getPrevSchedule,
      hasPrevSchedule,
      isFetching,
      isLoading,
      schedulePages: data?.pages ?? ([] as TScheduleQueryResult[]),
    }),
    [data?.pages, getNextSchedule, hasPrevSchedule, isFetching, isLoading],
  );

  return (
    <scheduleContext.Provider value={values}>
      {children}
    </scheduleContext.Provider>
  );
};
