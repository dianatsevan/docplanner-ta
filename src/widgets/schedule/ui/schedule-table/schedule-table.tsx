import clsx from 'clsx';
import { Ref, forwardRef } from 'react';

import { useSchedule } from '@/app/providers/schedule';

import { CollapsibleContainer } from '../collapsible-container';
import { ScheduleDay } from '../schedule-day';

import styles from './schedule-table.module.scss';

type Props = {
  handleScroll: () => void;
};

export const ScheduleTable = forwardRef(
  ({ handleScroll }: Props, ref: Ref<HTMLDivElement>) => {
    const { schedulePages } = useSchedule();

    const renderSchedule = () => {
      return schedulePages?.map(({ datesRange, schedule }) => {
        return datesRange.map((date) => {
          return <ScheduleDay date={date} key={date} slots={schedule[date]} />;
        });
      });
    };

    return (
      <CollapsibleContainer className={styles.wrapper}>
        {({ isCollapsed }) => (
          <div
            className={clsx(styles.root, {
              [styles.collapsed]: isCollapsed,
            })}
            onScroll={handleScroll}
            ref={ref}
          >
            <legend className={styles.legend}>
              Choose the time slot which suits you better
            </legend>

            {renderSchedule()}
          </div>
        )}
      </CollapsibleContainer>
    );
  },
);
