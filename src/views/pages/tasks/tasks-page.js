import React, { Component } from "react";
import PropTypes from "prop-types";

import TasksFilter from "../../components/task-filters";
import TasksList from "../../components/task-list";
import TaskForm from "../../components/task-form";

export class TasksPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <TaskForm />
        </div>
        <div className="row">
          <TasksFilter />
        </div>
        <div className="row">
          <TasksList />
        </div>
      </div>
    );
  }
}

export default TasksPage;
