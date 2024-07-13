import { useContext } from 'react';

import { selectionActionsContext } from '../model';

export const useSelectionActions = () => useContext(selectionActionsContext);
