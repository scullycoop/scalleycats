import {SearchState, SET_SEARCH_FIELD, SearchActionTypes} from "./search-types";

const INITIAL_STATE: SearchState = {
  searchInput: ""
};

const searchReducer = (state=INITIAL_STATE, action: SearchActionTypes) => {
  switch (action.type) {
    case SET_SEARCH_FIELD:
      return {...state, searchInput: action.payload};
    default:
      return state;
  }
}

export default searchReducer;
