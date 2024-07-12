import { ReactElement } from 'react';

import { SvgIcon, SvgIconProps } from './svg-icon';

export const ChevronLeft = (props: SvgIconProps): ReactElement => (
  <SvgIcon fill="none" viewBox="0 0 18 24" {...props}>
    <path
      d="M13 23L2 12L13 1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </SvgIcon>
);
