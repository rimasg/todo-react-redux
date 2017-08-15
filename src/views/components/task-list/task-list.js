import React, { Component } from "react";
import PropTypes from "prop-types";
import { List } from "immutable";
import { connect } from "react-redux";

import TasksItem from "../task-item";

export class TasksList extends Component {
  render() {
    return (
      <div>
        <TasksItem id="1" />
        <TasksItem id="2" />
        <TasksItem id="2" />
      </div>
    );
  }
}

export default TasksList;
