/* eslint-disable global-require */

import React from 'react';
import styled from 'styled-components';
import Gender from './Gender';
import Sizes from './Sizes';

const Wrapper = styled.div`
  color: #4d42f8;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 14px;
  text-transform: uppercase;
  border-bottom: 3px solid #e7e7e7;
  margin-bottom: 22px;
`;

const Icon = styled.img`
  background-color: #ebebeb;
  padding: 11px 8px;
  width: 39px;
  height: 33px;
  vertical-align: middle;
`;

export default () => (
  <Wrapper>
    <Icon src={require('./filterIcon.png')} alt="" />
    <Gender />
    <Sizes />
  </Wrapper>
);
