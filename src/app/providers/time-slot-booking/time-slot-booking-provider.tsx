import { ReactNode, useState } from 'react';

import { TTimeSlot } from '@/app/providers/schedule';

import { useBookingMutation } from './lib';
import { timeSlotBookingActionsContext, timeSlotBookingContext } from './model';

type Props = {
  children: ReactNode;
};

const defaultBookedTimeSlot: TTimeSlot = {
  end: '',
  isTaken: true,
  start: new Date().toISOString(),
};

export const TimeSlotBookingProvider = ({ children }: Props) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TTimeSlot | null>(
    null,
  );
  const [bookedTimeSlot, setBookedTimeSlot] = useState<TTimeSlot>(
    defaultBookedTimeSlot,
  );

  const { isPending: isBookingLoading, mutate: mutateTimeSlotBooking } =
    useBookingMutation({
      onSuccess: (timeSlot: TTimeSlot) => {
        setBookedTimeSlot(timeSlot);
        setSelectedTimeSlot(null);
      },
    });

  return (
    <timeSlotBookingActionsContext.Provider
      value={{ mutateTimeSlotBooking, setBookedTimeSlot, setSelectedTimeSlot }}
    >
      <timeSlotBookingContext.Provider
        value={{ bookedTimeSlot, isBookingLoading, selectedTimeSlot }}
      >
        {children}
      </timeSlotBookingContext.Provider>
    </timeSlotBookingActionsContext.Provider>
  );
};
