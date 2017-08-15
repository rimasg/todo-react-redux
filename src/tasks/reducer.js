import { List, Record } from "immutable";
import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
  FILTER_TASKS
} from "./action-types";

export const TaskState = new Record({
    filter: "",
    list: new List()
});

export const tasksReducer = (state = new TaskState(), {type, payload}) => {
    switch (type) {
        case ADD_TASK:
            console.log(payload);
            break;
        case REMOVE_TASK:
            console.log(payload);
            break;
        case TOGGLE_TASK:
            console.log(payload);
            break;
        case FILTER_TASKS:
            console.log(payload);
            break;
        default:
            break;
    }
}
