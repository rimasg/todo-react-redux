import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
  FILTER_TASKS
} from "./action-types";

export const addTask = title => {
  return {
    type: ADD_TASK,
    payload: title
  };
};

export const removeTask = id => {
  return {
    type: REMOVE_TASK,
    payload: id
  };
};

export const toggleTask = id => {
  return {
    type: TOGGLE_TASK,
    payload: id
  };
};

export const filterTask = filter => {
  return {
    type: FILTER_TASKS,
    payload: filter
  };
};
