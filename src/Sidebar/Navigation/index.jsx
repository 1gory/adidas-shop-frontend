/* eslint-disable global-require */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.nav`
  margin-top: 150px;
`;

const NavigationLink = styled(Link)`
  display: block;
  padding-bottom: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  text-decoration: none;
  font-family: 'AndaleMono';
  text-transform: uppercase;
  color: #3c3c3c;

  &:hover {
    color: white;
  }
`;

const NavigationSectionLink = styled(NavigationLink)`
  margin-bottom: 0;
  padding-bottom: 0;
  margin-top: 30px;
  font-family: 'AvenirNext';
`;

const NavigationSectionLinkSelected = styled(NavigationSectionLink)`
  margin-right: 20px;
  color: white;

  &:after {
    content: '';
    position: absolute;
    width: 14px;
    height: 9px;
    margin-top: 12px;
    margin-left: 7px;
    background: url(${require('./nav-arrow.png')});
  }
`;

const Section = styled.nav`
  padding-bottom: 10px;
`;

export default () => (
  <Navigation>
    <NavigationSectionLinkSelected to="/">
      sports
    </NavigationSectionLinkSelected>
    <Section>
      <NavigationLink to="/">shoes</NavigationLink>
      <NavigationLink to="/">clothing</NavigationLink>
      <NavigationLink to="/">accesories</NavigationLink>
    </Section>
    <nav>
      <NavigationSectionLink to="/">brands</NavigationSectionLink>
      <NavigationSectionLink to="/">micoach</NavigationSectionLink>
    </nav>
  </Navigation>
);
