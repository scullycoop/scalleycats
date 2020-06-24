export const SET_SEARCH_FIELD = "SET_SEARCH_FIELD";

export interface SearchState {
  searchInput: string;
}

interface SetSearchFieldAction {
  type: typeof SET_SEARCH_FIELD;
  payload: string;
}

export type SearchActionTypes = SetSearchFieldAction;
