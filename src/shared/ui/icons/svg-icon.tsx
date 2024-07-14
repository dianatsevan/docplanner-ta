import { SVGAttributes } from 'react';

import styles from './svg-icon.module.scss';

export type SvgIconProps = SVGAttributes<SVGElement>;

export const SvgIcon = ({ className, ...props }: SvgIconProps) => (
  <svg className={`${className} ${styles.svg}`} {...props} />
);
