import styled from 'styled-components';
import React from 'react';
import Description from './Description';
import Header from './Header';
import Gallery from './Gallery';

const ProductContainer = styled.div`
  padding: 25px 30px 0 30px;
`;

const BuyNowButton = styled.button`
  font-family: 'AvenirNext';
  border: none;
  bottom: 0;
  position: fixed;
  width: 75%;
  font-size: 32px;
  color: white;
  text-transform: uppercase;
  padding: 35px;
  margin: 0;
  background-image: linear-gradient(107deg, #0c09bf, #966dd8);
`;

export default () => (
  <main>
    <ProductContainer>
      <Header />
      <Gallery />
      <Description />
    </ProductContainer>
    <BuyNowButton>buy now</BuyNowButton>
  </main>
);
