/* eslint-disable global-require */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
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
  <Wrapper>
    <Link to="/">
      <Image src={require('./menu-icon.png')} alt="" />
    </Link>
  </Wrapper>
);
