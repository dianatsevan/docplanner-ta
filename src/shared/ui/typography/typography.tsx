import clsx from 'clsx';
import { ReactNode } from 'react';

import styles from './typography.module.scss';

type Props = {
  bold?: boolean;
  children: ReactNode;
  size: 'lg' | 'md' | 'sm' | 'xs';
};

export const Typography = ({ bold, children, size }: Props) => {
  return (
    <p
      className={clsx(styles[size], {
        [styles.bold]: bold,
      })}
    >
      {children}
    </p>
  );
};
