export type TTimeSlot = {
  isTaken: boolean;
  start: string;
};

export type TGroupedSchedule = Record<string, TTimeSlot[]>;

export type TScheduleContext = {
  getNextSchedule: () => void;
  getPrevSchedule: () => void;
  hasPrevSchedule: boolean;
  isFetching: boolean;
  isLoading: boolean;
  schedulePages: TScheduleQueryResult[];
};

export type TScheduleQueryResult = {
  datesRange: string[];
  nextPageParam: Date;
  schedule: TGroupedSchedule;
};

export type TScheduleResponse = Array<{
  Start: string;
  Taken: boolean;
}>;
