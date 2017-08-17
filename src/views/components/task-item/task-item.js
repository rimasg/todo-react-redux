import React, { Component } from "react";
import PropTypes from "prop-types";
import { List } from "immutable";
import { connect } from "react-redux";
import classNames from "classnames";
import { Task } from "../../../tasks";

import "./task-item.css";

export class TaskItem extends Component {
  handleRemove(id) {
    this.props.removeTask(id);
  }

  handleToggleTask(task) {
    let updatedTask = new Task({id: task.id, completed: !task.completed, title: task.title});
    this.props.toggleTask(updatedTask);
  }

  renderTaskItem() {
    const { task } = this.props;
    return(
      <div className={classNames({'completed': task.completed})}>
        <a href="#" onClick={() => this.handleToggleTask(task)}>[ ]</a>
        {task.id}: {task.title} {task.completed}
        <a href="#" onClick={() => this.handleRemove(task.id)}>[X]</a>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderTaskItem()}
      </div>
    );
  }
}

export default TaskItem;
