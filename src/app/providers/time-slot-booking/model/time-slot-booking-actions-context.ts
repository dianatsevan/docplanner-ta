import { createContext } from 'react';

import { TTimeSlotBookingActionsContext } from '../types';

export const timeSlotBookingActionsContext =
  createContext<TTimeSlotBookingActionsContext>({
    mutateTimeSlotBooking: () => {},
    setBookedTimeSlot: () => {},
    setSelectedTimeSlot: () => {},
  } as TTimeSlotBookingActionsContext);
