import { TTimeSlot } from '@/app/providers/schedule';
import { httpClient } from '@/shared/api';

export const bookTimeSlot = async (timeSlot: TTimeSlot): Promise<Record<string, unknown>> =>
  httpClient.post(`/availability/BookSlot`, {
    ...timeSlot,
    patient: {
      email: '',
      name: '',
      phone: '',
      secondName: '',
    },
  });
