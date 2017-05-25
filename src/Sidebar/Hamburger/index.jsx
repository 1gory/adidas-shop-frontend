/* eslint-disable global-require */
/* eslint react/prop-types: 0 */

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Image = styled.img`
  width: 40px;
  height: 30px;
`;

export default ({ onClick }) => (
  <Wrapper>
    <Image onClick={onClick} src={require('./icon.png')} alt="" />
  </Wrapper>
);
