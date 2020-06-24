// This is not used at the moment

import {
  REQUEST_MEOW_FACT_PENDING, 
  REQUEST_MEOW_FACT_SUCCESS, 
  REQUEST_MEOW_FACT_FAILED,
  MeowFactActionTypes
} from "./meow-fact-types";

const INITIAL_STATE = {
  meowFact: "",
  meowFactIsPending: true
}

const meowFactReducer = (state=INITIAL_STATE, action: MeowFactActionTypes) => {
  switch (action.type) {
    case REQUEST_MEOW_FACT_PENDING:
      return {...state, meowFactIsPending: true};
    case REQUEST_MEOW_FACT_SUCCESS:
      return {...state, meowFact: action.payload, meowFactIsPending: true};
    case REQUEST_MEOW_FACT_FAILED:
      return {...state, meowFactError: action.payload};
    default:
      return state;
  }
}

export default meowFactReducer;
