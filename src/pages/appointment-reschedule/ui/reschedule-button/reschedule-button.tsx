import { useEffect, useRef } from 'react';

import {
  useTimeSlotBooking,
  useTimeSlotBookingActions,
} from '@/app/providers/time-slot-booking';
import { formatBookedTimeSlot } from '@/pages/appointment-reschedule/lib';
import { Button, Typography } from '@/shared/ui';

import styles from './reschedule-button.module.scss';

export const RescheduleButton = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isBookingLoading, selectedTimeSlot } = useTimeSlotBooking();
  const { mutateTimeSlotBooking } = useTimeSlotBookingActions();

  const timeStamp = selectedTimeSlot?.start;

  useEffect(() => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [timeStamp]);

  if (!timeStamp) {
    return null;
  }

  const { day, time } = formatBookedTimeSlot(timeStamp);

  const handleClick = () => {
    mutateTimeSlotBooking(selectedTimeSlot);
  };

  return (
    <div ref={containerRef}>
      <Typography className={styles.heading} size="lg" tag="h2">
        <b>Reschedule</b>
      </Typography>
      <Typography size="lg" tag="h3">
        Click the button to confirm
      </Typography>

      <Button
        className={styles.button}
        isDisabled={isBookingLoading}
        onClick={handleClick}
        variant="contained"
      >
        <Typography size="md" tag="span">
          {day} at {time}
        </Typography>
      </Button>
    </div>
  );
};
