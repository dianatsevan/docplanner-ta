import { useSchedule } from '@/app/providers/schedule';

import { ScheduleDay } from '../schedule-day';

import styles from './schedule-table.module.scss';

export const ScheduleTable = () => {
  const { schedulePages } = useSchedule();

  return (
    <div className={styles.root}>
      <legend className={styles.legend}>
        Choose the time slot which suits you better
      </legend>

      {schedulePages?.map(({ datesRange, schedule }) => {
        return datesRange.map((date) => {
          return <ScheduleDay date={date} key={date} slots={schedule[date]} />;
        });
      })}
    </div>
  );
};
