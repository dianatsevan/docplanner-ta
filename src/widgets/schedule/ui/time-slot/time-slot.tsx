import clsx from 'clsx';
import { ChangeEvent } from 'react';

import { TTimeSlot } from '@/app/providers/schedule';
import { useSelectionActions } from '@/app/providers/time-slot-selection';
import { formatTimeToHHmm } from '@/shared/lib';

import styles from './time-slot.module.scss';

type Props = {
  data: TTimeSlot;
};

export const TimeSlot = ({ data }: Props) => {
  const setSelectedTimeSlot = useSelectionActions();

  const datetime = data.start;
  const formattedTime = formatTimeToHHmm(datetime);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedTimeSlot(e.target.value);
  };

  return (
    <div>
      <input
        className={styles.radio}
        disabled={data.isTaken}
        id={datetime}
        name="time-slot"
        onChange={handleChange}
        type="radio"
        value={datetime}
      />
      <label
        className={clsx(styles.label, {
          [styles.available]: !data.isTaken,
          [styles.taken]: data.isTaken,
        })}
        htmlFor={datetime}
      >
        {formattedTime}
      </label>
    </div>
  );
};
