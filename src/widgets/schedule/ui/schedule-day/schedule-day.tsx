import { TTimeSlot } from '@/app/providers/schedule';
import { Typography } from '@/shared/ui';

import { TimeSlot } from '../time-slot';

import styles from './schedule-day.module.scss';

type Props = {
  date: string;
  slots: TTimeSlot[];
};

export const ScheduleDay = ({ date, slots }: Props) => {
  return (
    <div className={styles.root}>
      <Typography className={styles.title} size="sm" tag='h4'>{date}</Typography>

      {slots?.map((slot) => (
        <TimeSlot data={slot} key={slot.start} />
      ))}
    </div>
  );
};
