import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { ChatReducer } from "./chat/reducer";
console.log(ChatReducer);

const rootReducer = combineReducers({ ChatReducer: ChatReducer });

export default createStore(rootReducer, applyMiddleware(logger));
