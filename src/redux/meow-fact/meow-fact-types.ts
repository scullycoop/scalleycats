// This is not used at the moment

export const REQUEST_MEOW_FACT_PENDING = "REQUEST_MEOW_FACT_PENDING";
export const REQUEST_MEOW_FACT_SUCCESS = "REQUEST_MEOW_FACT_SUCCESS";
export const REQUEST_MEOW_FACT_FAILED = "REQUEST_MEOW_FACT_FAILED";

export interface MeowFactState {
  meowFact: string;
}

interface RequestMeowFactAction {
  type: typeof REQUEST_MEOW_FACT_PENDING 
    | typeof REQUEST_MEOW_FACT_SUCCESS 
    | typeof REQUEST_MEOW_FACT_FAILED;
  payload: string;
}

export type MeowFactActionTypes = RequestMeowFactAction;
