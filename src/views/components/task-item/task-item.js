import React, { Component } from "react";
import PropTypes from "prop-types";
import { List } from "immutable";
import { connect } from "react-redux";
import classNames from "classnames";

import "./task-item.css";

export class TaskItem extends Component {
  handleRemove(id) {
    this.props.removeTask(id);
  }
  handleToggleTask(id) {
    this.props.toggleTask(id);
  }

  renderTaskItem() {
    const { task } = this.props;
    return(
      <div className={classNames({'completed': task.completed})}>
        <a href="#" onClick={() => this.handleToggleTask(task.id)}>[ ]</a>
        {task.id} - {task.title} {task.completed}
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
