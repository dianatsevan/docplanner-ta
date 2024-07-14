import clsx from 'clsx';

import { useTimeSlotBooking } from '@/app/providers/time-slot-booking';
import { formatBookedTimeSlot } from '@/pages/appointment-reschedule/lib';
import { ContentCard, Typography } from '@/shared/ui';
import { Calendar, Loader } from '@/shared/ui/icons';

import styles from './booked-time-slot.module.scss';

type Props = {
  className?: string;
};

export const BookedTimeSlot = ({ className }: Props) => {
  const { bookedTimeSlot, isBookingLoading } = useTimeSlotBooking();

  const { day, time } = formatBookedTimeSlot(bookedTimeSlot.start);

  return (
    <ContentCard
      className={clsx(
        {
          [styles.loading]: isBookingLoading,
        },
        className,
      )}
    >
      {isBookingLoading ? <Loader /> : <Calendar />}

      <Typography
        className={clsx({
          [styles.loading]: isBookingLoading,
        })}
        size="md"
        tag="h1"
      >
        On {day} at {time}
      </Typography>
    </ContentCard>
  );
};
