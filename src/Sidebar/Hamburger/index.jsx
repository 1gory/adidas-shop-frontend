import React from 'react';
import styled from 'styled-components';
import hamburger from './hamburger.svg';

const Button = styled.button`
  width: 40px;
  height: 30px;
  display: none;
  border: none;
  outline: none;
  cursor: pointer;
  background: url(${hamburger});

  @media (max-width: 768px) {
    display: block;
  }
`;

export default ({ onClick }) => <Button onClick={onClick} alt="" />;
