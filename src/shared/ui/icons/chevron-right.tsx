import { ReactElement } from 'react';

import { SvgIcon, SvgIconProps } from './svg-icon';

export const ChevronRight = (props: SvgIconProps): ReactElement => (
    <SvgIcon fill="none" viewBox="0 0 10 24" {...props}>
        <path
            d="M1 1L12 12L1 23"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={2}
        />
    </SvgIcon>
);
