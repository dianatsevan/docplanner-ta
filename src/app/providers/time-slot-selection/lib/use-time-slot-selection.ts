import { useContext } from 'react';

import { selectedTimeSlotContext } from '../model';

export const useSelectedTimeSlot = () => useContext(selectedTimeSlotContext);
