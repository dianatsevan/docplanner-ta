import clsx from 'clsx';
import { ReactNode } from 'react';

import styles from './typography.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
  size: 'lg' | 'md' | 'sm' | 'xs';
  tag: keyof JSX.IntrinsicElements;
};

export const Typography = ({ children, className, size, tag: Tag }: Props) => {
  return <Tag className={clsx(styles[size], className)}>{children}</Tag>;
};
