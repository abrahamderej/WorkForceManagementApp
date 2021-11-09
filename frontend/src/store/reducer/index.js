import { combineReducers } from "redux";
import userReducer from "./UserReducer";

const allReducers = combineReducers({
  user: userReducer,
});

export default allReducers;
