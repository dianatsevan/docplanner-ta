import { useContext } from 'react';

import { timeSlotBookingContext } from '../model';

export const useTimeSlotBooking = () => useContext(timeSlotBookingContext);
