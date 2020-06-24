export const TOGGLE_SORT_METHOD = "TOGGLE_SORT_METHOD";

export interface SortState {
  sortBy: string
}

interface ToggleSortMethodAction {
  type: typeof TOGGLE_SORT_METHOD,
  payload: string
}

export type SortActionTypes = ToggleSortMethodAction;
