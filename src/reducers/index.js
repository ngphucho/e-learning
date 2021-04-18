import { combineReducers } from "redux";
import courses from "./courses";
import auth from "./auth";

const rootReducer = combineReducers({
  // nơi chứa các reducers con
  courses,
  auth,
});

export default rootReducer;
