import clsx from 'clsx';

import { TTimeSlot } from '@/app/providers/schedule';
import { formatTimeToHHmm } from '@/shared/lib';

import styles from './time-slot.module.scss';

type Props = {
  data: TTimeSlot;
};

export const TimeSlot = ({ data }: Props) => {
  const datetime = data.start;
  const formattedTime = formatTimeToHHmm(datetime);

  return (
    <div>
      <input
        className={styles.radio}
        disabled={data.isTaken}
        id={datetime}
        name="time-slot"
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
