import clsx from 'clsx';
import { ReactNode, useState } from 'react';

import { Button } from '@/shared/ui';

import styles from './collapsible-container.module.scss';

type Props = {
  children: (props: { isCollapsed: boolean }) => ReactNode;
  className: string;
};

export const CollapsibleContainer = ({ children, className }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed((prevVal) => !prevVal);
  };

  return (
    <div className={clsx(styles.root, className)}>
      {children({ isCollapsed })}
      <Button onClick={toggleCollapse} variant="ghost">
        {isCollapsed ? 'See more hours' : 'Less'}
      </Button>
    </div>
  );
};
