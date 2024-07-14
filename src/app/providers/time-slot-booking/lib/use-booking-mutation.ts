import { UseMutationOptions, useMutation } from '@tanstack/react-query';

import { TTimeSlot } from '../../schedule/types';
import { bookTimeSlot } from '../api';

type TBookingMutationOptions = Omit<
  UseMutationOptions<TTimeSlot, Error, TTimeSlot>,
  'mutationFn'
>;

export const useBookingMutation = (options: TBookingMutationOptions) => {
  return useMutation({
    mutationFn: async (timeSlot: TTimeSlot) => {
      const promise = new Promise((res) => {
        setTimeout(() => {
          res('');
        }, 2000);
      });

      await promise;
      await bookTimeSlot(timeSlot);

      return timeSlot;
    },
    onError: (error) => {
      console.error('Error booking time slot', error);
    },
    ...options,
  });
};
