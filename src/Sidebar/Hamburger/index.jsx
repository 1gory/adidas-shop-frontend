import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 40px;
  height: 30px;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default ({ onClick }) => <Image onClick={onClick} src={require('./icon.png')} alt="" />;
