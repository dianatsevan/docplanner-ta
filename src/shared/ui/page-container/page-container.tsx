import { PropsWithChildren } from 'react';

import styles from './page-container.module.scss';

export const PageContainer = ({ children }: PropsWithChildren) => {
  return <div className={styles.root}>{children}</div>;
};
