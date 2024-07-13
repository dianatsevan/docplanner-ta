import { Dispatch, SetStateAction, createContext } from 'react';

export const selectionActionsContext = createContext<
  Dispatch<SetStateAction<null | string>>
>(() => {});
