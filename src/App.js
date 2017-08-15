import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";

import TasksPage from "./views/pages/tasks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Todo App</h2>
        </div>
        <Provider store={store}>
          <TasksPage />
        </Provider>
      </div>
    );
  }
}

export default App;
