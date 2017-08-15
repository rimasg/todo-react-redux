import React, { Component } from "react";
import "./App.css";

import TasksPage from "./views/pages/tasks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Todo App</h2>
        </div>
        <TasksPage />
      </div>
    );
  }
}

export default App;
