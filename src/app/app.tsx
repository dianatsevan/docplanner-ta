import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { AppointmentReschedulePage } from '@/pages/appointment-reschedule';
import { queryClient } from '@/shared/lib';
import { AppFooter } from '@/shared/ui';

import './styles/main.scss';

// I keep it simple without using routing. it depends on the requirement: the app should be SPA or MPA.
export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppointmentReschedulePage />
      <AppFooter />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
