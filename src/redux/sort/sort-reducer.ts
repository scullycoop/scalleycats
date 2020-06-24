import {SortState, TOGGLE_SORT_METHOD, SortActionTypes} from "./sort-types";

const INITIAL_STATE: SortState = {
  sortBy: "alphabetical"
};

const sortReducer = (state=INITIAL_STATE, action: SortActionTypes) => {
  switch (action.type) {
    case TOGGLE_SORT_METHOD:
      return {...state, sortBy: action.payload};
    default:
      return state;
  }
}

export default sortReducer;
