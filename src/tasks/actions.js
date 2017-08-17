import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
  FILTER_TASKS
} from "./action-types";

let nextId = 0;
export const addTask = title => {
  return {
    type: ADD_TASK,
    payload: { id: nextId++, title: title }
  };
};

export const removeTask = id => {
  return {
    type: REMOVE_TASK,
    payload: { id: id }
  };
};

export const toggleTask = task => {
  return {
    type: TOGGLE_TASK,
    payload: task
  };
};

export const filterTask = filter => {
  return {
    type: FILTER_TASKS,
    payload: {filter : filter}
  };
};
