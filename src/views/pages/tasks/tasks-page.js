import React, { Component } from "react";
import PropTypes from "prop-types";
import { List } from "immutable";
import { connect } from "react-redux";

import TasksList from "../../components/task-list";

class TasksPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          Add Todo {" "}
          <button type="button" className="btn btn-primary">
            Add Todos
          </button>
        </div>
        <div className="row">
            Filter Todos
        </div>
        <div className="row">
          <TasksList />
        </div>
      </div>
    );
  }
}

export default TasksPage;
