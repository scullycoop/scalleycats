import {SearchActionTypes} from "./types";

const INITIAL_STATE = {
  searchInput: ""
};

const searchReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchActionTypes.SET_SEARCH_FIELD:
      return {...state, searchInput: action.payload};
    default:
      return state;
  }
}

export default searchReducer;
