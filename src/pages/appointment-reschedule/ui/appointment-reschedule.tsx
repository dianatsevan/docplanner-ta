import { ScheduleProvider } from '@/app/providers/schedule';
import { TimeSlotBookingProvider } from '@/app/providers/time-slot-booking';
import { PageContainer, Typography } from '@/shared/ui';
import { Schedule } from '@/widgets/schedule/ui/schedule';

import { BookedTimeSlot } from './booked-time-slot';
import { RescheduleButton } from './reschedule-button';

import styles from './appointment-reschedule.module.scss';

export const AppointmentReschedulePage = () => {
  return (
    <TimeSlotBookingProvider>
      <PageContainer>
        <div className={styles.root}>
          <Typography size="lg" tag="h1">
            Confirm you appointment with <strong>Dr. Simeon Molas</strong>
          </Typography>

          <BookedTimeSlot className={styles['date-card']} />

          <Typography size="lg" tag="b">
            Did you have an unexpected situation?
          </Typography>
          <Typography size="lg" tag="h2">
            You can change the appointment for when it suits you better
          </Typography>

          <ScheduleProvider>
            <Schedule />
          </ScheduleProvider>

          <RescheduleButton />
        </div>
      </PageContainer>
    </TimeSlotBookingProvider>
  );
};
