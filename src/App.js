import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import IndexPage from './Components/IndexPage.js';
import ProductPage from './Components/ProductPage.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={IndexPage} />
          <Route path="/product" component={ProductPage} />
        </div>
      </Router>
    );
  }
}

export default App;
