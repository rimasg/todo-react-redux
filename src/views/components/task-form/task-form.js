import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { tasksActions } from "../../../tasks";

export class TaskForm extends Component {
  ESCAPE_KEY = 27;
  ENTER_KEY = 13;

  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  clearInput = e => {
    this.setState({ title: "" });
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleKeyUp = e => {
    if (e.keyCode === this.ESCAPE_KEY) this.clearInput(e);
  };

  handleSubmit = e => {
    e.preventDefault();
    const title = this.state.title.trim();
    if (title.length) this.props.addTask(title)
    this.clearInput();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <input
          autoComplete="off"
          autoFocus
          maxLength="64"
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          placeholder="Whats needs to be done?"
          type="text"
          value={this.state.title}
        />
      </form>
    );
  }
}

const mapDispatchToProps = Object.assign({}, tasksActions);

export default connect(null, mapDispatchToProps)(TaskForm);
