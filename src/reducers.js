import { combineReducers } from "redux";
import { tasksReducer } from "./tasks";

const reducers = combineReducers({
  tasks: tasksReducer
});

export default reducers;
