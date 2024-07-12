import { ReactNode, useMemo } from 'react';

import { useScheduleQuery } from './lib';
import { scheduleContext } from './model';
import { TScheduleQueryResult } from './types';

type Props = {
  children: ReactNode;
};

export const ScheduleProvider = ({ children }: Props) => {
  const { data, fetchNextPage, isFetching, isLoading } = useScheduleQuery();

  const values = useMemo(
    () => ({
      fetchNextPage,
      isFetching,
      isLoading,
      schedulePages: data?.pages ?? ([] as TScheduleQueryResult[]),
    }),
    [data?.pages, fetchNextPage, isFetching, isLoading],
  );

  return (
    <scheduleContext.Provider value={values}>
      {children}
    </scheduleContext.Provider>
  );
};
