/* eslint-disable global-require */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Image = styled.img`
  width: 40px;
  height: 30px;
`;

export default () => (
  <Logo>
    <Link to="/">
      <Image src={require('./menu-icon.png')} alt="" />
    </Link>
  </Logo>
);
