import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import Navigation from './Navigation';

const Aside = styled.aside`
  text-align: center;
  min-width: 375px;
  width: 25%;
  background-color: black;
  padding: 20px;
`;

export default () => (
  <Aside>
    <Logo />
    <Search />
    <Navigation />
  </Aside>
);
