import { Dispatch, SetStateAction } from 'react';

import { TTimeSlot } from '@/app/providers/schedule';

export type TTimeSlotBookingActionsContext = {
  mutateTimeSlotBooking: (timeSlot: TTimeSlot) => void;
  setBookedTimeSlot: Dispatch<SetStateAction<TTimeSlot>>;
  setSelectedTimeSlot: Dispatch<SetStateAction<TTimeSlot | null>>;
};

export type TTimeSlotBookingContext = {
  bookedTimeSlot: TTimeSlot;
  isBookingLoading: boolean;
  selectedTimeSlot: TTimeSlot | null;
};
