import {SET_SEARCH_FIELD, SearchActionTypes} from "./search-types";

export const setSearchField = (text: string): SearchActionTypes => ({
  type: SET_SEARCH_FIELD,
  payload: text
})
