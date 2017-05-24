/* eslint-disable global-require */

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  margin-top: 150px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SubLink = styled(NavLink)`
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

const SectionLink = styled(SubLink)`
  margin-bottom: 0;
  padding-bottom: 0;
  margin-top: 30px;
  font-family: 'AvenirNext';
`;

const SectionSelected = styled(SectionLink)`
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
  <Wrapper>
    <SectionSelected to="/">sports</SectionSelected>
    <Section>
      <SubLink to="/">shoes</SubLink>
      <SubLink to="/">clothing</SubLink>
      <SubLink to="/">accesories</SubLink>
    </Section>
    <nav>
      <SectionLink to="/">brands</SectionLink>
      <SectionLink to="/">micoach</SectionLink>
    </nav>
  </Wrapper>
);
