import { useSelectedTimeSlot } from '@/app/providers/time-slot-selection';
import { Button, Typography } from '@/shared/ui';

import styles from './reschedule-button.module.scss';

export const RescheduleButton = () => {
  const selectedTimeSlot = useSelectedTimeSlot();

  if (!selectedTimeSlot) {
    return null;
  }

  return (
    <>
      <Typography size="lg" tag="h2">
        <b>Reschedule</b>
      </Typography>
      <Typography size="lg" tag="h3">
        Click the button to confirm
      </Typography>

      <Button className={styles.button} variant="contained">
        <Typography size="md" tag="span">
          {selectedTimeSlot}
        </Typography>
      </Button>
    </>
  );
};
