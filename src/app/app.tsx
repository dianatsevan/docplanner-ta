import { AppointmentReschedulePage } from '@/pages/appointment-reschedule';
import { AppFooter } from '@/shared/ui';

import './styles/main.scss';

// I keep it simple without using routing. it depends on the requirement: the app should be SPA or MPA.
export const App = () => {
  return (
    <>
      <AppointmentReschedulePage />
      <AppFooter />
    </>
  );
};
