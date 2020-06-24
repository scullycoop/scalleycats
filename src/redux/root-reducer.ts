import {combineReducers} from "redux";

import searchReducer from "./search/search-reducer";
import sortReducer from "./sort/sort-reducer";
// import meowFactReducer from "./meow-fact/meow-fact-reducer";

const rootReducer = combineReducers({
  search: searchReducer,
  sort: sortReducer,
  // meowFact: meowFactReducer
});

export default rootReducer;
