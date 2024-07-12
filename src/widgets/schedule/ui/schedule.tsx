import { useSchedule } from '@/app/providers/schedule';
import { useScroll } from '@/shared/lib';
import { Button, ContentCard } from '@/shared/ui';
import { ChevronLeft, ChevronRight } from '@/shared/ui/icons';

import { ScheduleTable } from './schedule-table';

import styles from './schedule.module.scss';

export const Schedule = () => {
  const { fetchNextPage, isFetching } = useSchedule();
  const { handleScroll, isLeftDisabled, ref, scrollLeft, scrollRight } =
    useScroll(fetchNextPage);

  return (
    <ContentCard className={styles.root}>
      <Button isDisabled={isLeftDisabled} onClick={scrollLeft} variant="icon">
        <ChevronLeft />
      </Button>

      <ScheduleTable handleScroll={handleScroll} ref={ref} />

      <Button isDisabled={isFetching} onClick={scrollRight} variant="icon">
        <ChevronRight />
      </Button>
    </ContentCard>
  );
};
