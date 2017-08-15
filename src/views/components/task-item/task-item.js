import React, { Component } from "react";
import PropTypes from "prop-types";
import { List } from "immutable";
import { connect } from "react-redux";

class TaskItem extends Component {
  renderTaskItem() {
    const { id } = this.props;
    return (`Task Item #${id}`);
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
