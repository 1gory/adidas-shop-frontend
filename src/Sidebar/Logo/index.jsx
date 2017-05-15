/* eslint-disable global-require */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled.div`
  padding-top: 31px;
`;

const LogoImage = styled.img`
  padding: 15px 10px;
`;

export default () => (
  <Logo>
    <Link to="/">
      <LogoImage src={require('./logo.png')} alt="" />
    </Link>
  </Logo>
);
