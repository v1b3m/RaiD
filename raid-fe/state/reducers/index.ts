import { combineReducers } from "redux";
import authReducer from "../auth";
import userReducer from "../user";
import popUpReducer from "../application";

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  application: popUpReducer,
});
