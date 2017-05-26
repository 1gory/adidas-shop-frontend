import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
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

export default props => <StyledLink to={props.to}>{props.children}</StyledLink>;
