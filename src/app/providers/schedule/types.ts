export type TTimeSlot = {
  end: string;
  isTaken: boolean;
  start: string;
};

export type TGroupedSchedule = Record<string, TTimeSlot[]>;

export type TScheduleContext = {
  fetchNextPage: () => void;
  isError: boolean;
  isLoading: boolean;
  schedulePages: TScheduleQueryResult[];
};

export type TScheduleQueryResult = {
  datesRange: string[];
  nextPageParam: Date;
  schedule: TGroupedSchedule;
};

export type TScheduleResponse = Array<{
  End: string;
  Start: string;
  Taken: boolean;
}>;
