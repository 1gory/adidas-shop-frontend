import React from 'react';
import styled from 'styled-components';

const GenderButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 24px;
  font-family: 'AvenirNext';
  background: transparent;
  text-transform: uppercase;
  color: ${props => (props.isSelected ? '#4d42f8' : '#dedede')};

  @media (max-width: 768px) {
    padding-left: 0;
    padding-right: 10px;
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding: 10px;
  margin-left: 10px;

  @media (max-width: 768px) {
    display: block;
    padding: 0;
    margin-left: 0;
  }
`;

export default () => (
  <Wrapper>
    <GenderButton isSelected>man</GenderButton>
    <GenderButton>woman</GenderButton>
  </Wrapper>
);
