import { ReactElement } from 'react';

import { SvgIcon, SvgIconProps } from './svg-icon';

export const Calendar = (props: SvgIconProps): ReactElement => (
  <SvgIcon fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M5 22c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 013 20V6c0-.55.196-1.02.587-1.412A1.927 1.927 0 015 4h1V2.975c0-.283.096-.517.287-.7A.993.993 0 017 2a.97.97 0 01.713.287A.97.97 0 018 3v1h8V2.975c0-.283.096-.517.288-.7A.99.99 0 0117 2c.283 0 .52.096.712.287.192.192.288.43.288.713v1h1c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v14c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0119 22H5zm0-2h14V10H5v10zM5 8h14V6H5v2z" />
  </SvgIcon>
);
