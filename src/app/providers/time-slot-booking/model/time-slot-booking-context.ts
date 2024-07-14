import { createContext } from 'react';

import { TTimeSlotBookingContext } from '../types';

export const timeSlotBookingContext = createContext<TTimeSlotBookingContext>({
  bookedTimeSlot: {},
  isBookingLoading: false,
  selectedTimeSlot: null,
} as TTimeSlotBookingContext);
