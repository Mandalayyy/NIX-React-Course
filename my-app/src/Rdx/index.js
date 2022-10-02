import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducer";
import thunk from "redux-thunk";


const logger = store => next => action => {
  console.log("Actions", action );
  const returnValue = next(action);
  console.log("new state", store.getState());
  return returnValue;
};

export const store = createStore(rootReducer, applyMiddleware(logger, thunk));