import { createContext } from 'react';

import { TScheduleContext } from '@/app/providers/schedule';

export const scheduleContext = createContext<TScheduleContext>({
  getNextSchedule: () => {
    return;
  },
  getPrevSchedule: () => {
    return;
  },
  hasPrevSchedule: false,
  isFetching: false,
  isLoading: false,
  schedulePages: [],
});
