import styled from 'styled-components';
import React from 'react';

const Description = styled.div`
  font-family: 'AvenirNextReqular';
  color: #d8d8d8;
  font-size: 33px;
  line-height: 50px;
  padding-bottom: 100px;
  padding-right: 50px;
`;

const Brand = styled.span`
  color: #6e6e6e;
`;

export default () => (
  <Description>
    <p>
      <Brand>Adidas</Brand>{' '}
      is a German multinational corporation, headquartered in Herzogenaurach, Germany,
      that designs and manufactures shoes, clothing and accessories.
    </p>
  </Description>
);
