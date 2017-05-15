import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import List from './Products/List';
import Show from './Products/Show';
import Sidebar from './Sidebar';

const Wrapper = styled.div`
  display: flex;
  min-height: 100%;
`;

export default () => (
  <Router>
    <Wrapper>
      <Sidebar />
      <Route exact path="/" component={List} />
      <Route path="/product" component={Show} />
    </Wrapper>
  </Router>
);
