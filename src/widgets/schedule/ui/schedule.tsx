import { useSchedule } from '@/app/providers/schedule';
import { ContentCard, IconButton } from '@/shared/ui';
import { ChevronLeft, ChevronRight } from '@/shared/ui/icons';

import { ScheduleTable } from './schedule-table';

import styles from './schedule.module.scss';

export const Schedule = () => {
  const { getNextSchedule, getPrevSchedule, hasPrevSchedule, isFetching } =
    useSchedule();

  return (
    <ContentCard className={styles.root}>
      <IconButton isDisabled={!hasPrevSchedule} onClick={getPrevSchedule}>
        <ChevronLeft />
      </IconButton>

      <ScheduleTable />

      <IconButton isDisabled={isFetching} onClick={getNextSchedule}>
        <ChevronRight />
      </IconButton>
    </ContentCard>
  );
};
