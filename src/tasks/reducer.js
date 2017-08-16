import { List, Record } from "immutable";
import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
  FILTER_TASKS
} from "./action-types";
import { Task } from "./task";

export const TaskState = new Record({
  filter: "",
  list: new List()
});

export const tasksReducer = (state = new TaskState(), { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return state.merge({list: state.list.push(new Task({id: payload.id, title: payload.title}))});
    case REMOVE_TASK:
      console.log(payload);
      return state;
    case TOGGLE_TASK:
      console.log(payload);
      return state;
    case FILTER_TASKS:
      console.log(payload);
      return state;
    default:
      return state;
  }
};
