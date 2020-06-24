import {createStore, applyMiddleware, Middleware} from "redux";
import logger from "redux-logger";
// import thunkMiddleware from "redux-thunk";

import rootReducer from "./root-reducer";

// const middlewares: Array<Middleware> = [thunkMiddleware, logger];
const middlewares: Array<Middleware> = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
