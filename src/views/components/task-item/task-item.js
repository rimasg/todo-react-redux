import React, { Component } from "react";
import PropTypes from "prop-types";
import { List } from "immutable";
import { connect } from "react-redux";

export class TaskItem extends Component {
  renderTaskItem() {
    const { task } = this.props;
    return (task);
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
