/* eslint-disable global-require */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled.div`
  padding-top: 30px;

  @media (max-width: 768px) {
    padding-top: 0;
  }
`;

const Image = styled.img`
  width: 75px;
  height: 55px;
  padding: 20px 10px;

  @media (max-width: 768px) {
    width: 45px;
    height: 30px;
    padding: 0;
  }
`;

export default () => (
  <Logo>
    <Link to="/">
      <Image src={require('./logo.png')} alt="" />
    </Link>
  </Logo>
);
