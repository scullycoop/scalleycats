import {TOGGLE_SORT_METHOD, SortActionTypes} from "./sort-types";

export const toggleSortMethod = (sortOption: string): SortActionTypes => ({
  type: TOGGLE_SORT_METHOD,
  payload: sortOption
})
