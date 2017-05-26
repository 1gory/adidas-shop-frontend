import React from 'react';
import styled from 'styled-components';
import Gender from './Gender';
import Sizes from './Sizes';

const Wrapper = styled.div`
  color: #4d42f8;
  padding: 12px;
  text-transform: uppercase;
  border-bottom: 3px solid #e7e7e7;
  margin-bottom: 22px;

  @media (max-width: 768px) {
    padding-left: 15px;
  }
`;

const Icon = styled.img`
  background-color: #ebebeb;
  padding: 11px 8px;
  width: 39px;
  height: 33px;
  vertical-align: middle;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default () => (
  <Wrapper>
    <Icon src={require('./filterIcon.png')} alt="" />
    <Gender />
    <Sizes />
  </Wrapper>
);
