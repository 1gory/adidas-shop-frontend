import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import List from './List';
import Show from './Show';
import Sidebar from './Sidebar';

export default () => (
  <Router>
    <div className="main-container">
      <Sidebar />
      <Route exact path="/" component={List} />
      <Route path="/product" component={Show} />
    </div>
  </Router>
);
