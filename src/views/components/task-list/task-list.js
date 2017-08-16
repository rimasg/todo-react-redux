import React, { Component } from "react";
import PropTypes from "prop-types";
import { List } from "immutable";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import TasksItem from "../task-item";
import { tasksActions } from "../../../tasks";
import { getTasks } from "../../../tasks";

export class TasksList extends Component {
  render() {
    const { tasks, removeTask, toggleTask } = this.props;
    let taskItems = tasks.map((task, index) => {
      return (
        <TasksItem
          key={index}
          task={task}
          removeTask={removeTask}
          toggleTask={toggleTask}
        />
      );
    });
    return (
      <div>
        {taskItems}
      </div>
    );
  }
}

const mapStateToProps = createSelector(getTasks, tasks => ({
  tasks
}));

const mapDispatchToProps = Object.assign({}, tasksActions);

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
