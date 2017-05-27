import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
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

  &.active {
    color: #ffffff;
  }
`;

export default props => (
  <StyledLink activeClassName="active" to={props.to}>{props.children}</StyledLink>
);
