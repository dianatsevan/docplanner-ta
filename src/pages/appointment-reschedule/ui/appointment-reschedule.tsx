import { ScheduleProvider } from '@/app/providers/schedule';
import { ContentCard, PageContainer, Typography } from '@/shared/ui';
import { Calendar } from '@/shared/ui/icons';
import { Schedule } from '@/widgets/schedule/ui/schedule';

import styles from './appointment-reschedule.module.scss';

export const AppointmentReschedulePage = () => {
  return (
    <PageContainer>
      <div className={styles.root}>
        <Typography size="lg">
          Confirm you appointment with Dr. Simeon Molas
        </Typography>

        <ContentCard className={styles['date-card']}>
          <Calendar />
          <Typography size="md">On Friday, 21 May 2021 at 10:00 AM</Typography>
        </ContentCard>

        <Typography size="lg">Did you have an unexpected situation?</Typography>
        <Typography size="lg">
          You can change the appointment for when it suits you better
        </Typography>

        <ScheduleProvider>
          <Schedule />
        </ScheduleProvider>

        <Typography size="lg">Reschedule</Typography>
        <Typography size="lg">Click the button to confirm</Typography>
      </div>
    </PageContainer>
  );
};
