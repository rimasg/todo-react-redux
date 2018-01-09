import React, { Component } from "react";
import PropTypes from "prop-types";
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
        <button onClick={() => this.handleToggleTask(task)}><span aria-hidden="true">&#9633;</span></button>
        {task.id}: {task.title} {task.completed}
        <button type="button" onClick={() => this.handleRemove(task.id)}><span aria-hidden="true">&times;</span></button>
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
