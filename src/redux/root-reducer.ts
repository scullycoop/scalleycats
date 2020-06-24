import {combineReducers} from "redux";

import searchReducer from "./search/search-reducer";
import sortReducer from "./sort/sort-reducer";

const rootReducer = combineReducers({
  search: searchReducer,
  sort: sortReducer
});

export default rootReducer;
