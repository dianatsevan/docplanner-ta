import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { AppointmentReschedulePage } from '@/pages/appointment-reschedule';
import { queryClient } from '@/shared/lib';
import { AppFooter } from '@/shared/ui';

import './styles/main.scss';

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppointmentReschedulePage />
      <AppFooter />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
