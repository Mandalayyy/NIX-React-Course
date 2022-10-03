import { combineReducers } from "redux";
import { reducer as appReducer } from "./App/reducer";
import { reducer as goodsReducer} from "./Goods/reducer";

export const rootReducer = combineReducers({ 
  app: appReducer,
  goods: goodsReducer,
});