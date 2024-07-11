import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './icon-button.module.scss';

type Props = {
  children: ReactNode;
  isDisabled?: boolean;
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;

export const IconButton = ({
  children,
  className,
  isDisabled,
  ...props
}: Props) => {
  return (
    <button
      className={clsx(styles.root, className)}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};
