import clsx from 'clsx';
import { ReactNode } from 'react';

import styles from './content-card.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

export const ContentCard = ({ children, className }: Props) => {
  return <div className={clsx(styles.root, className)}>{children}</div>;
};
