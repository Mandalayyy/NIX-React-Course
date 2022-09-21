import { combineReducers } from 'redux';
import { reducer as todoListReducer } from './TodoList/reducer';
import { reducer as appReducer } from './App/reducer';

export const rootReducer = combineReducers({ 
  todo: todoListReducer, 
  app: appReducer 
});