import React from 'react';
import styled from 'styled-components';
import hamburger from './hamburger.svg';

const Image = styled.img`
  width: 40px;
  height: 30px;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default ({ onClick }) => <Image onClick={onClick} src={hamburger} alt="" />;
