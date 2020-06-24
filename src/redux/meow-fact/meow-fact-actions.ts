// This is not used at the moment

import {
  REQUEST_MEOW_FACT_PENDING, 
  REQUEST_MEOW_FACT_SUCCESS, 
  REQUEST_MEOW_FACT_FAILED
} from "./meow-fact-types";

export const requestMeowFact = () => (dispatch: any) => {
  dispatch({type: REQUEST_MEOW_FACT_PENDING})
  fetch("https://meowfacts.herokuapp.com")
    .then((res) => res.json())
    .then((data) => dispatch({type: REQUEST_MEOW_FACT_SUCCESS, payload: data}))
    .catch((err) => dispatch({type: REQUEST_MEOW_FACT_FAILED, payload: err}))
}
