import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "./List";
import Show from "./Show";
import Sidebar from "./Sidebar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-container">
          <Sidebar />
          <Route exact path="/" component={List} />
          <Route path="/product" component={Show} />
        </div>
      </Router>
    );
  }
}

export default App;
