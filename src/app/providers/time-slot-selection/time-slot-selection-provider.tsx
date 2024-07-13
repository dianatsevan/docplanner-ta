import { ReactNode, useState } from 'react';

import { selectedTimeSlotContext, selectionActionsContext } from './model';

type Props = {
  children: ReactNode;
};

export const TimeSlotSelectionProvider = ({ children }: Props) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<null | string>(null);

  return (
    <selectionActionsContext.Provider value={setSelectedTimeSlot}>
      <selectedTimeSlotContext.Provider value={selectedTimeSlot}>
        {children}
      </selectedTimeSlotContext.Provider>
    </selectionActionsContext.Provider>
  );
};
