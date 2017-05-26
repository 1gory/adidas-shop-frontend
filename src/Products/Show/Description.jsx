import React from 'react';
import styled from 'styled-components';

const Description = styled.p`
  font-family: 'AvenirNextRegular';
  color: #d8d8d8;
  font-size: 33px;
  line-height: 50px;
  padding: 30px;
  padding-bottom: 100px;
  padding-top: 40px;

  @media (max-width: 768px) {
    padding: 0 15px;
    padding-bottom: 150px;
    font-size: 20px;
    line-height: 28px;
  }
`;

const Brand = styled.span`
  color: #6e6e6e;
`;

export default () => (
  <Description>
    <Brand>Adidas</Brand>{' '}
    is a German multinational corporation, headquartered in Herzogenaurach, Germany,
    that designs and manufactures shoes, clothing and accessories.
  </Description>
);
