import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './button.module.scss';

type Props = {
  children: ReactNode;
  isDisabled?: boolean;
  variant: 'contained' | 'ghost' | 'icon';
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;

export const Button = ({
  children,
  className,
  isDisabled,
  variant,
  ...props
}: Props) => {
  return (
    <button
      className={clsx(styles.root, styles[variant], className)}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};
