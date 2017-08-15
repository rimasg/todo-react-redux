import React, { Component } from "react";
import PropTypes from "prop-types";
import { List } from "immutable";
import { connect } from "react-redux";

import TasksFilter from "../../components/task-filters";
import TasksList from "../../components/task-list";

class TasksPage extends Component {

  handleFilter = (filter) => {
    console.log("Filter: " + filter);
  }

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
          <TasksFilter onFilter={this.handleFilter}/>
        </div>
        <div className="row">
          <TasksList />
        </div>
      </div>
    );
  }
}

export default TasksPage;
