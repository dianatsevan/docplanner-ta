import { useContext } from 'react';

import { timeSlotBookingActionsContext } from '../model';

export const useTimeSlotBookingActions = () => useContext(timeSlotBookingActionsContext);
