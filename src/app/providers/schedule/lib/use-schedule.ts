import { useContext } from 'react';

import { scheduleContext } from '@/app/providers/schedule';

export const useSchedule = () => useContext(scheduleContext);
