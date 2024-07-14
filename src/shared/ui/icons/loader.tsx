import { ReactElement } from 'react';

import { SvgIcon, SvgIconProps } from './svg-icon';

export const Loader = (props: SvgIconProps): ReactElement => (
  <SvgIcon fill="currentColor" viewBox="0 0 100 100" {...props}>
    <circle
      cx="50"
      cy="50"
      fill="none"
      r="35"
      stroke="#0099e5"
      strokeDasharray="164.93361431346415 56.97787143782138"
      strokeWidth="10"
    >
      <animateTransform
        attributeName="transform"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 50;360 50 50"
      />
    </circle>
  </SvgIcon>
);
