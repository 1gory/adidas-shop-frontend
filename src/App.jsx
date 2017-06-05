import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import List from './Products/List';
import Show from './Products/Show';
import Sidebar from './Sidebar';

const Wrapper = styled.div`
  display: flex;
  min-height: 100%;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default () => (
  <Router>
    <Wrapper>
      <Sidebar />
      <Redirect from="/" to="/products/football/shoes" />
      <Route exact path="/products/:group/:type" component={List} />
      <Route path="/product/:group/:type/:id" component={Show} />
    </Wrapper>
  </Router>
);
