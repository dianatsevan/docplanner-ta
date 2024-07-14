import { useSchedule } from '@/app/providers/schedule';
import { useScroll } from '@/shared/lib';
import { Button, ContentCard, Typography } from '@/shared/ui';
import { ChevronLeft, ChevronRight } from '@/shared/ui/icons';

import { ScheduleTable } from './schedule-table';

import styles from './schedule.module.scss';

export const Schedule = () => {
  const { fetchNextPage, isError, isLoading } = useSchedule();
  const { handleScroll, isLeftDisabled, ref, scrollLeft, scrollRight } =
    useScroll(fetchNextPage);

  const renderContent = () => {
    if (isLoading) {
      return (
        <Typography size="md" tag="p">
          Schedule is loading...
        </Typography>
      );
    }

    if (isError) {
      return (
        <Typography size="md" tag="p">
          Schedule wasn't found
        </Typography>
      );
    }

    return (
      <>
        <Button isDisabled={isLeftDisabled} onClick={scrollLeft} variant="icon">
          <ChevronLeft />
        </Button>

        <ScheduleTable handleScroll={handleScroll} ref={ref} />

        <Button isDisabled={isLoading} onClick={scrollRight} variant="icon">
          <ChevronRight />
        </Button>
      </>
    );
  };

  return <ContentCard className={styles.root}>{renderContent()}</ContentCard>;
};
