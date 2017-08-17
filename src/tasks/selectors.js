import { createSelector } from "reselect";

export const getTasksFromState = state => {
  return state.tasks;
};

export const getTaskList = state => {
  return getTasksFromState(state).list;
};

export const getTaskFilter = state => {
  return getTasksFromState(state).filter;
};

export const getTasks = createSelector(
  getTaskList,
  getTaskFilter,
  (tasks, filter) => {
    switch (filter) {
      case "all":
        return tasks;
      case "active":
        return tasks.filter(task => !task.completed);
      case "completed":
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }
);
