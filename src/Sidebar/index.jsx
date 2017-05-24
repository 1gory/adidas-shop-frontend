import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import HamburgerButton from './HamburgerButton';
import Search from './Search';
import Navigation from './Navigation';

const Aside = styled.aside`
  text-align: center;
  min-width: 375px;
  width: 414px;
  background-color: black;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const MenuButtons = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 17px 15px;
  }
`;

export default () => (
  <Aside>
    <MenuButtons>
      <Logo />
      <HamburgerButton />
    </MenuButtons>
    <Search />
    <Navigation />
  </Aside>
);
