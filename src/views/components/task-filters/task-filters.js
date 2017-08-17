import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { tasksActions } from "../../../tasks";

import "./task-filters.css";

export const TasksFilter = props => {
  function handleFilter(filter) {
    props.filterTask(filter);
  }

  return (
    <ul>
      <li onClick={() => handleFilter("all")}>View All</li>
      <li onClick={() => handleFilter("active")}>Active</li>
      <li onClick={() => handleFilter("completed")}>Completed</li>
    </ul>
  );
};

const mapDispatchToProps = Object.assign({}, tasksActions);

export default connect(null, mapDispatchToProps)(TasksFilter);
