import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import indexReducer from "./reducers/indexReducer.jsx";

export const store = createStore(indexReducer, applyMiddleware(thunk, logger));