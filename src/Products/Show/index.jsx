import React from 'react';
import styled from 'styled-components';
import Description from './Description';
import Header from './Header';
import Gallery from './Gallery';

const Wrapper = styled.div`
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
    <Wrapper>
      <Header />
      <Gallery />
      <Description />
    </Wrapper>
    <BuyNowButton>buy now</BuyNowButton>
  </main>
);