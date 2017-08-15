import React from "react";
import PropTypes from "prop-types";

import './task-filters.css';

const TasksFilter = ({ onFilter }) => {
  return (
    <ul>
      <li onClick={() => onFilter("all")}>View All</li>
      <li onClick={() => onFilter("active")}>Active</li>
      <li onClick={() => onFilter("completed")}>Completed</li>
    </ul>
  );
};

export default TasksFilter;
