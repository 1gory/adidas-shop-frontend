/* eslint-disable global-require */

import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  padding-left: 10px;
  padding-top: 10px;
  width: 30px;
  position: absolute;
`;

const Input = styled.input`
  border: none;
  border-bottom: 4px solid #373737;
  box-sizing: border-box;
  width: 100%;
  color: white;
  background: transparent;
  padding: 15px 0 15px 50px;
  font-size: 20px;
`;

const Wrapper = styled.form`
  @media (max-width: 768px) {
    display: none;
  }
`;

export default () => (
  <Wrapper>
    <Image src={require('./search-icon.png')} alt="" />
    <Input />
  </Wrapper>
);
