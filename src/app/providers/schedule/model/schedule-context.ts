import { createContext } from 'react';

import { TScheduleContext } from '@/app/providers/schedule';

export const scheduleContext = createContext<TScheduleContext>({
  fetchNextPage: () => {
    return;
  },
  isError: false,
  isLoading: false,
  schedulePages: [],
});
